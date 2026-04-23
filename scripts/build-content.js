#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT_DIR, "content");
const FLASHCARDS_DIR = path.join(CONTENT_DIR, "flashcards");
const QUIZZES_DIR = path.join(CONTENT_DIR, "quizzes");
const META_DIR = path.join(CONTENT_DIR, "meta");
const OUTPUT_DIR = path.join(ROOT_DIR, "generated");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readMarkdownFiles(dirPath) {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name, "ko"))
    .map((entry) => ({
      fileName: entry.name,
      absolutePath: path.join(dirPath, entry.name),
      content: fs.readFileSync(path.join(dirPath, entry.name), "utf8")
    }));
}

function splitSections(markdown) {
  const normalized = markdown.replace(/\r\n/g, "\n");
  const matches = [...normalized.matchAll(/^##\s+(.+)$/gm)];

  return matches.map((match, index) => {
    const title = match[1].trim();
    const bodyStart = match.index + match[0].length;
    const bodyEnd = index + 1 < matches.length ? matches[index + 1].index : normalized.length;
    const body = normalized.slice(bodyStart, bodyEnd).trim();
    return { title, body };
  });
}

function parseSectionHeader(title, separator = "|") {
  const parts = title.split(separator).map((part) => part.trim());
  return {
    id: parts[0],
    ref: parts[1] || null
  };
}

function parseFrontMatterLines(body) {
  const lines = body.split("\n");
  const data = {};
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (!line.startsWith("- ")) {
      break;
    }

    const match = line.match(/^- ([^:]+):\s*(.+)$/);
    if (!match) {
      break;
    }

    data[match[1].trim()] = match[2].trim();
    index += 1;
  }

  return {
    metadata: data,
    remainder: lines.slice(index).join("\n").trim()
  };
}

function extractLabeledBlocks(body, labels) {
  const lines = body.split("\n");
  const result = {};
  let currentLabel = null;
  let buffer = [];

  function flush() {
    if (currentLabel) {
      result[currentLabel] = buffer.join("\n").trim();
    }
    currentLabel = null;
    buffer = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const matchedLabel = labels.find((label) => line === label || line.startsWith(`${label} `));

    if (matchedLabel) {
      flush();
      currentLabel = matchedLabel;
      const inlineValue = line.slice(matchedLabel.length).trim();
      if (inlineValue) {
        buffer.push(inlineValue);
      }
      continue;
    }

    if (currentLabel) {
      buffer.push(rawLine);
    }
  }

  flush();
  return result;
}

function parseCommaList(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseArrowList(value) {
  return value
    .split(">")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeMultilineText(value) {
  if (!value) return "";
  return value
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}

function parseOptionsBlock(block) {
  return block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^(\d+)\.\s+(.+)$/);
      if (!match) {
        throw new Error(`옵션 형식을 해석할 수 없습니다: ${line}`);
      }
      return {
        id: match[1],
        text: match[2]
      };
    });
}

function parseFlashcards() {
  const files = readMarkdownFiles(FLASHCARDS_DIR);
  const cards = [];

  for (const file of files) {
    const sections = splitSections(file.content);

    for (const section of sections) {
      const header = parseSectionHeader(section.title);
      const { metadata, remainder } = parseFrontMatterLines(section.body);
      const blocks = extractLabeledBlocks(remainder, ["Q.", "A.", "Summary.", "Quiz Variants."]);

      cards.push({
        id: header.id,
        title: header.ref,
        category: path.basename(file.fileName, ".md"),
        tags: metadata.tags ? parseCommaList(metadata.tags) : [],
        cardType: metadata.cardType || null,
        difficulty: metadata.difficulty || null,
        sourcePriority: metadata.sourcePriority ? parseArrowList(metadata.sourcePriority) : [],
        question: normalizeMultilineText(blocks["Q."]),
        answer: normalizeMultilineText(blocks["A."]),
        summary: normalizeMultilineText(blocks["Summary."]),
        quizVariants: normalizeMultilineText(blocks["Quiz Variants."])
          ? normalizeMultilineText(blocks["Quiz Variants."])
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean)
          : []
      });
    }
  }

  return cards.sort((a, b) => a.id.localeCompare(b.id, "en"));
}

function parseQuizzes() {
  const files = readMarkdownFiles(QUIZZES_DIR);
  const rounds = [];
  const questions = [];

  for (const file of files) {
    const normalized = file.content.replace(/\r\n/g, "\n");
    const titleMatch = normalized.match(/^#\s+(.+)$/m);
    const roundTitle = titleMatch ? titleMatch[1].trim() : path.basename(file.fileName, ".md");
    const sections = splitSections(file.content);
    const roundId = path.basename(file.fileName, ".md");
    const questionIds = [];

    for (const section of sections) {
      const header = parseSectionHeader(section.title);
      const { metadata, remainder } = parseFrontMatterLines(section.body);
      const blocks = extractLabeledBlocks(remainder, [
        "Prompt.",
        "Options.",
        "Answer.",
        "Explanation.",
        "UI Hint."
      ]);

      const question = {
        id: header.id,
        linkedCardId: header.ref,
        roundId,
        type: metadata.type || null,
        tags: metadata.tags ? parseCommaList(metadata.tags) : [],
        difficulty: metadata.difficulty || null,
        prompt: normalizeMultilineText(blocks["Prompt."]),
        answer: normalizeMultilineText(blocks["Answer."]),
        explanation: normalizeMultilineText(blocks["Explanation."]),
        uiHint: normalizeMultilineText(blocks["UI Hint."])
      };

      if (blocks["Options."]) {
        const options = parseOptionsBlock(blocks["Options."]);
        question.options = options.map((option) => ({
          ...option,
          isCorrect: option.id === question.answer
        }));
      }

      questions.push(question);
      questionIds.push(question.id);
    }

    rounds.push({
      id: roundId,
      title: roundTitle,
      questionIds
    });
  }

  return {
    rounds,
    questions: questions.sort((a, b) => a.id.localeCompare(b.id, "en"))
  };
}

function parseMeta() {
  const tagsFile = path.join(META_DIR, "tags.md");
  const uiCopyFile = path.join(META_DIR, "ui-copy.md");

  const tags = fs
    .readFileSync(tagsFile, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => {
      const match = line.match(/^- `?([^`:]+)`?:\s*(.+)$/);
      return match
        ? { id: match[1].trim(), description: match[2].trim() }
        : { id: line.replace(/^- /, "").trim(), description: "" };
    });

  const uiLines = fs.readFileSync(uiCopyFile, "utf8").replace(/\r\n/g, "\n").split("\n");
  const groups = {};
  let currentGroup = null;

  for (const rawLine of uiLines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith("## ")) {
      currentGroup = line.replace(/^##\s+/, "").trim();
      groups[currentGroup] = [];
      continue;
    }
    if (line.startsWith("- ") && currentGroup) {
      groups[currentGroup].push(line.replace(/^- /, "").trim());
    }
  }

  return { tags, uiCopy: groups };
}

function toModuleSource(exportName, data) {
  return `export const ${exportName} = ${JSON.stringify(data, null, 2)};\n`;
}

function writeOutput(fileName, source) {
  const targetPath = path.join(OUTPUT_DIR, fileName);
  fs.writeFileSync(targetPath, source, "utf8");
}

function build() {
  ensureDir(OUTPUT_DIR);

  const flashcards = parseFlashcards();
  const quizzes = parseQuizzes();
  const meta = parseMeta();

  writeOutput("flashcards.js", toModuleSource("flashcards", flashcards));
  writeOutput("quizzes.js", toModuleSource("quizRounds", quizzes.rounds) + "\n" + toModuleSource("quizQuestions", quizzes.questions));
  writeOutput("meta.js", toModuleSource("meta", meta));
  writeOutput(
    "index.js",
    [
      `export { flashcards } from "./flashcards.js";`,
      `export { quizRounds, quizQuestions } from "./quizzes.js";`,
      `export { meta } from "./meta.js";`,
      ""
    ].join("\n")
  );

  const summary = {
    flashcards: flashcards.length,
    quizRounds: quizzes.rounds.length,
    quizQuestions: quizzes.questions.length,
    generatedAt: new Date().toISOString()
  };
  fs.writeFileSync(path.join(OUTPUT_DIR, "build-summary.json"), JSON.stringify(summary, null, 2) + "\n", "utf8");

  console.log(`[build-content] flashcards=${summary.flashcards}, rounds=${summary.quizRounds}, questions=${summary.quizQuestions}`);
}

build();
