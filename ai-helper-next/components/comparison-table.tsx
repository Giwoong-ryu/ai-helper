
const ComparisonTable = () => {
  return (
    <section id="comparison-table" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-4">AI 어시스턴트 비교 한눈에 보기</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">모델</th>
              <th className="px-4 py-3">강점</th>
              <th className="px-4 py-3">추천 상황</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium text-emerald-500">Claude</td>
              <td className="px-4 py-3">정확한 구조화, 팀 매뉴얼·자동화 설계</td>
              <td className="px-4 py-3">정형화된 문서/코드 중심 또는 자동화가 핵심일 때</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-sky-500">GPT (ChatGPT)</td>
              <td className="px-4 py-3">창의적 아이디어·프롬프트 실험</td>
              <td className="px-4 py-3">아이디어 발산·글쓰기·기획 중심 작업</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-cyan-500">Gemini</td>
              <td className="px-4 py-3">멀티모달·Google 생태계 통합</td>
              <td className="px-4 py-3">이미지/문서/영상 등 다양한 입력을 처리할 때</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-indigo-500">Perplexity</td>
              <td className="px-4 py-3">실시간 검색·리서치 중심 탐색 도구</td>
              <td className="px-4 py-3">정보 탐색·출처 정리가 중요할 때</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
