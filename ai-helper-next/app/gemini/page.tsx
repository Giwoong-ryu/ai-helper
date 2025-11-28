import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Presentation, Sparkles, Youtube, FileText, Mail, Search } from "lucide-react";

export const metadata = {
  title: "Gemini 가이드 - AI Helper",
  description: "Gemini 도구별 사용법, Canvas/Gems/Google 확장 활용 완벽 가이드",
};

export default function GeminiPage() {
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
              <h1 className="text-2xl font-bold">Gemini</h1>
              <p className="text-sm text-muted-foreground">
                Google 생태계 + 무료 혜자
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 실사용자 불만사항 */}
      <section className="container mx-auto px-4 py-8">
        <div className="rounded-2xl border bg-red-50/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">😤 Gemini 쓰면서 답답한 점</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 창의적인 글쓰기가 밋밋하고 뻔함</li>
                <li>😩 복잡한 지시 2-3개 주면 하나는 빼먹음</li>
                <li>😩 코딩 실력이 Claude나 GPT보다 확실히 떨어짐</li>
                <li>😩 한국어 답변이 번역투일 때가 있음</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 이미지 생성 품질이 들쭉날쭉</li>
                <li>😩 &quot;Google 검색해봤는데&quot; 하고 오래된 정보 줄 때</li>
                <li>😩 캔버스 기능이 아직 초기 단계</li>
                <li>😩 Gems 만들어도 생각보다 멍청할 때</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>✅ 그래도 좋은 점:</strong> 무료로 거의 무제한 사용 가능! Google 서비스와 연동이 진짜 편함
            </p>
          </div>
        </div>

        {/* 주요 도구 카드 */}
        <h2 className="text-xl font-semibold text-slate-900 mb-6">🛠️ Gemini 주요 도구</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Canvas */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Presentation className="w-6 h-6" />
                </div>
                <Badge variant="secondary">슬라이드 생성</Badge>
              </div>
              <CardTitle>Canvas</CardTitle>
              <CardDescription>PPT 슬라이드 즉석 생성</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 주제만 주면 PPT 초안 자동 생성</li>
                    <li>• Google Slides로 바로 내보내기</li>
                    <li>• 슬라이드별 내용 수정 요청</li>
                    <li>• 디자인 테마 변경</li>
                    <li>• 발표 스크립트 함께 생성</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>사용법:</strong> &quot;AI 트렌드 발표자료 5장으로 만들어줘&quot; → 바로 슬라이드 생성
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gems */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <Badge variant="secondary">커스텀 AI</Badge>
              </div>
              <CardTitle>Gems</CardTitle>
              <CardDescription>나만의 맞춤 AI 만들기</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 글쓰기 코치 Gem 만들기</li>
                    <li>• 코딩 튜터 Gem 만들기</li>
                    <li>• 특정 업무용 AI 설정</li>
                    <li>• 말투/성격 커스터마이징</li>
                    <li>• 반복 업무 자동화용</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800">
                    <strong>꿀팁:</strong> &quot;항상 3줄로 요약해주는 Gem&quot; 만들어두면 편함
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* YouTube 확장 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg">
                  <Youtube className="w-6 h-6" />
                </div>
                <Badge variant="secondary">영상 분석</Badge>
              </div>
              <CardTitle>YouTube 확장</CardTitle>
              <CardDescription>영상 요약 및 분석</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• YouTube 링크 → 3줄 요약</li>
                    <li>• 1시간 강의도 핵심만 추출</li>
                    <li>• 영상 내용 질문하기</li>
                    <li>• 타임스탬프별 내용 정리</li>
                    <li>• 여러 영상 비교 분석</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-xs text-red-800">
                    <strong>사용법:</strong> YouTube 링크 붙여넣기 → &quot;이 영상 핵심만 정리해줘&quot;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google Docs 연동 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <Badge variant="secondary">문서 연동</Badge>
              </div>
              <CardTitle>Google Docs/Sheets</CardTitle>
              <CardDescription>문서 안에서 AI 활용</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Docs에서 &quot;Help me write&quot; 사용</li>
                    <li>• 선택한 텍스트 다듬기/확장</li>
                    <li>• Sheets 수식 자동 생성</li>
                    <li>• 문서 요약 및 번역</li>
                    <li>• 표 데이터 분석</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>사용법:</strong> Google Docs에서 텍스트 선택 → 우클릭 → Help me write
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gmail 확장 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-white shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <Badge variant="secondary">이메일</Badge>
              </div>
              <CardTitle>Gmail 확장</CardTitle>
              <CardDescription>이메일 작성 및 요약</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 이메일 초안 자동 작성</li>
                    <li>• 긴 이메일 스레드 요약</li>
                    <li>• 톤 조절 (격식체/친근체)</li>
                    <li>• 답장 초안 제안</li>
                    <li>• 여러 언어로 번역</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-xs text-orange-800">
                    <strong>꿀팁:</strong> Gmail에서 &quot;Help me write&quot; → 요점만 적으면 정중한 이메일로 변환
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deep Research */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <Search className="w-6 h-6" />
                </div>
                <Badge variant="secondary">심층 분석</Badge>
              </div>
              <CardTitle>Deep Research</CardTitle>
              <CardDescription>주제 심층 조사</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 주제에 대한 종합 보고서 생성</li>
                    <li>• 여러 소스 종합 분석</li>
                    <li>• 시장 조사 리포트</li>
                    <li>• 경쟁사 분석</li>
                    <li>• 트렌드 분석</li>
                  </ul>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg">
                  <p className="text-xs text-teal-800">
                    <strong>사용법:</strong> &quot;2024 AI 스타트업 투자 동향 조사해줘&quot; → 심층 리포트 생성
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 실제 활용 예시 */}
        <div className="rounded-2xl border bg-blue-50/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">💡 이렇게 활용하세요</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-3">회사원 - 발표 준비</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. &quot;OO 주제 발표자료 만들어줘&quot;</li>
                <li>2. Canvas에서 슬라이드 생성</li>
                <li>3. Google Slides로 내보내기</li>
                <li>4. 필요한 부분만 수정해서 발표!</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-3">학생 - 강의 복습</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. 유튜브 강의 링크 복사</li>
                <li>2. Gemini에 붙여넣기</li>
                <li>3. &quot;이 강의 핵심 개념 정리해줘&quot;</li>
                <li>4. 이해 안 되는 부분 추가 질문</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-3">비즈니스 이메일</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Gmail에서 새 메일 작성</li>
                <li>2. &quot;Help me write&quot; 클릭</li>
                <li>3. 요점만 간단히 입력</li>
                <li>4. 격식체 비즈니스 이메일 완성</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-3">리서치 업무</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Deep Research로 주제 조사</li>
                <li>2. 여러 소스 종합 분석</li>
                <li>3. Canvas로 보고서 초안 작성</li>
                <li>4. Google Docs로 내보내기</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Google 서비스 연동 안내 */}
        <div className="rounded-2xl border bg-green-50/50 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">🔗 Google 서비스 연동</h2>
          <p className="text-sm text-slate-600 mb-4">Gemini의 최대 강점은 Google 생태계와의 연동입니다</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border border-green-100 text-center">
              <div className="text-3xl mb-2">📄</div>
              <h3 className="font-semibold text-slate-800 mb-1">Google Docs</h3>
              <p className="text-xs text-slate-600">문서 작성 도우미</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-100 text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-slate-800 mb-1">Google Sheets</h3>
              <p className="text-xs text-slate-600">수식 및 데이터 분석</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-100 text-center">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold text-slate-800 mb-1">Gmail</h3>
              <p className="text-xs text-slate-600">이메일 작성/요약</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-100 text-center">
              <div className="text-3xl mb-2">📽️</div>
              <h3 className="font-semibold text-slate-800 mb-1">Google Slides</h3>
              <p className="text-xs text-slate-600">프레젠테이션 생성</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>💡 참고:</strong> Google Workspace 계정으로 로그인하면 모든 연동 기능을 바로 사용할 수 있습니다
            </p>
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
