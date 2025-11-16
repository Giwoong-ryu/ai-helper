
const ComparisonTable = () => {
  return (
    <section id="comparison-table" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 mb-6">AI 어시스턴트 비교 한눈에 보기</h2>
      <div className="overflow-x-auto">
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-800">
                <th className="p-4 text-left border-b-2 border-slate-700 font-semibold w-[15%]">특성</th>
                <th className="p-4 text-left border-b-2 border-slate-700 font-semibold w-[28%]">Claude (Anthropic)</th>
                <th className="p-4 text-left border-b-2 border-slate-700 font-semibold w-[28%]">ChatGPT (OpenAI)</th>
                <th className="p-4 text-left border-b-2 border-slate-700 font-semibold w-[28%]">Gemini (Google)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-slate-700 font-semibold">💰 가격</td>
                <td className="p-4 border-b border-slate-700">
                  Free / Pro 약 3만원 / Max 약 14만원<br />
                  <span className="text-xs text-slate-400">월 구독 기준</span>
                </td>
                <td className="p-4 border-b border-slate-700">
                  Free / Plus 약 3만원 / Team 약 3.5만원/user<br />
                  <span className="text-xs text-slate-400">월 구독 기준</span>
                </td>
                <td className="p-4 border-b border-slate-700">
                  Free / Advanced 약 3만원 / Ultra (Workspace)<br />
                  <span className="text-xs text-slate-400">월 구독 기준</span>
                </td>
              </tr>
              <tr className="bg-slate-800">
                <td className="p-4 border-b border-slate-700 font-semibold">🧠 강점</td>
                <td className="p-4 border-b border-slate-700">
                  <strong className="text-green-400">✅ 긴 대화 맥락 유지</strong><br />
                  <strong className="text-green-400">✅ 한국어 지원 우수</strong><br />
                  <strong className="text-green-400">✅ 복잡한 작업 이해도</strong><br />
                  <strong className="text-green-400">✅ 200K 토큰 컨텍스트</strong><br />
                  <span className="text-xs text-slate-400">대규모 코드베이스 이해 우수</span>
                </td>
                <td className="p-4 border-b border-slate-700">
                  <strong className="text-green-400">✅ 가장 빠른 응답 속도</strong><br />
                  <strong className="text-green-400">✅ GPT Store 플러그인 생태계</strong><br />
                  <strong className="text-green-400">✅ 광범위한 지식베이스</strong><br />
                  <strong className="text-green-400">✅ DALL-E 이미지 생성</strong><br />
                  <span className="text-xs text-slate-400">가장 대중적, 커뮤니티 방대</span>
                </td>
                <td className="p-4 border-b border-slate-700">
                  <strong className="text-green-400">✅ Google 서비스 통합</strong><br />
                  <strong className="text-green-400">✅ 실시간 웹 검색</strong><br />
                  <strong className="text-green-400">✅ 이미지 생성 (AI Studio)</strong><br />
                  <strong className="text-green-400">✅ 무료 플랜 거의 무제한</strong><br />
                  <span className="text-xs text-slate-400">최신 정보 검색 최강</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-700 font-semibold">⚠️ 단점</td>
                <td className="p-4 border-b border-slate-700">
                  <strong className="text-red-400">❌ 토큰 비용 높음</strong><br />
                  <strong className="text-red-400">❌ 플러그인 생태계 부족</strong><br />
                  <strong className="text-red-400">❌ 이미지 생성 불가</strong><br />
                  <span className="text-xs text-slate-400">Pro/Max 플랜 고려 필요</span>
                </td>
                <td className="p-4 border-b border-slate-700">
                  <strong className="text-red-400">❌ 긴 맥락 유지 약함</strong><br />
                  <strong className="text-red-400">❌ 환각(Hallucination) 빈번</strong><br />
                  <strong className="text-red-400">❌ 무료 플랜 제한 심함</strong><br />
                  <span className="text-xs text-slate-400">대규모 프로젝트에서 약함</span>
                </td>
                <td className="p-4 border-b border-slate-700">
                  <strong className="text-red-400">❌ 창의성 부족</strong><br />
                  <strong className="text-red-400">❌ API 안정성 부족</strong><br />
                  <strong className="text-red-400">❌ 개발 도구 부족</strong><br />
                  <span className="text-xs text-slate-400">복잡한 작업에 약함</span>
                </td>
              </tr>
              <tr className="bg-slate-800">
                <td className="p-4 border-b border-slate-700 font-semibold">🎯 주요 용도</td>
                <td className="p-4 border-b border-slate-700">
                  복잡한 문서 작성, 긴 대화, 상세 분석, 코드 리팩토링
                </td>
                <td className="p-4 border-b border-slate-700">
                  빠른 답변, 간단한 작업, 학습, 이미지 생성
                </td>
                <td className="p-4 border-b border-slate-700">
                  최신 정보 검색, 리서치, Google 서비스 연동
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-700 font-semibold">🛠️ 자동화 도구</td>
                <td className="p-4 border-b border-slate-700">
                  <strong>Claude Code</strong><br />
                  <span className="text-xs text-slate-400">
                    Projects, Skills, Agents, Commands, MCP<br />
                    → 가장 체계적인 단계별 도구
                  </span>
                </td>
                <td className="p-4 border-b border-slate-700">
                  <strong>Custom GPTs</strong><br />
                  <span className="text-xs text-slate-400">
                    GPT Store, Plugins, DALL-E<br />
                    → 커뮤니티 생태계 방대
                  </span>
                </td>
                <td className="p-4 border-b border-slate-700">
                  <strong>Workspace 통합</strong><br />
                  <span className="text-xs text-slate-400">
                    Docs, Sheets, Gmail, Extensions<br />
                    → Google 생태계 편리
                  </span>
                </td>
              </tr>
              <tr className="bg-slate-800">
                <td className="p-4 border-b border-slate-700 font-semibold">🔧 도구 활용 특징</td>
                <td className="p-4 border-b border-slate-700">
                  <strong className="text-green-400">✅ 장점:</strong><br />
                  • 단계별 도구 체계 (0→3단계)<br />
                  • 전문 작업에 최적화<br />
                  • 세밀한 제어 가능<br />
                  <strong className="text-red-400 block mt-2">❌ 단점:</strong><br />
                  • 초기 학습 곡선 존재<br />
                  • CLI 설정 필요
                </td>
                <td className="p-4 border-b border-slate-700">
                  <strong className="text-green-400">✅ 장점:</strong><br />
                  • GPT Store 생태계 방대<br />
                  • 만들기 & 공유 쉬움<br />
                  • 이미지 생성 통합<br />
                  <strong className="text-red-400 block mt-2">❌ 단점:</strong><br />
                  • GPT 품질 편차 큼<br />
                  • 체계적 자동화 제한적
                </td>
                <td className="p-4 border-b border-slate-700">
                  <strong className="text-green-400">✅ 장점:</strong><br />
                  • Google 서비스 네이티브 연동<br />
                  • 별도 설정 불필요<br />
                  • 익숙한 인터페이스<br />
                  <strong className="text-red-400 block mt-2">❌ 단점:</strong><br />
                  • 도구 다양성 부족<br />
                  • 고급 자동화 어려움
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">✅ 이런 분께</td>
                <td className="p-4">
                  복잡한 업무, 전문 문서, 체계적 자동화가 필요한 분
                </td>
                <td className="p-4">
                  빠른 답변, 이미지 생성, 커뮤니티 GPT 활용
                </td>
                <td className="p-4">
                  최신 정보, Google 서비스 주사용자
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 p-6 bg-slate-800/50 rounded-lg border-l-4 border-purple-500">
          <h4 className="text-md font-semibold text-slate-50 mb-3 text-center">💡 결론</h4>
          <div className="text-sm text-slate-300 text-center">
            세 가지 모두 무료 플랜이 있으니 직접 테스트해보고 본인에게 맞는 도구를 선택하세요!<br />
            <strong className="text-slate-100">이 페이지는 Claude 효율적으로 사용하는 방법에 집중합니다.</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
