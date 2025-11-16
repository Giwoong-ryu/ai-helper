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

      {/* AI 도구 링크 카드 섹션 시작 */}
      <section id="ai-tools" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 mb-6">주요 AI 도구</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/ai-helper/claude/" className="block rounded-lg bg-slate-900 p-5 hover:bg-slate-800 transition">
            <h3 className="text-lg font-semibold text-emerald-300 mb-2">Claude</h3>
            <p className="text-sm text-slate-400">구조화·자동화 중심 팀용 모델</p>
          </a>
          <a href="/ai-helper/chatgpt/" className="block rounded-lg bg-slate-900 p-5 hover:bg-slate-800 transition">
            <h3 className="text-lg font-semibold text-sky-300 mb-2">GPT (ChatGPT)</h3>
            <p className="text-sm text-slate-400">아이디어 발산·프롬프트 실험에 적합</p>
          </a>
          <a href="/ai-helper/gemini/" className="block rounded-lg bg-slate-900 p-5 hover:bg-slate-800 transition">
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">Gemini</h3>
            <p className="text-sm text-slate-400">멀티모달·Google 생태계 중심 모델</p>
          </a>
          <a href="/ai-helper/perplexity/" className="block rounded-lg bg-slate-900 p-5 hover:bg-slate-800 transition">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">Perplexity</h3>
            <p className="text-sm text-slate-400">실시간 검색·리서치 탐색 도구</p>
          </a>
        </div>
      </section>
      {/* AI 도구 링크 카드 섹션 끝 */}

      {/* 간략 설명 1줄 시작 */}
      <section id="tools-summary" className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-400 text-center">
          주요 AI 도구들의 간단 비교만 제공합니다 — 더 많은 자료는 각 도구 링크에서 확인하세요.
        </p>
      </section>
      {/* 간략 설명 1줄 끝 */}

      {/* AI 어시스턴트 비교 카드 형식 시작 */}
      <section id="comparison-cards" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 mb-6">AI 어시스턴트 비교 한눈에 보기</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-slate-900 p-5 hover:bg-slate-800 transition">
            <h3 className="text-lg font-semibold text-emerald-300 mb-2">Claude</h3>
            <p className="text-sm text-slate-400">정확한 구조화 & 자동화 설계 — 정형화된 문서/코드 중심일 때</p>
          </div>
          <div className="rounded-lg bg-slate-900 p-5 hover:bg-slate-800 transition">
            <h3 className="text-lg font-semibold text-sky-300 mb-2">GPT (ChatGPT)</h3>
            <p className="text-sm text-slate-400">창의적 아이디어·프롬프트 실험 — 아이디어 발산 중심 작업일 때</p>
          </div>
          <div className="rounded-lg bg-slate-900 p-5 hover:bg-slate-800 transition">
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">Gemini</h3>
            <p className="text-sm text-slate-400">멀티모달·Google 생태계 통합 — 이미지/영상/문서 다양 입력 처리 시</p>
          </div>
          <div className="rounded-lg bg-slate-900 p-5 hover:bg-slate-800 transition">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">Perplexity</h3>
            <p className="text-sm text-slate-400">실시간 검색·리서치 탐색 — 정보 탐색이나 출처 정리가 중요할 때</p>
          </div>
        </div>
      </section>
      {/* AI 어시스턴트 비교 카드 형식 끝 */}

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
