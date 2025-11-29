import Link from "next/link";
import { FileText, Search, Zap, Image, Code, MessageSquare, BarChart3, Video, Mic, Presentation, AlertTriangle, Lightbulb, Wrench, Bot, Terminal, Plug } from "lucide-react";

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

      {/* 주요 AI 도구 카드 - 색상+아이콘 추가 */}
      <section id="ai-tools" className="mx-auto w-full max-w-screen-xl px-4 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Claude - 오렌지 */}
          <Link href="/claude/" className="block bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-5 transition hover:border-orange-400 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-slate-900">Claude</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">Claude Code 완전 정복 가이드</p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• 스킬셋 37개 - AI 자동화 스킬</li>
              <li>• Commands 17개 - 슬래시 커맨드</li>
              <li>• Agents 60개 - 전문 분야별 AI</li>
              <li>• MCP - 외부 시스템 연동</li>
              <li>• Plugins 10개 - 공식 플러그인</li>
            </ul>
          </Link>

          {/* ChatGPT - 그린 */}
          <Link href="/chatgpt/" className="block bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 transition hover:border-green-400 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-5 h-5 text-green-600" />
              <h3 className="text-xl font-semibold text-slate-900">ChatGPT</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">만능 도구 + 영상 생성</p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• GPT-5.1 - 최신 모델</li>
              <li>• Sora 2 영상 생성 (신규!)</li>
              <li>• GPTs 커스텀 봇</li>
              <li>• Canvas 문서/코드 편집</li>
              <li>• 가장 큰 커뮤니티</li>
            </ul>
          </Link>

          {/* Gemini - 블루/퍼플 */}
          <Link href="/gemini/" className="block bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-5 transition hover:border-blue-400 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <Image className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-slate-900">Gemini</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">Gemini 3 + 이미지 혁신</p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• Gemini 3 - 최신 모델 출시!</li>
              <li>• Imagen 3 - 이미지 품질 1위</li>
              <li>• 월 6.5억 사용자</li>
              <li>• Canvas로 PT 즉석 생성</li>
              <li>• Gemini Agent 자동화</li>
            </ul>
          </Link>

          {/* Perplexity - 틸 */}
          <Link href="/perplexity/" className="block bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-5 transition hover:border-teal-400 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-teal-600" />
              <h3 className="text-xl font-semibold text-slate-900">Perplexity</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">검색 특화 + Comet 브라우저</p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• 모든 답변에 출처 링크</li>
              <li>• Comet 브라우저 (신규!)</li>
              <li>• Sora 2 Pro 영상 생성</li>
              <li>• Deep Research 심층 분석</li>
              <li>• 특허 검색 Patents 출시</li>
            </ul>
          </Link>
        </div>
      </section>

      {/* AI 비교표 - 메인페이지로 이동 */}
      <section id="ai-comparison" className="mx-auto w-full max-w-screen-xl px-4 pb-8">
        <div className="rounded-2xl border bg-card/50 p-6 shadow-sm backdrop-blur">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">🤖 AI 어시스턴트 비교</h2>
          <p className="text-sm text-slate-600 mb-4">Claude vs ChatGPT vs Gemini - 나에게 맞는 AI 도구 찾기</p>
          <div className="overflow-x-auto rounded-xl border bg-background/60">
            <table className="min-w-full border-collapse text-sm">
              <thead className="bg-muted/60">
                <tr>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase text-slate-500 w-24">특성</th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase text-orange-600">Claude</th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase text-green-600">ChatGPT</th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase text-blue-600">Gemini</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-2 font-medium text-slate-700">가격</td>
                  <td className="border-t px-4 py-2 text-slate-600">무료 / Pro $20 / Max $100</td>
                  <td className="border-t px-4 py-2 text-slate-600">무료 / Plus $20 / Pro $200</td>
                  <td className="border-t px-4 py-2 text-slate-600">무료 / Advanced $20 / Ultra $250</td>
                </tr>
                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-2 font-medium text-slate-700">강점</td>
                  <td className="border-t px-4 py-2 text-slate-600">코딩 1위, 200K 토큰, 지시 준수</td>
                  <td className="border-t px-4 py-2 text-slate-600">만능, Sora 영상, 큰 커뮤니티</td>
                  <td className="border-t px-4 py-2 text-slate-600">Imagen 이미지, Google 연동</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-medium text-slate-700">약점</td>
                  <td className="border-t px-4 py-2 text-slate-600">웹검색X, 이미지X</td>
                  <td className="border-t px-4 py-2 text-slate-600">할루시네이션, 맥락 손실</td>
                  <td className="border-t px-4 py-2 text-slate-600">창의성 부족, 코딩 약함</td>
                </tr>
                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-2 font-medium text-slate-700">주요 도구</td>
                  <td className="border-t px-4 py-2 text-slate-600">Skills, Agents, Commands, MCP</td>
                  <td className="border-t px-4 py-2 text-slate-600">GPTs, Sora, DALL-E, Canvas</td>
                  <td className="border-t px-4 py-2 text-slate-600">Imagen, Gems, Canvas, Agent</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-medium text-slate-700">추천 용도</td>
                  <td className="border-t px-4 py-2 text-orange-600 font-medium">코딩, 긴 문서, 복잡한 작업</td>
                  <td className="border-t px-4 py-2 text-green-600 font-medium">영상 생성, 데이터 분석, 통역</td>
                  <td className="border-t px-4 py-2 text-blue-600 font-medium">이미지 생성, PPT, 검색</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 실사용자 불만사항 섹션 */}
      <section id="user-frustrations" className="mx-auto w-full max-w-screen-xl px-4 pb-8">
        <div className="rounded-2xl border bg-red-50/50 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="text-xl font-semibold text-slate-900">실사용자가 겪는 답답한 점</h2>
          </div>
          <p className="text-sm text-slate-600 mb-6">성능 수치가 아닌, 실제로 사용할 때 부딪히는 문제들</p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-orange-600 mb-3">Claude</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> &quot;짧게 써달라&quot;고 해도 또 길게 씀</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 갑자기 &quot;제가 할 수 없습니다&quot; 거부</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 무료 플랜 메시지 한도 금방 참</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 이미지 생성 기능 없음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 웹 검색 기능 없음 (Pro도)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-green-600 mb-3">ChatGPT</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 대화 길어지면 앞 내용 까먹음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 없는 정보 자신있게 지어냄</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 무료는 GPT-5.1 사용량 제한 심함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> DALL-E 이미지가 원하는대로 안나옴</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Sora 영상 생성 대기 시간 김</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-blue-600 mb-3">Gemini</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 창의적인 글쓰기 밋밋함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 복잡한 지시 이해 못할 때 많음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 코딩은 Claude/GPT보다 약함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 한국어 답변이 부자연스러울 때</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> AI Ultra 구독료 비쌈</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-teal-600 mb-3">Perplexity</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 창작/글쓰기는 거의 못함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 코딩 도움은 기대하지 말 것</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 무료 Pro Search 횟수 적음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 한국어 소스 검색 약함</li>
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
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-orange-600 mb-4 text-lg">Claude 도구 활용</h3>
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
                    <li><strong>Projects:</strong> 파일 업로드 후 맥락 유지하며 작업</li>
                    <li><strong>Artifacts:</strong> HTML/코드/다이어그램 실시간 미리보기</li>
                    <li><strong>Styles:</strong> 나만의 답변 스타일 저장</li>
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

            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-green-600 mb-4 text-lg">ChatGPT 도구 활용</h3>
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
                    <li><strong>GPTs:</strong> 특정 용도 맞춤 봇</li>
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

            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-600 mb-4 text-lg">Gemini 도구 활용</h3>
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
                    <li><strong>Canvas:</strong> PPT 슬라이드 즉석 생성</li>
                    <li><strong>Gemini Agent:</strong> 복잡한 작업 자동화</li>
                    <li><strong>Gems:</strong> 나만의 커스텀 AI</li>
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

            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-teal-600 mb-4 text-lg">Perplexity 도구 활용</h3>
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
                    <li><strong>Comet 브라우저:</strong> AI 기반 웹 브라우저</li>
                    <li><strong>Sora 2 Pro:</strong> 영상 생성 (Max 구독자)</li>
                    <li><strong>Deep Research:</strong> 30+ 소스 분석 심층 보고서</li>
                    <li><strong>Patents:</strong> AI 특허 검색 에이전트</li>
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
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 w-36">작업 유형</th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">추천 AI</th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">사용할 도구</th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">구체적 활용 예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-slate-500" />긴 문서 작업</div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-orange-600 font-medium">Claude</span> 1순위<br /><span className="text-xs text-slate-500">200K 토큰으로 책 1권도 가능</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">Projects + Artifacts</td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">계약서 검토, 논문 분석, 매뉴얼 작성</td>
                </tr>
                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2"><Image className="w-4 h-4 text-slate-500" />이미지 생성</div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-blue-600 font-medium">Gemini</span> 1순위<br /><span className="text-xs text-slate-500">Imagen 3 - 사실적 이미지 최고</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">Imagen 3</td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">사진급 이미지, 제품 목업</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" />영상 생성</div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-green-600 font-medium">ChatGPT</span> / <span className="text-teal-600 font-medium">Perplexity</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">Sora 2 / Sora 2 Pro</td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">숏폼 영상, 제품 홍보 클립</td>
                </tr>
                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2"><Search className="w-4 h-4 text-slate-500" />정보 검색</div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-teal-600 font-medium">Perplexity</span> 1순위<br /><span className="text-xs text-slate-500">출처 링크 자동 제공</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">Pro Search / Deep Research</td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">시장 조사, 경쟁사 분석</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2"><Code className="w-4 h-4 text-slate-500" />코드 작성</div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-orange-600 font-medium">Claude</span> 1순위<br /><span className="text-xs text-slate-500">Sonnet 4.5 - 코딩 벤치마크 1위</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">Artifacts / Claude Code</td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">함수 작성, 버그 수정, 리팩토링</td>
                </tr>
                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2"><Presentation className="w-4 h-4 text-slate-500" />PPT 만들기</div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-blue-600 font-medium">Gemini</span> 1순위<br /><span className="text-xs text-slate-500">Google Slides 바로 연동</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">Canvas → Slides 내보내기</td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">회의 발표자료, 제안서</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    <div className="flex items-center gap-2"><Mic className="w-4 h-4 text-slate-500" />실시간 통역</div>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-green-600 font-medium">ChatGPT</span> 1순위<br /><span className="text-xs text-slate-500">음성 모드 가장 자연스러움</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">Voice Mode</td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">외국인과 대화, 여행 중 통역</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Made with <span className="text-purple-500">♥</span> by <a href="https://github.com/Giwoong-ryu" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-foreground transition-colors">Giwoong Ryu</a></p>
          <p className="mt-2">© 2025 AI Helper. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
