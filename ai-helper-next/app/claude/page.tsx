import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FolderKanban, Sparkles, Palette, Terminal, FileCode, Bot } from "lucide-react";

export const metadata = {
  title: "Claude 가이드 - AI Helper",
  description: "Claude 도구별 사용법, Projects/Artifacts/Styles 활용 완벽 가이드",
};

export default function ClaudePage() {
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
              <h1 className="text-2xl font-bold">Claude</h1>
              <p className="text-sm text-muted-foreground">
                긴 문서 작업의 최강자 (200K 토큰)
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 실사용자 불만사항 */}
      <section className="container mx-auto px-4 py-8">
        <div className="rounded-2xl border bg-red-50/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">😤 Claude 쓰면서 답답한 점</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 &quot;짧게 써달라&quot;고 해도 또 길게 씀 (진짜 답답)</li>
                <li>😩 갑자기 &quot;제가 이 요청은 도와드리기 어렵습니다&quot; 거부</li>
                <li>😩 무료 플랜 메시지 한도 금방 참 (하루 못 버팀)</li>
                <li>😩 이미지 생성 기능 없음</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>😩 웹 검색 기능 없음 (Pro도 없음!)</li>
                <li>😩 한국 결제 불편 (해외결제 필수)</li>
                <li>😩 가끔 &quot;이전 대화 참고해주세요&quot; 해도 못 찾음</li>
                <li>😩 Artifacts가 가끔 렌더링 안 됨</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>✅ 최고의 강점:</strong> 200K 토큰으로 책 1권 분량도 한 번에! 지시사항 준수력 최고
            </p>
          </div>
        </div>

        {/* 주요 도구 카드 */}
        <h2 className="text-xl font-semibold text-slate-900 mb-6">🛠️ Claude 주요 도구</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Projects */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg">
                  <FolderKanban className="w-6 h-6" />
                </div>
                <Badge variant="secondary">맥락 유지</Badge>
              </div>
              <CardTitle>Projects</CardTitle>
              <CardDescription>파일 업로드 + 맥락 저장</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 파일 업로드 후 맥락 유지 대화</li>
                    <li>• 매번 설명 안 해도 됨</li>
                    <li>• 프로젝트별 설정 저장</li>
                    <li>• 팀원과 프로젝트 공유</li>
                    <li>• 코드베이스 전체 올려두고 작업</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-xs text-orange-800">
                    <strong>꿀팁:</strong> 회사 스타일 가이드 올려두면 매번 &quot;우리 톤앤매너로&quot; 안 해도 됨
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Artifacts */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <Badge variant="secondary">실시간 미리보기</Badge>
              </div>
              <CardTitle>Artifacts</CardTitle>
              <CardDescription>코드/문서 실시간 렌더링</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• HTML/React 코드 바로 미리보기</li>
                    <li>• SVG 그래픽 실시간 렌더링</li>
                    <li>• 다이어그램 생성 (Mermaid)</li>
                    <li>• 마크다운 문서 미리보기</li>
                    <li>• 코드 다운로드/복사</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800">
                    <strong>사용법:</strong> &quot;이걸 Artifacts로 보여줘&quot; → 옆 패널에서 바로 확인
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Styles */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-lg">
                  <Palette className="w-6 h-6" />
                </div>
                <Badge variant="secondary">답변 스타일</Badge>
              </div>
              <CardTitle>Styles</CardTitle>
              <CardDescription>나만의 답변 스타일 저장</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 간결하게 / 상세하게 설정</li>
                    <li>• 격식체 / 친근체 선택</li>
                    <li>• 전문 용어 사용 수준</li>
                    <li>• 업무용 / 개인용 분리</li>
                    <li>• 커스텀 스타일 저장</li>
                  </ul>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="text-xs text-pink-800">
                    <strong>꿀팁:</strong> &quot;3줄 이내로 답변&quot; 스타일 만들어두면 길게 안 씀
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Claude Code */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white shadow-lg">
                  <Terminal className="w-6 h-6" />
                </div>
                <Badge variant="secondary">터미널 AI</Badge>
              </div>
              <CardTitle>Claude Code</CardTitle>
              <CardDescription>터미널에서 코딩 자동화</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 터미널에서 AI와 코딩</li>
                    <li>• 파일 직접 수정/생성</li>
                    <li>• Git 커밋 자동 생성</li>
                    <li>• 테스트 실행 및 수정</li>
                    <li>• 전체 프로젝트 리팩토링</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-100 rounded-lg">
                  <p className="text-xs text-slate-800">
                    <strong>설치:</strong> npm install -g @anthropic-ai/claude-code
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MCP */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                  <FileCode className="w-6 h-6" />
                </div>
                <Badge variant="secondary">확장 기능</Badge>
              </div>
              <CardTitle>MCP (Model Context Protocol)</CardTitle>
              <CardDescription>외부 도구 연동</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 파일 시스템 접근</li>
                    <li>• 데이터베이스 연결</li>
                    <li>• API 호출 자동화</li>
                    <li>• 브라우저 자동화</li>
                    <li>• 커스텀 도구 제작</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>참고:</strong> Claude Desktop 앱에서 설정 필요
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 기본 대화 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <Badge variant="secondary">기본</Badge>
              </div>
              <CardTitle>기본 대화</CardTitle>
              <CardDescription>도구 없이 바로 사용</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 긴 문서 요약/분석 (200K 토큰)</li>
                    <li>• 복잡한 코드 리팩토링</li>
                    <li>• 상세한 글쓰기/번역</li>
                    <li>• 다단계 논리 추론</li>
                    <li>• 구조화된 데이터 생성</li>
                  </ul>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg">
                  <p className="text-xs text-teal-800">
                    <strong>강점:</strong> 지시사항 준수력 최고, 긴 문서도 앞뒤 맥락 유지
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 실제 활용 예시 */}
        <div className="rounded-2xl border bg-orange-50/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">💡 이렇게 활용하세요</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-orange-100">
              <h3 className="font-semibold text-orange-700 mb-3">개발자 - 코드 리팩토링</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Projects에 코드베이스 업로드</li>
                <li>2. &quot;이 프로젝트의 구조 파악해줘&quot;</li>
                <li>3. &quot;OO 함수 리팩토링해줘&quot;</li>
                <li>4. Artifacts에서 코드 바로 확인</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-orange-100">
              <h3 className="font-semibold text-orange-700 mb-3">작가/기획자 - 긴 문서 작업</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Styles에서 &quot;상세하고 친근하게&quot; 설정</li>
                <li>2. 전체 개요 먼저 작성 요청</li>
                <li>3. 챕터별로 세부 내용 확장</li>
                <li>4. 200K 토큰으로 전체 맥락 유지</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-orange-100">
              <h3 className="font-semibold text-orange-700 mb-3">컨설턴트 - 계약서 검토</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Projects에 계약서 PDF 업로드</li>
                <li>2. &quot;위험 조항 찾아줘&quot;</li>
                <li>3. &quot;OO 조항 수정안 제시해줘&quot;</li>
                <li>4. 수정 전후 비교표 생성</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-orange-100">
              <h3 className="font-semibold text-orange-700 mb-3">디자이너 - SVG 생성</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. &quot;OO 아이콘 SVG로 만들어줘&quot;</li>
                <li>2. Artifacts에서 바로 미리보기</li>
                <li>3. &quot;색상 OO으로 바꿔줘&quot; 수정</li>
                <li>4. SVG 코드 다운로드</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Claude 잘 쓰는 팁 */}
        <div className="rounded-2xl border bg-purple-50/50 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">💡 Claude 잘 쓰는 팁</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-purple-700 mb-2">✅ 이렇게 하면 좋아요</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 원하는 형식 명확히 지정 (표, 목록, JSON 등)</li>
                <li>• 분량 지정 (&quot;3문장으로&quot;, &quot;500자 이내&quot;)</li>
                <li>• 역할 부여 (&quot;너는 시니어 개발자야&quot;)</li>
                <li>• 예시 제공하면 퀄리티 UP</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-purple-700 mb-2">❌ 이러면 힘들어요</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 모호하게 &quot;좋게 써줘&quot; (구체적으로!)</li>
                <li>• 한 번에 너무 많은 요청</li>
                <li>• 웹 검색 기대 (안 됨!)</li>
                <li>• 이미지 생성 요청 (안 됨!)</li>
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
