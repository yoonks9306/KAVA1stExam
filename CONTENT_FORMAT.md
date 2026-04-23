# 콘텐츠 원본 포맷

이 프로젝트의 사람이 편집하는 원본은 Markdown이다.

## 1. 플래시카드 포맷

한 카드당 아래 형식을 따른다.

```md
## A-01 | VC 4유형 설립 근거와 자본금

- tags: 출제확정, 언급된 문제
- cardType: fact
- difficulty: easy
- sourcePriority: pdf-highlight > pdf-week1-2 > plan-final

Q. 벤처투자회사, LLC형 VC, 신기사, 액셀러레이터의 설립 자본금은?

A.
- 벤처투자회사: 20억
- LLC형 VC: 결성총액 1% 이상
- 신기술금융회사: 100억
- 액셀러레이터: 1억

Summary.
시험형 기준 자본금 문제의 기준축.

Quiz Variants.
- [single] 벤처투자회사의 설립 자본금은?
- [ox] LLC형 VC는 20억 원 자본금이 필요하다.
```

원칙:

- 카드 하나는 한 블록 안에서 끝낸다.
- Q/A/Summary는 짧고 분명하게 쓴다.
- 태그는 쉼표로 구분한다.
- 정답 문구는 앱에 그대로 노출될 수 있으므로 문장 완성도를 유지한다.

## 2. 모의고사 포맷

한 문제당 아래 형식을 따른다.

```md
## Q1-01 | A-01

- type: single
- tags: 출제확정, 언급된 문제
- difficulty: easy

Prompt.
벤처투자회사(창투사)의 설립 자본금은?

Options.
1. 1억 원
2. 10억 원
3. 20억 원
4. 100억 원

Answer.
3

Explanation.
과거 100억에서 현재 20억으로 하향된 포인트가 핵심이다.

UI Hint.
강사님 강조
```

OX 문제는 아래처럼 쓴다.

```md
## Q1-09 | A-12

- type: ox
- tags: 출제확정, 함정주의
- difficulty: medium

Prompt.
벤처투자조합의 성립일은 출자약정일 또는 결성총회일이다.

Answer.
X

Explanation.
조합의 성립일은 등록한 날이다.

UI Hint.
함정주의
```

## 3. sourcePriority 키

아래 키만 쓴다.

- `pdf-highlight`
- `pdf-week1-2`
- `plan-final`
- `user-direct-note`

## 4. 태그

기본 태그는 아래만 사용한다.

- `출제확정`
- `언급된 문제`
- `반복강조`
- `보조`
- `함정주의`
- `계산형`
- `산업형`

## 5. 편집 원칙

- 표현을 바꾸고 싶으면 Markdown 원본만 수정한다.
- 앱용 JS 파일은 나중에 이 원본에서 생성한다.
- 같은 내용을 여러 파일에서 참조하지 말고, 가능한 한 한 블록 안에 완결되게 유지한다.
