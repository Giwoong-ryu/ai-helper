import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image, MessageSquare, Wrench, Mic, FileSpreadsheet, Globe } from "lucide-react";

export const metadata = {
  title: "ChatGPT 가이드 - AI Helper",
  description: "ChatGPT 도구별 사용법, 실사용 팁, GPTs/Canvas/DALL-E 활용 완벽 가이드",
};

export default function ChatGPTPage() {
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
              <h1 className="text-2xl font-bold">ChatGPT</h1>
              <p className="text-sm text-muted-foreground">
                OpenAI의 만능 AI + 이미지 생성
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 실사용자 불만사항 */}
      <section className="container mx-auto px-4 py-8">
        <div className="rounded-2xl border bg-red-50/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">😤 ChatGPT 쓰면서 답답한 점</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 대화 길어지면 앞에서 한 말 까먹음 (갑자기 다른 얘기 함)</li>
                <li>😩 &quot;모르겠습니다&quot; 안 하고 자신있게 거짓말함 (환각)</li>
                <li>😩 무료 플랜은 GPT-4 몇 번 쓰면 3시간 대기</li>
                <li>😩 피크 시간에 서버 느려지거나 먹통</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 DALL-E로 원하는 이미지 나올 때까지 몇 번씩 재생성</li>
                <li>😩 GPT Store에 쓰레기 GPTs 너무 많음</li>
                <li>😩 한글 맞춤법 가끔 틀림</li>
                <li>😩 코드 길어지면 중간 생략하고 &quot;... 나머지는 같습니다&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 주요 도구 카드 */}
        <h2 className="text-xl font-semibold text-slate-900 mb-6">🛠️ ChatGPT 주요 도구</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* DALL-E */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-lg">
                  <Image className="w-6 h-6" />
                </div>
                <Badge variant="secondary">이미지 생성</Badge>
              </div>
              <CardTitle>DALL-E 3</CardTitle>
              <CardDescription>텍스트로 이미지 생성</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 블로그/SNS 썸네일 생성</li>
                    <li>• 로고 시안 여러 개 생성</li>
                    <li>• 제품 목업 이미지</li>
                    <li>• 일러스트/만화 스타일 그림</li>
                    <li>• 프레젠테이션용 이미지</li>
                  </ul>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="text-xs text-pink-800">
                    <strong>사용법:</strong> &quot;미니멀한 스타일로 커피숍 로고 그려줘&quot; → 바로 이미지 생성
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* GPTs */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white shadow-lg">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <Badge variant="secondary">커스텀 봇</Badge>
              </div>
              <CardTitle>GPTs (GPT Store)</CardTitle>
              <CardDescription>용도별 맞춤 AI 봇</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 논문 요약 전용 봇 사용</li>
                    <li>• 영어 회화 튜터 봇</li>
                    <li>• 마케팅 카피 생성 봇</li>
                    <li>• 나만의 페르소나 봇 만들기</li>
                    <li>• 특정 분야 전문가 봇</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800">
                    <strong>꿀팁:</strong> GPT Store에서 &quot;resume&quot; 검색 → 이력서 전문 GPTs 바로 사용
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Canvas */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                  <Wrench className="w-6 h-6" />
                </div>
                <Badge variant="secondary">문서 편집</Badge>
              </div>
              <CardTitle>Canvas</CardTitle>
              <CardDescription>문서/코드 실시간 편집</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 옆 패널에서 문서 직접 수정</li>
                    <li>• 특정 문단만 선택해서 수정 요청</li>
                    <li>• 코드 부분 수정 + 실행</li>
                    <li>• 버전별로 수정 내역 확인</li>
                    <li>• 문서 톤앤매너 일괄 변경</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>사용법:</strong> &quot;이 문서를 Canvas로 열어줘&quot; → 옆 패널에서 직접 편집
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Voice Mode */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg">
                  <Mic className="w-6 h-6" />
                </div>
                <Badge variant="secondary">음성 대화</Badge>
              </div>
              <CardTitle>Voice Mode</CardTitle>
              <CardDescription>음성으로 실시간 대화</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 실시간 통역 (외국인과 대화)</li>
                    <li>• 영어 발음 교정</li>
                    <li>• 운전 중 음성으로 질문</li>
                    <li>• 언어 회화 연습</li>
                    <li>• 아이디어 브레인스토밍</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-xs text-orange-800">
                    <strong>꿀팁:</strong> 여행 중 &quot;이 문장 일본어로 말해줘&quot; → 바로 음성 통역
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Code Interpreter */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <Badge variant="secondary">데이터 분석</Badge>
              </div>
              <CardTitle>Code Interpreter</CardTitle>
              <CardDescription>파일 분석 + 코드 실행</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 엑셀/CSV 업로드 → 바로 분석</li>
                    <li>• 차트/그래프 자동 생성</li>
                    <li>• PDF에서 데이터 추출</li>
                    <li>• 이미지 크기 조정, 포맷 변환</li>
                    <li>• Python 코드 실행 및 결과 확인</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-green-800">
                    <strong>사용법:</strong> 매출 엑셀 파일 업로드 → &quot;월별 트렌드 그래프 그려줘&quot;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Web Browsing */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                  <Globe className="w-6 h-6" />
                </div>
                <Badge variant="secondary">웹 검색</Badge>
              </div>
              <CardTitle>Web Browsing</CardTitle>
              <CardDescription>실시간 인터넷 검색</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 최신 뉴스/이벤트 검색</li>
                    <li>• 현재 주가/환율 확인</li>
                    <li>• 제품 가격 비교</li>
                    <li>• 특정 웹사이트 내용 요약</li>
                    <li>• 최신 기술 문서 참조</li>
                  </ul>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg">
                  <p className="text-xs text-teal-800">
                    <strong>사용법:</strong> &quot;오늘 비트코인 가격 알려줘&quot; → 실시간 검색 후 답변
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 실제 활용 예시 */}
        <div className="rounded-2xl border bg-green-50/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">💡 이렇게 활용하세요</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-green-100">
              <h3 className="font-semibold text-green-700 mb-3">블로그 운영자</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. 주제 아이디어 브레인스토밍</li>
                <li>2. Canvas로 초안 작성 + 수정</li>
                <li>3. DALL-E로 썸네일 이미지 생성</li>
                <li>4. Web Browsing으로 최신 정보 보충</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-green-100">
              <h3 className="font-semibold text-green-700 mb-3">직장인 보고서 작성</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. 엑셀 데이터 업로드 → Code Interpreter 분석</li>
                <li>2. 자동 생성된 그래프 활용</li>
                <li>3. Canvas로 보고서 초안 작성</li>
                <li>4. &quot;더 formal하게&quot; 톤 조정 요청</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-green-100">
              <h3 className="font-semibold text-green-700 mb-3">마케터</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. GPT Store에서 &quot;마케팅&quot; GPTs 선택</li>
                <li>2. 광고 카피 여러 버전 생성</li>
                <li>3. DALL-E로 광고 이미지 생성</li>
                <li>4. A/B 테스트용 변형 제작</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-green-100">
              <h3 className="font-semibold text-green-700 mb-3">언어 학습자</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Voice Mode로 영어 회화 연습</li>
                <li>2. 발음 틀리면 바로 교정 받기</li>
                <li>3. GPTs &quot;영어 튜터&quot; 봇으로 문법 학습</li>
                <li>4. 실제 상황별 롤플레이</li>
              </ol>
            </div>
          </div>
        </div>

        {/* GPTs 추천 */}
        <div className="rounded-2xl border bg-purple-50/50 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">⭐ 추천 GPTs (GPT Store)</h2>
          <p className="text-sm text-slate-600 mb-4">검증된 유용한 GPTs 모음</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-purple-700 mb-2">📝 글쓰기</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Write For Me - 글쓰기 도우미</li>
                <li>• Copywriter GPT - 마케팅 카피</li>
                <li>• Blog Expert - 블로그 최적화</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-purple-700 mb-2">💻 개발</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Code Copilot - 코드 리뷰</li>
                <li>• SQL Expert - 데이터베이스</li>
                <li>• Python Tutor - 학습용</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-purple-700 mb-2">🎨 디자인</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Logo Creator - 로고 생성</li>
                <li>• Image Generator - 이미지 특화</li>
                <li>• Canva - 캔바 연동</li>
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
