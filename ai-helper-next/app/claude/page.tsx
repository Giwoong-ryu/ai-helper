import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Terminal, Bot, Plug, Star, Lightbulb, AlertTriangle, CheckCircle, Code } from "lucide-react";

export const metadata = {
  title: "Claude Code 완전 정복 - AI Helper",
  description: "Claude Code 스킬셋 37개, Commands 17개, Agents 60개, MCP, Plugins 10개 완벽 가이드 (2025년 11월)",
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
              <h1 className="text-2xl font-bold">Claude Code 완전 정복</h1>
              <p className="text-sm text-muted-foreground">
                개발자부터 일반인까지! 누구나 쉽게 따라하는 가이드
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        {/* 모델 정보 */}
        <div className="rounded-xl border bg-gradient-to-r from-orange-50 to-amber-50 p-4 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-slate-900">현재 사용 가능한 모델 (2025년 11월)</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-3 border border-orange-100">
              <h4 className="font-medium text-orange-700 mb-1">Claude Sonnet 4.5</h4>
              <p className="text-xs text-slate-600">코딩 벤치마크 1위! 일반 작업에 최적</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-100">
              <h4 className="font-medium text-purple-700 mb-1">Claude Opus 4.5</h4>
              <p className="text-xs text-slate-600">가장 강력한 모델, 복잡한 추론</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-100">
              <h4 className="font-medium text-teal-700 mb-1">Claude Haiku 4.5</h4>
              <p className="text-xs text-slate-600">빠르고 저렴, 간단한 작업용</p>
            </div>
          </div>
        </div>

        {/* 주요 기능 카드 - GPT/Gemini와 동일한 크기 */}
        <div className="flex items-center gap-2 mb-6">
          <Zap className="w-5 h-5 text-orange-600" />
          <h2 className="text-xl font-semibold text-slate-900">Claude Code 주요 기능</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* 스킬셋 */}
          <Card className="group hover:shadow-lg transition-all border-orange-200 bg-orange-50/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-orange-500" />
                <CardTitle>스킬셋</CardTitle>
                <Badge className="ml-auto bg-orange-500 text-white">37개</Badge>
              </div>
              <CardDescription>AI 자동화 스킬 패키지</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">포함 내용</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• n8n 워크플로우 자동화</li>
                    <li>• 디자인 작업 자동화</li>
                    <li>• 문서 처리 및 분석</li>
                    <li>• 마케팅 콘텐츠 생성</li>
                    <li>• 개발 도구 연동</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-xs text-orange-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>설치:</strong> .claude/skills/ 폴더에 스킬 파일 추가</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Commands */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="w-5 h-5 text-blue-500" />
                <CardTitle>Commands</CardTitle>
                <Badge variant="secondary" className="ml-auto">17개</Badge>
              </div>
              <CardDescription>슬래시 커맨드로 빠른 실행</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">주요 커맨드</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• /analyze - 코드/시스템 분석</li>
                    <li>• /build - 빌드/컴파일 실행</li>
                    <li>• /document - 문서 자동 생성</li>
                    <li>• /test - 테스트 생성/실행</li>
                    <li>• /troubleshoot - 문제 진단</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용:</strong> .claude/commands/ 폴더에 mycommand.md 생성 후 /mycommand 사용</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agents */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Bot className="w-5 h-5 text-green-500" />
                <CardTitle>Agents</CardTitle>
                <Badge variant="secondary" className="ml-auto">60개</Badge>
              </div>
              <CardDescription>전문 분야별 AI 페르소나</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">에이전트 분류</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 언어 전문가 16개 (python-pro, typescript-pro 등)</li>
                    <li>• 아키텍처 8개 (backend-architect 등)</li>
                    <li>• DevOps 6개 (devops-engineer 등)</li>
                    <li>• 디버깅 & 테스트 5개</li>
                    <li>• 데이터 & AI/ML 4개</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-green-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용:</strong> .claude/agents/ 폴더에 my-agent.md 생성</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MCP */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Plug className="w-5 h-5 text-purple-500" />
                <CardTitle>MCP</CardTitle>
                <Badge variant="secondary" className="ml-auto">연동</Badge>
              </div>
              <CardDescription>Model Context Protocol</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">외부 시스템 연동</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 파일 시스템 직접 접근</li>
                    <li>• Git 저장소 연동</li>
                    <li>• 데이터베이스 연결</li>
                    <li>• API 자동 호출</li>
                    <li>• 브라우저 자동화</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>설치:</strong> npm install @modelcontextprotocol/server-filesystem</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plugins */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-5 h-5 text-pink-500" />
                <CardTitle>Plugins</CardTitle>
                <Badge variant="secondary" className="ml-auto">10개</Badge>
              </div>
              <CardDescription>공식 플러그인 패키지</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">패키지 구성</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Commands + Agents + Skills 통합</li>
                    <li>• 특정 작업 도메인 최적화</li>
                    <li>• anthropics/skills 마켓에서 설치</li>
                    <li>• 한 번 설치로 전체 기능</li>
                    <li>• 커뮤니티 플러그인 지원</li>
                  </ul>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="text-xs text-pink-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>설명:</strong> 플러그인 하나로 관련 기능 일괄 설치</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commands 상세 */}
        <div className="rounded-2xl border bg-blue-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-slate-900">슬래시 커맨드 17개</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { cmd: "/analyze", desc: "코드/시스템 분석" },
              { cmd: "/build", desc: "빌드/컴파일 실행" },
              { cmd: "/cleanup", desc: "코드 정리/포맷팅" },
              { cmd: "/design", desc: "아키텍처 설계" },
              { cmd: "/document", desc: "문서 자동 생성" },
              { cmd: "/estimate", desc: "작업 추정 및 계획" },
              { cmd: "/explain", desc: "코드/개념 설명" },
              { cmd: "/save-work", desc: "작업 내용 저장" },
              { cmd: "/implement", desc: "기능 구현" },
              { cmd: "/improve", desc: "코드 개선 제안" },
              { cmd: "/index", desc: "프로젝트 인덱싱" },
              { cmd: "/load", desc: "컨텍스트 로드" },
              { cmd: "/spawn", desc: "작업 생성/관리" },
              { cmd: "/task", desc: "작업 실행" },
              { cmd: "/test", desc: "테스트 생성/실행" },
              { cmd: "/troubleshoot", desc: "문제 진단" },
              { cmd: "/workflow", desc: "워크플로우 자동화" },
            ].map((item) => (
              <div key={item.cmd} className="bg-white rounded-lg p-2 border border-blue-100 flex items-center gap-2">
                <code className="text-blue-600 font-medium text-sm">{item.cmd}</code>
                <span className="text-xs text-slate-500">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Agents 상세 */}
        <div className="rounded-2xl border bg-green-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-semibold text-slate-900">전문 AI 에이전트 60개</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-green-700 mb-2 text-sm">💻 언어 전문가 (16개)</h3>
              <div className="flex flex-wrap gap-1">
                {["python-pro", "typescript-pro", "javascript-pro", "go-pro", "rust-pro", "java-pro", "cpp-pro", "c-pro", "csharp-pro", "kotlin-pro", "swift-pro", "ruby-pro", "php-pro", "scala-pro", "dart-pro", "zig-pro"].map((agent) => (
                  <span key={agent} className="bg-white px-2 py-0.5 rounded text-xs text-slate-600 border border-green-200">{agent}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-2 text-sm">🏗️ 아키텍처 (8개)</h3>
              <div className="flex flex-wrap gap-1">
                {["backend-architect", "frontend-architect", "mobile-architect", "system-design", "api-design", "database-design", "microservices-expert", "architect-review"].map((agent) => (
                  <span key={agent} className="bg-white px-2 py-0.5 rounded text-xs text-slate-600 border border-green-200">{agent}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-2 text-sm">🔧 DevOps (6개) + 🐛 테스트 (5개) + 📊 데이터 (4개)</h3>
              <div className="flex flex-wrap gap-1">
                {["devops-engineer", "docker-expert", "kubernetes-expert", "ci-cd-specialist", "cloud-architect", "debugger", "test-engineer", "qa-specialist", "performance-optimizer", "security-auditor", "data-engineer", "ml-engineer", "ai-researcher", "data-scientist"].map((agent) => (
                  <span key={agent} className="bg-white px-2 py-0.5 rounded text-xs text-slate-600 border border-green-200">{agent}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 토큰 절약 팁 */}
        <div className="rounded-2xl border bg-purple-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-slate-900">토큰 절약 팁</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-green-700 mb-2 flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4" />
                도구 사용 시 절약량
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Commands: 반복 작업 <strong>75% 절약</strong></li>
                <li>• Agents: 멀티스텝 <strong>40-50% 절약</strong></li>
                <li>• MCP: 반복 조회 <strong>80% 절약</strong></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2 text-sm">
                <AlertTriangle className="w-4 h-4" />
                이런 실수 피하세요
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 매번 같은 형식 설명 반복</li>
                <li>• 파일 복사-붙여넣기 반복</li>
                <li>• 긴 프롬프트 매번 입력</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 구독 플랜 비교 */}
        <div className="rounded-2xl border bg-slate-50/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-semibold text-slate-900">구독 플랜 비교</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3 font-semibold text-slate-700">기능</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-500">Free</th>
                  <th className="text-left py-2 px-3 font-semibold text-orange-700">Pro $20</th>
                  <th className="text-left py-2 px-3 font-semibold text-purple-700">Max $100</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-3">Sonnet 4.5</td>
                  <td className="py-2 px-3 text-slate-500">제한적</td>
                  <td className="py-2 px-3 text-green-600">무제한</td>
                  <td className="py-2 px-3 text-green-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3">Opus 4.5</td>
                  <td className="py-2 px-3 text-slate-500">X</td>
                  <td className="py-2 px-3 text-green-600">O</td>
                  <td className="py-2 px-3 text-green-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3">Agents/Commands</td>
                  <td className="py-2 px-3 text-slate-500">제한</td>
                  <td className="py-2 px-3 text-green-600">무제한</td>
                  <td className="py-2 px-3 text-green-600">무제한</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">스킬셋 37개</td>
                  <td className="py-2 px-3 text-slate-500">제한</td>
                  <td className="py-2 px-3 text-green-600">O</td>
                  <td className="py-2 px-3 text-purple-600">전체</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
        </div>
      </footer>
    </main>
  );
}
