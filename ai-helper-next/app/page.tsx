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

      <section id="ai-tools-compare" className="mx-auto w-full max-w-screen-xl px-4 pb-12">
        <div className="rounded-2xl border bg-card/50 p-6 shadow-sm backdrop-blur">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">GPT · Claude · Gemini 비교 요약</h2>
              <p className="mt-1 text-sm text-slate-600">
                각 도구의 가격, 강점·단점, 추천 상황을 한 번에 비교할 수 있는 표입니다.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border bg-background/60">
            <table className="min-w-full border-collapse text-sm leading-relaxed">
              <thead className="bg-muted/60">
                <tr>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 w-24">
                    특성
                  </th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 w-1/3">
                    Claude (Anthropic)
                  </th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 w-1/3">
                    ChatGPT (OpenAI)
                  </th>
                  <th className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 w-1/3">
                    Gemini (Google)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    💰 가격
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Free / Pro 약 3만원 / Max 약 14만원<br />
                    <span className="text-xs text-slate-500">월 구독 기준</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Free / Plus 약 3만원 / Team 약 3.5만원 / 사용자<br />
                    <span className="text-xs text-slate-500">월 구독 기준</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Free / Advanced 약 3만원 / Ultra (Workspace)<br />
                    <span className="text-xs text-slate-500">월 구독 기준</span>
                  </td>
                </tr>

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    🌟 강점
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    ✅ 긴 대화 맥락 유지<br />
                    ✅ 한국어 지원 우수<br />
                    ✅ 복잡한 작업 이해도<br />
                    ✅ 200K 토큰 컨텍스트<br />
                    <span className="text-xs text-slate-500">대규모 코드베이스 이해 우수</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    ✅ 가장 빠른 응답 속도<br />
                    ✅ GPT Store 플러그인 생태계<br />
                    ✅ 광범위한 지식베이스<br />
                    ✅ DALL·E 이미지 생성<br />
                    <span className="text-xs text-slate-500">가장 대중적, 커뮤니티 방대</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    ✅ Google 서비스 통합<br />
                    ✅ 실시간 웹 검색<br />
                    ✅ 이미지 생성 (AI Studio)<br />
                    ✅ 무료 플랜 거의 무제한<br />
                    <span className="text-xs text-slate-500">최신 정보 검색 최강</span>
                  </td>
                </tr>

                <tr className="">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    ⚠️ 단점
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    ❌ 토큰 비용 높음<br />
                    ❌ 플러그인 생태계 부족<br />
                    ❌ 이미지 생성 불가<br />
                    <span className="text-xs text-slate-500">Pro/Max 플랜 고려 필요</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    ❌ 긴 맥락 유지 약함<br />
                    ❌ 환각(Hallucination) 빈번<br />
                    ❌ 무료 플랜 제한 심함<br />
                    <span className="text-xs text-slate-500">대규모 프로젝트에서 약함</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    ❌ 창의성 부족<br />
                    ❌ API 안정성 부족<br />
                    ❌ 개발 도구 부족<br />
                    <span className="text-xs text-slate-500">복잡한 작업에 약함</span>
                  </td>
                </tr>

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    🎯 주요 용도
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    복잡한 문서 작성, 긴 대화, 상세 분석, 코드 리팩토링
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    빠른 답변, 이미지 생성, 커뮤니티 GPT를 활용하고 싶은 분
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    최신 정보 검색, 리서치, Google 서비스 연동
                  </td>
                </tr>

                <tr className="">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    🛠️ 자동화 도구
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Claude Code Projects, Skills, Agents, Commands, MCP<br />
                    <span className="text-xs text-slate-500">가장 체계적인 단계별 도구</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Custom GPTs, GPT Store, Plugins, DALL·E<br />
                    <span className="text-xs text-slate-500">커뮤니티 생태계 방대</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Workspace 통합 (Docs, Sheets, Gmail, Extensions)<br />
                    <span className="text-xs text-slate-500">Google 생태계 편리</span>
                  </td>
                </tr>

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    🔧 도구 활용 특징
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    ✅ 장점: 단계별 도구 체계 (0→3단계), 전문 작업 최적화, 세밀한 제어 가능<br />
                    ❌ 단점: 초기 학습 곡선, CLI 설정 필요
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    ✅ 장점: GPT Store 생태계, 만들기·공유 쉬움, 이미지 생성 통합<br />
                    ❌ 단점: GPT 품질 편차, 체계적 자동화 한계
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    ✅ 장점: Google 네이티브 연동, 별도 설정 불필요, 익숙한 인터페이스<br />
                    ❌ 단점: 도구 다양성 부족, 고급 자동화 어려움
                  </td>
                </tr>

                <tr className="">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    ✅ 이런 분께
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    복잡한 업무, 전문 문서, 체계적 자동화가 필요한 분
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    빠른 답변, 이미지 생성, 커뮤니티 GPT를 활용하고 싶은 분
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    최신 정보와 Google 서비스를 자주 쓰는 분
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
