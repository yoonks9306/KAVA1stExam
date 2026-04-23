# 스키마 메모

기준 파일

- [kava-content.schema.json](/Users/jamesy/Documents/Study/1stExam/schema/kava-content.schema.json)
- [content-blueprint.json](/Users/jamesy/Documents/Study/1stExam/schema/content-blueprint.json)

## 목적

`PLAN_FINAL.md`를 실제 앱 데이터로 내릴 때 아래 순서로 사용한다.

1. `content-blueprint.json`
   사람이 합의한 최종 주제, 태그, 우선순위, 일부 샘플 문항
2. `kava-content.schema.json`
   앱이 읽을 구조 검증용 스키마
3. 이후 생성 파일
   `flashcards.js`, `quizzes.js` 또는 `content.json`

## 핵심 설계 원칙

- `sourcePriority`를 넣어서 PDF 우선 원칙을 데이터에도 남긴다.
- 각 카드와 문제는 `sourceRefs`를 가져야 한다.
- `출제확정`, `언급된 문제`, `반복강조`, `보조` 태그를 데이터 필터에 그대로 쓴다.
- 문제는 가능하면 `linkedFlashcardId`를 통해 플래시카드와 연결한다.
- UI에서 `uiHint`를 이용해 `강사님 강조`, `함정주의`, `족집게` 같은 시각 배지를 붙일 수 있다.

## 이번 턴에서 반영한 중요 사항

사용자가 직접 준 아래 9개 항목은 모두 `멘션된 확정문제`로 반영했다.

- 벤처투자조합의 성립일
- GP 자산운용 중단 가능 여부
- 겸직의 정의
- 규약 변경 방법
- 미투자자산 관리보수
- 조합재산 분별관리 의무
- 조합재산 담보 제공 금지
- 투자금 사용처 실사 의무
- 핵심 운용인력 변경 시 관리보수 삭감

## 다음 단계

다음 턴에서는 아래 둘 중 하나로 바로 갈 수 있다.

1. `content-blueprint.json`을 전체 51장/4회차 완성 데이터로 확장
2. 프론트엔드용 `flashcards.js`와 `quizzes.js` 생성
