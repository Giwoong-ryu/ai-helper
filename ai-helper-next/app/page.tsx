import Link from "next/link";
import { FileText, Search, Zap, Image, Code, MessageSquare, BarChart3, Video, Mic, Presentation, AlertTriangle, Lightbulb, Wrench } from "lucide-react";

// Small icons for inline use
const ClaudeIconSmall = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5">
    <circle cx="50" cy="50" r="46" fill="#A855F7" />
  </svg>
);
const ChatGPTIconSmall = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5">
    <circle cx="50" cy="50" r="46" fill="#10B981" />
  </svg>
);
const GeminiIconSmall = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5">
    <defs><linearGradient id="gemSmall" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#A855F7" /></linearGradient></defs>
    <circle cx="50" cy="50" r="46" fill="url(#gemSmall)" />
  </svg>
);
const PerplexityIconSmall = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5">
    <circle cx="50" cy="50" r="46" fill="#06B6D4" />
  </svg>
);

// Clean vector icons for AI tools
const ClaudeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <circle cx="50" cy="50" r="46" fill="#A855F7" />
    <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="4" />
    <circle cx="50" cy="50" r="8" fill="white" />
  </svg>
);

const ChatGPTLogo = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <circle cx="50" cy="50" r="46" fill="#10B981" />
    <path d="M50 25 L70 40 L70 60 L50 75 L30 60 L30 40 Z" fill="none" stroke="white" strokeWidth="4" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="6" fill="white" />
  </svg>
);

const GeminiLogo = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <defs>
      <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
    </defs>
    <circle cx="38" cy="50" r="28" fill="#3B82F6" />
    <circle cx="62" cy="50" r="28" fill="#A855F7" opacity="0.85" />
  </svg>
);

const PerplexityLogo = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <circle cx="50" cy="50" r="46" fill="#06B6D4" />
    <circle cx="44" cy="44" r="14" fill="none" stroke="white" strokeWidth="4" />
    <line x1="54" y1="54" x2="68" y2="68" stroke="white" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">AI 도구 활용법</h1>
              <p className="text-sm text-slate-600 mt-1">2025년 11월 기준 실사용자 관점 AI 도구 비교 가이드</p>
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
          <Link href="/ai-helper/claude/" className="block w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50 hover:border-orange-300 hover:shadow-lg cursor-pointer">
            <div className="flex items-center justify-center py-8 bg-gradient-to-br from-orange-50 to-orange-100">
              <ClaudeLogo />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Claude</h3>
              <p className="text-base text-slate-600">긴 문서 작업의 최강자</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>200K 토큰 (책 1권 분량)</li>
                <li>Sonnet 4.5 - 최고 코딩 모델</li>
                <li>지시사항 준수력 최고</li>
                <li>Projects로 맥락 저장</li>
                <li>Artifacts로 실시간 미리보기</li>
              </ul>
              <span className="inline-flex items-center text-indigo-500">자세히 보기 →</span>
            </div>
          </Link>

          <Link href="/ai-helper/chatgpt/" className="block w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50 hover:border-green-300 hover:shadow-lg cursor-pointer">
            <div className="flex items-center justify-center py-8 bg-gradient-to-br from-green-50 to-green-100">
              <ChatGPTLogo />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">ChatGPT</h3>
              <p className="text-base text-slate-600">만능 도구 + 영상 생성</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>GPT-5.1 - 최신 모델</li>
                <li>Sora 2 영상 생성 (신규!)</li>
                <li>GPTs 커스텀 봇</li>
                <li>Canvas 문서/코드 편집</li>
                <li>가장 큰 커뮤니티</li>
              </ul>
              <span className="inline-flex items-center text-indigo-500">자세히 보기 →</span>
            </div>
          </Link>

          <Link href="/ai-helper/gemini/" className="block w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50 hover:border-blue-300 hover:shadow-lg cursor-pointer">
            <div className="flex items-center justify-center py-8 bg-gradient-to-br from-blue-50 to-purple-100">
              <GeminiLogo />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Gemini</h3>
              <p className="text-base text-slate-600">Gemini 3 + 이미지 혁신</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>Gemini 3 - 최신 모델 출시!</li>
                <li>Imagen 3 - 이미지 품질 1위</li>
                <li>월 6.5억 사용자</li>
                <li>Canvas로 PT 즉석 생성</li>
                <li>Gemini Agent 자동화</li>
              </ul>
              <span className="inline-flex items-center text-indigo-500">자세히 보기 →</span>
            </div>
          </Link>

          <Link href="/ai-helper/perplexity/" className="block w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50 hover:border-teal-300 hover:shadow-lg cursor-pointer">
            <div className="flex items-center justify-center py-8 bg-gradient-to-br from-teal-50 to-teal-100">
              <PerplexityLogo />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Perplexity</h3>
              <p className="text-base text-slate-600">검색 특화 + Comet 브라우저</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>모든 답변에 출처 링크</li>
                <li>Comet 브라우저 (신규!)</li>
                <li>Sora 2 Pro 영상 생성</li>
                <li>Deep Research 심층 분석</li>
                <li>특허 검색 Patents 출시</li>
              </ul>
              <span className="inline-flex items-center text-indigo-500">자세히 보기 →</span>
            </div>
          </Link>
        </div>
      </section>
      {/* 주요 AI 도구 카드 끝 */}

      {/* 실사용자 불만사항 섹션 */}
      <section id="user-frustrations" className="mx-auto w-full max-w-screen-xl px-4 pb-8">
        <div className="rounded-2xl border bg-red-50/50 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="text-xl font-semibold text-slate-900">실사용자가 겪는 답답한 점</h2>
          </div>
          <p className="text-sm text-slate-600 mb-6">성능 수치가 아닌, 실제로 사용할 때 부딪히는 문제들</p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Claude 불만사항 */}
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-orange-600 mb-3 flex items-center gap-2">
                <ClaudeIconSmall />
                Claude
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> &quot;짧게 써달라&quot;고 해도 또 길게 씀</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 갑자기 &quot;제가 할 수 없습니다&quot; 거부</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 무료 플랜 메시지 한도 금방 참</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 이미지 생성 기능 없음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 웹 검색 기능 없음 (Pro도)</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 한국 결제 불편 (해외결제 필요)</li>
              </ul>
            </div>

            {/* ChatGPT 불만사항 */}
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                <ChatGPTIconSmall />
                ChatGPT
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 대화 길어지면 앞 내용 까먹음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 없는 정보 자신있게 지어냄</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 무료는 GPT-5.1 사용량 제한 심함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> DALL-E 이미지가 원하는대로 안나옴</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> GPTs 품질 천차만별</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Sora 영상 생성 대기 시간 김</li>
              </ul>
            </div>

            {/* Gemini 불만사항 */}
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                <GeminiIconSmall />
                Gemini
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 창의적인 글쓰기 밋밋함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 복잡한 지시 이해 못할 때 많음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 코딩은 Claude/GPT보다 약함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 한국어 답변이 부자연스러울 때</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Gemini Agent 아직 미국만</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> AI Ultra 구독료 비쌈</li>
              </ul>
            </div>

            {/* Perplexity 불만사항 */}
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-teal-600 mb-3 flex items-center gap-2">
                <PerplexityIconSmall />
                Perplexity
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 창작/글쓰기는 거의 못함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 코딩 도움은 기대하지 말 것</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 무료 Pro Search 횟수 적음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 한국어 소스 검색 약함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 출처가 가끔 관련없는 링크</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Comet 브라우저 아직 초기 단계</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 도구 사용법 섹션 */}
      <section id="tools-usage" className="mx-auto w-full max-w-screen-xl px-4 pb-8">
        <div className="rounded-2xl border bg-blue-50/50 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold text-slate-900">도구별 사용법: 기본 vs 도구 활용</h2>
          </div>
          <p className="text-sm text-slate-600 mb-6">각 AI의 내장 도구를 활용하면 할 수 있는 작업이 크게 달라집니다</p>

          <div className="space-y-6">
            {/* Claude 도구 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-orange-600 mb-4 text-lg flex items-center gap-2">
                <ClaudeIconSmall />
                Claude 도구 활용
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    기본 대화만 사용할 때
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 문서 요약, 번역, 교정</li>
                    <li>• 코드 작성 및 설명</li>
                    <li>• 아이디어 브레인스토밍</li>
                    <li>• 이메일/보고서 초안 작성</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-500" />
                    도구 활용할 때
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li><strong>Projects:</strong> 파일 업로드 후 맥락 유지하며 작업 (매번 설명 안해도 됨)</li>
                    <li><strong>Artifacts:</strong> HTML/코드/다이어그램 실시간 미리보기</li>
                    <li><strong>Styles:</strong> 나만의 답변 스타일 저장 (간결하게, 친근하게 등)</li>
                    <li><strong>Claude Code:</strong> 터미널에서 코딩 작업 자동화</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>꿀팁:</strong> Sonnet 4.5가 코딩 1위! Projects에 코드베이스 올려두고 리팩토링 시키면 진짜 좋음</span>
                </p>
              </div>
            </div>

            {/* ChatGPT 도구 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-green-600 mb-4 text-lg flex items-center gap-2">
                <ChatGPTIconSmall />
                ChatGPT 도구 활용
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    기본 대화만 사용할 때
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 질문 답변, 글쓰기</li>
                    <li>• 간단한 코드 작성</li>
                    <li>• 언어 번역</li>
                    <li>• 아이디어 제안</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    도구 활용할 때
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li><strong>Sora 2:</strong> 텍스트로 영상 생성 (12초, 1080p)</li>
                    <li><strong>GPT-5.1 이미지:</strong> 네이티브 이미지 생성 기능</li>
                    <li><strong>Canvas:</strong> 문서/코드를 옆 패널에서 직접 수정</li>
                    <li><strong>GPTs:</strong> 특정 용도 맞춤 봇 (번역봇, 논문봇 등)</li>
                    <li><strong>o4-mini:</strong> 수학/코딩 추론 특화 모델</li>
                    <li><strong>음성 대화:</strong> 말로 대화하며 실시간 통역</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>꿀팁:</strong> Sora 2로 12초 영상 생성 가능! Plus는 50회/월, Pro는 무제한</span>
                </p>
              </div>
            </div>

            {/* Gemini 도구 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-600 mb-4 text-lg flex items-center gap-2">
                <GeminiIconSmall />
                Gemini 도구 활용
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    기본 대화만 사용할 때
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 일반 질문 답변</li>
                    <li>• 실시간 웹 검색 (기본 내장)</li>
                    <li>• 간단한 글쓰기</li>
                    <li>• 이미지 설명/분석</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    도구 활용할 때
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li><strong>Imagen 3:</strong> 사진급 이미지 생성 (현재 품질 1위!)</li>
                    <li><strong>Canvas:</strong> PPT 슬라이드 즉석 생성 → Google Slides로 내보내기</li>
                    <li><strong>Gemini Agent:</strong> 복잡한 작업 자동화 (웹 브라우징 포함)</li>
                    <li><strong>Gems:</strong> 나만의 커스텀 AI (글쓰기 코치, 코딩 튜터 등)</li>
                    <li><strong>Deep Think:</strong> 복잡한 추론 문제 해결</li>
                    <li><strong>YouTube 확장:</strong> 영상 링크만 주면 요약</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>꿀팁:</strong> Imagen 3가 사진 퀄리티 최고! &quot;사실적인 스타일로&quot; 붙이면 DALL-E보다 훨씬 좋음</span>
                </p>
              </div>
            </div>

            {/* Perplexity 도구 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-teal-600 mb-4 text-lg flex items-center gap-2">
                <PerplexityIconSmall />
                Perplexity 도구 활용
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    기본 검색만 사용할 때
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 빠른 정보 검색 + 출처 확인</li>
                    <li>• 최신 뉴스/이벤트 검색</li>
                    <li>• 간단한 팩트 체크</li>
                    <li>• 제품 비교 검색</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-teal-500" />
                    도구 활용할 때
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li><strong>Comet 브라우저:</strong> AI 기반 웹 브라우저 + 멀티탭 작업</li>
                    <li><strong>Sora 2 Pro:</strong> 영상 생성 (Max 구독자)</li>
                    <li><strong>Deep Research:</strong> 30+ 소스 분석한 심층 보고서</li>
                    <li><strong>Patents:</strong> AI 특허 검색 에이전트 (신규!)</li>
                    <li><strong>Sports/Finance:</strong> 실시간 스포츠/주식/정치인 거래 추적</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                <p className="text-sm text-teal-800 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>꿀팁:</strong> Max 구독하면 Sora 2 Pro로 영상 생성 + GPT-5.1 접근 가능!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 비교 테이블 */}
      <section id="ai-tools-compare" className="mx-auto w-full max-w-screen-xl px-4 pb-12">
        <div className="rounded-2xl border bg-card/50 p-6 shadow-sm backdrop-blur">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BarChart3 className="w-5 h-5 text-purple-500" />
                <h2 className="text-xl font-semibold text-slate-900">한눈에 비교: 어떤 AI를 언제 쓸까?</h2>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                작업 유형별 추천 AI와 사용할 도구 (2025년 11월 기준)
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border bg-background/60">
            <table className="min-w-full border-collapse text-sm leading-relaxed">
              <thead className="bg-muted/60">
                <tr>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 w-36">
                    작업 유형
                  </th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    추천 AI
                  </th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    사용할 도구
                  </th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    구체적 활용 예시
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-500" />
                      긴 문서 작업
                    </div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-orange-600 font-medium">Claude</span> 1순위<br />
                    <span className="text-xs text-slate-500">200K 토큰으로 책 1권도 가능</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Projects + Artifacts
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    계약서 검토, 논문 분석, 매뉴얼 작성, 코드베이스 전체 리팩토링
                  </td>
                </tr>

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <Image className="w-4 h-4 text-slate-500" />
                      이미지 생성
                    </div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-blue-600 font-medium">Gemini</span> 1순위<br />
                    <span className="text-xs text-slate-500">Imagen 3 - 사실적 이미지 최고</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Imagen 3
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    사진급 이미지, 제품 목업, 인물 사진 (DALL-E보다 사실적)
                  </td>
                </tr>

                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-slate-500" />
                      영상 생성
                    </div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-green-600 font-medium">ChatGPT</span> / <span className="text-teal-600 font-medium">Perplexity</span><br />
                    <span className="text-xs text-slate-500">Sora 2 Pro (1080p, 12초)</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Sora 2 / Sora 2 Pro
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    숏폼 영상, 제품 홍보 클립, SNS 콘텐츠
                  </td>
                </tr>

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-slate-500" />
                      정보 검색
                    </div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-teal-600 font-medium">Perplexity</span> 1순위<br />
                    <span className="text-xs text-slate-500">출처 링크 자동 제공</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Pro Search / Deep Research
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    시장 조사, 경쟁사 분석, 논문 검색, 최신 뉴스 정리
                  </td>
                </tr>

                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <Presentation className="w-4 h-4 text-slate-500" />
                      PPT 만들기
                    </div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-blue-600 font-medium">Gemini</span> 1순위<br />
                    <span className="text-xs text-slate-500">Google Slides 바로 연동</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Canvas → Slides 내보내기
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    회의 발표자료, 제안서, 강의 슬라이드 초안
                  </td>
                </tr>

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-slate-500" />
                      코드 작성
                    </div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-orange-600 font-medium">Claude</span> 1순위<br />
                    <span className="text-xs text-slate-500">Sonnet 4.5 - 코딩 벤치마크 1위</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Artifacts / Claude Code
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    함수 작성, 버그 수정, 리팩토링, 테스트 코드 생성
                  </td>
                </tr>

                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-slate-500" />
                      반복 업무 자동화
                    </div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-green-600 font-medium">ChatGPT</span> GPTs<br />
                    <span className="text-blue-600 font-medium">Gemini</span> Gems
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    GPTs / Gems 커스텀 봇
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    이메일 초안 봇, 번역 봇, 회의록 정리 봇, 고객응대 봇
                  </td>
                </tr>

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-slate-500" />
                      데이터 분석
                    </div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-green-600 font-medium">ChatGPT</span> 1순위<br />
                    <span className="text-xs text-slate-500">엑셀 업로드 바로 분석</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Code Interpreter
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    매출 데이터 분석, 그래프 생성, 트렌드 파악, 보고서 생성
                  </td>
                </tr>

                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-slate-500" />
                      실시간 통역
                    </div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-green-600 font-medium">ChatGPT</span> 1순위<br />
                    <span className="text-xs text-slate-500">음성 모드 가장 자연스러움</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Voice Mode
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    외국인과 대화, 여행 중 통역, 발음 교정
                  </td>
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
            Made with{" "}
            <span className="text-purple-500">♥</span> by{" "}
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
