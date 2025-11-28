import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, BookOpen, Zap, FolderOpen, FileText, Target } from "lucide-react";

export const metadata = {
  title: "Perplexity 가이드 - AI Helper",
  description: "Perplexity 도구별 사용법, Pro Search/Deep Research/Focus 모드 활용 완벽 가이드",
};

export default function PerplexityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                AI Helper
              </Button>
            </Link>
            <div className="h-4 w-px bg-border" />
            <div>
              <h1 className="text-2xl font-bold">Perplexity</h1>
              <p className="text-sm text-muted-foreground">
                검색 특화 AI + 출처 자동 제공
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 실사용자 불만사항 */}
      <section className="container mx-auto px-4 py-8">
        <div className="rounded-2xl border bg-red-50/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">😤 Perplexity 쓰면서 답답한 점</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 글쓰기/창작은 거의 못함 (검색 전용)</li>
                <li>😩 코딩 도움은 기대하지 말 것</li>
                <li>😩 무료 Pro Search 하루 5회 너무 적음</li>
                <li>😩 한국어 소스 검색이 영어보다 약함</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 출처 링크가 가끔 관련없는 페이지</li>
                <li>😩 복잡한 분석/추론은 부족함</li>
                <li>😩 Deep Research 결과가 너무 길어서 읽기 힘듦</li>
                <li>😩 Pages 기능 아직 불안정</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>✅ 최고의 장점:</strong> 모든 답변에 출처 링크! 팩트 체크가 바로 가능해서 신뢰도 높음
            </p>
          </div>
        </div>

        {/* 주요 도구 카드 */}
        <h2 className="text-xl font-semibold text-slate-900 mb-6">🛠️ Perplexity 주요 도구</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Pro Search */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <Badge variant="secondary">심층 검색</Badge>
              </div>
              <CardTitle>Pro Search</CardTitle>
              <CardDescription>복잡한 질문 심층 분석</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 여러 단계 추론이 필요한 질문</li>
                    <li>• &quot;왜&quot;, &quot;어떻게&quot; 질문에 상세 답변</li>
                    <li>• 여러 소스 비교 분석</li>
                    <li>• 복잡한 주제 설명</li>
                    <li>• 추가 질문 자동 제안</li>
                  </ul>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg">
                  <p className="text-xs text-teal-800">
                    <strong>사용법:</strong> 검색창에서 &quot;Pro&quot; 토글 켜기 → 복잡한 질문 입력
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deep Research */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <BookOpen className="w-6 h-6" />
                </div>
                <Badge variant="secondary">보고서 생성</Badge>
              </div>
              <CardTitle>Deep Research</CardTitle>
              <CardDescription>30+ 소스 종합 보고서</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 주제 심층 조사 보고서 (5-10분)</li>
                    <li>• 30개 이상 소스 자동 분석</li>
                    <li>• 시장 조사 리포트</li>
                    <li>• 경쟁사 비교 분석</li>
                    <li>• 학술 연구 요약</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>사용법:</strong> &quot;Deep Research&quot; 버튼 클릭 → 조사 주제 입력 → 5-10분 대기
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Focus 모드 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
                  <Target className="w-6 h-6" />
                </div>
                <Badge variant="secondary">검색 범위</Badge>
              </div>
              <CardTitle>Focus 모드</CardTitle>
              <CardDescription>검색 범위 지정</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">사용 가능한 Focus</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>All:</strong> 전체 웹 검색 (기본)</li>
                    <li>• <strong>Academic:</strong> 학술 논문만</li>
                    <li>• <strong>Writing:</strong> 글쓰기 도움</li>
                    <li>• <strong>YouTube:</strong> 영상 검색</li>
                    <li>• <strong>Reddit:</strong> 레딧 커뮤니티</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800">
                    <strong>꿀팁:</strong> 논문 찾을 땐 Academic, 실제 후기 볼 땐 Reddit 선택
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Collections */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg">
                  <FolderOpen className="w-6 h-6" />
                </div>
                <Badge variant="secondary">정리/저장</Badge>
              </div>
              <CardTitle>Collections</CardTitle>
              <CardDescription>검색 결과 주제별 정리</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 프로젝트별 검색 결과 정리</li>
                    <li>• 팀원과 컬렉션 공유</li>
                    <li>• 나중에 참고할 자료 저장</li>
                    <li>• 검색 히스토리 관리</li>
                    <li>• AI가 컬렉션 기반 답변</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-xs text-orange-800">
                    <strong>사용법:</strong> 검색 결과에서 &quot;+&quot; 클릭 → 컬렉션에 추가
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pages */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <Badge variant="secondary">문서 생성</Badge>
              </div>
              <CardTitle>Pages</CardTitle>
              <CardDescription>검색 결과로 문서 생성</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 검색 결과로 공유 가능한 문서 생성</li>
                    <li>• 출처가 포함된 리포트</li>
                    <li>• 웹 링크로 공유</li>
                    <li>• 지속적으로 내용 업데이트</li>
                    <li>• 위키처럼 정리된 문서</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-green-800">
                    <strong>사용법:</strong> &quot;Create Page&quot; → 주제 입력 → 자동으로 구조화된 문서 생성
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 기본 검색 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center text-white shadow-lg">
                  <Search className="w-6 h-6" />
                </div>
                <Badge variant="secondary">기본</Badge>
              </div>
              <CardTitle>Quick Search</CardTitle>
              <CardDescription>빠른 정보 검색</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 빠른 팩트 체크</li>
                    <li>• 최신 뉴스 검색</li>
                    <li>• 제품 가격/스펙 비교</li>
                    <li>• 간단한 정보 확인</li>
                    <li>• 모든 답변에 출처 링크</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-100 rounded-lg">
                  <p className="text-xs text-slate-800">
                    <strong>기본:</strong> Pro 토글 OFF 상태에서 바로 검색 (무제한)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 실제 활용 예시 */}
        <div className="rounded-2xl border bg-teal-50/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">💡 이렇게 활용하세요</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-teal-100">
              <h3 className="font-semibold text-teal-700 mb-3">시장 조사</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Deep Research로 &quot;2024 OO 시장 동향&quot; 검색</li>
                <li>2. 5-10분 대기 후 종합 보고서 확인</li>
                <li>3. 출처 링크로 원본 확인</li>
                <li>4. Collections에 저장해서 정리</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-teal-100">
              <h3 className="font-semibold text-teal-700 mb-3">논문 검색</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Focus를 &quot;Academic&quot;으로 설정</li>
                <li>2. 연구 주제 키워드 검색</li>
                <li>3. 관련 논문 목록 + 요약 확인</li>
                <li>4. 원본 논문 링크로 이동</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-teal-100">
              <h3 className="font-semibold text-teal-700 mb-3">제품 구매 결정</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. &quot;OO vs OO 비교&quot; Pro Search로 검색</li>
                <li>2. Focus를 &quot;Reddit&quot;으로 바꿔서 실사용 후기</li>
                <li>3. 장단점 비교표 확인</li>
                <li>4. 출처에서 상세 리뷰 확인</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-teal-100">
              <h3 className="font-semibold text-teal-700 mb-3">뉴스 팔로업</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. 관심 이슈 검색</li>
                <li>2. 여러 언론사 보도 비교</li>
                <li>3. Collections에 이슈별 정리</li>
                <li>4. 나중에 업데이트 확인</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Pro Search vs Deep Research 비교 */}
        <div className="rounded-2xl border bg-blue-50/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">🔍 Pro Search vs Deep Research</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">구분</th>
                  <th className="text-left py-3 px-4 font-semibold text-teal-700">Pro Search</th>
                  <th className="text-left py-3 px-4 font-semibold text-blue-700">Deep Research</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">소요 시간</td>
                  <td className="py-3 px-4">10-30초</td>
                  <td className="py-3 px-4">5-10분</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">분석 소스</td>
                  <td className="py-3 px-4">5-10개</td>
                  <td className="py-3 px-4">30개 이상</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">결과물</td>
                  <td className="py-3 px-4">요약된 답변</td>
                  <td className="py-3 px-4">보고서 형태 문서</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">적합한 용도</td>
                  <td className="py-3 px-4">빠른 답변, 간단한 조사</td>
                  <td className="py-3 px-4">심층 리서치, 보고서 작성</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">무료 한도</td>
                  <td className="py-3 px-4">하루 5회</td>
                  <td className="py-3 px-4">Pro 구독 필요</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 검색 팁 */}
        <div className="rounded-2xl border bg-yellow-50/50 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">💡 검색 잘하는 팁</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-yellow-100">
              <h3 className="font-semibold text-yellow-700 mb-2">✅ 좋은 질문</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• &quot;2024년 전기차 배터리 기술 트렌드&quot;</li>
                <li>• &quot;아이폰 16 vs 갤럭시 S24 카메라 비교&quot;</li>
                <li>• &quot;React vs Vue 2024년 기준 장단점&quot;</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-yellow-100">
              <h3 className="font-semibold text-yellow-700 mb-2">❌ 안 좋은 질문</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• &quot;재미있는 글 써줘&quot; (창작 X)</li>
                <li>• &quot;이 코드 고쳐줘&quot; (코딩 X)</li>
                <li>• &quot;인생 상담해줘&quot; (주관적 질문 X)</li>
              </ul>
            </div>
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
        </div>
      </footer>
    </main>
  );
}
