import { Zap, Clock, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Helper
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                모든 AI 도구를 한 곳에서
              </p>
            </div>
            <a
              href="https://github.com/Giwoong-ryu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">통합 AI 활용 가이드</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          모든 AI 도구의 활용법을
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            한 곳에서 배우세요
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Claude, ChatGPT, Gemini, Perplexity 등 주요 AI 도구들의 스킬, 커맨드,
          에이전트 활용법을 체계적으로 정리했습니다.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">31개 스킬셋</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">실전 예제</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium">지속 업데이트</span>
          </div>
        </div>
      </section>

      {/* AI 도구 링크 섹션 시작 */}
      <section id="ai-tools" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 mb-4">주요 AI 도구</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/ai-helper/claude/" className="block rounded-lg bg-slate-800 p-4 hover:bg-slate-700 transition">
            <h3 className="text-lg font-semibold text-emerald-300 mb-1">Claude</h3>
            <p className="text-sm text-slate-300">구조화·자동화 중심 팀용 모델</p>
          </a>
          <a href="/ai-helper/chatgpt/" className="block rounded-lg bg-slate-800 p-4 hover:bg-slate-700 transition">
            <h3 className="text-lg font-semibold text-sky-300 mb-1">GPT (ChatGPT)</h3>
            <p className="text-sm text-slate-300">아이디어 발산·프롬프트 실험에 적합</p>
          </a>
          <a href="/ai-helper/gemini/" className="block rounded-lg bg-slate-800 p-4 hover:bg-slate-700 transition">
            <h3 className="text-lg font-semibold text-cyan-300 mb-1">Gemini</h3>
            <p className="text-sm text-slate-300">멀티모달·Google 생태계 중심 모델</p>
          </a>
          <a href="/ai-helper/perplexity/" className="block rounded-lg bg-slate-800 p-4 hover:bg-slate-700 transition">
            <h3 className="text-lg font-semibold text-indigo-300 mb-1">Perplexity</h3>
            <p className="text-sm text-slate-300">실시간 검색·리서치 탐색 도구</p>
          </a>
        </div>
      </section>
      {/* AI 도구 링크 섹션 끝 */}

      {/* 간략 설명 섹션 시작 */}
      <section id="tools-summary" className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-400 text-center">
          Claude, ChatGPT, Gemini, Perplexity 등 주요 AI 도구들의 스킬·커맨드·에이전트 활용법을 체계적으로 정리했습니다.
        </p>
      </section>
      {/* 간략 설명 섹션 끝 */}

      {/* AI 어시스턴트 비교 표 섹션 시작 */}
      <section id="comparison-table" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 mb-4">AI 어시스턴트 비교 한눈에 보기</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-300 bg-slate-900 rounded-lg">
            <thead className="bg-slate-800 text-slate-200">
              <tr>
                <th className="px-4 py-3">모델</th>
                <th className="px-4 py-3">강점</th>
                <th className="px-4 py-3">추천 상황</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr className="bg-slate-850">
                <td className="px-4 py-3 font-medium text-emerald-300">Claude</td>
                <td className="px-4 py-3">정확한 구조화, 팀 매뉴얼·자동화 설계</td>
                <td className="px-4 py-3">정형화된 문서/코드 중심 또는 자동화가 핵심일 때</td>
              </tr>
              <tr className="bg-slate-800">
                <td className="px-4 py-3 font-medium text-sky-300">GPT (ChatGPT)</td>
                <td className="px-4 py-3">창의적 아이디어·프롬프트 실험</td>
                <td className="px-4 py-3">아이디어 발산·글쓰기·기획 중심 작업</td>
              </tr>
              <tr className="bg-slate-850">
                <td className="px-4 py-3 font-medium text-cyan-300">Gemini</td>
                <td className="px-4 py-3">멀티모달·Google 생태계 통합</td>
                <td className="px-4 py-3">이미지/문서/영상 등 다양한 입력을 처리할 때</td>
              </tr>
              <tr className="bg-slate-800">
                <td className="px-4 py-3 font-medium text-indigo-300">Perplexity</td>
                <td className="px-4 py-3">실시간 검색·리서치 중심 탐색 도구</td>
                <td className="px-4 py-3">정보 탐색·출처 정리가 중요할 때</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* AI 어시스턴트 비교 표 섹션 끝 */}

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            Made with 💜 by{" "}
            <a
              href="https://github.com/Giwoong-ryu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              Giwoong Ryu
            </a>
          </p>
          <p className="mt-2">© 2025 AI Helper. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
