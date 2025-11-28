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
              <p className="text-sm text-slate-600 mt-1">실사용자 관점에서 정리한 AI 도구 비교 가이드</p>
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
            <div className="flex items-center justify-center py-8 bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">C</div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Claude</h3>
              <p className="text-base text-slate-600">긴 문서 작업의 최강자</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>200K 토큰 (책 1권 분량)</li>
                <li>지시사항 준수력 최고</li>
                <li>코드 리팩토링 특화</li>
                <li>Projects로 맥락 저장</li>
                <li>Artifacts로 실시간 미리보기</li>
              </ul>
              <a href="/ai-helper/claude/" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <div className="flex items-center justify-center py-8 bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold">G</div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">ChatGPT</h3>
              <p className="text-base text-slate-600">만능 도구 + 이미지 생성</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>DALL-E 이미지 생성</li>
                <li>GPTs 커스텀 봇</li>
                <li>Canvas 문서/코드 편집</li>
                <li>음성 대화 지원</li>
                <li>가장 큰 커뮤니티</li>
              </ul>
              <a href="/ai-helper/chatgpt/" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <div className="flex items-center justify-center py-8 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">G</div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Gemini</h3>
              <p className="text-base text-slate-600">Google 생태계 + 무료 혜자</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>무료로 거의 무제한</li>
                <li>Google 문서/시트 연동</li>
                <li>실시간 웹 검색 내장</li>
                <li>Canvas로 PT 즉석 생성</li>
                <li>YouTube 영상 요약</li>
              </ul>
              <a href="/ai-helper/gemini/" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <div className="flex items-center justify-center py-8 bg-gradient-to-br from-teal-50 to-teal-100">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl font-bold">P</div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Perplexity</h3>
              <p className="text-base text-slate-600">검색 특화 + 출처 명시</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>모든 답변에 출처 링크</li>
                <li>Deep Research 심층 분석</li>
                <li>실시간 최신 정보</li>
                <li>학술/뉴스 검색 특화</li>
                <li>Pro Search 심층 검색</li>
              </ul>
              <a href="/ai-helper/perplexity/" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
            </div>
          </div>
        </div>
      </section>
      {/* 주요 AI 도구 카드 끝 */}

      {/* 실사용자 불만사항 섹션 */}
      <section id="user-frustrations" className="mx-auto w-full max-w-screen-xl px-4 pb-8">
        <div className="rounded-2xl border bg-red-50/50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">😤 실사용자가 겪는 답답한 점</h2>
          <p className="text-sm text-slate-600 mb-6">성능 수치가 아닌, 실제로 사용할 때 부딪히는 문제들</p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Claude 불만사항 */}
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-orange-600 mb-3">Claude</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 &quot;짧게 써달라&quot;고 해도 또 길게 씀</li>
                <li>😩 갑자기 &quot;제가 할 수 없습니다&quot; 거부</li>
                <li>😩 무료 플랜 메시지 한도 금방 참</li>
                <li>😩 이미지 생성 기능 없음</li>
                <li>😩 웹 검색 기능 없음 (Pro도)</li>
                <li>😩 한국 결제 불편 (해외결제 필요)</li>
              </ul>
            </div>

            {/* ChatGPT 불만사항 */}
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-green-600 mb-3">ChatGPT</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 대화 길어지면 앞 내용 까먹음</li>
                <li>😩 없는 정보 자신있게 지어냄</li>
                <li>😩 무료는 GPT-4 사용량 제한 심함</li>
                <li>😩 DALL-E 이미지가 원하는대로 안나옴</li>
                <li>😩 GPTs 품질 천차만별</li>
                <li>😩 가끔 서버 느려지거나 다운</li>
              </ul>
            </div>

            {/* Gemini 불만사항 */}
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-blue-600 mb-3">Gemini</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 창의적인 글쓰기 밋밋함</li>
                <li>😩 복잡한 지시 이해 못할 때 많음</li>
                <li>😩 코딩은 Claude/GPT보다 약함</li>
                <li>😩 한국어 답변이 부자연스러울 때</li>
                <li>😩 이미지 생성 품질 불안정</li>
                <li>😩 캔버스 기능 아직 초기 단계</li>
              </ul>
            </div>

            {/* Perplexity 불만사항 */}
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <h3 className="font-semibold text-teal-600 mb-3">Perplexity</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 창작/글쓰기는 거의 못함</li>
                <li>😩 코딩 도움은 기대하지 말 것</li>
                <li>😩 무료 Pro Search 횟수 적음</li>
                <li>😩 한국어 소스 검색 약함</li>
                <li>😩 출처가 가끔 관련없는 링크</li>
                <li>😩 복잡한 분석/추론은 부족</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 도구 사용법 섹션 */}
      <section id="tools-usage" className="mx-auto w-full max-w-screen-xl px-4 pb-8">
        <div className="rounded-2xl border bg-blue-50/50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">🛠️ 도구별 사용법: 기본 vs 도구 활용</h2>
          <p className="text-sm text-slate-600 mb-6">각 AI의 내장 도구를 활용하면 할 수 있는 작업이 크게 달라집니다</p>

          <div className="space-y-6">
            {/* Claude 도구 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-orange-600 mb-4 text-lg">Claude 도구 활용</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">📝 기본 대화만 사용할 때</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 문서 요약, 번역, 교정</li>
                    <li>• 코드 작성 및 설명</li>
                    <li>• 아이디어 브레인스토밍</li>
                    <li>• 이메일/보고서 초안 작성</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">🚀 도구 활용할 때</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li><strong>Projects:</strong> 파일 업로드 후 맥락 유지하며 작업 (매번 설명 안해도 됨)</li>
                    <li><strong>Artifacts:</strong> HTML/코드/다이어그램 실시간 미리보기</li>
                    <li><strong>Styles:</strong> 나만의 답변 스타일 저장 (간결하게, 친근하게 등)</li>
                    <li><strong>Claude Code:</strong> 터미널에서 코딩 작업 자동화</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>💡 꿀팁:</strong> Projects에 회사 스타일 가이드 올려두면, 매번 &quot;우리 회사 톤앤매너로&quot; 안 해도 됨
                </p>
              </div>
            </div>

            {/* ChatGPT 도구 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-green-600 mb-4 text-lg">ChatGPT 도구 활용</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">📝 기본 대화만 사용할 때</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 질문 답변, 글쓰기</li>
                    <li>• 간단한 코드 작성</li>
                    <li>• 언어 번역</li>
                    <li>• 아이디어 제안</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">🚀 도구 활용할 때</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li><strong>DALL-E:</strong> &quot;~한 이미지 그려줘&quot; → 이미지 즉시 생성</li>
                    <li><strong>Canvas:</strong> 문서/코드를 옆 패널에서 직접 수정</li>
                    <li><strong>GPTs:</strong> 특정 용도 맞춤 봇 (번역봇, 논문봇, 마케팅봇 등)</li>
                    <li><strong>웹 브라우징:</strong> 실시간 정보 검색 (최신 뉴스, 가격 등)</li>
                    <li><strong>Code Interpreter:</strong> 엑셀/CSV 파일 분석, 그래프 생성</li>
                    <li><strong>음성 대화:</strong> 말로 대화하며 실시간 통역</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>💡 꿀팁:</strong> GPT Store에서 &quot;논문 요약&quot; 검색하면 학술 논문 전용 GPTs 바로 사용 가능
                </p>
              </div>
            </div>

            {/* Gemini 도구 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-600 mb-4 text-lg">Gemini 도구 활용</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">📝 기본 대화만 사용할 때</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 일반 질문 답변</li>
                    <li>• 실시간 웹 검색 (기본 내장)</li>
                    <li>• 간단한 글쓰기</li>
                    <li>• 이미지 설명/분석</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">🚀 도구 활용할 때</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li><strong>Canvas:</strong> PPT 슬라이드 즉석 생성 → Google Slides로 내보내기</li>
                    <li><strong>Gems:</strong> 나만의 커스텀 AI (글쓰기 코치, 코딩 튜터 등)</li>
                    <li><strong>Google 확장:</strong> Gmail 요약, YouTube 영상 요약</li>
                    <li><strong>Docs/Sheets 연동:</strong> 문서 안에서 바로 AI 활용</li>
                    <li><strong>이미지 생성:</strong> Imagen 모델로 이미지 생성</li>
                    <li><strong>Deep Research:</strong> 주제 심층 분석 보고서 생성</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 꿀팁:</strong> YouTube 영상 링크 붙여넣고 &quot;이 영상 3줄 요약해줘&quot; → 영상 안 봐도 핵심 파악
                </p>
              </div>
            </div>

            {/* Perplexity 도구 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-teal-600 mb-4 text-lg">Perplexity 도구 활용</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">📝 기본 검색만 사용할 때</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 빠른 정보 검색 + 출처 확인</li>
                    <li>• 최신 뉴스/이벤트 검색</li>
                    <li>• 간단한 팩트 체크</li>
                    <li>• 제품 비교 검색</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">🚀 도구 활용할 때</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li><strong>Pro Search:</strong> 여러 단계 추론 필요한 복잡한 질문</li>
                    <li><strong>Deep Research:</strong> 30+ 소스 분석한 심층 보고서 (5-10분 소요)</li>
                    <li><strong>Focus 모드:</strong> Academic(학술), Writing(글쓰기), YouTube 등 선택</li>
                    <li><strong>Collections:</strong> 주제별 검색 결과 정리/저장</li>
                    <li><strong>Pages:</strong> 검색 결과로 공유 가능한 문서 생성</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                <p className="text-sm text-teal-800">
                  <strong>💡 꿀팁:</strong> Deep Research로 &quot;2024 전기차 시장 동향&quot; 검색하면 보고서급 문서가 나옴
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
              <h2 className="text-xl font-semibold text-slate-900">📊 한눈에 비교: 어떤 AI를 언제 쓸까?</h2>
              <p className="mt-1 text-sm text-slate-600">
                작업 유형별 추천 AI와 사용할 도구
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
                    📄 긴 문서 작업
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
                    🎨 이미지 생성
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-green-600 font-medium">ChatGPT</span> 1순위<br />
                    <span className="text-xs text-slate-500">DALL-E 3 품질 가장 좋음</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    DALL-E
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    블로그 썸네일, SNS 이미지, 로고 시안, 제품 목업
                  </td>
                </tr>

                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    🔍 정보 검색
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

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    📊 PPT 만들기
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

                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    💻 코드 작성
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-orange-600 font-medium">Claude</span> 1순위<br />
                    <span className="text-xs text-slate-500">GPT도 준수함</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    Artifacts / Canvas
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    함수 작성, 버그 수정, 리팩토링, 테스트 코드 생성
                  </td>
                </tr>

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    🤖 반복 업무 자동화
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

                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    📈 데이터 분석
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

                <tr className="bg-muted/40">
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    🎥 영상 요약
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    <span className="text-blue-600 font-medium">Gemini</span> 1순위<br />
                    <span className="text-xs text-slate-500">YouTube 링크만 주면 됨</span>
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    YouTube 확장
                  </td>
                  <td className="border-t px-4 py-3 align-top text-sm text-slate-800">
                    강의 영상 요약, 컨퍼런스 핵심 정리, 리뷰 영상 요점 파악
                  </td>
                </tr>

                <tr>
                  <td className="border-t px-4 py-3 text-sm font-semibold text-slate-900 align-top">
                    🗣️ 실시간 통역
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
