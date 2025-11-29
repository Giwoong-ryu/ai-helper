import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Terminal, Bot, Plug, Star, Lightbulb, AlertTriangle, CheckCircle, FolderOpen, Layers } from "lucide-react";

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

        {/* 주요 기능 카드 */}
        <div className="flex items-center gap-2 mb-6">
          <Zap className="w-5 h-5 text-orange-600" />
          <h2 className="text-xl font-semibold text-slate-900">도구별 상세 설명</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Projects - LEVEL 0 */}
          <Card className="group hover:shadow-lg transition-all border-orange-200 bg-orange-50/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FolderOpen className="w-5 h-5 text-orange-500" />
                <CardTitle>Projects</CardTitle>
                <Badge className="ml-auto bg-orange-500 text-white">LEVEL 0</Badge>
              </div>
              <CardDescription>작업규칙을 Custom Instructions에 저장</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 여러 대화에서 자동 기억 및 적용</li>
                    <li>• 반복 설명 방지</li>
                    <li>• 프로젝트별 맥락 유지</li>
                    <li>• 파일 업로드 후 분석</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-xs text-orange-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>팁:</strong> 코드베이스 올려두고 리팩토링 시키면 진짜 좋음</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Commands - LEVEL 1 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="w-5 h-5 text-blue-500" />
                <CardTitle>Commands</CardTitle>
                <Badge variant="secondary" className="ml-auto">17개</Badge>
              </div>
              <CardDescription>슬래시 명령어로 반복작업 자동화</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">주요 커맨드</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• /analyze - 코드/시스템 분석</li>
                    <li>• /build - 빌드/컴파일 자동화</li>
                    <li>• /document - 문서 자동생성</li>
                    <li>• /test - 테스트 생성/실행</li>
                    <li>• /troubleshoot - 문제진단/해결</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>절약:</strong> 반복작업 75% 토큰 절약</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agents - LEVEL 2 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Bot className="w-5 h-5 text-green-500" />
                <CardTitle>Agents</CardTitle>
                <Badge variant="secondary" className="ml-auto">60개</Badge>
              </div>
              <CardDescription>복잡한 다단계 작업 자율실행</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">에이전트 분류</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 언어전문가 16개 (python-pro, rust-pro 등)</li>
                    <li>• 아키텍처 8개 (backend-architect 등)</li>
                    <li>• DevOps 6개 (devops-engineer 등)</li>
                    <li>• 디버깅/테스트 5개 (debugger 등)</li>
                    <li>• 데이터/AI 4개 (ml-engineer 등)</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-green-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>절약:</strong> 멀티스텝 작업 40-50% 토큰 절약</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills - LEVEL 3 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-purple-500" />
                <CardTitle>Skills</CardTitle>
                <Badge variant="secondary" className="ml-auto">37개</Badge>
              </div>
              <CardDescription>전문분야 지식 자동적용</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">스킬 패키지</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• n8n 워크플로우 자동화</li>
                    <li>• 디자인 작업 자동화</li>
                    <li>• 문서 처리 및 분석</li>
                    <li>• 마케팅 콘텐츠 생성</li>
                    <li>• Progressive Disclosure로 효율적</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>설치:</strong> .claude/skills/ 폴더에 스킬 파일 추가</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MCP */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Plug className="w-5 h-5 text-pink-500" />
                <CardTitle>MCP</CardTitle>
                <Badge variant="secondary" className="ml-auto">연동</Badge>
              </div>
              <CardDescription>파일, API, DB 직접 연결</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">Model Context Protocol</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 파일 시스템 직접 접근</li>
                    <li>• Git 저장소 연동</li>
                    <li>• 데이터베이스 연결</li>
                    <li>• 복사붙여넣기 불필요</li>
                  </ul>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="text-xs text-pink-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>절약:</strong> 반복조회 80% 토큰 절약</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plugins */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-5 h-5 text-amber-500" />
                <CardTitle>Plugins</CardTitle>
                <Badge variant="secondary" className="ml-auto">10개</Badge>
              </div>
              <CardDescription>설치된 공식 플러그인</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">wshobson/claude-code-workflows</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• backend-development</li>
                    <li>• javascript-typescript</li>
                    <li>• api-scaffolding</li>
                    <li>• debugging-toolkit</li>
                    <li>• work-history-manager</li>
                  </ul>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <p className="text-xs text-amber-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>기타:</strong> document-skills, code-quality-hooks 등</span>
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
              { cmd: "/build", desc: "빌드/컴파일 자동화" },
              { cmd: "/cleanup", desc: "코드정리/포맷팅" },
              { cmd: "/design", desc: "아키텍처 설계" },
              { cmd: "/document", desc: "문서자동생성" },
              { cmd: "/estimate", desc: "작업추정 및 계획" },
              { cmd: "/explain", desc: "코드/개념설명" },
              { cmd: "/save-work", desc: "작업내용자동저장" },
              { cmd: "/implement", desc: "기능구현" },
              { cmd: "/improve", desc: "코드개선" },
              { cmd: "/index", desc: "프로젝트인덱싱" },
              { cmd: "/load", desc: "컨텍스트로드" },
              { cmd: "/spawn", desc: "파일/컴포넌트스캐폴딩" },
              { cmd: "/task", desc: "멀티스텝작업실행" },
              { cmd: "/test", desc: "테스트생성/실행" },
              { cmd: "/troubleshoot", desc: "문제진단/해결" },
              { cmd: "/workflow", desc: "자동화워크플로우" },
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
              <h3 className="font-medium text-green-700 mb-2 text-sm">💻 언어전문가 (16개)</h3>
              <div className="flex flex-wrap gap-1">
                {["c-pro", "python-pro", "javascript-pro", "rust-pro", "go-pro", "java-pro", "typescript-pro", "cpp-pro", "csharp-pro", "kotlin-pro", "swift-pro", "ruby-pro", "php-pro", "scala-pro", "dart-pro", "zig-pro"].map((agent) => (
                  <span key={agent} className="bg-white px-2 py-0.5 rounded text-xs text-slate-600 border border-green-200">{agent}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-2 text-sm">🏗️ 아키텍처 (8개)</h3>
              <div className="flex flex-wrap gap-1">
                {["architect-review", "backend-architect", "frontend-architect", "mobile-architect", "system-design", "api-design", "database-design", "microservices-expert"].map((agent) => (
                  <span key={agent} className="bg-white px-2 py-0.5 rounded text-xs text-slate-600 border border-green-200">{agent}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-2 text-sm">🔧 DevOps (6개) + 🐛 디버깅/테스트 (5개) + 📊 데이터/AI (4개)</h3>
              <div className="flex flex-wrap gap-1">
                {["devops-engineer", "ci-cd-specialist", "docker-expert", "kubernetes-expert", "cloud-architect", "infrastructure-specialist", "debugger", "test-engineer", "qa-specialist", "performance-optimizer", "security-auditor", "data-engineer", "ml-engineer", "ai-researcher", "data-scientist"].map((agent) => (
                  <span key={agent} className="bg-white px-2 py-0.5 rounded text-xs text-slate-600 border border-green-200">{agent}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-2 text-sm">🎨 디자인 (3개) + 📝 문서화 (5개) + 💼 비즈니스 (7개)</h3>
              <div className="flex flex-wrap gap-1">
                {["ux-designer", "ui-designer", "design-system-architect", "technical-writer", "api-documenter", "readme-generator", "changelog-writer", "docs-reviewer", "product-manager", "business-analyst", "scrum-master", "agile-coach", "stakeholder-liaison", "requirements-analyst", "project-coordinator"].map((agent) => (
                  <span key={agent} className="bg-white px-2 py-0.5 rounded text-xs text-slate-600 border border-green-200">{agent}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 토큰 사용량 예시 */}
        <div className="rounded-2xl border bg-purple-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-slate-900">실제 토큰 사용량 예시</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-purple-700 mb-2 flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4" />
                작업별 토큰 사용량
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 5페이지 보고서: <strong>8K-10K</strong> 토큰</li>
                <li>• 10슬라이드 자료: <strong>8K-12K</strong> 토큰</li>
                <li>• 간단한 웹페이지: <strong>12K-20K</strong> 토큰</li>
                <li>• 50페이지 문서검토: <strong>15K-25K</strong> 토큰</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-purple-700 mb-2 flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4" />
                플랜별 일일 사용량
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• <strong>Free플랜:</strong> 하루 50K-100K 토큰 (5-10개 작업)</li>
                <li>• <strong>Pro플랜:</strong> 하루 250K-500K 토큰 (25-50개 작업)</li>
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
                  <th className="text-left py-2 px-3 font-semibold text-orange-700">Pro (3만원)</th>
                  <th className="text-left py-2 px-3 font-semibold text-purple-700">Max (14만원)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-3">기본 대화</td>
                  <td className="py-2 px-3 text-green-600">O (제한)</td>
                  <td className="py-2 px-3 text-green-600">무제한</td>
                  <td className="py-2 px-3 text-green-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3">200K 토큰 맥락</td>
                  <td className="py-2 px-3 text-slate-500">X</td>
                  <td className="py-2 px-3 text-green-600">O</td>
                  <td className="py-2 px-3 text-green-600">O</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3">Projects</td>
                  <td className="py-2 px-3 text-slate-500">제한</td>
                  <td className="py-2 px-3 text-green-600">무제한</td>
                  <td className="py-2 px-3 text-green-600">무제한</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Claude Code</td>
                  <td className="py-2 px-3 text-slate-500">X</td>
                  <td className="py-2 px-3 text-green-600">O</td>
                  <td className="py-2 px-3 text-purple-600">무제한</td>
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
