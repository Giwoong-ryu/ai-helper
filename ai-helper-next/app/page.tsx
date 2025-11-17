import { Zap, Clock, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">AI 도구 활용법</h1>
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
      </nav>

      {/* 주요 AI 도구 카드 시작 */}
      <section id="ai-tools" className="mx-auto w-full max-w-screen-xl px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <img src="/ai-helper/assets/icons/claude-icon.png" alt="Claude 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Claude</h3>
              <p className="text-base text-slate-600">대규모 언어 모델</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>긴 대화 맥락 유지</li>
                <li>한국어 지원 우수</li>
                <li>200K 토큰 컨텍스트</li>
                <li>구조화된 데이터 분석</li>
                <li>안전한 AI 지향</li>
              </ul>
              <a href="/ai-helper/claude/index.html" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <img src="/ai-helper/assets/icons/chatgpt-icon.png" alt="ChatGPT 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">GPT (ChatGPT)</h3>
              <p className="text-base text-slate-600">대화형 AI 모델</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>창의적 작업에 강점</li>
                <li>GPT Store 활용</li>
                <li>DALL-E 이미지 생성</li>
                <li>방대한 사용자 커뮤니티</li>
                <li>빠른 응답 속도</li>
              </ul>
              <a href="/ai-helper/chatgpt/index.html" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <img src="/ai-helper/assets/icons/gemini-icon.png" alt="Gemini 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Gemini</h3>
              <p className="text-base text-slate-600">멀티모달 AI 모델</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>다양한 형식 처리</li>
                <li>Google Workspace 통합</li>
                <li>실시간 웹 검색</li>
                <li>이미지 생성 및 편집</li>
                <li>무료 플랜 사용량</li>
              </ul>
              <a href="/ai-helper/gemini/index.html" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <img src="/ai-helper/assets/icons/perplexity-icon.png" alt="Perplexity 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Perplexity</h3>
              <p className="text-base text-slate-600">검색 및 리서치 특화</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>답변과 출처 제시</li>
                <li>최신 정보 기반 답변</li>
                <li>효율적인 정보 탐색</li>
                <li>다양한 검색 모드</li>
                <li>간결하고 요약된 답변</li>
              </ul>
              <a href="/ai-helper/perplexity/index.html" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
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
