import Link from "next/link";
import { ArrowLeft, Zap, Terminal, Bot, Plug, Lightbulb, CheckCircle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Claude 완전 정복 - AI Helper",
  description: "Claude 도구 체계: Skillsets 31개, Commands 17개, Agents 60개, MCP 완벽 가이드",
};

export default function ClaudePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50/50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-violet-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">AI Helper</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            🤖 Claude 완전 정복
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            기술용어를 일상언어로! 누구나 쉽게 따라하는 Claude 완벽 가이드
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-violet-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">31</div>
            <div className="text-sm text-gray-500">스킬셋</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Terminal className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">17</div>
            <div className="text-sm text-gray-500">Commands</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Bot className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">60</div>
            <div className="text-sm text-gray-500">Agents</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Plug className="w-6 h-6 text-pink-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">MCP</div>
            <div className="text-sm text-gray-500">외부 연동</div>
          </div>
        </div>

        {/* AI Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">📊 AI 어시스턴트 비교</h2>
            <p className="text-sm text-gray-500">주요 AI 서비스 특징 비교</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">기능</th>
                  <th className="px-4 py-3 text-center font-semibold text-violet-700">Claude</th>
                  <th className="px-4 py-3 text-center font-semibold text-emerald-700">ChatGPT</th>
                  <th className="px-4 py-3 text-center font-semibold text-blue-700">Gemini</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 text-gray-600">긴 문서 처리</td>
                  <td className="px-4 py-3 text-center text-violet-600 font-medium">⭐ 최고</td>
                  <td className="px-4 py-3 text-center text-gray-600">좋음</td>
                  <td className="px-4 py-3 text-center text-gray-600">좋음</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-600">코딩 능력</td>
                  <td className="px-4 py-3 text-center text-violet-600 font-medium">⭐ 최고</td>
                  <td className="px-4 py-3 text-center text-emerald-600 font-medium">⭐ 최고</td>
                  <td className="px-4 py-3 text-center text-gray-600">좋음</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 text-gray-600">웹 검색</td>
                  <td className="px-4 py-3 text-center text-gray-400">❌</td>
                  <td className="px-4 py-3 text-center text-emerald-600">✅</td>
                  <td className="px-4 py-3 text-center text-blue-600">✅</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-600">이미지 생성</td>
                  <td className="px-4 py-3 text-center text-gray-400">❌</td>
                  <td className="px-4 py-3 text-center text-emerald-600">✅ DALL-E</td>
                  <td className="px-4 py-3 text-center text-blue-600">✅ Imagen</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 text-gray-600">Pro 가격</td>
                  <td className="px-4 py-3 text-center text-gray-700">$20/월</td>
                  <td className="px-4 py-3 text-center text-gray-700">$20/월</td>
                  <td className="px-4 py-3 text-center text-gray-700">$20/월</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Claude Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-violet-600" />
              Claude의 도구가 업계의 저장
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                <span><strong>Projects:</strong> 작업 규칙을 저장하여 반복 설명 방지</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                <span><strong>Artifacts:</strong> 실시간 미리보기 및 코드 실행</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                <span><strong>긴 컨텍스트:</strong> 200K 토큰으로 긴 문서 한번에</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              실사용자 불만사항
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>&quot;짧게 써달라&quot;고 해도 또 길게 씀</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>갑자기 &quot;제가 할 수 없습니다&quot; 거부</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>무료 플랜 메시지 한도 금방 참</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Tip Box */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-6 text-white mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">💡 팁 RTR - Claude 실력 비밀을 사용하세요</h3>
              <p className="text-violet-100 text-sm">
                Projects에 작업규칙을 저장하면 매번 설명할 필요 없이 일관된 결과물을 얻을 수 있습니다.
                <br />토큰 절약 효과: 평균 50-80% 절감!
              </p>
            </div>
          </div>
        </div>

        {/* Claude Tools Section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Claude 도구 이해하기</h2>
        <p className="text-gray-600 mb-8">
          Claude의 핵심 도구들을 이해하고 활용하는 방법
        </p>

        {/* Tool Cards */}
        <div className="space-y-6 mb-12">
          {/* Skills */}
          <div className="bg-white rounded-xl border-l-4 border-violet-500 shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">스킬셋 (Skills)</h3>
                  <p className="text-sm text-gray-500">31개 전문 분야별 지식</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                특정 분야의 전문 지식을 Claude에게 부여하여 더 정확하고 전문적인 응답을 받을 수 있습니다.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>주요 스킬:</strong></p>
                <div className="flex flex-wrap gap-2">
                  {["n8n-workflow", "design-automation", "document-processing", "marketing-content", "dev-tools"].map((skill) => (
                    <span key={skill} className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Commands */}
          <div className="bg-white rounded-xl border-l-4 border-blue-500 shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">슬래시 커맨드 (Commands)</h3>
                  <p className="text-sm text-gray-500">17개 명령어</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                /로 시작하는 명령어로 반복 작업을 한 번에 처리할 수 있습니다.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { cmd: "/analyze", desc: "코드 분석" },
                  { cmd: "/build", desc: "빌드 실행" },
                  { cmd: "/document", desc: "문서 생성" },
                  { cmd: "/test", desc: "테스트 생성" },
                  { cmd: "/explain", desc: "코드 설명" },
                  { cmd: "/improve", desc: "코드 개선" },
                  { cmd: "/troubleshoot", desc: "문제 해결" },
                  { cmd: "/workflow", desc: "워크플로우" },
                ].map((item) => (
                  <div key={item.cmd} className="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                    <code className="text-blue-600 font-medium text-sm">{item.cmd}</code>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agents */}
          <div className="bg-white rounded-xl border-l-4 border-emerald-500 shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">전문 에이전트 (Agents)</h3>
                  <p className="text-sm text-gray-500">60개 전문가 AI</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                각 분야의 전문가 AI가 복잡한 다단계 작업을 자율적으로 실행합니다.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">프로그래밍 (16개)</h4>
                  <p className="text-xs text-gray-600">python-pro, javascript-pro, typescript-pro, go-pro, rust-pro 등</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">아키텍처 (8개)</h4>
                  <p className="text-xs text-gray-600">backend-architect, frontend-architect, system-design 등</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">DevOps (6개)</h4>
                  <p className="text-xs text-gray-600">docker-expert, kubernetes-expert, ci-cd-specialist 등</p>
                </div>
              </div>
            </div>
          </div>

          {/* MCP */}
          <div className="bg-white rounded-xl border-l-4 border-pink-500 shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Plug className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">MCP (Model Context Protocol)</h3>
                  <p className="text-sm text-gray-500">외부 시스템 연동</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                외부 데이터 소스와 실시간으로 연결하여 더 강력한 기능을 활용할 수 있습니다.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">파일 시스템</p>
                    <p className="text-sm text-gray-600">직접 파일 읽기/쓰기</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">데이터베이스</p>
                    <p className="text-sm text-gray-600">DB 직접 연결 및 쿼리</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Git 저장소</p>
                    <p className="text-sm text-gray-600">버전 관리 통합</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">외부 API</p>
                    <p className="text-sm text-gray-600">서드파티 서비스 연동</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claude 시작하기 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">🚀 Claude 시작하기</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 text-violet-700 font-bold">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">가입하기</h4>
                <p className="text-gray-600 text-sm">claude.ai에서 무료 계정 생성 (Google/이메일)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 text-violet-700 font-bold">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">Projects 설정</h4>
                <p className="text-gray-600 text-sm">작업 규칙을 Custom Instructions에 저장</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 text-violet-700 font-bold">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">대화 시작</h4>
                <p className="text-gray-600 text-sm">명확하고 구체적인 질문으로 시작하세요</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-700 transition-colors"
            >
              Claude 시작하기
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">💳 Claude 이용권 및 요금 안내</h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-1">Free</h3>
                <p className="text-2xl font-bold text-gray-900 mb-3">$0<span className="text-sm font-normal text-gray-500">/월</span></p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 일일 50K-100K 토큰</li>
                  <li>• 하루 10-20개 대화</li>
                  <li>• 기본 기능 사용</li>
                </ul>
              </div>
              <div className="border-2 border-violet-500 rounded-xl p-5 relative">
                <div className="absolute -top-3 left-4 bg-violet-500 text-white text-xs px-2 py-1 rounded">추천</div>
                <h3 className="font-bold text-violet-700 mb-1">Pro</h3>
                <p className="text-2xl font-bold text-gray-900 mb-3">$20<span className="text-sm font-normal text-gray-500">/월</span></p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 일일 250K-500K 토큰</li>
                  <li>• 하루 50-100개 대화</li>
                  <li>• 우선 액세스</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-1">Max</h3>
                <p className="text-2xl font-bold text-gray-900 mb-3">$100<span className="text-sm font-normal text-gray-500">/월</span></p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 일일 1.25M-2.5M 토큰</li>
                  <li>• 하루 250-500개 대화</li>
                  <li>• 최고 우선순위</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
          <p>
            Made with <span className="text-violet-500">♥</span> by{" "}
            <a href="https://github.com/Giwoong-ryu" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-violet-600 transition-colors">
              Giwoong Ryu
            </a>
          </p>
          <p className="mt-2">
            상세 가이드:{" "}
            <a href="https://giwoong-ryu.github.io/claude-tips/" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
              claude-tips
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
