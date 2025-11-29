import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Terminal, Bot, Plug, Star, Lightbulb, CheckCircle, FolderOpen, Layers, FileText, Code, Wrench, Database, Palette, Users, Package } from "lucide-react";

export const metadata = {
  title: "Claude 완전 정복 - AI Helper",
  description: "Claude 도구 체계 5단계: Projects, Commands 17개, Agents 60개, Skills 37개, MCP, Plugins 10개 완벽 가이드",
};

export default function ClaudePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm" className="border-slate-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                AI Helper
              </Button>
            </Link>
            <div className="h-6 w-px bg-slate-300" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Claude 완전 정복</h1>
              <p className="text-sm text-slate-600">
                기술 용어 대신 일상 용어로! 누구나 쉽게 따라하는 가이드
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        {/* 도구 체계 5단계 소개 */}
        <div className="rounded-xl bg-slate-900 text-white p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-orange-400" />
            <h3 className="font-bold text-lg">Claude 도구 체계 5단계</h3>
          </div>
          <div className="grid md:grid-cols-5 gap-3">
            <div className="bg-orange-500 rounded-lg p-3 text-center">
              <div className="text-xs font-bold text-orange-100 mb-1">LEVEL 0</div>
              <h4 className="font-bold">Projects</h4>
              <p className="text-xs text-orange-100 mt-1">작업규칙 저장</p>
            </div>
            <div className="bg-blue-600 rounded-lg p-3 text-center">
              <div className="text-xs font-bold text-blue-100 mb-1">LEVEL 1</div>
              <h4 className="font-bold">Commands</h4>
              <p className="text-xs text-blue-100 mt-1">17개 커맨드</p>
            </div>
            <div className="bg-emerald-600 rounded-lg p-3 text-center">
              <div className="text-xs font-bold text-emerald-100 mb-1">LEVEL 2</div>
              <h4 className="font-bold">Agents</h4>
              <p className="text-xs text-emerald-100 mt-1">60개 에이전트</p>
            </div>
            <div className="bg-purple-600 rounded-lg p-3 text-center">
              <div className="text-xs font-bold text-purple-100 mb-1">LEVEL 3</div>
              <h4 className="font-bold">Skills</h4>
              <p className="text-xs text-purple-100 mt-1">37개 스킬</p>
            </div>
            <div className="bg-pink-600 rounded-lg p-3 text-center">
              <div className="text-xs font-bold text-pink-100 mb-1">별도</div>
              <h4 className="font-bold">MCP</h4>
              <p className="text-xs text-pink-100 mt-1">외부 연동</p>
            </div>
          </div>
        </div>

        {/* Projects - LEVEL 0 */}
        <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-orange-500">
          <div className="bg-orange-500 px-6 py-4">
            <div className="flex items-center gap-3">
              <FolderOpen className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">Projects (LEVEL 0)</h2>
              <Badge className="ml-auto bg-orange-700 text-white">기본</Badge>
            </div>
            <p className="text-orange-100 mt-1">작업규칙을 Custom Instructions에 저장하여 반복 설명 방지</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  할 수 있는 것
                </h4>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> 여러 대화에서 자동 기억 및 적용</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> 반복 설명 방지로 토큰 절약</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> 프로젝트별 맥락 유지</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> 파일 업로드 후 자동 분석</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> 코드베이스 전체 리팩토링</li>
                </ul>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-2">토큰 절약 효과</h4>
                <p className="text-orange-700 mb-2">주간 보고서 작성 시:</p>
                <ul className="text-orange-700 space-y-1">
                  <li>• Projects 미사용: 월 40K 토큰</li>
                  <li>• Projects 사용: 월 8K 토큰</li>
                  <li className="font-bold text-orange-900">→ 절약률: 80%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Commands - LEVEL 1 */}
        <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600">
          <div className="bg-blue-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">슬래시 커맨드 17개 (LEVEL 1)</h2>
              <Badge className="ml-auto bg-blue-800 text-white">자동화</Badge>
            </div>
            <p className="text-blue-100 mt-1">슬래시(/) 명령어로 반복 작업을 한 번에 처리</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { cmd: "/analyze", desc: "코드/시스템 분석", detail: "아키텍처 패턴, 의존성, 잠재적 문제점 탐지" },
                { cmd: "/build", desc: "빌드/컴파일 실행", detail: "프로젝트 자동 빌드, 에러 자동 감지 및 수정 제안" },
                { cmd: "/cleanup", desc: "코드 정리/포맷팅", detail: "불필요한 코드 제거, import 최적화, Prettier/ESLint" },
                { cmd: "/design", desc: "아키텍처/시스템 설계", detail: "아키텍처 다이어그램 생성, 컴포넌트 구조 제안" },
                { cmd: "/document", desc: "문서 자동 생성", detail: "README, API 문서, JSDoc/Docstrings 자동 생성" },
                { cmd: "/estimate", desc: "작업 추정/계획", detail: "작업 시간 추정, 태스크 분해, 우선순위 제안" },
                { cmd: "/explain", desc: "코드/개념 설명", detail: "복잡한 코드 로직을 쉬운 언어로 설명" },
                { cmd: "/save-work", desc: "작업 내용 자동 저장", detail: "하루 작업 내용 자동 정리, 날짜별 히스토리" },
                { cmd: "/implement", desc: "기능 구현", detail: "요구사항 기반 코드 작성, 베스트 프랙티스 적용" },
                { cmd: "/improve", desc: "코드 개선 제안", detail: "성능 최적화, 가독성 향상, 보안 강화" },
                { cmd: "/index", desc: "프로젝트 인덱싱", detail: "코드베이스 전체 구조 파악, 파일 관계 맵핑" },
                { cmd: "/load", desc: "컨텍스트 로드", detail: "특정 파일/폴더를 작업 컨텍스트에 로드" },
                { cmd: "/spawn", desc: "파일/컴포넌트 생성", detail: "새 파일 스캐폴딩, 보일러플레이트 생성" },
                { cmd: "/task", desc: "복잡한 작업 실행", detail: "멀티스텝 작업 자동 수행, Agent 시스템 연동" },
                { cmd: "/test", desc: "테스트 생성/실행", detail: "단위/통합 테스트 자동 생성, 커버리지 개선" },
                { cmd: "/troubleshoot", desc: "문제 진단/해결", detail: "버그 자동 진단, 로그 분석, 에러 트레이스 추적" },
                { cmd: "/workflow", desc: "워크플로우 자동화", detail: "CI/CD 파이프라인, GitHub Actions 설정" },
              ].map((item) => (
                <div key={item.cmd} className="bg-slate-50 rounded-lg p-3 border border-slate-200 hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-blue-700 font-bold bg-blue-100 px-2 py-0.5 rounded text-sm">{item.cmd}</code>
                    <span className="font-semibold text-slate-800">{item.desc}</span>
                  </div>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <p className="text-blue-800 font-medium">
                <Lightbulb className="w-4 h-4 inline mr-2" />
                일일 작업 저장: 20K → 5K 토큰/일 = <strong>75% 절약</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Agents - LEVEL 2 */}
        <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-emerald-600">
          <div className="bg-emerald-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">전문 AI 에이전트 60개 (LEVEL 2)</h2>
              <Badge className="ml-auto bg-emerald-800 text-white">전문가</Badge>
            </div>
            <p className="text-emerald-100 mt-1">복잡한 다단계 작업을 각 분야 전문가 AI가 자율적으로 실행</p>
          </div>
          <div className="p-6 space-y-6">
            {/* 언어전문가 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base">
                <Code className="w-5 h-5 text-emerald-600" />
                프로그래밍 언어 전문가 (16개)
              </h4>
              <div className="flex flex-wrap gap-2">
                {["c-pro", "cpp-pro", "csharp-pro", "dart-pro", "go-pro", "java-pro", "javascript-pro", "kotlin-pro", "php-pro", "python-pro", "ruby-pro", "rust-pro", "scala-pro", "swift-pro", "typescript-pro", "zig-pro"].map((agent) => (
                  <span key={agent} className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full text-sm font-medium border border-emerald-300">{agent}</span>
                ))}
              </div>
            </div>

            {/* 아키텍처 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base">
                <Layers className="w-5 h-5 text-emerald-600" />
                아키텍처 전문가 (8개)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { name: "architect-review", desc: "아키텍처 리뷰" },
                  { name: "backend-architect", desc: "백엔드 설계" },
                  { name: "frontend-architect", desc: "프론트엔드 설계" },
                  { name: "mobile-architect", desc: "모바일 설계" },
                  { name: "system-design", desc: "시스템 설계" },
                  { name: "api-design", desc: "API 설계" },
                  { name: "microservices-expert", desc: "마이크로서비스" },
                  { name: "database-design", desc: "데이터베이스 설계" },
                ].map((agent) => (
                  <div key={agent.name} className="bg-slate-50 border border-slate-200 rounded-lg p-2">
                    <span className="text-sm font-semibold text-slate-800 block">{agent.name}</span>
                    <span className="text-xs text-slate-500">{agent.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base">
                <Wrench className="w-5 h-5 text-emerald-600" />
                DevOps & 배포 전문가 (6개)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  { name: "devops-engineer", desc: "DevOps 엔지니어링" },
                  { name: "ci-cd-specialist", desc: "CI/CD 파이프라인" },
                  { name: "docker-expert", desc: "Docker 컨테이너" },
                  { name: "kubernetes-expert", desc: "Kubernetes" },
                  { name: "cloud-architect", desc: "클라우드 아키텍처" },
                  { name: "infrastructure-specialist", desc: "인프라 전문가" },
                ].map((agent) => (
                  <div key={agent.name} className="bg-slate-50 border border-slate-200 rounded-lg p-2">
                    <span className="text-sm font-semibold text-slate-800 block">{agent.name}</span>
                    <span className="text-xs text-slate-500">{agent.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 기타 에이전트 요약 */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h5 className="font-bold text-slate-800 mb-2">디버깅 & 테스트 (5개)</h5>
                <p className="text-sm text-slate-600">debugger, test-engineer, qa-specialist, performance-optimizer, security-auditor</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h5 className="font-bold text-slate-800 mb-2">데이터 & AI/ML (4개)</h5>
                <p className="text-sm text-slate-600">data-engineer, ml-engineer, ai-researcher, data-scientist</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h5 className="font-bold text-slate-800 mb-2">디자인 & UX (3개)</h5>
                <p className="text-sm text-slate-600">ux-designer, ui-designer, design-system-architect</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h5 className="font-bold text-slate-800 mb-2">문서화 (5개)</h5>
                <p className="text-sm text-slate-600">technical-writer, api-documenter, readme-generator, changelog-writer, tutorial-creator</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h5 className="font-bold text-slate-800 mb-2">코드 품질 (4개)</h5>
                <p className="text-sm text-slate-600">code-reviewer, refactoring-expert, code-standards, best-practices</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h5 className="font-bold text-slate-800 mb-2">비즈니스 (7개)</h5>
                <p className="text-sm text-slate-600">product-manager, business-analyst, scrum-master, project-planner 등</p>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-lg">
              <p className="text-emerald-800 font-medium">
                <Lightbulb className="w-4 h-4 inline mr-2" />
                멀티스텝 작업: 전문 에이전트 사용 시 <strong>40-50% 토큰 절약</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Skills - LEVEL 3 */}
        <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-purple-600">
          <div className="bg-purple-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">37개 스킬 패키지 (LEVEL 3)</h2>
              <Badge className="ml-auto bg-purple-800 text-white">전문지식</Badge>
            </div>
            <p className="text-purple-100 mt-1">전문 분야별 지식이 자동으로 적용되는 AI 자동화 스킬</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-3">스킬 카테고리</h4>
                <ul className="space-y-2">
                  {[
                    { name: "n8n 워크플로우 자동화", desc: "노코드 자동화 워크플로우 설계" },
                    { name: "디자인 작업 자동화", desc: "UI/UX 디자인, 프로토타입 생성" },
                    { name: "문서 처리 및 분석", desc: "PDF, Excel, Word 자동 처리" },
                    { name: "마케팅 콘텐츠 생성", desc: "광고 카피, SNS, 이메일 마케팅" },
                    { name: "개발 도구 통합", desc: "IDE 연동, 빌드 시스템, 테스트 자동화" },
                  ].map((skill) => (
                    <li key={skill.name} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                      <span className="font-semibold text-slate-800">{skill.name}</span>
                      <p className="text-sm text-slate-600">{skill.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Progressive Disclosure 방식</h4>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 mb-4">
                  <p className="text-slate-700 mb-3">필요한 정보만 단계적으로 로드하여 토큰 효율적 사용</p>
                  <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
                    <li>스킬 이름만 로드 (최소 토큰)</li>
                    <li>필요 시 상세 설명 로드</li>
                    <li>실행 시에만 전체 컨텍스트 로드</li>
                  </ol>
                </div>
                <div className="bg-slate-800 text-white rounded-lg p-4">
                  <h5 className="font-bold mb-2">설치 방법</h5>
                  <code className="text-purple-300 text-sm">.claude/skills/ 폴더에 스킬 파일 추가</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MCP */}
        <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-pink-600">
          <div className="bg-pink-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <Plug className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">MCP (Model Context Protocol)</h2>
              <Badge className="ml-auto bg-pink-800 text-white">연동</Badge>
            </div>
            <p className="text-pink-100 mt-1">파일, 데이터베이스, API 등 외부 데이터를 실시간으로 직접 읽고 쓸 수 있게 연결</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-3">MCP로 연결 가능한 것</h4>
                <div className="space-y-2">
                  {[
                    { icon: FolderOpen, name: "파일 시스템", desc: "로컬 파일 직접 읽기/쓰기" },
                    { icon: Database, name: "데이터베이스", desc: "PostgreSQL, MySQL, MongoDB 등" },
                    { icon: Code, name: "Git 저장소", desc: "GitHub, GitLab 직접 연동" },
                    { icon: Plug, name: "외부 API", desc: "REST API, GraphQL 연동" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-3">
                      <item.icon className="w-5 h-5 text-pink-600" />
                      <div>
                        <span className="font-semibold text-slate-800">{item.name}</span>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3">설치 방법</h4>
                <div className="bg-slate-800 text-white rounded-lg p-4 mb-4 space-y-3">
                  <div>
                    <p className="text-pink-300 text-sm mb-1">1. MCP 서버 설치</p>
                    <code className="text-xs text-slate-300">npm install @modelcontextprotocol/server-filesystem</code>
                  </div>
                  <div>
                    <p className="text-pink-300 text-sm mb-1">2. Claude 설정 파일에 추가</p>
                    <code className="text-xs text-slate-300">claude_desktop_config.json 수정</code>
                  </div>
                  <div>
                    <p className="text-pink-300 text-sm mb-1">3. Claude 재시작</p>
                    <p className="text-xs text-slate-400">이후 파일 복사붙여넣기 없이 직접 접근 가능</p>
                  </div>
                </div>
                <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-4">
                  <h5 className="font-bold text-pink-800 mb-2">토큰 절약 효과</h5>
                  <ul className="text-sm text-pink-700 space-y-1">
                    <li>• 5MB PDF 읽기: 25K-30K 토큰</li>
                    <li>• 500줄 파일: 3K-5K 토큰</li>
                    <li className="font-bold">• 주간 반복 조회: 83% 절약</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plugins 10개 */}
        <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-amber-500">
          <div className="bg-amber-500 px-6 py-4">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">설치된 플러그인 10개</h2>
              <Badge className="ml-auto bg-amber-700 text-white">확장</Badge>
            </div>
            <p className="text-amber-100 mt-1">Claude Code의 기능을 확장하는 공식/커뮤니티 플러그인</p>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                wshobson/claude-code-workflows (5개)
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: "backend-development", desc: "API 설계, GraphQL, 마이크로서비스 패턴" },
                  { name: "javascript-typescript", desc: "ES6+, Node.js, React, 고급 TypeScript" },
                  { name: "api-scaffolding", desc: "REST/GraphQL 스캐폴딩, FastAPI 템플릿" },
                  { name: "debugging-toolkit", desc: "인터랙티브 디버깅, DX 최적화" },
                  { name: "work-history-manager", desc: "작업 히스토리 자동 관리, 변경사항 추적" },
                ].map((plugin) => (
                  <div key={plugin.name} className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <h5 className="font-semibold text-slate-800 mb-1">{plugin.name}</h5>
                    <p className="text-sm text-slate-600">{plugin.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-500" />
                기타 공식 플러그인 (5개)
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: "dotclaude/business-document-suite", desc: "비즈니스 보고서, 프레젠테이션, 템플릿" },
                  { name: "anthropic/document-skills", desc: "Excel, Word, PowerPoint, PDF 처리" },
                  { name: "fcakyon/code-quality-hooks", desc: "8개 언어 자동 포맷팅" },
                  { name: "anthropic/document-review-toolkit", desc: "에이전트 기반 자동 문서 리뷰" },
                  { name: "anthropic/work-save-commands", desc: "작업 저장/정리/히스토리 자동화" },
                ].map((plugin) => (
                  <div key={plugin.name} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <h5 className="font-semibold text-slate-800 mb-1 text-sm">{plugin.name}</h5>
                    <p className="text-sm text-slate-600">{plugin.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 토큰 사용량 & 구독 플랜 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* 토큰 사용량 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-slate-800 px-6 py-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                실제 토큰 사용량 예시
              </h2>
            </div>
            <div className="p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-2 font-bold text-slate-800">작업 유형</th>
                    <th className="text-right py-2 font-bold text-slate-800">토큰</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { task: "5페이지 보고서", tokens: "8K-10K" },
                    { task: "10슬라이드 자료", tokens: "8K-12K" },
                    { task: "간단한 웹페이지", tokens: "12K-20K" },
                    { task: "50페이지 문서검토", tokens: "15K-25K" },
                    { task: "맞춤형 이메일", tokens: "3K-5K" },
                    { task: "데이터 분석+차트", tokens: "10K-15K" },
                  ].map((item, i) => (
                    <tr key={item.task} className={i % 2 === 0 ? "bg-slate-50" : ""}>
                      <td className="py-2 text-slate-700">{item.task}</td>
                      <td className="py-2 text-right font-medium text-slate-900">{item.tokens}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 구독 플랜 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-slate-800 px-6 py-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                구독 플랜 비교
              </h2>
            </div>
            <div className="p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-2 font-bold text-slate-800">플랜</th>
                    <th className="text-center py-2 font-bold text-slate-800">일일 토큰</th>
                    <th className="text-center py-2 font-bold text-slate-800">대화/일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-50">
                    <td className="py-2 font-medium text-slate-700">Free (무료)</td>
                    <td className="py-2 text-center text-slate-600">50K-100K</td>
                    <td className="py-2 text-center text-slate-600">10-20개</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-orange-600">Pro (~3만원)</td>
                    <td className="py-2 text-center text-slate-600">250K-500K</td>
                    <td className="py-2 text-center text-slate-600">50-100개</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-2 font-medium text-purple-600">Max (~14만원)</td>
                    <td className="py-2 text-center text-slate-600">1.25M-2.5M</td>
                    <td className="py-2 text-center text-slate-600">250-500개</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-slate-600">
          <p>
            Made with <span className="text-purple-500">♥</span> by{" "}
            <a href="https://github.com/Giwoong-ryu" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 hover:text-purple-600 transition-colors">
              Giwoong Ryu
            </a>
          </p>
          <p className="mt-2">
            상세 가이드:{" "}
            <a href="https://giwoong-ryu.github.io/claude-tips/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-medium hover:underline">
              claude-tips
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
