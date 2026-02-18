---
id: careerly-mcp
evdId: EVD--6
order: 1
org: Careerly
period: "2025.07 ~ 진행중"
title: 커리어리 데이터 MCP
resultValue: "90%"
resultNum: 90
resultUnit: "%"
verified: 검증완료
contribution: null
skills:
  - MCP
  - BigQuery
  - GA4
  - TypeScript
  - 데이터 엔지니어링
capabilities:
  - 허슬
  - 문제해결
  - 운영시스템화
contentStatus: 완료
coverImage: /candid-portfolio-photo/careerly-data-mcp1.jpg
images:
  - /candid-portfolio-photo/careerly-data-mcp2.jpg
  - /candid-portfolio-photo/careerly-data-mcp3.jpg
  - /candid-portfolio-photo/careerly-data-mcp4.jpg
---

## resultLabel
반복 분석 리드타임을 약 55분에서 2분 수준으로 줄이는 목표/운영 기준을 수립했다.

## headline
자연어 질의로 4개 데이터 소스를 연결해 분석 리드타임을 줄이는 운영 기준을 만들었다.

## summary
GA4, BigQuery, GSC, MySQL을 하나의 질의 흐름으로 묶어 반복 분석 작업을 단축했다. 운영 기준은 기존 약 55분 수준의 분석 리드타임을 2분 수준으로 낮추는 것을 목표로 설계했다.

## problemDef
데이터 확인을 위해 GA4, BigQuery, GSC, MySQL을 오가야 해서 단순 질문에도 분석 리드타임이 길었습니다. 비개발자는 SQL 장벽 때문에 반복 질문을 스스로 검증하기 어려웠습니다.

## execution
Smart Query 라우팅, 4개 데이터 소스 도구, Insight Engine을 통합해 자연어 기반 분석 플로우를 구현했다.

## result
반복 분석 기준에서 약 55분 수준이던 조회 작업을 2분 수준으로 낮추는 운영 목표를 수립했습니다. 도구 전환 횟수를 줄여 분석 요청-응답 사이클을 짧게 유지할 수 있는 기반을 만들었습니다.

## learning
기술 난이도보다 질문 정의와 결과 해석 포맷이 분석 품질을 더 크게 좌우했습니다. 한 번의 질의가 다음 의사결정으로 바로 이어지도록 출력 구조를 설계하는 것이 핵심이었습니다.

## approach
자연어 입력을 의도별로 분류해 데이터 소스와 쿼리를 자동 라우팅하는 분석 흐름을 설계했습니다. 결과는 숫자 나열이 아니라 관찰, 원인 가설, 다음 액션으로 정리되도록 출력 구조를 고정했습니다.

## extensionView
복잡한 운영 환경에서는 도구를 늘리는 것보다 질의와 해석의 표준을 먼저 맞추는 접근이 효과적이었습니다. 이후 다른 데이터 과제에서도 같은 질의 중심 구조를 재사용하고 있습니다.
