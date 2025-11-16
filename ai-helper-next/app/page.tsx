import { Zap, Clock, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">모든 AI 도구의 활용법을 한 곳에서 배웁니다</h1>
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
        <p className="text-sm text-gray-600 text-center">
          AI 도구 참고 자료
        </p>
      </section>

      {/* 주요 AI 도구 카드 시작 */}
      <section id="ai-tools" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/ai-helper/claude/" className="block rounded-lg bg-white shadow p-6 hover:bg-gray-50 transition">
            <h3 className="text-xl font-semibold text-emerald-400 mb-1">Claude</h3>
            <p className="text-base text-gray-600">구조화·자동화 중심 팀용 모델</p>
          </a>
          <a href="/ai-helper/chatgpt/" className="block rounded-lg bg-white shadow p-6 hover:bg-gray-50 transition">
            <h3 className="text-xl font-semibold text-sky-400 mb-1">GPT (ChatGPT)</h3>
            <p className="text-base text-gray-600">아이디어 발산·프롬프트 실험에 적합</p>
          </a>
          <a href="/ai-helper/gemini/" className="block rounded-lg bg-white shadow p-6 hover:bg-gray-50 transition">
            <h3 className="text-xl font-semibold text-cyan-400 mb-1">Gemini</h3>
            <p className="text-base text-gray-600">멀티모달·Google 생태계 중심 모델</p>
          </a>
          <a href="/ai-helper/perplexity/" className="block rounded-lg bg-white shadow p-6 hover:bg-gray-50 transition">
            <h3 className="text-xl font-semibold text-indigo-400 mb-1">Perplexity</h3>
            <p className="text-base text-gray-600">실시간 검색·리서치 탐색 도구</p>
          </a>
        </div>
      </section>
      {/* 주요 AI 도구 카드 끝 */}



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
