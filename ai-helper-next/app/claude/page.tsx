import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Terminal, Bot, Plug, Star, Lightbulb, CheckCircle, FolderOpen, Layers, FileText, Code, Wrench, Database, Palette, Users, Package, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Claude 완전 정복 - AI Helper",
  description: "Claude 도구 체계 5단계: Projects, Commands 17개, Agents 60개, Skills 37개, MCP, Plugins 10개 완벽 가이드",
};

export default function ClaudePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                AI Helper
              </Button>
            </Link>
            <div className="h-4 w-px bg-stone-300" />
            <div>
              <h1 className="text-2xl font-bold text-stone-900">Claude 완전 정복</h1>
              <p className="text-sm text-stone-500">
                기술 용어 대신 일상 용어로! 누구나 쉽게 따라하는 가이드
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        {/* 도구 체계 5단계 소개 */}
        <div className="rounded-2xl border-2 border-violet-200 bg-white p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-violet-600" />
            <h3 className="text-lg font-bold text-stone-900">Claude 도구 체계 5단계</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-stone-50 rounded-xl p-4 border-2 border-orange-400 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-xs font-bold text-orange-600 mb-1">LEVEL 0</div>
              <h4 className="font-bold text-stone-800">Projects</h4>
              <p className="text-xs text-stone-500 mt-1">작업규칙 저장</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-4 border-2 border-blue-400 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-xs font-bold text-blue-600 mb-1">LEVEL 1</div>
              <h4 className="font-bold text-stone-800">Commands</h4>
              <p className="text-xs text-stone-500 mt-1">17개 커맨드</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-4 border-2 border-emerald-400 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-xs font-bold text-emerald-600 mb-1">LEVEL 2</div>
              <h4 className="font-bold text-stone-800">Agents</h4>
              <p className="text-xs text-stone-500 mt-1">60개 에이전트</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-4 border-2 border-violet-400 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-xs font-bold text-violet-600 mb-1">LEVEL 3</div>
              <h4 className="font-bold text-stone-800">Skills</h4>
              <p className="text-xs text-stone-500 mt-1">37개 스킬</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-4 border-2 border-pink-400 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-xs font-bold text-pink-600 mb-1">별도</div>
              <h4 className="font-bold text-stone-800">MCP</h4>
              <p className="text-xs text-stone-500 mt-1">외부 연동</p>
            </div>
          </div>
        </div>

        {/* 실사용자 불만사항 */}
        <div className="rounded-2xl border-2 border-red-300 bg-white p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="text-xl font-bold text-stone-900">Claude 쓰면서 답답한 점</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <ul className="text-sm text-stone-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> &quot;짧게 써달라&quot;고 해도 또 길게 씀</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 갑자기 &quot;제가 할 수 없습니다&quot; 거부</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 무료 플랜 메시지 한도 금방 참</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <ul className="text-sm text-stone-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 이미지 생성 기능 없음</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 웹 검색 기능 없음 (Pro도)</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 토큰 비용이 다른 AI보다 높음</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects - LEVEL 0 */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-orange-100 p-2 rounded-lg">
            <FolderOpen className="w-5 h-5 text-orange-600" />
          </div>
          <h2 className="text-xl font-bold text-stone-900">Projects (LEVEL 0)</h2>
          <Badge className="bg-orange-100 text-orange-700 border-2 border-orange-400">기본</Badge>
        </div>
        <Card className="mb-8 border-2 border-orange-300 bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <p className="text-stone-600 mb-4">작업규칙을 Custom Instructions에 저장하여 반복 설명 방지</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  할 수 있는 것
                </h4>
                <ul className="text-sm text-stone-700 space-y-2">
                  <li>• 여러 대화에서 자동 기억 및 적용</li>
                  <li>• 반복 설명 방지로 토큰 절약</li>
                  <li>• 프로젝트별 맥락 유지</li>
                  <li>• 파일 업로드 후 자동 분석</li>
                  <li>• 코드베이스 전체 리팩토링</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
                <h4 className="font-bold text-orange-700 mb-2">토큰 절약 효과</h4>
                <p className="text-sm text-stone-600 mb-2">주간 보고서 작성 시:</p>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• Projects 미사용: 월 40K 토큰</li>
                  <li>• Projects 사용: 월 8K 토큰</li>
                  <li className="font-bold text-orange-700">→ 절약률: 80%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Commands - LEVEL 1 */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Terminal className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-stone-900">슬래시 커맨드 17개 (LEVEL 1)</h2>
          <Badge className="bg-blue-100 text-blue-700 border-2 border-blue-400">자동화</Badge>
        </div>
        <Card className="mb-8 border-2 border-blue-300 bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <p className="text-stone-600 mb-4">슬래시(/) 명령어로 반복 작업을 한 번에 처리</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {[
                { cmd: "/analyze", desc: "코드/시스템 분석", detail: "아키텍처 패턴, 의존성, 문제점 탐지" },
                { cmd: "/build", desc: "빌드/컴파일 실행", detail: "프로젝트 자동 빌드, 에러 감지" },
                { cmd: "/cleanup", desc: "코드 정리/포맷팅", detail: "불필요한 코드 제거, import 최적화" },
                { cmd: "/design", desc: "아키텍처 설계", detail: "다이어그램 생성, 구조 제안" },
                { cmd: "/document", desc: "문서 자동 생성", detail: "README, API 문서, JSDoc 생성" },
                { cmd: "/estimate", desc: "작업 추정/계획", detail: "시간 추정, 태스크 분해" },
                { cmd: "/explain", desc: "코드/개념 설명", detail: "복잡한 로직을 쉽게 설명" },
                { cmd: "/save-work", desc: "작업 자동 저장", detail: "일일 작업 정리, 히스토리" },
                { cmd: "/implement", desc: "기능 구현", detail: "요구사항 기반 코드 작성" },
                { cmd: "/improve", desc: "코드 개선", detail: "성능, 가독성, 보안 강화" },
                { cmd: "/index", desc: "프로젝트 인덱싱", detail: "코드베이스 구조 파악" },
                { cmd: "/load", desc: "컨텍스트 로드", detail: "파일/폴더를 컨텍스트에 로드" },
                { cmd: "/spawn", desc: "파일 생성", detail: "스캐폴딩, 보일러플레이트" },
                { cmd: "/task", desc: "복잡한 작업", detail: "멀티스텝 작업, Agent 연동" },
                { cmd: "/test", desc: "테스트 생성", detail: "단위/통합 테스트 자동 생성" },
                { cmd: "/troubleshoot", desc: "문제 해결", detail: "버그 진단, 로그 분석" },
                { cmd: "/workflow", desc: "워크플로우", detail: "CI/CD, GitHub Actions" },
              ].map((item) => (
                <div key={item.cmd} className="bg-stone-50 rounded-lg p-3 border-2 border-stone-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-blue-600 font-bold text-sm">{item.cmd}</code>
                    <span className="text-stone-700 font-medium text-sm">{item.desc}</span>
                  </div>
                  <p className="text-xs text-stone-500">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-2 border border-blue-200">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-800">일일 작업 저장: 20K → 5K 토큰/일 = <strong>75% 절약</strong></span>
            </div>
          </CardContent>
        </Card>

        {/* Agents - LEVEL 2 */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <Bot className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-stone-900">전문 AI 에이전트 60개 (LEVEL 2)</h2>
          <Badge className="bg-emerald-100 text-emerald-700 border-2 border-emerald-400">전문가</Badge>
        </div>
        <Card className="mb-8 border-2 border-emerald-300 bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <p className="text-stone-600 mb-4">복잡한 다단계 작업을 각 분야 전문가 AI가 자율적으로 실행</p>

            {/* 언어전문가 */}
            <div className="mb-6">
              <h4 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-600" />
                프로그래밍 언어 전문가 (16개)
              </h4>
              <div className="flex flex-wrap gap-2">
                {["c-pro", "cpp-pro", "csharp-pro", "dart-pro", "go-pro", "java-pro", "javascript-pro", "kotlin-pro", "php-pro", "python-pro", "ruby-pro", "rust-pro", "scala-pro", "swift-pro", "typescript-pro", "zig-pro"].map((agent) => (
                  <span key={agent} className="bg-stone-50 text-stone-700 px-3 py-1 rounded-full text-sm border-2 border-stone-300 hover:border-emerald-400 hover:bg-emerald-50 transition-all cursor-pointer">{agent}</span>
                ))}
              </div>
            </div>

            {/* 아키텍처 */}
            <div className="mb-6">
              <h4 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                아키텍처 전문가 (8개)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { name: "architect-review", desc: "아키텍처 리뷰" },
                  { name: "backend-architect", desc: "백엔드 설계" },
                  { name: "frontend-architect", desc: "프론트엔드" },
                  { name: "mobile-architect", desc: "모바일 설계" },
                  { name: "system-design", desc: "시스템 설계" },
                  { name: "api-design", desc: "API 설계" },
                  { name: "microservices-expert", desc: "마이크로서비스" },
                  { name: "database-design", desc: "DB 설계" },
                ].map((agent) => (
                  <div key={agent.name} className="bg-stone-50 rounded-lg p-2 border-2 border-stone-200 hover:border-emerald-400 hover:shadow transition-all cursor-pointer">
                    <span className="text-sm font-medium text-stone-800 block">{agent.name}</span>
                    <span className="text-xs text-stone-500">{agent.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps + 기타 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div className="bg-stone-50 rounded-xl p-4 border-2 border-stone-200 hover:border-emerald-400 hover:shadow transition-all">
                <h5 className="font-bold text-stone-800 mb-2">DevOps & 배포 (6개)</h5>
                <p className="text-sm text-stone-600">devops-engineer, ci-cd-specialist, docker-expert, kubernetes-expert, cloud-architect, infrastructure-specialist</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 border-2 border-stone-200 hover:border-emerald-400 hover:shadow transition-all">
                <h5 className="font-bold text-stone-800 mb-2">디버깅 & 테스트 (5개)</h5>
                <p className="text-sm text-stone-600">debugger, test-engineer, qa-specialist, performance-optimizer, security-auditor</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 border-2 border-stone-200 hover:border-emerald-400 hover:shadow transition-all">
                <h5 className="font-bold text-stone-800 mb-2">데이터 & AI/ML (4개)</h5>
                <p className="text-sm text-stone-600">data-engineer, ml-engineer, ai-researcher, data-scientist</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 border-2 border-stone-200 hover:border-emerald-400 hover:shadow transition-all">
                <h5 className="font-bold text-stone-800 mb-2">디자인 & UX (3개)</h5>
                <p className="text-sm text-stone-600">ux-designer, ui-designer, design-system-architect</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 border-2 border-stone-200 hover:border-emerald-400 hover:shadow transition-all">
                <h5 className="font-bold text-stone-800 mb-2">문서화 (5개)</h5>
                <p className="text-sm text-stone-600">technical-writer, api-documenter, readme-generator, changelog-writer, tutorial-creator</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 border-2 border-stone-200 hover:border-emerald-400 hover:shadow transition-all">
                <h5 className="font-bold text-stone-800 mb-2">비즈니스 (7개) + 기타 (6개)</h5>
                <p className="text-sm text-stone-600">product-manager, business-analyst, scrum-master 등 13개</p>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 flex items-center gap-2 border border-emerald-200">
              <Lightbulb className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-800">멀티스텝 작업: 전문 에이전트 사용 시 <strong>40-50% 토큰 절약</strong></span>
            </div>
          </CardContent>
        </Card>

        {/* Skills + MCP + Plugins 카드 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Skills */}
          <Card className="border-2 border-violet-300 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-violet-100 p-1.5 rounded-lg">
                  <Zap className="w-4 h-4 text-violet-600" />
                </div>
                <CardTitle className="text-lg text-violet-700">37개 스킬 (LEVEL 3)</CardTitle>
              </div>
              <CardDescription>전문 분야별 지식 자동 적용</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-stone-700 space-y-2">
                <li>• n8n 워크플로우 자동화</li>
                <li>• 디자인 작업 자동화</li>
                <li>• 문서 처리 및 분석</li>
                <li>• 마케팅 콘텐츠 생성</li>
                <li>• 개발 도구 통합</li>
              </ul>
              <div className="mt-4 p-2 bg-violet-50 rounded border border-violet-200 text-xs text-violet-700">
                설치: .claude/skills/ 폴더에 추가
              </div>
            </CardContent>
          </Card>

          {/* MCP */}
          <Card className="border-2 border-pink-300 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-pink-100 p-1.5 rounded-lg">
                  <Plug className="w-4 h-4 text-pink-600" />
                </div>
                <CardTitle className="text-lg text-pink-700">MCP 연동</CardTitle>
              </div>
              <CardDescription>외부 데이터 실시간 연결</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-stone-700 space-y-2">
                <li>• 파일 시스템 직접 읽기/쓰기</li>
                <li>• 데이터베이스 연결</li>
                <li>• Git 저장소 연동</li>
                <li>• 외부 API 연결</li>
              </ul>
              <div className="mt-4 p-2 bg-pink-50 rounded border border-pink-200 text-xs text-pink-700">
                반복 조회 시 <strong>83% 토큰 절약</strong>
              </div>
            </CardContent>
          </Card>

          {/* Plugins */}
          <Card className="border-2 border-amber-300 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-amber-100 p-1.5 rounded-lg">
                  <Package className="w-4 h-4 text-amber-600" />
                </div>
                <CardTitle className="text-lg text-amber-700">플러그인 10개</CardTitle>
              </div>
              <CardDescription>Claude Code 기능 확장</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-3">
                <p className="text-xs text-amber-700 font-medium mb-1">wshobson/claude-code-workflows</p>
                <p className="text-sm text-stone-600">backend-development, javascript-typescript, api-scaffolding, debugging-toolkit, work-history-manager</p>
              </div>
              <div>
                <p className="text-xs text-amber-700 font-medium mb-1">공식 플러그인</p>
                <p className="text-sm text-stone-600">document-skills, code-quality-hooks, document-review-toolkit 등</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 토큰 & 구독 플랜 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-yellow-300 bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-yellow-100 p-1.5 rounded-lg">
                  <Lightbulb className="w-4 h-4 text-yellow-600" />
                </div>
                <CardTitle className="text-lg text-stone-800">토큰 사용량 예시</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-200">
                    <th className="text-left py-2 font-semibold text-stone-700">작업</th>
                    <th className="text-right py-2 font-semibold text-stone-700">토큰</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { task: "5페이지 보고서", tokens: "8K-10K" },
                    { task: "10슬라이드 자료", tokens: "8K-12K" },
                    { task: "간단한 웹페이지", tokens: "12K-20K" },
                    { task: "50페이지 문서검토", tokens: "15K-25K" },
                    { task: "맞춤형 이메일", tokens: "3K-5K" },
                  ].map((item, i) => (
                    <tr key={item.task} className={i % 2 === 0 ? "bg-stone-50" : ""}>
                      <td className="py-2 text-stone-600">{item.task}</td>
                      <td className="py-2 text-right font-medium text-stone-800">{item.tokens}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-300 bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1.5 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <CardTitle className="text-lg text-stone-800">구독 플랜 비교</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-200">
                    <th className="text-left py-2 font-semibold text-stone-700">플랜</th>
                    <th className="text-center py-2 font-semibold text-stone-700">일일 토큰</th>
                    <th className="text-center py-2 font-semibold text-stone-700">대화/일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-stone-50">
                    <td className="py-2 text-stone-600">Free</td>
                    <td className="py-2 text-center text-stone-600">50K-100K</td>
                    <td className="py-2 text-center text-stone-600">10-20개</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-orange-600">Pro (~3만원)</td>
                    <td className="py-2 text-center text-stone-600">250K-500K</td>
                    <td className="py-2 text-center text-stone-600">50-100개</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="py-2 font-medium text-violet-600">Max (~14만원)</td>
                    <td className="py-2 text-center text-stone-600">1.25M-2.5M</td>
                    <td className="py-2 text-center text-stone-600">250-500개</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-stone-200 bg-white">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-stone-500">
          <p>
            Made with <span className="text-violet-500">♥</span> by{" "}
            <a href="https://github.com/Giwoong-ryu" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-violet-600 transition-colors">
              Giwoong Ryu
            </a>
          </p>
          <p className="mt-2">
            상세 가이드:{" "}
            <a href="https://giwoong-ryu.github.io/claude-tips/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
              claude-tips
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
