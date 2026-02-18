// @generated — content/ MD 파일에서 자동 생성됨. 직접 수정하지 마세요.
// 수정: content/ 폴더의 .md 파일을 편집한 뒤 pnpm content:build 실행

export type CandidCapability =
  | "진심"
  | "허슬"
  | "문제해결"
  | "관계구축"
  | "설득"
  | "운영시스템화";

export type PortfolioProject = {
  id: string;
  evdId: string;
  order: number;
  org: string;
  period: string;
  title: string;
  resultValue: string;
  resultNum: number | null;
  resultUnit: string | null;
  resultLabel: string;
  verified: "검증완료" | "부분검증" | "미검증";
  headline: string;
  summary: string;
  problemDef: string;
  execution: string;
  result: string;
  learning: string;
  contribution: number | null;
  skills: string[];
  capabilities: CandidCapability[];
  contentStatus: "완료" | "검수중" | "초안";
  coverImage: string | null;
  images: string[];
  approach: string;
  extensionView: string;
};

export type CapabilityDetail = {
  name: CandidCapability;
  definition: string;
  publicDesc: string;
  webSummary: string;
  proficiency: number;
  linkedEvdId: string;
};

export type HeroNarrative = {
  id: string;
  name: string;
  keyLine: string;
  webSummary: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "cx-automation",
    evdId: "EVD--1",
    order: 1,
    org: "Angelswing",
    period: "2022.09 ~ 2023.02",
    title: "고객문의 60% 자동화 및 응답 구조 개선",
    resultValue: "60%",
    resultNum: 60,
    resultUnit: "%",
    resultLabel: "전체 고객문의 중 약 60%를 자동응답으로 전환해 CS 리소스 소모를 줄였다.",
    verified: "검증완료",
    headline: "반복 문의를 구조화해 전체 문의의 60%를 자동응답으로 전환했다.",
    summary: "문의 로그를 유형화해 자동응답과 담당자 라우팅을 분리했다. 기준 기간 동안 전체 문의의 60%를 자동화해 응답 구조를 안정화했다.",
    problemDef: "고객문의가 단일 큐로 유입되어 단순 문의와 복잡 문의를 같은 방식으로 처리하고 있었습니다. 그 결과 응답 지연이 반복되고 상담 인력은 우선순위 판단에 많은 시간을 썼습니다.",
    execution: "문의 데이터를 유형화하고 난이도 기반 분기/자동응답/담당자 라우팅 체계를 설계해 주간 개선 루프를 운영했다.",
    result: "기준 기간 동안 전체 문의의 60%를 자동응답으로 전환했습니다. 상담 인력은 복잡 이슈에 집중할 수 있게 되었고, 초기 응답의 일관성이 높아졌습니다.",
    learning: "자동화의 핵심은 답변 문구가 아니라 분기 기준의 정확도라는 점을 확인했습니다. 사람 개입 시점을 명확히 정의해야 고객 경험과 운영 효율을 동시에 지킬 수 있었습니다.",
    contribution: 0.8,
    skills: ["Channel Talk", "G Sheet", "Slack"],
    capabilities: ["진심"],
    contentStatus: "완료",
    coverImage: "/portfolio/evd-1-cover.png",
    images: [],
    approach: "문의 로그를 유형별로 분류하고, 난이도 기준으로 자동응답과 담당자 라우팅 규칙을 분리했습니다. 주간 리뷰에서 태그 분포를 확인하며 챗봇 시나리오와 가이드 링크를 계속 보정했습니다.",
    extensionView: "반복 문의를 구조화한 방식은 이후 운영 과제에서도 재사용 가능한 기본 패턴이 되었습니다. 먼저 기준을 세우고 예외를 관리하는 접근을 유지하고 있습니다.",
  },
  {
    id: "data-dashboard",
    evdId: "EVD--2",
    order: 2,
    org: "Angelswing",
    period: "2023.08 ~ 2024.04",
    title: "전사 지표 기반 데이터 대시보드 구축",
    resultValue: "7건",
    resultNum: 7,
    resultUnit: "건",
    resultLabel: "7개 부서 데이터를 통합 기준으로 연결해 전사 대시보드 운영 체계를 구축했다.",
    verified: "검증완료",
    headline: "분산된 부서 데이터를 공통 기준으로 통합해 전사 대시보드 운영 체계를 만들었다.",
    summary: "부서별로 달랐던 데이터 기준을 날짜·고객·프로젝트 키로 표준화했다. 7개 부서 데이터를 연결해 같은 지표를 같은 언어로 볼 수 있는 운영 기반을 구축했다.",
    problemDef: "부서마다 데이터 저장 방식과 지표 정의가 달라 같은 질문에도 서로 다른 숫자가 나오는 상황이 반복되었습니다. 이 구조에서는 회의마다 기준을 맞추는 데 시간이 소모되어 실행 결정이 늦어졌습니다.",
    execution: "부서 인터뷰로 공통 기준점을 정의하고 데이터 표준화를 수행한 뒤 Looker Studio/Power BI로 실시간 지표 체계를 구축했다.",
    result: "7개 부서 데이터를 하나의 기준으로 연결하는 전사 대시보드 체계를 구축했습니다. 팀별 보고 방식이 표준화되면서 지표 해석 차이로 생기던 커뮤니케이션 비용이 줄었습니다.",
    learning: "대시보드는 시각화 도구보다 합의된 정의가 먼저라는 점을 확인했습니다. 숫자를 만드는 과정과 책임 주체를 명확히 해야 지표가 조직 언어로 작동했습니다.",
    contribution: 0.75,
    skills: [
      "Power BI",
      "Looker Studio",
      "GA-4",
      "Notion",
      "Salesforce",
      "Monday",
      "Slack",
      "G Sheet",
    ],
    capabilities: ["진심"],
    contentStatus: "완료",
    coverImage: "/portfolio/evd-2-cover.png",
    images: [],
    approach: "각 부서 인터뷰를 통해 공통 기준 키를 날짜, 고객 ID, 프로젝트 ID로 정하고 데이터 포맷을 통일했습니다. 이후 Looker Studio와 Power BI를 병행해 실시간 확인용 화면과 운영 모니터링 화면을 역할별로 분리했습니다.",
    extensionView: "다른 과제에서도 먼저 기준점을 정의하고 이후 도구를 배치하는 순서를 유지하고 있습니다. 이해관계자가 많은 환경일수록 이 순서가 실행 속도를 안정화했습니다.",
  },
  {
    id: "workflow-automation",
    evdId: "EVD--3",
    order: 3,
    org: "Angelswing",
    period: "2024.07 ~ 2024.10",
    title: "업무 자동화 구조 설계",
    resultValue: "6건",
    resultNum: 6,
    resultUnit: "건",
    resultLabel: "반복 운영 업무 6개를 자동화 플로우로 전환해 수작업 의존도를 줄였다.",
    verified: "검증완료",
    headline: "반복 운영 업무 6개를 자동화해 수작업 의존도를 크게 줄였다.",
    summary: "Slack, Zapier, Make를 연결해 검수, 지연 감지, 기록 보관 플로우를 표준화했다. 담당자 라우팅과 알림 기준을 고정해 대응 속도와 일관성을 높였다.",
    problemDef: "검수, 지연 확인, 결과 기록 같은 운영 업무가 수작업으로 흩어져 있어 오류와 누락이 반복되었습니다. 담당자 확인 시점도 일정하지 않아 문제 발견 후 대응까지의 시간이 길었습니다.",
    execution: "Slack 인터페이스와 Zapier/Make를 연결해 검수·경고·기록 자동화 플로우를 설계하고 응답 책임자를 즉시 라우팅하도록 구성했다.",
    result: "반복 운영 업무 6개를 자동화 플로우로 전환했습니다. 수기 입력과 수동 알림 비중이 줄어들면서 운영 리듬이 일정해졌고, 예외 상황 대응 속도가 개선됐습니다.",
    learning: "자동화는 기능 추가보다 책임 흐름을 명확히 정의하는 일이 더 중요했습니다. 누가 어떤 신호를 받고 언제 판단하는지를 설계해야 재작업이 줄었습니다.",
    contribution: 0.9,
    skills: ["Slack", "Integromat(Make)", "Zapier", "G Sheet"],
    capabilities: ["허슬", "문제해결", "운영시스템화"],
    contentStatus: "완료",
    coverImage: "/portfolio/evd-3-cover.png",
    images: [],
    approach: "Slack 인터페이스에 버튼 기반 입력 흐름을 만들고 Zapier, Make로 검수·경고·기록 단계를 자동 연결했습니다. 지연 기준을 사전에 정의해 임계값을 넘으면 담당자에게 즉시 라우팅되도록 설계했습니다.",
    extensionView: "운영 과제가 바뀌어도 입력-판단-조치의 기본 골격을 먼저 만들면 전환 비용이 낮아집니다. 이후 개선은 도구 교체보다 기준 보정에 집중하고 있습니다.",
  },
  {
    id: "ux-guide-chatbot",
    evdId: "EVD--4",
    order: 4,
    org: "Angelswing",
    period: "2023.03 ~ 2023.06",
    title: "UX 기반 유저가이드 리뉴얼 & 챗봇 연계",
    resultValue: "CX",
    resultNum: null,
    resultUnit: null,
    resultLabel: "가이드 탐색성과 챗봇 연계성이 향상되어 반복문의의 1차 흡수가 가능해졌고 CX 운영부담이 감소했다.",
    verified: "부분검증",
    headline: "PDF 가이드를 탐색형 구조로 전환하고 챗봇과 연결해 셀프해결 동선을 만들었다.",
    summary: "초기 사용자가 정보를 찾지 못해 반복 문의가 누적되던 문제를 온보딩 관점에서 재설계했다. 가이드 구조와 챗봇 링크를 통합해 1차 문의 흡수 흐름을 고정했다.",
    problemDef: "초기 사용자가 PDF 기반 가이드에서 필요한 정보를 찾지 못해 같은 질문이 반복 유입되고 있었습니다. 온보딩 초기에 해결 실패가 누적되면서 지원팀 부담도 함께 증가했습니다.",
    execution: "기존 PDF를 Notion 탐색형 구조로 전면 재설계하고, 채널톡 서포트봇 답변을 가이드 세부 섹션 링크와 연결해 셀프해결 동선을 만들었다.",
    result: "가이드 탐색성과 챗봇 연계성이 개선되어 반복 문의의 1차 흡수 흐름이 만들어졌습니다. 지원팀은 기본 안내보다 예외 케이스 대응에 시간을 배분할 수 있게 되었습니다.",
    learning: "문서 개선은 텍스트 품질보다 탐색 구조 설계가 성과에 더 큰 영향을 준다는 점을 확인했습니다. 답변 채널과 학습 채널을 분리하지 않고 연결할 때 사용자 자율 해결률이 높아졌습니다.",
    contribution: 0.9,
    skills: ["Notion", "Channel Talk", "GA-4", "Google Tag Manager"],
    capabilities: ["문제해결", "운영시스템화", "설득"],
    contentStatus: "검수중",
    coverImage: "/portfolio/evd-4-cover.png",
    images: [],
    approach: "기존 가이드를 기능 중심 탐색 구조로 재설계하고, 챗봇 답변에서 관련 섹션으로 바로 이동하도록 링크 체계를 구성했습니다. 문의 유형별로 자주 막히는 구간을 기록해 가이드 문서와 챗봇 시나리오를 함께 업데이트했습니다.",
    extensionView: "복잡한 제품일수록 정보 접근 경로를 먼저 설계해야 운영 비용이 안정화됩니다. 이후에는 콘텐츠 양보다 탐색 맥락의 일관성을 우선해 유지하고 있습니다.",
  },
  {
    id: "crm-funnel",
    evdId: "EVD--5",
    order: 5,
    org: "세종대학교 총동아리연합회",
    period: "2024.01 ~ 2024.12",
    title: "학생 대상 CRM 기반 홍보·참여 퍼널 설계",
    resultValue: "39.1%",
    resultNum: 39.1,
    resultUnit: "%",
    resultLabel: "웹 클릭 1,184건 대비 설문 참여 463건으로 평균 전환율 39.1%를 달성했다.",
    verified: "검증완료",
    headline: "학생 대상 홍보를 CRM 퍼널로 전환해 설문 전환율 39.1%를 기록했다.",
    summary: "채널별 유입 추적과 설문 데이터를 연결해 유입-참여-피드백 흐름을 운영했다. 웹 클릭 1,184건 대비 설문 463건으로 평균 전환율 39.1%를 달성했다.",
    problemDef: "대규모 학생 대상 홍보가 공지 중심으로 운영되어 어떤 채널이 실제 참여를 만드는지 파악하기 어려웠습니다. 유입, 행동, 피드백 데이터가 분리돼 있어 다음 운영 개선에 근거가 부족했습니다.",
    execution: "웹 인터랙션, 설문, 채널 추적을 결합한 CRM 퍼널을 설계하고 채널별 문구/콘텐츠를 전환율 중심으로 개선했다.",
    result: "웹 클릭 1,184건 대비 설문 참여 463건을 기록해 평균 전환율 39.1%를 달성했습니다. 약 1만 명 규모 대상 운영에서 참여 흐름을 수치로 확인할 수 있는 구조를 만들었습니다.",
    learning: "홍보 성과는 노출량보다 이후 행동 전환 경로 설계에서 갈린다는 점을 확인했습니다. 채널별 메시지를 동일하게 운영하기보다 목적별로 분리할 때 전환 효율이 높아졌습니다.",
    contribution: 0.9,
    skills: ["GA-4", "Google Tag Manager", "Looker Studio", "Clarity", "Java"],
    capabilities: ["허슬", "문제해결", "설득"],
    contentStatus: "완료",
    coverImage: "/portfolio/evd-5-cover.png",
    images: [],
    approach: "웹 인터랙션 로그, 채널별 유입 링크, 설문 응답을 하나의 퍼널로 연결해 추적 구조를 설계했습니다. 메시지 문구와 콘텐츠 포맷을 채널별 전환 데이터 기준으로 반복 수정했습니다.",
    extensionView: "대상 규모가 큰 운영 과제에서는 정성 피드백만으로는 개선 속도를 유지하기 어렵습니다. 유입-행동-피드백을 연결한 측정 프레임은 이후 다른 프로젝트에서도 재사용되고 있습니다.",
  },
  {
    id: "careerly-mcp",
    evdId: "EVD--6",
    order: 6,
    org: "Careerly",
    period: "2025.07 ~ 진행중",
    title: "커리어리 데이터 MCP",
    resultValue: "90%",
    resultNum: 90,
    resultUnit: "%",
    resultLabel: "반복 분석 리드타임을 약 55분에서 2분 수준으로 줄이는 목표/운영 기준을 수립했다.",
    verified: "검증완료",
    headline: "자연어 질의로 4개 데이터 소스를 연결해 분석 리드타임을 줄이는 운영 기준을 만들었다.",
    summary: "GA4, BigQuery, GSC, MySQL을 하나의 질의 흐름으로 묶어 반복 분석 작업을 단축했다. 운영 기준은 기존 약 55분 수준의 분석 리드타임을 2분 수준으로 낮추는 것을 목표로 설계했다.",
    problemDef: "데이터 확인을 위해 GA4, BigQuery, GSC, MySQL을 오가야 해서 단순 질문에도 분석 리드타임이 길었습니다. 비개발자는 SQL 장벽 때문에 반복 질문을 스스로 검증하기 어려웠습니다.",
    execution: "Smart Query 라우팅, 4개 데이터 소스 도구, Insight Engine을 통합해 자연어 기반 분석 플로우를 구현했다.",
    result: "반복 분석 기준에서 약 55분 수준이던 조회 작업을 2분 수준으로 낮추는 운영 목표를 수립했습니다. 도구 전환 횟수를 줄여 분석 요청-응답 사이클을 짧게 유지할 수 있는 기반을 만들었습니다.",
    learning: "기술 난이도보다 질문 정의와 결과 해석 포맷이 분석 품질을 더 크게 좌우했습니다. 한 번의 질의가 다음 의사결정으로 바로 이어지도록 출력 구조를 설계하는 것이 핵심이었습니다.",
    contribution: null,
    skills: ["MCP", "BigQuery", "GA4", "TypeScript", "데이터 엔지니어링"],
    capabilities: ["허슬", "문제해결", "운영시스템화"],
    contentStatus: "완료",
    coverImage: "/candid-portfolio-photo/careerly-data-mcp1.jpg",
    images: [
      "/candid-portfolio-photo/careerly-data-mcp2.jpg",
      "/candid-portfolio-photo/careerly-data-mcp3.jpg",
      "/candid-portfolio-photo/careerly-data-mcp4.jpg",
    ],
    approach: "자연어 입력을 의도별로 분류해 데이터 소스와 쿼리를 자동 라우팅하는 분석 흐름을 설계했습니다. 결과는 숫자 나열이 아니라 관찰, 원인 가설, 다음 액션으로 정리되도록 출력 구조를 고정했습니다.",
    extensionView: "복잡한 운영 환경에서는 도구를 늘리는 것보다 질의와 해석의 표준을 먼저 맞추는 접근이 효과적이었습니다. 이후 다른 데이터 과제에서도 같은 질의 중심 구조를 재사용하고 있습니다.",
  },
  {
    id: "careerly-dashboard",
    evdId: "EVD--7",
    order: 7,
    org: "Careerly",
    period: "2025.07 ~ 진행중",
    title: "커리어리 데이터 대시보드",
    resultValue: "66건",
    resultNum: 66,
    resultUnit: "건",
    resultLabel: "플랫폼 운영 핵심 질문 66개를 카테고리화해 반복 보고를 구조화했고 의사결정 리드타임을 단축했다.",
    verified: "검증완료",
    headline: "운영에서 반복되는 66개 질문을 기준으로 멀티소스 데이터 대시보드를 구축했다.",
    summary: "질문 기반 정보 구조를 설계해 KPI, 퍼널, 코호트, SEO를 한 화면 체계로 통합했다. 비개발자도 같은 기준으로 지표를 조회할 수 있도록 공통 필터와 뷰를 표준화했다.",
    problemDef: "핵심 데이터가 여러 시스템에 분산되어 있어 같은 질문을 매번 수작업으로 취합해야 했습니다. 이 구조에서는 의사결정 전에 데이터 정리 시간이 먼저 발생해 실행 타이밍이 늦어졌습니다.",
    execution: "질문 기반으로 KPI·퍼널·코호트·SEO를 한 화면에서 연결하는 대시보드 아키텍처를 설계하고 운영용 공통 필터를 표준화했다.",
    result: "66개 핵심 질문을 대시보드 구조에 반영해 반복 보고 흐름을 정리했습니다. KPI, 퍼널, 코호트, SEO 지표를 연결해 질문-확인-판단의 리드타임을 줄였습니다.",
    learning: "대시보드 품질은 차트 수보다 질문 설계의 밀도에 달려 있었습니다. 먼저 질문을 고정하면 데이터 소스가 달라도 운영 언어를 일관되게 유지할 수 있었습니다.",
    contribution: null,
    skills: ["대시보드 설계", "데이터 시각화", "BigQuery", "비즈니스 분석"],
    capabilities: ["진심"],
    contentStatus: "완료",
    coverImage: "/candid-portfolio-photo/careerly-data-dashboard1.jpg",
    images: [
      "/candid-portfolio-photo/careerly-data-dashboard2.jpg",
      "/candid-portfolio-photo/careerly-data-dashboard3.jpg",
      "/candid-portfolio-photo/careerly-data-dashboard4.jpg",
      "/candid-portfolio-photo/careerly-data-dashboard5.jpg",
    ],
    approach: "운영에서 반복되는 66개 질문을 먼저 정의하고, 질문마다 필요한 데이터 소스와 시각화 뷰를 매핑했습니다. 공통 날짜 필터와 비교 기준을 표준화해 누구나 같은 맥락에서 숫자를 읽을 수 있도록 설계했습니다.",
    extensionView: "이 방식은 새로운 조직이나 제품에서도 빠르게 재사용할 수 있는 프레임이 됩니다. 먼저 질문 목록을 만들고, 이후 지표 체계를 붙이는 순서로 확장하고 있습니다.",
  },
  {
    id: "secondteam-events",
    evdId: "EVD--8",
    order: 8,
    org: "seeso",
    period: "2025.07 ~ 진행중",
    title: "세컨팀 행사 기획 및 운영",
    resultValue: "운영",
    resultNum: null,
    resultUnit: null,
    resultLabel: "반복 가능한 행사 운영 템플릿을 확립해 준비 리드타임을 단축했다.",
    verified: "부분검증",
    headline: "행사 운영을 템플릿 기반으로 표준화해 반복 준비 리듬을 안정화했다.",
    summary: "기획, 디자인, 현장 운영을 하나의 운영 보드에서 관리하며 역할과 마감 기준을 고정했다. 반복 행사에서 누락 위험을 줄이고 준비 흐름을 재사용 가능한 형태로 정리했다.",
    problemDef: "행사마다 준비 항목과 커뮤니케이션 방식이 달라 일정 지연과 누락 위험이 반복되었습니다. 역할 경계가 불명확하면 현장 대응 품질이 개인 역량에 크게 의존했습니다.",
    execution: "행사별 체크리스트·역할 분담·운영 가이드를 표준화하고 커뮤니케이션 리듬을 고정했다.",
    result: "반복 행사에서도 같은 준비 흐름을 재사용할 수 있는 운영 체계를 구축했습니다. 준비 단계의 커뮤니케이션 누락이 줄고, 현장 대응의 일관성을 유지할 수 있게 됐습니다.",
    learning: "행사 운영의 품질은 아이디어보다 역할과 타이밍 정의에서 결정된다는 점을 확인했습니다. 특히 사전 합의가 명확할수록 현장 의사결정이 빨라졌습니다.",
    contribution: null,
    skills: ["행사 기획", "운영 표준화", "디자인", "팀 협업"],
    capabilities: ["허슬", "관계구축", "운영시스템화"],
    contentStatus: "검수중",
    coverImage: "/candid-portfolio-photo/second-team.jpg",
    images: [],
    approach: "행사 기획, 디자인, 운영을 하나의 보드로 통합하고 체크리스트와 마감 기준을 템플릿화했습니다. 주간 점검 리듬을 고정해 변경 사항을 조기에 공유하고, 당일 운영 시나리오를 사전에 정렬했습니다.",
    extensionView: "이 방식은 행사뿐 아니라 이해관계자가 많은 프로젝트 운영에도 그대로 적용됩니다. 준비 단계에서 기준을 명확히 고정하는 접근을 계속 유지하고 있습니다.",
  },
  {
    id: "leanup-si",
    evdId: "EVD--9",
    order: 9,
    org: "LEANUP",
    period: "2025.12 ~ 진행중",
    title: "린업 SI 사업",
    resultValue: "3건",
    resultNum: 3,
    resultUnit: "건",
    resultLabel: "현재 3개 클라이언트를 확보하고 추가 대형 계약을 협의 중이다.",
    verified: "부분검증",
    headline: "요구사항을 빠르게 MVP로 전환하는 SI 운영 모델을 설계하고 초기 고객 3건을 확보했다.",
    summary: "기획-개발 전환 병목을 줄이기 위해 짧은 시연 주기의 납품 루프를 운영했다. 현재 3개 클라이언트 프로젝트를 진행하며 계약 확장 가능성을 검증하고 있다.",
    problemDef: "AI 도구로 개발 속도는 빨라졌지만, 현장에서는 요구사항을 실행 가능한 결과물로 바꾸는 구간에서 지연이 반복됐습니다. 특히 기획 의도를 우선순위와 범위로 변환하는 단계가 병목이었습니다.",
    execution: "클라이언트 요구를 빠르게 MVP로 전환하는 바이브코딩 기반 SI 운영 모델을 구성했다.",
    result: "초기 고객 3건을 확보해 프로젝트를 운영하고 있습니다. 진행 과정에서 재요청과 확장 논의가 이어지며 운영 모델의 유효성을 검증하고 있습니다.",
    learning: "SI 성과는 속도보다 예측 가능한 커뮤니케이션 구조에서 안정적으로 나왔습니다. 실행물과 판단 기준을 같은 주기로 공유할 때 신뢰 형성이 빨라졌습니다.",
    contribution: null,
    skills: ["바이브코딩", "MVP 설계", "클라이언트 관리", "프로젝트 운영"],
    capabilities: ["허슬", "문제해결", "설득"],
    contentStatus: "검수중",
    coverImage: "/candid-portfolio-photo/leanup-si.jpg",
    images: [],
    approach: "요구사항을 기능 단위로 분해하고 짧은 주기의 MVP 시연-피드백 루프를 운영 모델로 고정했습니다. 초기 합의 단계에서 범위, 일정, 검수 기준을 문서화해 변경 비용을 줄였습니다.",
    extensionView: "요구사항이 불명확한 과제일수록 작게 시연하고 빠르게 합의하는 방식이 유효했습니다. 이후 다른 프로젝트에서도 동일한 리듬을 기본 운영 방식으로 사용하고 있습니다.",
  },
  {
    id: "leanup-edu",
    evdId: "EVD--10",
    order: 10,
    org: "LEANUP",
    period: "2025.12 ~ 진행중",
    title: "린업 교육 사업",
    resultValue: "교육",
    resultNum: null,
    resultUnit: null,
    resultLabel: "현재 운영 중이며 유료 전환 구조와 반복 교육 커리큘럼을 검증하고 있다.",
    verified: "부분검증",
    headline: "교육과 실행 과제를 연결한 운영 모델로 학습자의 실무 전환 경로를 설계했다.",
    summary: "초급 학습과 실제 제작 과제를 분리하지 않고 주간 피드백 루프로 연결했다. 프로그램은 운영 중이며 유료 전환 및 반복 운영 지표를 단계적으로 축적하고 있다.",
    problemDef: "AI 기반 제작 도구는 늘었지만, 초심자가 실제 업무로 연결하는 단계에서 이탈이 자주 발생했습니다. 도구 소개 중심 교육만으로는 실행 성공률을 높이기 어려웠습니다.",
    execution: "초심자 대상 실습형 교육과 프로젝트 참여 방식을 결합해 실제 제작 경험을 제공하는 운영 모델을 설계했다.",
    result: "프로그램을 운영하면서 학습-실행 연결 구조를 안정화하고 있습니다. 정량 KPI는 축적 단계로, 현재는 운영 사실과 반복 가능성 중심으로 검증하고 있습니다.",
    learning: "교육의 핵심은 지식 전달보다 과업 전환 설계라는 점을 확인했습니다. 난이도별 단계 설계와 짧은 피드백 주기가 학습 지속률에 직접적인 영향을 줬습니다.",
    contribution: null,
    skills: ["교육 설계", "커리큘럼 운영", "바이브코딩", "커뮤니티 운영"],
    capabilities: ["허슬", "관계구축", "설득"],
    contentStatus: "검수중",
    coverImage: "/candid-portfolio-photo/leanup-edu.jpg",
    images: [],
    approach: "기초 학습과 실제 제작 과제를 분리하지 않고 하나의 운영 루프로 구성했습니다. 주간 단위 온보딩, 과제 배정, 피드백 라운드를 고정해 학습자가 결과물을 남기도록 설계했습니다.",
    extensionView: "복잡한 업무를 처음 다루는 사람에게는 도구 설명보다 실행 경로가 먼저 필요했습니다. 이후 프로젝트에서도 진입 장벽을 낮추는 단계형 운영 설계를 우선하고 있습니다.",
  },
];

export const capabilityDetails: CapabilityDetail[] = [
  {
    name: "운영시스템화",
    definition: "사람 의존 업무를 기준·도구·루틴으로 고정해 재현 가능한 운영 체계로 만드는 능력.",
    publicDesc: "개별 역량 의존 업무를 팀 단위 시스템으로 전환해 재현 가능한 운영을 만듭니다.",
    webSummary: "개인 역량에 의존하던 일을 기준·도구·루틴으로 고정해 팀 단위 성과로 전환하는 역량입니다. 자동화와 분석 체계 구축 과제에서 반복 성과를 만드는 데 활용했습니다.",
    proficiency: 0.97,
    linkedEvdId: "EVD--6",
  },
  {
    name: "문제해결",
    definition: "증상을 처리하지 않고 병목의 원인을 분해해 구조적으로 해결하는 능력.",
    publicDesc: "문제의 원인을 구조화하고 측정 가능한 기준으로 해결합니다.",
    webSummary: "증상을 처리하는 대신 병목 원인을 분해하고 측정 가능한 해결안으로 전환하는 역량입니다. 대시보드 구축과 지표 표준화 과제에서 재현 가능한 성과를 만듭니다.",
    proficiency: 0.96,
    linkedEvdId: "EVD--2",
  },
  {
    name: "진심",
    definition: "상대의 맥락과 목적을 왜곡 없이 이해하고, 단기 성과보다 장기 신뢰를 우선해 의사결정하는 태도.",
    publicDesc: "상대 맥락을 정확히 이해하고, 약속한 실행을 일관되게 완료해 신뢰를 쌓습니다.",
    webSummary: "단기 성과보다 신뢰를 우선해 기대치와 약속을 일치시키는 역량입니다. 복잡 문의 대응 구조 설계처럼 장기적 관계 품질이 중요한 과제에서 강하게 작동합니다.",
    proficiency: 0.95,
    linkedEvdId: "EVD--1",
  },
  {
    name: "허슬",
    definition: "모호한 상황에서도 실행 단위를 빠르게 정의하고, 반복 루틴으로 성과를 축적하는 추진력.",
    publicDesc: "우선순위를 빠르게 정리하고 짧은 실행 주기로 결과를 축적합니다.",
    webSummary: "모호한 과제를 빠르게 실행 단위로 분해하고 짧은 주기로 진척을 만드는 역량입니다. 자동화와 퍼널 최적화처럼 속도와 구조가 동시에 필요한 업무에서 효과가 큽니다.",
    proficiency: 0.94,
    linkedEvdId: "EVD--3",
  },
  {
    name: "설득",
    definition: "데이터와 맥락을 결합해 상대가 납득 가능한 선택지를 제시하는 커뮤니케이션 역량.",
    publicDesc: "근거 기반 논리와 맥락 설명으로 합의 가능한 선택지를 제시합니다.",
    webSummary: "데이터와 맥락을 결합해 상대가 납득 가능한 선택지를 제시하는 역량입니다.",
    proficiency: 0.91,
    linkedEvdId: "EVD--5",
  },
  {
    name: "관계구축",
    definition: "다양한 이해관계자를 공통 기준으로 정렬하고 협업 리듬을 만드는 역량.",
    publicDesc: "이해관계자의 목표를 정렬해 협업 비용을 낮추고 실행 속도를 높입니다.",
    webSummary: "다양한 이해관계자를 공통 기준으로 정렬하고 협업 리듬을 만드는 역량입니다.",
    proficiency: 0.9,
    linkedEvdId: "EVD--8",
  },
];

export const heroNarratives: HeroNarrative[] = [
  {
    id: "NAR--6",
    name: "자기소개30초",
    keyLine: "반복 병목을 실행 가능한 운영 구조로 전환하는 일을 해왔습니다.",
    webSummary: "20살부터 실무를 시작해 학업과 병행하며 반복 병목을 운영 구조로 전환해 왔습니다. 고객문의 자동화와 운영 표준화 경험을 통해 문제를 빠르게 분해하고 실행 루틴으로 고정하는 방식을 유지하고 있습니다.",
  },
  {
    id: "NAR--7",
    name: "자기소개90초",
    keyLine: "문제를 정의하고 이해관계자를 정렬한 뒤 실행 루틴으로 고정해 성과로 연결합니다.",
    webSummary: "고객문의 자동화, 업무 자동화, 데이터 대시보드 설계를 통해 반복 이슈를 구조적으로 해결해 왔습니다. 문제정의-합의-실행 루프를 고정해 팀이 같은 기준으로 움직이게 만드는 방식이 핵심 강점입니다.",
  },
  {
    id: "NAR--11",
    name: "창업동기",
    keyLine: "창업은 기술 그 자체보다 시장의 실행 격차를 발견했을 때 시작했습니다.",
    webSummary: "창업 동기는 기술 유행이 아니라 시장의 실행 격차를 직접 확인한 데서 시작됐습니다. 교육과 SI를 결합한 모델로 수요를 검증하며, 작게 실행하고 빠르게 피드백 받는 방식으로 사업 가설을 다듬고 있습니다.",
  },
];
