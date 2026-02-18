// content/ MD 파일 → src/data/portfolio.ts 자동 생성 스크립트
// 사용: pnpm content:build (1회) | pnpm content:watch (감시 모드)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content");
const OUT = path.join(ROOT, "src", "data", "portfolio.ts");

// ── MD body에서 ## 섹션 파싱 ─────────────────────────────────
function parseSections(body) {
  const sections = {};
  let key = "";
  let buf = [];
  for (const line of body.split("\n")) {
    const m = line.match(/^## (\S+)/);
    if (m) {
      if (key) sections[key] = buf.join("\n").trim();
      key = m[1];
      buf = [];
    } else if (key) {
      buf.push(line);
    }
  }
  if (key) sections[key] = buf.join("\n").trim();
  return sections;
}

// ── 디렉토리 내 .md 파일 읽기 ─────────────────────────────────
function readDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf-8");
      const { data, content } = matter(raw);
      return { meta: data, sections: parseSections(content) };
    });
}

// ── 값을 TS 리터럴 문자열로 변환 ──────────────────────────────
function lit(v, indent = 4) {
  if (v === null || v === undefined) return "null";
  if (typeof v === "number") return String(v);
  if (typeof v === "string") return JSON.stringify(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return "[]";
    const items = v.map((x) => JSON.stringify(x));
    const oneLine = `[${items.join(", ")}]`;
    if (oneLine.length < 80) return oneLine;
    const pad = " ".repeat(indent);
    return `[\n${pad}  ${items.join(`,\n${pad}  `)},\n${pad}]`;
  }
  return JSON.stringify(v);
}

// ── 포트폴리오 프로젝트 생성 ──────────────────────────────────
function buildProjects() {
  const entries = readDir(path.join(CONTENT, "portfolio"));
  return entries.map(({ meta, sections }) => {
    const m = meta;
    return [
      `  {`,
      `    id: ${lit(m.id)},`,
      `    evdId: ${lit(m.evdId)},`,
      `    order: ${lit(m.order)},`,
      `    org: ${lit(m.org)},`,
      `    period: ${lit(m.period)},`,
      `    title: ${lit(m.title)},`,
      `    resultValue: ${lit(String(m.resultValue))},`,
      `    resultNum: ${lit(m.resultNum ?? null)},`,
      `    resultUnit: ${lit(m.resultUnit ?? null)},`,
      `    resultLabel: ${lit(sections.resultLabel || "")},`,
      `    verified: ${lit(m.verified)},`,
      `    headline: ${lit(sections.headline || "")},`,
      `    summary: ${lit(sections.summary || "")},`,
      `    problemDef: ${lit(sections.problemDef || "")},`,
      `    execution: ${lit(sections.execution || "")},`,
      `    result: ${lit(sections.result || "")},`,
      `    learning: ${lit(sections.learning || "")},`,
      `    contribution: ${lit(m.contribution ?? null)},`,
      `    skills: ${lit(m.skills || [])},`,
      `    capabilities: ${lit(m.capabilities || [])},`,
      `    contentStatus: ${lit(m.contentStatus)},`,
      `    coverImage: ${lit(m.coverImage ?? null)},`,
      `    images: ${lit(m.images || [])},`,
      `    approach: ${lit(sections.approach || "")},`,
      `    extensionView: ${lit(sections.extensionView || "")},`,
      `    category: ${lit(m.category || "")},`,
      `    candidConnection: ${lit(sections.candidConnection || "")},`,
      `  }`,
    ].join("\n");
  });
}

// ── 역량 생성 ────────────────────────────────────────────────
function buildCapabilities() {
  const entries = readDir(path.join(CONTENT, "capabilities"));
  return entries.map(({ meta, sections }) => {
    return [
      `  {`,
      `    name: ${lit(meta.name)},`,
      `    definition: ${lit(sections.definition || "")},`,
      `    publicDesc: ${lit(sections.publicDesc || "")},`,
      `    webSummary: ${lit(sections.webSummary || "")},`,
      `    proficiency: ${lit(meta.proficiency)},`,
      `    linkedEvdId: ${lit(meta.linkedEvdId)},`,
      `  }`,
    ].join("\n");
  });
}

// ── 내러티브 생성 ─────────────────────────────────────────────
function buildNarratives() {
  const entries = readDir(path.join(CONTENT, "narratives"));
  return entries.map(({ meta, sections }) => {
    return [
      `  {`,
      `    id: ${lit(meta.id)},`,
      `    name: ${lit(meta.name)},`,
      `    keyLine: ${lit(sections.keyLine || "")},`,
      `    webSummary: ${lit(sections.webSummary || "")},`,
      `  }`,
    ].join("\n");
  });
}

// ── TS 파일 생성 ──────────────────────────────────────────────
function generate() {
  const projects = buildProjects();
  const capabilities = buildCapabilities();
  const narratives = buildNarratives();

  const ts = `// @generated — content/ MD 파일에서 자동 생성됨. 직접 수정하지 마세요.
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
  category: string;
  candidConnection: string;
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
${projects.join(",\n")},
];

export const capabilityDetails: CapabilityDetail[] = [
${capabilities.join(",\n")},
];

export const heroNarratives: HeroNarrative[] = [
${narratives.join(",\n")},
];
`;

  fs.writeFileSync(OUT, ts, "utf-8");
  console.log(`✓ ${OUT} generated (${projects.length} projects, ${capabilities.length} capabilities, ${narratives.length} narratives)`);
}

// ── 실행 ──────────────────────────────────────────────────────
generate();

if (process.argv.includes("--watch")) {
  console.log("👀 Watching content/ for changes...");
  let timer = null;
  fs.watch(CONTENT, { recursive: true }, (_event, filename) => {
    if (!filename?.endsWith(".md")) return;
    // debounce 300ms
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(`  ↻ ${filename} changed`);
      try {
        generate();
      } catch (e) {
        console.error("  ✗ Build error:", e.message);
      }
    }, 300);
  });
}
