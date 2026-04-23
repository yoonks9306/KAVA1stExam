export const quizRounds = [
  {
    "id": "round-1",
    "title": "ROUND-1 | 법규/조합 OX 집중",
    "questionIds": [
      "Q1-01",
      "Q1-02",
      "Q1-03",
      "Q1-04",
      "Q1-05",
      "Q1-06",
      "Q1-07",
      "Q1-08",
      "Q1-09",
      "Q1-10",
      "Q1-11"
    ]
  },
  {
    "id": "round-2",
    "title": "ROUND-2 | 재무/회계/계산 집중",
    "questionIds": [
      "Q2-01",
      "Q2-02",
      "Q2-03",
      "Q2-04",
      "Q2-05",
      "Q2-06",
      "Q2-07",
      "Q2-08",
      "Q2-09",
      "Q2-10",
      "Q2-11",
      "Q2-12",
      "Q2-13",
      "Q2-14",
      "Q2-15"
    ]
  },
  {
    "id": "round-3",
    "title": "ROUND-3 | VC 본질/투자판단/회수",
    "questionIds": [
      "Q3-01",
      "Q3-02",
      "Q3-03",
      "Q3-04",
      "Q3-05",
      "Q3-06",
      "Q3-07",
      "Q3-08",
      "Q3-09",
      "Q3-10",
      "Q3-11",
      "Q3-12"
    ]
  },
  {
    "id": "round-4",
    "title": "ROUND-4 | 산업별/계약형 종합",
    "questionIds": [
      "Q4-01",
      "Q4-02",
      "Q4-03",
      "Q4-04",
      "Q4-05",
      "Q4-06",
      "Q4-07",
      "Q4-08",
      "Q4-09",
      "Q4-10",
      "Q4-11",
      "Q4-12",
      "Q4-13",
      "Q4-14",
      "Q4-15"
    ]
  }
];

export const quizQuestions = [
  {
    "id": "Q1-01",
    "linkedCardId": "A-01",
    "roundId": "round-1",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "벤처투자회사(창투사)의 설립 자본금은?",
    "answer": "3",
    "explanation": "과거 100억에서 현재 20억으로 하향된 포인트가 핵심이다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "1억 원",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "10억 원",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "20억 원",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "100억 원",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q1-02",
    "linkedCardId": "A-03",
    "roundId": "round-1",
    "type": "ox",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "벤처투자조합은 공시대상 기업집단 계열회사에 투자할 수 있다.",
    "answer": "O",
    "explanation": "상호출자제한 기업집단 투자만 금지된다.",
    "uiHint": "족집게"
  },
  {
    "id": "Q1-03",
    "linkedCardId": "A-04",
    "roundId": "round-1",
    "type": "ox",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "벤처투자조합은 원칙적으로 은행 주식을 보유할 수 있다.",
    "answer": "X",
    "explanation": "원칙적으로 금융회사 주식 보유는 금지되며 핀테크 업종만 예외 가능성이 있다.",
    "uiHint": "족집게"
  },
  {
    "id": "Q1-04",
    "linkedCardId": "A-05",
    "roundId": "round-1",
    "type": "ox",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "벤처투자조합에서는 업무집행조합원과의 직접 거래가 원칙적으로 금지된다.",
    "answer": "O",
    "explanation": "조합 자산 매각, GP 소유 주식 매입, GP 발행 주식 취득 등이 기본 금지 유형이다.",
    "uiHint": "족집게"
  },
  {
    "id": "Q1-05",
    "linkedCardId": "A-06",
    "roundId": "round-1",
    "type": "ox",
    "tags": [
      "출제확정",
      "언급된 문제",
      "함정주의"
    ],
    "difficulty": "medium",
    "prompt": "벤처투자조합은 경영권 인수 목적으로 투자할 수 없다.",
    "answer": "X",
    "explanation": "강의 기준 해석상 조합 계정에는 명시적 금지 규정이 없다고 본다.",
    "uiHint": "함정주의"
  },
  {
    "id": "Q1-06",
    "linkedCardId": "A-07",
    "roundId": "round-1",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "벤처투자촉진법상 법정 투자 방법의 공통 요건은?",
    "answer": "2",
    "explanation": "무담보 CB, 무담보 EB, 무담보 BW가 기본 함정 포인트다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "담보 설정",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "무담보",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "의결권 포함",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "국내 기업 한정",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q1-07",
    "linkedCardId": "A-09",
    "roundId": "round-1",
    "type": "ox",
    "tags": [
      "출제확정",
      "언급된 문제",
      "함정주의"
    ],
    "difficulty": "medium",
    "prompt": "벤처투자조합의 성립일은 출자약정일 또는 결성총회일이다.",
    "answer": "X",
    "explanation": "조합의 성립일은 등록한 날이다.",
    "uiHint": "함정주의"
  },
  {
    "id": "Q1-08",
    "linkedCardId": "A-10",
    "roundId": "round-1",
    "type": "ox",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "업무집행조합원의 자산운용은 대표펀드매니저 퇴사나 GP 문제 발생 시 조합원 특별결의로 중단될 수 있다.",
    "answer": "O",
    "explanation": "GP 자산운용 중단 가능 여부는 확정문제 축으로 관리한다.",
    "uiHint": "강사님 강조"
  },
  {
    "id": "Q1-09",
    "linkedCardId": "A-12",
    "roundId": "round-1",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "벤처투자조합 규약 변경 방법으로 옳은 것은?",
    "answer": "3",
    "explanation": "일반결의가 아니라 특별결의가 원칙이며, 총회 미개최 시 서면 동의로 갈음 가능하다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "GP 단독 결정",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "조합원 총회 일반결의",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "조합원 총회 특별결의 또는 서면 전원 동의",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "대표펀드매니저 승인만으로 변경",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q1-10",
    "linkedCardId": "A-14",
    "roundId": "round-1",
    "type": "ox",
    "tags": [
      "출제확정"
    ],
    "difficulty": "easy",
    "prompt": "GP는 조합재산을 고유재산 또는 다른 펀드 재산과 구분하여 관리해야 한다.",
    "answer": "O",
    "explanation": "조합재산에는 분별관리 의무가 있다.",
    "uiHint": "기본기"
  },
  {
    "id": "Q1-11",
    "linkedCardId": "A-15",
    "roundId": "round-1",
    "type": "ox",
    "tags": [
      "출제확정",
      "함정주의"
    ],
    "difficulty": "easy",
    "prompt": "일반적인 벤처투자조합 규약은 조합재산의 담보 제공을 허용한다.",
    "answer": "X",
    "explanation": "일반적인 조합규약은 조합재산의 담보 제공을 금지한다.",
    "uiHint": "함정주의"
  },
  {
    "id": "Q2-01",
    "linkedCardId": "C-01",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "시험형 기준 주요 재무제표 4종에 해당하지 않는 것은?",
    "answer": "4",
    "explanation": "강의 기준의 주요 재무제표 4종은 재무상태표, 포괄손익계산서, 현금흐름표, 자본변동표다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "재무상태표",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "포괄손익계산서",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "자본변동표",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "제조원가명세서",
        "isCorrect": true
      }
    ]
  },
  {
    "id": "Q2-02",
    "linkedCardId": "C-03",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "재무비율 분석의 7대 분류에 해당하지 않는 것은?",
    "answer": "3",
    "explanation": "감가상각 비율은 7대 분류에 포함되지 않는다.",
    "uiHint": "기본기",
    "options": [
      {
        "id": "1",
        "text": "유동성 비율",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "수익성 비율",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "감가상각 비율",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "성장성 비율",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-03",
    "linkedCardId": "C-04",
    "roundId": "round-2",
    "type": "ox",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "유동비율은 유동자산을 유동부채로 나눈 값이며, 실무상 200% 이상을 안전 기준으로 본다.",
    "answer": "O",
    "explanation": "암기 키워드는 `유부유자`다.",
    "uiHint": "족집게"
  },
  {
    "id": "Q2-04",
    "linkedCardId": "C-05",
    "roundId": "round-2",
    "type": "ox",
    "tags": [
      "반복강조"
    ],
    "difficulty": "easy",
    "prompt": "가계회계는 현금주의, 기업회계는 발생주의로 이해할 수 있다.",
    "answer": "O",
    "explanation": "가계회계는 현금 유출입 시점, 기업회계는 권리·의무 확정 시점을 기준으로 본다.",
    "uiHint": "기본기"
  },
  {
    "id": "Q2-05",
    "linkedCardId": "C-06",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "연구단계와 개발단계의 회계 처리에 대한 설명으로 옳은 것은?",
    "answer": "3",
    "explanation": "연구단계는 비용처리, 개발단계는 무형자산(개발비)로 자산화할 수 있다.",
    "uiHint": "실무형",
    "options": [
      {
        "id": "1",
        "text": "둘 다 즉시 비용 처리한다",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "둘 다 무형자산으로 자산화한다",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "연구단계는 비용 처리, 개발단계는 일정 요건 충족 시 자산화 가능하다",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "개발단계는 항상 비용 처리하고 연구단계만 자산화한다",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-06",
    "linkedCardId": "C-07",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "중소기업의 이월결손금 공제 핵심 수치로 옳은 것은?",
    "answer": "2",
    "explanation": "중소기업은 100% 공제 가능하고 공제 기간은 15년이다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "80% / 10년",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "100% / 15년",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "50% / 5년",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "100% / 20년",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-07",
    "linkedCardId": "C-08",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "법인세율 과세표준 2억 원 이하 구간에 적용되는 세율은?",
    "answer": "3",
    "explanation": "강의 기준 핵심 값은 2억 이하 9%, 2억 초과 200억 이하 19%다.",
    "uiHint": "기본기",
    "options": [
      {
        "id": "1",
        "text": "5%",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "7%",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "9%",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "12%",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-08",
    "linkedCardId": "C-09",
    "roundId": "round-2",
    "type": "ox",
    "tags": [
      "반복강조"
    ],
    "difficulty": "easy",
    "prompt": "토지와 건설중인자산은 감가상각 대상에서 제외된다.",
    "answer": "O",
    "explanation": "토지는 물리적 소멸이 없고, 건설중인자산은 아직 사용 개시 전이기 때문이다.",
    "uiHint": "기본기"
  },
  {
    "id": "Q2-09",
    "linkedCardId": "D-01",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제",
      "계산형"
    ],
    "difficulty": "medium",
    "prompt": "본질가치 평가방법에서 자산가치와 수익가치의 가중평균 비율로 옳은 것은?",
    "answer": "2",
    "explanation": "강의 기준에서 본질가치는 자산가치 40%, 수익가치 60%를 반영한다.",
    "uiHint": "계산형",
    "options": [
      {
        "id": "1",
        "text": "자산가치 30% + 수익가치 70%",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "자산가치 40% + 수익가치 60%",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "자산가치 50% + 수익가치 50%",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "자산가치 60% + 수익가치 40%",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-10",
    "linkedCardId": "D-01",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제",
      "계산형"
    ],
    "difficulty": "medium",
    "prompt": "본질가치 평가에서 자본환원율 계산 방법으로 옳은 것은?",
    "answer": "2",
    "explanation": "본질가치 계산 문제에서 자본환원율은 시중금리에 1.5배를 적용한다.",
    "uiHint": "계산형",
    "options": [
      {
        "id": "1",
        "text": "시중금리 그대로 적용",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "시중금리 × 1.5배",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "시중금리 × 2배",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "시중금리 + 5%p",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-11",
    "linkedCardId": "D-02",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제",
      "계산형"
    ],
    "difficulty": "hard",
    "prompt": "A기업: 자본총계 21억, 무형자산 5억, 당기순이익 3억 4,200만, 차기순이익 8억 8,200만, 시중금리 4%. 본질가치는?",
    "answer": "2",
    "explanation": "예제의 핵심 정답 수치는 자산가치 16억, 수익가치 93억, 본질가치 62억이다.",
    "uiHint": "계산형",
    "options": [
      {
        "id": "1",
        "text": "자산가치 21억, 수익가치 93억, 본질가치 64.2억",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "자산가치 16억, 수익가치 93억, 본질가치 62억",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "자산가치 16억, 수익가치 155억, 본질가치 99.4억",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "자산가치 21억, 수익가치 155억, 본질가치 101.4억",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-12",
    "linkedCardId": "D-03",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제",
      "계산형"
    ],
    "difficulty": "medium",
    "prompt": "EV/EBITDA 산정 시 현금성 자산을 부채에서 차감하는 주된 이유는?",
    "answer": "3",
    "explanation": "단순 차입으로 현금이 쌓인 경우 EV가 과도하게 커지는 왜곡을 막기 위한 처리다.",
    "uiHint": "실무형",
    "options": [
      {
        "id": "1",
        "text": "현금성 자산은 영업활동과 무관해서",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "세법상 요구사항이어서",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "은행 차입에 의한 Enterprise Value 부풀림 방지를 위해서",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "국제회계기준 의무사항이어서",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-13",
    "linkedCardId": "D-04",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제",
      "계산형"
    ],
    "difficulty": "hard",
    "prompt": "A사: 현금성 자산 20억, 부채 100억, 발행주식 100만 주, 영업이익 50억, 감가상각비 10억, EV/EBITDA 멀티플 6배. 주당 가치는?",
    "answer": "2",
    "explanation": "강의 확정 예제 기준 정답은 2,800원이다.",
    "uiHint": "계산형",
    "options": [
      {
        "id": "1",
        "text": "2,000원",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "2,800원",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "3,600원",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "4,200원",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-14",
    "linkedCardId": "D-05",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제",
      "계산형"
    ],
    "difficulty": "medium",
    "prompt": "PRE-IPO 투자단가 계산 절차의 순서로 가장 적절한 것은?",
    "answer": "2",
    "explanation": "투자 미래가치에서 시작해 예상 기업가치, 필요 지분율, 포스트머니, 프리머니, 투자단가 순으로 간다.",
    "uiHint": "계산형",
    "options": [
      {
        "id": "1",
        "text": "포스트머니 -> 미래가치 -> 투자단가 -> 지분율",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "미래가치 -> 예상 기업가치 -> 지분율 -> 포스트머니 -> 프리머니 -> 투자단가",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "투자단가 -> 프리머니 -> 포스트머니 -> 미래가치",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "기업가치 -> 투자단가 -> 미래가치 -> 프리머니",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q2-15",
    "linkedCardId": "D-06",
    "roundId": "round-2",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제",
      "계산형"
    ],
    "difficulty": "hard",
    "prompt": "납입자본금 5억(액면가 5,000원), 5년 후 예상 순이익 30억, PER 10배, IRR 30%, 투자금 10억인 경우 PRE-IPO 투자단가는?",
    "answer": "3",
    "explanation": "확정 계산 예제 정답은 70,600원이다.",
    "uiHint": "계산형",
    "options": [
      {
        "id": "1",
        "text": "50,000원",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "60,000원",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "70,600원",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "85,000원",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q3-01",
    "linkedCardId": "E-01",
    "roundId": "round-3",
    "type": "ox",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "벤처캐피탈은 리스크를 무조건 크게 떠안는 산업이지, 리스크를 관리하는 산업은 아니다.",
    "answer": "X",
    "explanation": "`No Risk, No Worry`는 단순히 큰 리스크를 지라는 뜻이 아니라 리스크 매니지먼트 인더스트리라는 뜻이다.",
    "uiHint": "강사님 강조"
  },
  {
    "id": "Q3-02",
    "linkedCardId": "E-02",
    "roundId": "round-3",
    "type": "single",
    "tags": [
      "반복강조"
    ],
    "difficulty": "easy",
    "prompt": "강사가 말한 벤처캐피탈리스트의 MBTI 첫 글자는?",
    "answer": "3",
    "explanation": "상경계/이공계 구분보다 통합된 VC 정체성을 강조하는 표현이다.",
    "uiHint": "센스포인트",
    "options": [
      {
        "id": "1",
        "text": "A",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "B",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "V",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "T",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q3-03",
    "linkedCardId": "E-03",
    "roundId": "round-3",
    "type": "single",
    "tags": [
      "반복강조"
    ],
    "difficulty": "medium",
    "prompt": "강의에서 강조된 벤처기업의 고용 효과로 가장 적절한 것은?",
    "answer": "2",
    "explanation": "정책 논리와 연결되는 대표 포인트다.",
    "uiHint": "실무형",
    "options": [
      {
        "id": "1",
        "text": "일반 기업 대비 1.5배 수준",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "벤처기업은 3배, 투자받은 벤처기업은 12배 수준",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "벤처기업은 2배, 투자받은 벤처기업은 4배 수준",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "고용 효과는 일반 기업과 차이가 없다",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q3-04",
    "linkedCardId": "E-04",
    "roundId": "round-3",
    "type": "single",
    "tags": [
      "반복강조"
    ],
    "difficulty": "medium",
    "prompt": "비체계적 위험을 제거하는 대표 방법은?",
    "answer": "3",
    "explanation": "비체계적 위험은 제거 가능한 위험이며, 분산 투자로 줄여야 한다.",
    "uiHint": "기본기",
    "options": [
      {
        "id": "1",
        "text": "국채 투자",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "환헤지",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "분산 투자와 포트폴리오 구성",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "배당 확대",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q3-05",
    "linkedCardId": "E-05",
    "roundId": "round-3",
    "type": "ox",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "벤처캐피탈의 본질은 안정적으로 성장하는 우량 사업에 자금을 공급하는 것이다.",
    "answer": "X",
    "explanation": "VC는 안정적 사업 모델이 아니라 고성장 사업 모델에 투자한다.",
    "uiHint": "족집게"
  },
  {
    "id": "Q3-06",
    "linkedCardId": "E-06",
    "roundId": "round-3",
    "type": "ox",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "투자는 절대평가가 아니라 상대평가의 성격이 강하다.",
    "answer": "O",
    "explanation": "같은 회사도 비교군에 따라 투자 대상이 되기도, 탈락하기도 한다.",
    "uiHint": "강사님 강조"
  },
  {
    "id": "Q3-07",
    "linkedCardId": "E-07",
    "roundId": "round-3",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "초기 기업과 7년차 이상 성숙 기업의 투자 판단 원칙 차이로 가장 적절한 것은?",
    "answer": "2",
    "explanation": "초기 기업은 육성 관점, 성숙 기업은 교정 난이도 관점에서 본다.",
    "uiHint": "실무형",
    "options": [
      {
        "id": "1",
        "text": "둘 다 투자 사유가 3개 이상 있어야 한다",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "초기 기업은 이유 1~2개로도 가능하지만, 7년차 이상은 반대 사유 1개만 있어도 보수적으로 본다",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "7년차 이상이 더 관대하게 본다",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "초기 기업은 투자하지 않는다",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q3-08",
    "linkedCardId": "E-08",
    "roundId": "round-3",
    "type": "ox",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "투심보고서는 회사의 약점을 최대한 숨기고 무결한 회사처럼 정리할수록 통과 가능성이 높다.",
    "answer": "X",
    "explanation": "올바른 방식은 약점이 있음에도 불구하고 강점이 더 매력적이라는 구조로 쓰는 것이다.",
    "uiHint": "함정주의"
  },
  {
    "id": "Q3-09",
    "linkedCardId": "E-09",
    "roundId": "round-3",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "강사가 표현한 불경기와 VC의 관계로 가장 적절한 것은?",
    "answer": "3",
    "explanation": "낮은 밸류에이션과 실사 용이성 때문에 불경기를 투자 기회로 보기도 한다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "서로 원수지간",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "서로 무관함",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "친구지간",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "불경기에는 투자 금지",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q3-10",
    "linkedCardId": "E-09",
    "roundId": "round-3",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "easy",
    "prompt": "한국에서 IPO까지 성공한 기업의 평균 업력으로 강의에서 강조된 값은?",
    "answer": "3",
    "explanation": "투자 시점과 회수 시점의 시간 차이를 이해하게 해주는 수치다.",
    "uiHint": "기본기",
    "options": [
      {
        "id": "1",
        "text": "5년",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "8년",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "13년",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "20년",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q3-11",
    "linkedCardId": "D-07",
    "roundId": "round-3",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "멀티플과 IRR의 차이로 가장 적절한 것은?",
    "answer": "2",
    "explanation": "같은 2배라도 기간이 다르면 IRR은 크게 달라진다.",
    "uiHint": "실무형",
    "options": [
      {
        "id": "1",
        "text": "멀티플은 기간이 반영되고 IRR은 단순 배수다",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "멀티플은 단순 배수이고 IRR은 기간이 반영된 수익률이다",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "둘은 같은 의미다",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "IRR은 회계상 개념이 아니다",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q3-12",
    "linkedCardId": "E-05",
    "roundId": "round-3",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "벤처캐피탈이 투자 대상 회사에서 기대하는 수익률 수준으로 강의에서 강조한 것은?",
    "answer": "3",
    "explanation": "VC는 7~8% 금융상품이 아니라 6배~10배 그림이 그려지는 회사를 찾는다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "연 7~8% 수준의 안정적 수익",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "연 30% 수준의 중위험 수익",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "투자금 대비 6배에서 10배 수준의 성장 가능성",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "원금 보전을 전제로 한 확정 수익",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q4-01",
    "linkedCardId": "B-01",
    "roundId": "round-4",
    "type": "ox",
    "tags": [
      "반복강조",
      "언급된 문제",
      "함정주의"
    ],
    "difficulty": "easy",
    "prompt": "비상장 우선주는 의결권이 없는 무의결권 주식이다.",
    "answer": "X",
    "explanation": "비상장 우선주는 의결권을 가진다.",
    "uiHint": "함정주의"
  },
  {
    "id": "Q4-02",
    "linkedCardId": "B-02",
    "roundId": "round-4",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "RCPS에서 보통주 대비 가장 핵심적인 가치로 강조된 것은?",
    "answer": "3",
    "explanation": "강의에서는 리픽싱을 RCPS의 핵심 가치로 길게 설명했다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "의결권",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "잔여재산 분배 우선권",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "전환권의 리픽싱 옵션",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "표면금리",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q4-03",
    "linkedCardId": "B-03",
    "roundId": "round-4",
    "type": "ox",
    "tags": [
      "반복강조",
      "언급된 문제",
      "함정주의"
    ],
    "difficulty": "medium",
    "prompt": "RCPS의 상환권은 회사가 파산할수록 더 큰 가치를 가진다.",
    "answer": "X",
    "explanation": "이익잉여금이 없으면 상환청구 실효가 낮다.",
    "uiHint": "함정주의"
  },
  {
    "id": "Q4-04",
    "linkedCardId": "B-04",
    "roundId": "round-4",
    "type": "single",
    "tags": [
      "반복강조"
    ],
    "difficulty": "easy",
    "prompt": "SAFE는 한국 회계기준상 어떻게 분류되는가?",
    "answer": "2",
    "explanation": "미국식 감각과 다르게 한국에서는 부채로 본다.",
    "uiHint": "실무형",
    "options": [
      {
        "id": "1",
        "text": "자본",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "부채",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "자본잉여금",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "우발부채",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q4-05",
    "linkedCardId": "B-08",
    "roundId": "round-4",
    "type": "ox",
    "tags": [
      "반복강조",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "피투자기업이 투자자 동의 없이 기존 사업을 피봇하면 투자자는 상환 청구권을 행사할 수 있다.",
    "answer": "O",
    "explanation": "기존 사업 정의와 Major Change 조항을 기준으로 본다.",
    "uiHint": "족집게"
  },
  {
    "id": "Q4-06",
    "linkedCardId": "F-01",
    "roundId": "round-4",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제",
      "산업형"
    ],
    "difficulty": "medium",
    "prompt": "VC 관점에서 바이오 스타트업의 업의 정의로 가장 적절한 것은?",
    "answer": "3",
    "explanation": "바이오 파트의 기준축은 직접 판매가 아니라 IP 축적과 기술이전이다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "신약을 직접 개발해 끝까지 판매하는 회사",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "의사를 고용해 병원을 운영하는 회사",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "IP를 축적해 라이선스 아웃으로 수익화하는 회사",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "정부 과제 중심 연구소형 회사",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q4-07",
    "linkedCardId": "F-02",
    "roundId": "round-4",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제",
      "산업형"
    ],
    "difficulty": "medium",
    "prompt": "미충족 의료수요의 실질적 고객은 누구인가?",
    "answer": "2",
    "explanation": "처방 의사결정의 핵심 주체는 의사다.",
    "uiHint": "실무형",
    "options": [
      {
        "id": "1",
        "text": "환자",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "의사",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "건강보험공단",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "병원 재무팀",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q4-08",
    "linkedCardId": "F-03",
    "roundId": "round-4",
    "type": "ox",
    "tags": [
      "반복강조",
      "언급된 문제",
      "산업형",
      "함정주의"
    ],
    "difficulty": "medium",
    "prompt": "IND는 임상 3상 완료 후 시판허가를 받기 위해 제출하는 서류이다.",
    "answer": "X",
    "explanation": "IND는 비임상 완료 후 임상 1상 진입 전에 제출하는 서류다.",
    "uiHint": "함정주의"
  },
  {
    "id": "Q4-09",
    "linkedCardId": "F-04",
    "roundId": "round-4",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제",
      "산업형"
    ],
    "difficulty": "easy",
    "prompt": "푸드테크 산업 육성 일정에 대한 설명으로 옳은 것은?",
    "answer": "3",
    "explanation": "강의상 `가장 짧은 3번`으로 기억한 확정문제다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "2019년 정책 발표, 2020년 법률 제정",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "2021년 정책 발표, 2023년 법률 제정",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "2022년 정책 발표, 2024년 법률 제정, 2025년 말 시행",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "2025년 정책 발표, 2026년 법률 제정",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q4-10",
    "linkedCardId": "F-05",
    "roundId": "round-4",
    "type": "single",
    "tags": [
      "반복강조",
      "언급된 문제",
      "산업형"
    ],
    "difficulty": "medium",
    "prompt": "프로젝트 투자와 기업 투자의 핵심 차이로 가장 적절한 것은?",
    "answer": "2",
    "explanation": "프로젝트 투자는 위탁금/수익배분 중심이고, 기업 투자는 자본/의결권 구조다.",
    "uiHint": "실무형",
    "options": [
      {
        "id": "1",
        "text": "프로젝트 투자는 항상 의결권이 더 강하다",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "프로젝트 투자는 위탁금, 기업 투자는 자본으로 본다",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "기업 투자는 수익배분권만 있다",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "둘은 회계상 차이가 없다",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q4-11",
    "linkedCardId": "F-06",
    "roundId": "round-4",
    "type": "ox",
    "tags": [
      "반복강조",
      "언급된 문제",
      "산업형"
    ],
    "difficulty": "easy",
    "prompt": "글로벌 게임 산업 엑시트의 약 80%는 M&A 중심이다.",
    "answer": "O",
    "explanation": "게임 산업은 IPO보다 M&A 중심 구조가 강하다.",
    "uiHint": "기본기"
  },
  {
    "id": "Q4-12",
    "linkedCardId": "A-11",
    "roundId": "round-4",
    "type": "single",
    "tags": [
      "출제확정"
    ],
    "difficulty": "medium",
    "prompt": "운용인력의 외부 겸직 여부를 실질적으로 판단하는 기준으로 가장 적절한 것은?",
    "answer": "3",
    "explanation": "겸직은 형식보다 실질 기준으로 판단한다.",
    "uiHint": "실무형",
    "options": [
      {
        "id": "1",
        "text": "명함상 직함 보유 여부",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "외부 회사 소개 페이지 노출 여부",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "4대보험 중복 가입 또는 정기적 급여 수령 여부",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "외부 회의 참석 횟수",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "Q4-13",
    "linkedCardId": "A-13",
    "roundId": "round-4",
    "type": "ox",
    "tags": [
      "출제확정",
      "함정주의"
    ],
    "difficulty": "medium",
    "prompt": "미투자자산을 상장사 등에 운용하고 있더라도 그 부분에 대해 별도 관리보수가 발생한다.",
    "answer": "X",
    "explanation": "관리보수는 투자 집행된 자산을 기준으로만 산정된다.",
    "uiHint": "함정주의"
  },
  {
    "id": "Q4-14",
    "linkedCardId": "A-16",
    "roundId": "round-4",
    "type": "ox",
    "tags": [
      "출제확정"
    ],
    "difficulty": "medium",
    "prompt": "투자금 사용처에 대한 실사 의무는 조합 사후관리 체계에서 별도로 규정될 수 있다.",
    "answer": "O",
    "explanation": "투자금 집행 후 일정 기간 내 소진율 등을 기준으로 실사가 이뤄질 수 있다.",
    "uiHint": "실무형"
  },
  {
    "id": "Q4-15",
    "linkedCardId": "A-17",
    "roundId": "round-4",
    "type": "single",
    "tags": [
      "출제확정",
      "언급된 문제"
    ],
    "difficulty": "medium",
    "prompt": "대표펀드매니저 등 핵심 운용인력이 변경될 때 표준적으로 들어가는 제재로 가장 적절한 것은?",
    "answer": "3",
    "explanation": "대펀 변경은 GP 입장에서 가장 무거운 제재 포인트 중 하나다.",
    "uiHint": "강사님 강조",
    "options": [
      {
        "id": "1",
        "text": "자동 해산",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "모든 LP 출자 의무 종료",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "특별결의에 따른 당해연도 관리보수 일부 삭감",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "모든 투자 계약 자동 무효",
        "isCorrect": false
      }
    ]
  }
];
