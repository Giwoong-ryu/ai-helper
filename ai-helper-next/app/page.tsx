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
          <div className="max-w-sm bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition hover:bg-slate-900/70">
            <img src="/ai-helper/assets/claude-icon.png" alt="Claude 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-50">Claude</h3>
              <p className="text-base text-slate-300">Anthropic에서 개발한 대규모 언어 모델</p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                <li>긴 대화 맥락 유지 및 복잡한 작업 이해도 우수</li>
                <li>한국어 지원이 뛰어나고 정확한 답변 제공</li>
                <li>200K 토큰 컨텍스트 지원으로 대규모 문서 처리 가능</li>
                <li>구조화된 데이터 분석 및 자동화 설계에 강점</li>
                <li>헌법, 윤리 원칙 기반의 안전한 AI 지향</li>
                <li>API를 통한 다양한 서비스 연동 및 확장성</li>
              </ul>
              <a href="/ai-helper/claude/index.html" className="inline-flex items-center text-emerald-400 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="max-w-sm bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition hover:bg-slate-900/70">
            <img src="/ai-helper/assets/chatgpt-icon.png" alt="ChatGPT 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-50">GPT (ChatGPT)</h3>
              <p className="text-base text-slate-300">OpenAI에서 개발한 대화형 AI 모델</p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                <li>아이디어 발산, 글쓰기, 기획 등 창의적 작업에 강점</li>
                <li>GPT Store를 통한 다양한 플러그인 및 커스텀 GPT 활용</li>
                <li>DALL-E를 활용한 이미지 생성 기능 통합</li>
                <li>가장 대중적이며 방대한 사용자 커뮤니티 보유</li>
                <li>빠른 응답 속도로 즉각적인 정보 탐색 가능</li>
                <li>다양한 분야의 광범위한 지식 베이스 제공</li>
              </ul>
              <a href="/ai-helper/chatgpt/index.html" className="inline-flex items-center text-emerald-400 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="max-w-sm bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition hover:bg-slate-900/70">
            <img src="/ai-helper/assets/gemini-icon.png" alt="Gemini 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-50">Gemini</h3>
              <p className="text-base text-slate-300">Google에서 개발한 멀티모달 AI 모델</p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                <li>텍스트, 이미지, 오디오, 비디오 등 다양한 형식 처리 가능</li>
                <li>Google Workspace 서비스와의 강력한 통합</li>
                <li>실시간 웹 검색 기능으로 최신 정보 제공</li>
                <li>Google AI Studio를 통한 이미지 생성 및 편집</li>
                <li>무료 플랜에서도 거의 무제한에 가까운 사용량 제공</li>
                <li>Google 생태계 사용자에게 최적화된 편리한 접근성</li>
              </ul>
              <a href="/ai-helper/gemini/index.html" className="inline-flex items-center text-emerald-400 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="max-w-sm bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition hover:bg-slate-900/70">
            <img src="/ai-helper/assets/perplexity-icon.png" alt="Perplexity 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-50">Perplexity</h3>
              <p className="text-base text-slate-300">실시간 검색 및 리서치에 특화된 AI 도구</p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                <li>질문에 대한 답변과 함께 출처를 명확하게 제시</li>
                <li>실시간 웹 검색을 통해 최신 정보 기반 답변 제공</li>
                <li>리서치 및 정보 탐색 과정에서 효율성 극대화</li>
                <li>다양한 검색 모드(Academic, YouTube, Reddit 등) 지원</li>
                <li>간결하고 요약된 답변으로 핵심 정보 파악 용이</li>
                <li>정보의 신뢰성과 투명성을 중요시하는 사용자에게 적합</li>
              </ul>
              <a href="/ai-helper/perplexity/index.html" className="inline-flex items-center text-emerald-400 hover:underline">자세히 보기 →</a>
            </div>
          </div>
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
