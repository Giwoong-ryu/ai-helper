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
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                AI Helper
              </Button>
            </Link>
            <div className="h-4 w-px bg-border" />
            <div>
              <h1 className="text-2xl font-bold">Claude 완전 정복</h1>
              <p className="text-sm text-muted-foreground">
                기술 용어 대신 일상 용어로! 누구나 쉽게 따라하는 가이드
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        {/* 도구 체계 5단계 소개 */}
        <div className="rounded-xl border bg-gradient-to-r from-orange-50 to-amber-50 p-5 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-slate-900">Claude 도구 체계 5단계</h3>
          </div>
          <div className="grid md:grid-cols-5 gap-3">
            <div className="bg-white rounded-lg p-3 border border-orange-100 text-center">
              <div className="text-xs text-orange-600 font-medium mb-1">LEVEL 0</div>
              <h4 className="font-semibold text-slate-800">Projects</h4>
              <p className="text-xs text-slate-500 mt-1">작업규칙 저장</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-100 text-center">
              <div className="text-xs text-blue-600 font-medium mb-1">LEVEL 1</div>
              <h4 className="font-semibold text-slate-800">Commands</h4>
              <p className="text-xs text-slate-500 mt-1">17개 커맨드</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-100 text-center">
              <div className="text-xs text-green-600 font-medium mb-1">LEVEL 2</div>
              <h4 className="font-semibold text-slate-800">Agents</h4>
              <p className="text-xs text-slate-500 mt-1">60개 에이전트</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-100 text-center">
              <div className="text-xs text-purple-600 font-medium mb-1">LEVEL 3</div>
              <h4 className="font-semibold text-slate-800">Skills</h4>
              <p className="text-xs text-slate-500 mt-1">37개 스킬</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-100 text-center">
              <div className="text-xs text-pink-600 font-medium mb-1">별도</div>
              <h4 className="font-semibold text-slate-800">MCP</h4>
              <p className="text-xs text-slate-500 mt-1">외부 연동</p>
            </div>
          </div>
        </div>

        {/* Projects - LEVEL 0 */}
        <Card className="mb-8 border-orange-200 bg-orange-50/30">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <FolderOpen className="w-6 h-6 text-orange-500" />
              <CardTitle className="text-xl">Projects (LEVEL 0)</CardTitle>
              <Badge className="ml-auto bg-orange-500 text-white">기본</Badge>
            </div>
            <CardDescription className="text-base">작업규칙을 Custom Instructions에 저장하여 반복 설명 방지</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  할 수 있는 것
                </h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• 여러 대화에서 자동 기억 및 적용</li>
                  <li>• 반복 설명 방지로 토큰 절약</li>
                  <li>• 프로젝트별 맥락 유지</li>
                  <li>• 파일 업로드 후 자동 분석</li>
                  <li>• 코드베이스 전체 리팩토링</li>
                </ul>
              </div>
              <div className="bg-orange-100/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">토큰 절약 효과</h4>
                <p className="text-sm text-orange-700 mb-2">
                  주간 보고서 작성 시:
                </p>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Projects 미사용: 월 40K 토큰</li>
                  <li>• Projects 사용: 월 8K 토큰</li>
                  <li className="font-bold">• 절약률: 80%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Commands - LEVEL 1 상세 */}
        <Card className="mb-8 border-blue-200 bg-blue-50/30">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Terminal className="w-6 h-6 text-blue-500" />
              <CardTitle className="text-xl">슬래시 커맨드 17개 (LEVEL 1)</CardTitle>
              <Badge className="ml-auto bg-blue-500 text-white">자동화</Badge>
            </div>
            <CardDescription className="text-base">슬래시(/) 명령어로 반복 작업을 한 번에 처리</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { cmd: "/analyze", desc: "코드/시스템 분석", detail: "코드베이스 전체를 분석하여 아키텍처 패턴, 의존성, 잠재적 문제점 탐지" },
                { cmd: "/build", desc: "빌드/컴파일 실행", detail: "프로젝트 자동 빌드, 에러 자동 감지 및 수정 제안, npm/cargo build 자동 감지" },
                { cmd: "/cleanup", desc: "코드 정리/포맷팅", detail: "불필요한 코드 제거, 자동 포맷팅, import 최적화, 주석 정리, Prettier/ESLint 실행" },
                { cmd: "/design", desc: "아키텍처/시스템 설계", detail: "새 기능 또는 시스템 설계. 아키텍처 다이어그램 생성, 컴포넌트 구조 제안" },
                { cmd: "/document", desc: "문서 자동 생성", detail: "README, API 문서, JSDoc/Docstrings 자동 생성, 사용 예제 포함" },
                { cmd: "/estimate", desc: "작업 추정/계획", detail: "작업 시간 추정, 태스크 분해, 우선순위 제안, 스토리 포인트 및 리스크 분석" },
                { cmd: "/explain", desc: "코드/개념 설명", detail: "복잡한 코드 로직을 쉬운 언어로 설명, 알고리즘 및 디자인 패턴 분석" },
                { cmd: "/save-work", desc: "작업 내용 자동 저장", detail: "하루 작업 내용 자동 정리 및 요약, 날짜별 히스토리 관리" },
                { cmd: "/implement", desc: "기능 구현", detail: "요구사항 기반 코드 작성, 베스트 프랙티스 적용, 타입 안전성 보장, 에러 핸들링 포함" },
                { cmd: "/improve", desc: "코드 개선 제안", detail: "성능 최적화, 가독성 향상, 보안 강화, SOLID 원칙 적용" },
                { cmd: "/index", desc: "프로젝트 인덱싱", detail: "코드베이스 전체 구조 파악, 파일 관계 맵핑, 주요 진입점 파악" },
                { cmd: "/load", desc: "컨텍스트 로드", detail: "특정 파일/폴더를 작업 컨텍스트에 로드, 관련 파일 자동 감지" },
                { cmd: "/spawn", desc: "파일/컴포넌트 생성", detail: "새 파일/컴포넌트 스캐폴딩, 보일러플레이트 생성, 템플릿 기반 코드 생성" },
                { cmd: "/task", desc: "복잡한 작업 실행", detail: "복잡한 멀티스텝 작업 자동 수행, Agent 시스템과 연동" },
                { cmd: "/test", desc: "테스트 생성/실행", detail: "단위/통합 테스트 자동 생성, Jest/Pytest 자동 감지, 테스트 커버리지 개선 제안" },
                { cmd: "/troubleshoot", desc: "문제 진단/해결", detail: "버그 자동 진단, 로그 분석, 에러 트레이스 추적, 즉시 수정 적용" },
                { cmd: "/workflow", desc: "워크플로우 자동화", detail: "CI/CD 파이프라인 생성, GitHub Actions 설정, 배포 자동화, 전체 개발 워크플로우" },
              ].map((item) => (
                <div key={item.cmd} className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center gap-3 mb-2">
                    <code className="text-blue-600 font-bold text-base bg-blue-50 px-2 py-1 rounded">{item.cmd}</code>
                    <span className="font-medium text-slate-700">{item.desc}</span>
                  </div>
                  <p className="text-sm text-slate-500 ml-1">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-100/50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                토큰 절약 효과
              </h4>
              <p className="text-sm text-blue-700">
                일일 작업 저장 시: Commands 미사용 20K 토큰/일 → Commands 사용 5K 토큰/일 = <strong>75% 절약</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Agents - LEVEL 2 상세 */}
        <Card className="mb-8 border-green-200 bg-green-50/30">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Bot className="w-6 h-6 text-green-500" />
              <CardTitle className="text-xl">전문 AI 에이전트 60개 (LEVEL 2)</CardTitle>
              <Badge className="ml-auto bg-green-500 text-white">전문가</Badge>
            </div>
            <CardDescription className="text-base">복잡한 다단계 작업을 각 분야 전문가 AI가 자율적으로 실행</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* 언어전문가 */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  프로그래밍 언어 전문가 (16개)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                  {["c-pro", "cpp-pro", "csharp-pro", "dart-pro", "go-pro", "java-pro", "javascript-pro", "kotlin-pro", "php-pro", "python-pro", "ruby-pro", "rust-pro", "scala-pro", "swift-pro", "typescript-pro", "zig-pro"].map((agent) => (
                    <span key={agent} className="bg-white px-3 py-2 rounded text-sm text-slate-600 border border-green-200 text-center">{agent}</span>
                  ))}
                </div>
              </div>

              {/* 아키텍처 */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
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
                    <div key={agent.name} className="bg-white px-3 py-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-slate-700">{agent.name}</span>
                      <p className="text-xs text-slate-500">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DevOps */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  DevOps & 배포 전문가 (6개)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    { name: "devops-engineer", desc: "DevOps 엔지니어링" },
                    { name: "ci-cd-specialist", desc: "CI/CD 파이프라인" },
                    { name: "docker-expert", desc: "Docker 컨테이너" },
                    { name: "kubernetes-expert", desc: "Kubernetes 오케스트레이션" },
                    { name: "cloud-architect", desc: "클라우드 아키텍처" },
                    { name: "infrastructure-specialist", desc: "인프라 전문가" },
                  ].map((agent) => (
                    <div key={agent.name} className="bg-white px-3 py-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-slate-700">{agent.name}</span>
                      <p className="text-xs text-slate-500">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 디버깅/테스트 */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  디버깅 & 테스트 전문가 (5개)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {[
                    { name: "debugger", desc: "버그 추적/수정" },
                    { name: "test-engineer", desc: "테스트 설계" },
                    { name: "qa-specialist", desc: "품질 보증" },
                    { name: "performance-optimizer", desc: "성능 최적화" },
                    { name: "security-auditor", desc: "보안 감사" },
                  ].map((agent) => (
                    <div key={agent.name} className="bg-white px-3 py-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-slate-700">{agent.name}</span>
                      <p className="text-xs text-slate-500">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 데이터/AI */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  데이터 & AI/ML 전문가 (4개)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { name: "data-engineer", desc: "데이터 파이프라인" },
                    { name: "ml-engineer", desc: "머신러닝 엔지니어" },
                    { name: "ai-researcher", desc: "AI 연구" },
                    { name: "data-scientist", desc: "데이터 사이언스" },
                  ].map((agent) => (
                    <div key={agent.name} className="bg-white px-3 py-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-slate-700">{agent.name}</span>
                      <p className="text-xs text-slate-500">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 디자인/UX */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  디자인 & UX 전문가 (3개)
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { name: "ux-designer", desc: "사용자 경험 설계" },
                    { name: "ui-designer", desc: "UI 디자인" },
                    { name: "design-system-architect", desc: "디자인 시스템" },
                  ].map((agent) => (
                    <div key={agent.name} className="bg-white px-3 py-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-slate-700">{agent.name}</span>
                      <p className="text-xs text-slate-500">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 문서화 */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  문서화 전문가 (5개)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {[
                    { name: "technical-writer", desc: "기술 문서 작성" },
                    { name: "api-documenter", desc: "API 문서화" },
                    { name: "readme-generator", desc: "README 생성" },
                    { name: "changelog-writer", desc: "변경 로그 작성" },
                    { name: "tutorial-creator", desc: "튜토리얼 제작" },
                  ].map((agent) => (
                    <div key={agent.name} className="bg-white px-3 py-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-slate-700">{agent.name}</span>
                      <p className="text-xs text-slate-500">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 코드 품질 */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  코드 품질 전문가 (4개)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { name: "code-reviewer", desc: "코드 리뷰" },
                    { name: "refactoring-expert", desc: "리팩토링" },
                    { name: "code-standards", desc: "코드 표준" },
                    { name: "best-practices", desc: "베스트 프랙티스" },
                  ].map((agent) => (
                    <div key={agent.name} className="bg-white px-3 py-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-slate-700">{agent.name}</span>
                      <p className="text-xs text-slate-500">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 비즈니스 */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  비즈니스 전문가 (7개)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { name: "product-manager", desc: "제품 관리" },
                    { name: "business-analyst", desc: "비즈니스 분석" },
                    { name: "requirements-engineer", desc: "요구사항 분석" },
                    { name: "scrum-master", desc: "스크럼 마스터" },
                    { name: "project-planner", desc: "프로젝트 계획" },
                    { name: "stakeholder-communicator", desc: "이해관계자 소통" },
                    { name: "business-case-analyst", desc: "비즈니스 케이스" },
                  ].map((agent) => (
                    <div key={agent.name} className="bg-white px-3 py-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-slate-700">{agent.name}</span>
                      <p className="text-xs text-slate-500">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 기타 */}
              <div>
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  기타 전문가 (6개)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    { name: "general-assistant", desc: "범용 어시스턴트" },
                    { name: "problem-solver", desc: "문제 해결" },
                    { name: "research-assistant", desc: "리서치 보조" },
                    { name: "integration-specialist", desc: "시스템 통합" },
                    { name: "migration-expert", desc: "마이그레이션" },
                    { name: "legacy-modernizer", desc: "레거시 현대화" },
                  ].map((agent) => (
                    <div key={agent.name} className="bg-white px-3 py-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-slate-700">{agent.name}</span>
                      <p className="text-xs text-slate-500">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-100/50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                토큰 절약 효과
              </h4>
              <p className="text-sm text-green-700">
                멀티스텝 작업 시: 전문 에이전트가 최적화된 방식으로 처리 = <strong>40-50% 토큰 절약</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills - LEVEL 3 */}
        <Card className="mb-8 border-purple-200 bg-purple-50/30">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-purple-500" />
              <CardTitle className="text-xl">37개 스킬 패키지 (LEVEL 3)</CardTitle>
              <Badge className="ml-auto bg-purple-500 text-white">전문지식</Badge>
            </div>
            <CardDescription className="text-base">전문 분야별 지식이 자동으로 적용되는 AI 자동화 스킬</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">스킬 카테고리</h4>
                <ul className="space-y-3">
                  <li className="bg-white rounded-lg p-3 border border-purple-100">
                    <span className="font-medium text-slate-700">n8n 워크플로우 자동화</span>
                    <p className="text-sm text-slate-500">노코드 자동화 워크플로우 설계 및 구현</p>
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-purple-100">
                    <span className="font-medium text-slate-700">디자인 작업 자동화</span>
                    <p className="text-sm text-slate-500">UI/UX 디자인, 프로토타입 생성</p>
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-purple-100">
                    <span className="font-medium text-slate-700">문서 처리 및 분석</span>
                    <p className="text-sm text-slate-500">PDF, Excel, Word 문서 자동 처리</p>
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-purple-100">
                    <span className="font-medium text-slate-700">마케팅 콘텐츠 생성</span>
                    <p className="text-sm text-slate-500">광고 카피, SNS 콘텐츠, 이메일 마케팅</p>
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-purple-100">
                    <span className="font-medium text-slate-700">개발 도구 통합</span>
                    <p className="text-sm text-slate-500">IDE 연동, 빌드 시스템, 테스트 자동화</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Progressive Disclosure 방식</h4>
                <div className="bg-white rounded-lg p-4 border border-purple-100 mb-4">
                  <p className="text-sm text-slate-600 mb-3">
                    필요한 정보만 단계적으로 로드하여 토큰을 효율적으로 사용
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>1. 스킬 이름만 로드 (최소 토큰)</li>
                    <li>2. 필요 시 상세 설명 로드</li>
                    <li>3. 실행 시에만 전체 컨텍스트 로드</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-100/50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">설치 방법</h4>
                  <code className="text-sm text-purple-700 bg-purple-200/50 px-2 py-1 rounded block">
                    .claude/skills/ 폴더에 스킬 파일 추가
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MCP 상세 */}
        <Card className="mb-8 border-pink-200 bg-pink-50/30">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Plug className="w-6 h-6 text-pink-500" />
              <CardTitle className="text-xl">MCP (Model Context Protocol)</CardTitle>
              <Badge className="ml-auto bg-pink-500 text-white">연동</Badge>
            </div>
            <CardDescription className="text-base">파일, 데이터베이스, API 등 외부 데이터를 실시간으로 직접 읽고 쓸 수 있게 연결</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-pink-700 mb-3">MCP로 연결 가능한 것</h4>
                <ul className="space-y-2">
                  <li className="bg-white rounded-lg p-3 border border-pink-100 flex items-center gap-3">
                    <FolderOpen className="w-5 h-5 text-pink-500" />
                    <div>
                      <span className="font-medium text-slate-700">파일 시스템</span>
                      <p className="text-xs text-slate-500">로컬 파일 직접 읽기/쓰기</p>
                    </div>
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-pink-100 flex items-center gap-3">
                    <Database className="w-5 h-5 text-pink-500" />
                    <div>
                      <span className="font-medium text-slate-700">데이터베이스</span>
                      <p className="text-xs text-slate-500">PostgreSQL, MySQL, MongoDB 등</p>
                    </div>
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-pink-100 flex items-center gap-3">
                    <Code className="w-5 h-5 text-pink-500" />
                    <div>
                      <span className="font-medium text-slate-700">Git 저장소</span>
                      <p className="text-xs text-slate-500">GitHub, GitLab 직접 연동</p>
                    </div>
                  </li>
                  <li className="bg-white rounded-lg p-3 border border-pink-100 flex items-center gap-3">
                    <Plug className="w-5 h-5 text-pink-500" />
                    <div>
                      <span className="font-medium text-slate-700">외부 API</span>
                      <p className="text-xs text-slate-500">REST API, GraphQL 연동</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-700 mb-3">설치 방법</h4>
                <div className="bg-white rounded-lg p-4 border border-pink-100 space-y-3">
                  <div>
                    <p className="text-sm text-slate-600 mb-2">1. MCP 서버 설치</p>
                    <code className="text-xs text-pink-700 bg-pink-100 px-2 py-1 rounded block">
                      npm install @modelcontextprotocol/server-filesystem
                    </code>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-2">2. Claude 설정 파일에 추가</p>
                    <code className="text-xs text-pink-700 bg-pink-100 px-2 py-1 rounded block">
                      claude_desktop_config.json 수정
                    </code>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-2">3. Claude 재시작</p>
                    <p className="text-xs text-slate-500">이후 파일 복사붙여넣기 없이 직접 접근 가능</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-pink-100/50 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">토큰 절약 효과</h4>
                  <ul className="text-sm text-pink-700 space-y-1">
                    <li>• 5MB PDF 읽기: 25K-30K 토큰</li>
                    <li>• 500줄 파일: 3K-5K 토큰</li>
                    <li>• 주간 반복 조회: <strong>83% 토큰 절약</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plugins 10개 상세 */}
        <Card className="mb-8 border-amber-200 bg-amber-50/30">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Package className="w-6 h-6 text-amber-500" />
              <CardTitle className="text-xl">설치된 플러그인 10개</CardTitle>
              <Badge className="ml-auto bg-amber-500 text-white">확장</Badge>
            </div>
            <CardDescription className="text-base">Claude Code의 기능을 확장하는 공식/커뮤니티 플러그인</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* wshobson/claude-code-workflows */}
              <div>
                <h4 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  wshobson/claude-code-workflows (5개)
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-2">backend-development</h5>
                    <p className="text-sm text-slate-500">API 설계, GraphQL 스키마, 마이크로서비스 패턴 적용</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-2">javascript-typescript</h5>
                    <p className="text-sm text-slate-500">ES6+, Node.js, React, 고급 TypeScript 타입</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-2">api-scaffolding</h5>
                    <p className="text-sm text-slate-500">REST/GraphQL 스캐폴딩, FastAPI 템플릿</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-2">debugging-toolkit</h5>
                    <p className="text-sm text-slate-500">인터랙티브 디버깅, DX 최적화</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-2">work-history-manager</h5>
                    <p className="text-sm text-slate-500">작업 히스토리 자동 관리, 변경사항 추적</p>
                  </div>
                </div>
              </div>

              {/* 기타 플러그인 */}
              <div>
                <h4 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  기타 공식 플러그인 (5개)
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-1">dotclaude/business-document-suite</h5>
                    <p className="text-sm text-slate-500">비즈니스 보고서, 프레젠테이션, 문서 템플릿</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-1">anthropic/document-skills</h5>
                    <p className="text-sm text-slate-500">Excel, Word, PowerPoint, PDF 처리</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-1">fcakyon/code-quality-hooks</h5>
                    <p className="text-sm text-slate-500">8개 프로그래밍 언어 자동 포맷팅</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-1">anthropic/document-review-toolkit</h5>
                    <p className="text-sm text-slate-500">에이전트 기반 자동 문서 리뷰</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h5 className="font-medium text-slate-700 mb-1">anthropic/work-save-commands</h5>
                    <p className="text-sm text-slate-500">작업 내용 저장/정리/히스토리 관리 자동화</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 토큰 사용량 예시 */}
        <Card className="mb-8 border-purple-200 bg-purple-50/30">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-6 h-6 text-purple-500" />
              <CardTitle className="text-xl">실제 토큰 사용량 예시</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">작업별 토큰 사용량</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-3 font-semibold text-slate-700">작업 유형</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-700">토큰</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-700">Free/일</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-700">Pro/일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-white">
                        <td className="py-2 px-3">5페이지 보고서</td>
                        <td className="py-2 px-3 text-purple-600 font-medium">8K-10K</td>
                        <td className="py-2 px-3">5-10개</td>
                        <td className="py-2 px-3">25-50개</td>
                      </tr>
                      <tr className="border-b bg-white">
                        <td className="py-2 px-3">10슬라이드 자료</td>
                        <td className="py-2 px-3 text-purple-600 font-medium">8K-12K</td>
                        <td className="py-2 px-3">4-8개</td>
                        <td className="py-2 px-3">20-40개</td>
                      </tr>
                      <tr className="border-b bg-white">
                        <td className="py-2 px-3">간단한 웹페이지</td>
                        <td className="py-2 px-3 text-purple-600 font-medium">12K-20K</td>
                        <td className="py-2 px-3">2-5개</td>
                        <td className="py-2 px-3">12-25개</td>
                      </tr>
                      <tr className="border-b bg-white">
                        <td className="py-2 px-3">50페이지 문서검토</td>
                        <td className="py-2 px-3 text-purple-600 font-medium">15K-25K</td>
                        <td className="py-2 px-3">2-4개</td>
                        <td className="py-2 px-3">10-20개</td>
                      </tr>
                      <tr className="border-b bg-white">
                        <td className="py-2 px-3">맞춤형 이메일</td>
                        <td className="py-2 px-3 text-purple-600 font-medium">3K-5K</td>
                        <td className="py-2 px-3">10-20개</td>
                        <td className="py-2 px-3">50-100개</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2 px-3">데이터 분석+차트</td>
                        <td className="py-2 px-3 text-purple-600 font-medium">10K-15K</td>
                        <td className="py-2 px-3">3-5개</td>
                        <td className="py-2 px-3">15-30개</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">도구별 절약 효과</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-purple-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">Projects (주간보고서)</span>
                      <Badge className="bg-green-500 text-white">80% 절약</Badge>
                    </div>
                    <p className="text-sm text-slate-500">40K → 8K 토큰/월</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">Commands (일일저장)</span>
                      <Badge className="bg-green-500 text-white">75% 절약</Badge>
                    </div>
                    <p className="text-sm text-slate-500">20K → 5K 토큰/일</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">MCP (파일접근)</span>
                      <Badge className="bg-green-500 text-white">83% 절약</Badge>
                    </div>
                    <p className="text-sm text-slate-500">210K → 35K 토큰/주</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 구독 플랜 비교 */}
        <Card className="mb-8 border-slate-200 bg-slate-50/30">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-slate-500" />
              <CardTitle className="text-xl">구독 플랜 비교</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-slate-100">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">기능</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500">Free (무료)</th>
                    <th className="text-left py-3 px-4 font-semibold text-orange-700">Pro (~3만원/월)</th>
                    <th className="text-left py-3 px-4 font-semibold text-purple-700">Max (~14만원/월)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">일일 토큰</td>
                    <td className="py-3 px-4">50K-100K</td>
                    <td className="py-3 px-4">250K-500K</td>
                    <td className="py-3 px-4">1.25M-2.5M</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="py-3 px-4 font-medium">예상 대화 수/일</td>
                    <td className="py-3 px-4">10-20개</td>
                    <td className="py-3 px-4">50-100개</td>
                    <td className="py-3 px-4">250-500개</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">기본 대화</td>
                    <td className="py-3 px-4 text-yellow-600">제한적</td>
                    <td className="py-3 px-4 text-green-600">무제한</td>
                    <td className="py-3 px-4 text-green-600">무제한</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="py-3 px-4 font-medium">200K 토큰 맥락</td>
                    <td className="py-3 px-4 text-red-500">X</td>
                    <td className="py-3 px-4 text-green-600">O</td>
                    <td className="py-3 px-4 text-green-600">O</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Projects</td>
                    <td className="py-3 px-4 text-yellow-600">제한적</td>
                    <td className="py-3 px-4 text-green-600">무제한</td>
                    <td className="py-3 px-4 text-green-600">무제한</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="py-3 px-4 font-medium">Claude Code</td>
                    <td className="py-3 px-4 text-red-500">X</td>
                    <td className="py-3 px-4 text-green-600">O</td>
                    <td className="py-3 px-4 text-purple-600">무제한</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Skills 사용</td>
                    <td className="py-3 px-4 text-red-500">X</td>
                    <td className="py-3 px-4 text-yellow-600">5-10개</td>
                    <td className="py-3 px-4 text-green-600">37개 전체</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="py-3 px-4 font-medium">우선 처리</td>
                    <td className="py-3 px-4 text-red-500">X</td>
                    <td className="py-3 px-4 text-yellow-600">일반</td>
                    <td className="py-3 px-4 text-green-600">최우선</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">고급 분석</td>
                    <td className="py-3 px-4 text-red-500">X</td>
                    <td className="py-3 px-4 text-green-600">O</td>
                    <td className="py-3 px-4 text-green-600">O</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium">API 접근</td>
                    <td className="py-3 px-4 text-red-500">X</td>
                    <td className="py-3 px-4 text-yellow-600">제한적</td>
                    <td className="py-3 px-4 text-green-600">전체</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            Made with <span className="text-purple-500">♥</span> by{" "}
            <a href="https://github.com/Giwoong-ryu" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-foreground transition-colors">
              Giwoong Ryu
            </a>
          </p>
          <p className="mt-2 text-xs">
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
