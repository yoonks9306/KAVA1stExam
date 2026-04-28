# Session Log

## Project

- 서비스명: `JamesLingo`
- 현재 범위: `1회차` 웹사이트
- 향후 확장: `2회차`, `3회차`는 separate domain/entry로 분리 예정
- 현재 작업 루트: `/Users/jamesy/Documents/Study/1stExam`
- 향후 GitHub 푸시 대상(사용자 언급): `https://github.com/yoonks9306/KAVA1stExam`

## User Intent

- 시험 전날 빠르게 돌릴 수 있는 학습용 웹사이트를 만들고 싶어 함
- 대상은 `KAVA 12기`
- 처음에는 PDF/메모/예상문제/강조 포인트가 흩어져 있어서 이를 정리, 병합, 태깅하는 기획이 필요했음
- 이후 최종적으로는
  - 플래시카드
  - 모의고사
  - 가볍고 빠른 정적 웹사이트
  - 나중에 문항 수정이 쉬운 구조
  를 원함
- 디자인 톤은
  - 너무 설명이 많지 않고
  - 귀엽고 센스 있고
  - 듀오링고처럼 통통 튀는 버튼/컬러 감
  을 선호함

## Initial Content Work

- 사용자가 제공한 참조 문서:
  - `/Users/jamesy/Downloads/강사님들 강조 내용.pdf`
  - `/Users/jamesy/Downloads/1, 2주차 예상문제.pdf`
- 위 PDF를 우선 벤치마크로 삼아 기존 `PLAN.md`를 재정리함
- `PLAN_FINAL.md`를 최종 기획 문서로 채택
- 중복 문제 병합, 카테고리 재편, 중요도 태깅 기준 정리 수행

## Important Content Decisions

- 아래 태그 체계를 핵심으로 사용:
  - `출제확정`
  - `언급된 문제`
  - `함정주의`
  - `계산형`
  - `산업형`
- 사용자가 추가로 준 아래 9개 항목은 모두 `나올거라고 멘션된 확정문제`로 취급하기로 확정:
  - 벤처투자조합의 성립일
  - GP 자산운용 중단 가능 여부
  - 겸직의 정의
  - 규약 변경 방법
  - 미투자자산 관리보수
  - 조합재산 분별관리 의무
  - 조합재산 담보 제공 금지
  - 투자금 사용처 실사 의무
  - 핵심 운용인력 변경 시 관리보수 삭감

## Planning Direction Changes

처음에는 정규화된 JSON 스키마 중심으로 갔음.

- 생성했던 설계물:
  - `schema/kava-content.schema.json`
  - `schema/content-blueprint.json`
  - `schema/SCHEMA_NOTES.md`
- 그러나 사용자 요구가 `사람이 나중에 손으로 쉽게 고치는 구조`에 더 가까웠음
- 그래서 방향을 바꿔서
  - 원본은 Markdown
  - 앱은 최소 JS
  - 웹은 정적 페이지
  로 재설계함

이때 결정된 원칙:

- 사람이 수정하는 원본은 `content/` 아래 Markdown
- 앱이 읽는 데이터는 `generated/` 아래 생성물
- JS는 콘텐츠 저장소가 아니라 인터랙션 담당
- 프레임워크보다 단순한 정적 구조를 우선

## Files Archived

이전 초안/분석용 파일들은 `archive/`로 이동함.

- archived:
  - `PLAN.md`
  - `PLAN_QA.md`
  - `REFERENCE_STRUCTURE.md`
  - `schema/` 관련 파일들

현재 실사용 기준 문서는 다음임:

- `PLAN_FINAL.md`
- `ARCHITECTURE.md`
- `CONTENT_FORMAT.md`
- `content/`
- `scripts/build-content.js`
- `generated/`
- 루트 정적 웹 파일들

## Current Architecture

현재 구조는 아래와 같음.

- 콘텐츠 원본:
  - `content/flashcards/*.md`
  - `content/quizzes/*.md`
  - `content/meta/*.md`
- 생성 스크립트:
  - `scripts/build-content.js`
- 생성 결과:
  - `generated/flashcards.js`
  - `generated/quizzes.js`
  - `generated/meta.js`
  - `generated/index.js`
  - `generated/build-summary.json`
- 웹 앱:
  - `index.html`
  - `styles.css`
  - `app.js`

## 2026-04-28 Structure Audit

이번 세션에서 `1회차 시험 내부 ROUND`와 `2회차 시험용 신규 ROUND`가 같은 `generated/quizzes.js` 풀 안에 섞이면서 문맥 혼선이 발생했다.

현재 실제 동작 구조는 아래와 같음.

- 원본 문제 소스:
  - `content/quizzes/round-1.md` ~ `round-5.md`: 1회차 시험용 기존 라운드
  - `content/quizzes/round-6.md`: 2회차 시험의 첫 라운드
- 빌드 스크립트:
  - `scripts/build-content.js`
  - `content/quizzes/*.md` 전부를 읽어서 하나의 `generated/quizzes.js`로 합침
- 라운드 ID 기준:
  - **파일명**이 라운드 ID가 됨
  - 예: `round-6.md` -> generated 상 `id: "round-6"`
  - 파일 내부 첫 줄 `# ROUND-6 | 4주차`는 **UI에 노출되는 제목**일 뿐, 라우팅 키가 아님
- 1회차 페이지:
  - `round-1/index.html`
  - `round-1/app.js`
  - 현재는 `generated/quizzes.js` 전체를 읽되, 화면에선 `round-1` ~ `round-5`만 노출하도록 필터링
- 2회차 페이지:
  - `round-2/index.html`
  - `round-2/app.js`
  - `window.JAMES_LINGO_PAGE.allowedRoundIds = ["round-6"]`로 고정
  - 즉 2회차 페이지는 generated 전체 중 `round-6`만 읽음
- 홈 화면:
  - 루트 `app.js`
  - `1회차`, `2회차`, `3회차` 카드와 진입 링크를 하드코딩

### 현재 빌드 스냅샷

- `generated/build-summary.json` 기준:
  - flashcards: `57`
  - quiz rounds: `6`
  - quiz questions: `164`

### 혼선이 발생한 근본 원인

1. **파일명 라운드 ID**와 **화면에 보이는 ROUND 제목**이 서로 다른 역할인데, 세션 중 이 둘이 계속 섞여 해석됨
2. `generated/quizzes.js`가 모든 라운드를 한 파일로 합치므로, 개별 시험 페이지에서 별도 필터링을 하지 않으면 다른 시험 라운드가 섞여 보임
3. `round-1/app.js`와 `round-2/app.js`가 거의 동일한 앱 코드인데 파일이 복제되어 있어, 한쪽만 수정하면 다른 쪽과 동작이 쉽게 어긋남
4. 홈 화면 진입 구조가 `index.html/app.js`에 하드코딩되어 있어, 회차가 열릴 때마다 수동 수정 포인트가 많음

### 앞으로 문제 피딩 받을 때 반드시 지킬 운영 규칙

1. 사용자가 주는 신규 시험 문제는 **새 파일**로 추가한다
   - 다음 라운드는 `content/quizzes/round-7.md`, `round-8.md`, `round-9.md` 식으로 누적
2. 파일명 숫자와 화면 제목 숫자는 분리해서 생각한다
   - 파일명: 시스템용 고유 ID
   - 첫 줄 제목: 사람이 보는 표기
   - 예: `round-7.md` 안에 `# ROUND-7 | 5주차`
3. `1회차 페이지`에 어떤 라운드가 보일지, `2회차 페이지`에 어떤 라운드가 보일지는 **페이지 필터**로 관리한다
   - 1회차: `round-1` ~ `round-5`
   - 2회차: `round-6`부터 시작
4. 사용자가 `.md`로 문제를 주면 먼저 **어느 시험의 어느 라운드인지**를 결정하고 나서 파일을 만든다
   - “2회차 첫 라운드”, “2회차 둘째 라운드” 같은 시험 맥락
   - “ROUND-6”, “ROUND-7” 같은 누적 라운드 맥락
   - 이 둘을 로그에 명시한 뒤 작업 시작

### 현재 식별된 구조상 위험 요소

- `round-1/app.js` / `round-2/app.js` 앱 코드 복제
  - 같은 수정이 양쪽에 동시에 필요할 가능성 높음
- 홈 카드 하드코딩
  - 회차 종료/오픈 때마다 수동 변경 필요
- `build-content.js`가 모든 퀴즈 파일을 단일 풀로 합치는 구조
  - 시험별 분리가 “데이터 구조”가 아니라 “페이지 필터 규칙”에 의존함
- 태그 체계가 현재는 간소화되었지만, 과거 라운드/카드 원본에는 여전히 여러 태그 문자열이 남아 있음
  - 빌드/표시 로직과 실제 원본 간 불일치가 다시 생길 수 있음

### 다음 리팩터 권장안

당장 필수는 아니지만, 같은 종류의 back-and-forth를 줄이려면 아래 순서로 개선하는 것이 맞음.

1. `exam-config.js` 같은 공용 설정 파일 도입
   - 예: `exam-1 => ["round-1","round-2","round-3","round-4","round-5"]`
   - 예: `exam-2 => ["round-6","round-7", ...]`
2. `round-1/app.js`, `round-2/app.js`를 하나의 공용 앱으로 통합
3. 홈 화면 카드 상태도 설정 파일 기반으로 렌더링
4. `SESSION_LOG.md`에 신규 라운드 추가 시마다
   - 파일명
   - 화면 제목
   - 소속 시험
   - 문항 수
   를 남기는 운영 규칙 유지

## Build / Run

`package.json` 기준 실행 명령:

```bash
cd /Users/jamesy/Documents/Study/1stExam
npm run build:content
npm run serve
```

- `build:content`: Markdown -> `generated/*.js`
- `serve`: `python3 -m http.server 4173`

접속 기준:

- 루트: `http://localhost:4173`
- 2회차 placeholder: `http://localhost:4173/round-2/`
- 3회차 placeholder: `http://localhost:4173/round-3/`

## Current Build Snapshot

`generated/build-summary.json` 기준 최신 수치:

- flashcards: `57`
- quiz rounds: `4`
- quiz questions: `53`

## What Was Implemented

### 1. Content Pipeline

- Markdown 원본을 읽어 JS 데이터 파일을 뽑는 스크립트 구현
- 외부 라이브러리 없이 Node 기본 모듈만 사용
- 문항/카드/메타 정보를 생성물로 분리

### 2. Static Site Skeleton

- 루트 정적 웹사이트 구현
- `generated/index.js`를 직접 읽는 구조
- 주요 화면:
  - 랜딩
  - 플래시카드
  - 모의고사

### 3. UI Direction Changes

디자인은 여러 번 바뀌었음.

초기:

- 정보가 많고 히어로가 비교적 무거운 랜딩
- 사이드 설명/레전드/메타 정보가 많았음

이후:

- 사용자 피드백: 랜딩이 조잡하고 담긴 내용이 너무 많음
- 그래서 듀오링고 계열의
  - 두툼한 버튼
  - 브라이트 포인트 컬러
  - 짧은 선택지 중심 화면
  로 정리

최종 현재:

- 브랜드명 `JamesLingo`
- 작은 보조 문구:
  - `KAVA 12기의 무궁한 영광을 위하여`
- 첫 화면은 사실상 `1회차 진입 팝업` 구조
- 선택지는 딱 두 개:
  - `플래시카드 / 공부할래요!`
  - `모의고사 / 바로 시험 볼래요!`

### 4. Future Rounds Skeleton

향후 2회차, 3회차 separate domain/entry를 고려해 placeholder 추가:

- `round-2/index.html`
- `round-3/index.html`
- 공용 스타일: `future-round.css`

현재는 둘 다 `Coming Soon.`만 표시함.

## Important UX / Product Decisions

- `1회차` 사이트는 진입 후 선택이 명확해야 함
- 랜딩은 정보 설명 페이지가 아니라 `entry point` 역할만 하면 됨
- 결과 페이지는 불필요하다고 사용자 명시
- 따라서 현재는:
  - 별도 결과 화면 없음
  - 점수 집계 없음
  - 오답 재시험 로직 제거
  - 마지막 문제까지 가면 `다시 풀기`만 제공

## Current Behavior

### Landing

- `JamesLingo` 브랜딩 노출
- `1회차` 선택 팝업처럼 보이는 중앙 카드
- `플래시카드` / `모의고사` 진입 버튼
- `2회차`, `3회차` 링크 제공

### Flashcards

- 카테고리 선택 가능
- 카드 앞면/정답/요약 보기
- 이전/다음 이동
- 태그 표시

### Quiz

- 회차 선택 가능
- 문항별 즉시 피드백 표시
- 마지막 문제까지 진행 가능
- 결과 페이지 없이 바로 다시 풀기 가능

## What Was Explicitly Removed

- `result` 화면
- `answers` 누적 점수판
- `wrongQuestionIds`
- `retryWrong()` 오답 재시험 라운드 생성
- 랜딩의 장황한 설명/legend

## Known Constraints / Notes

- 현재는 루트가 `1회차` 전용 경험임
- 2회차, 3회차는 아직 진짜 콘텐츠가 아니라 placeholder만 있음
- 콘텐츠는 Markdown 기반이라 나중 수정이 쉬운 편
- `app.js`는 프레임워크 없는 직접 렌더링 방식이라 구조는 단순하지만 규모가 커지면 분리 필요할 수 있음
- 현재 `package.json` 이름은 여전히 `kava-1st-exam`이고, 서비스명은 UI 상에서 `JamesLingo`로만 반영된 상태

## Suggested Next Steps

다음 에이전트/Claude가 이어서 보면 좋은 작업 순서:

1. 실제 브라우저에서 모바일/데스크톱 시각 검수
2. `JamesLingo` 브랜딩 기준으로 카피/타이포 더 다듬기
3. `플래시카드`와 `모의고사` 화면의 시각 통일도 추가 개선
4. 2회차/3회차 콘텐츠가 준비되면 현재 placeholder를 각 회차 앱으로 교체
5. 필요 시 `app.js`를 모듈 단위로 분리
6. 최종 배포 전 Git 초기화/원격 연결/커밋 정리

## Handoff Summary

한 줄 요약:

- 이 프로젝트는 `KAVA 12기 시험 대비용 학습 웹사이트`에서 출발했고,
- 현재는 `JamesLingo`라는 이름의 `1회차 전용 정적 학습 웹사이트`로 정리되었으며,
- `플래시카드`와 `모의고사`만 남기고,
- `결과 페이지`는 제거되었고,
- `2회차`, `3회차`는 `Coming Soon` 뼈대만 있는 상태다.
