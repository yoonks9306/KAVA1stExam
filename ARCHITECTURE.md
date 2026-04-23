# 1stExam 아키텍처 방향

## 결론

최종 방향은 `Markdown/HTML 원본 + 최소한의 JS 인터랙션`이다.

목표는 두 가지다.

1. 사람이 나중에 문항 문구를 쉽게 고칠 수 있을 것
2. 사이트는 충분히 인터랙티브할 것

즉, React SPA 중심이 아니라 `편집 친화적인 정적 콘텐츠 + 얇은 인터랙션 레이어`로 간다.

## 왜 이 구조인가

현재 프로젝트의 본질은 복잡한 웹앱이 아니다.

- 로그인 없음
- 서버 없음
- 데이터량 제한적
- 문항/해설 수정 가능성이 높음
- 시험 직전 빠른 배포가 중요함

이 조건에서는 프레임워크보다 `원본 콘텐츠 수정의 용이성`이 더 중요하다.

## 최종 구조

### 1. 사람이 편집하는 원본

원본은 Markdown으로 둔다.

예상 구조:

```text
1stExam/
  content/
    flashcards/
      vc-law.md
      fund-rules.md
      rcps.md
      finance.md
      valuation.md
      vc-principles.md
      biotech.md
      foodtech.md
      contents-games.md
    quizzes/
      round-1.md
      round-2.md
      round-3.md
      round-4.md
    meta/
      tags.md
      ui-copy.md
```

여기서 핵심은 `문항 텍스트를 직접 읽고 바로 수정할 수 있는가`다.

### 2. 생성물

Markdown 원본을 바탕으로 아래 파일을 만든다.

- `flashcards.js`
- `quizzes.js`
- 필요하면 `content-index.js`

즉, 앱이 직접 Markdown을 읽는 구조도 가능하지만, 우선은 `원본 -> 생성물` 구조가 안전하다.

### 3. 실제 화면

렌더링은 HTML 중심으로 한다.

- 랜딩
- 플래시카드 화면
- 모의고사 화면
- 결과/오답 화면

이 페이지들은 구조상 단순해야 한다.
CSS로 분위기를 만들고, JS는 최소한의 상태 전환만 담당한다.

### 4. JS가 맡는 역할

JS는 아래만 담당한다.

- 카드 뒤집기
- 다음/이전 이동
- 정답 체크
- 점수 계산
- 오답 필터링
- 태그 배지 표시

즉, 콘텐츠를 소유하지 않고 `상호작용만` 담당한다.

## 원본 작성 원칙

Markdown 원본은 아래 원칙을 따른다.

### 문항 단위 완결성

한 문항은 가능한 한 한 블록 안에서 끝나야 한다.

- 문제
- 정답
- 짧은 해설
- 태그
- 출처 우선순위

이게 한 덩어리로 있어야 수정이 쉽다.

### 과도한 정규화 금지

편집 편의성이 더 중요하므로, 약간의 중복은 허용한다.

예:

- 플래시카드 문구와 퀴즈 해설이 조금 겹쳐도 괜찮다
- 태그가 여러 파일에 반복돼도 괜찮다

DB처럼 완벽하게 쪼개면 수정이 오히려 불편하다.

### 출제 강도 태그 유지

반드시 유지할 태그:

- `출제확정`
- `언급된 문제`
- `반복강조`
- `보조`
- `함정주의`
- `계산형`

이 태그는 UI 필터와 정렬 기준이 된다.

## 현재 파일들의 위치

### 유지

- [PLAN_FINAL.md](/Users/jamesy/Documents/Study/1stExam/PLAN_FINAL.md)
- [ARCHITECTURE.md](/Users/jamesy/Documents/Study/1stExam/ARCHITECTURE.md)

### 참고용

- [schema/kava-content.schema.json](/Users/jamesy/Documents/Study/1stExam/schema/kava-content.schema.json)
- [schema/content-blueprint.json](/Users/jamesy/Documents/Study/1stExam/schema/content-blueprint.json)
- [schema/SCHEMA_NOTES.md](/Users/jamesy/Documents/Study/1stExam/schema/SCHEMA_NOTES.md)

지금 스키마 파일은 버릴 필요는 없지만, `최종 원본`이라기보다는 `보조 설계 자료`로 본다.

## 다음 단계

다음 구현 순서는 아래가 맞다.

1. Markdown 원본 폴더 구조 생성
2. `PLAN_FINAL.md`를 기준으로 플래시카드/모의고사 Markdown 분할
3. Markdown -> JS 생성 스크립트 추가
4. 최소 인터랙션 화면 구현

즉, 앞으로의 진짜 편집 원본은 JSON이 아니라 Markdown이 된다.
