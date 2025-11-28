import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FolderKanban, Sparkles, Palette, Terminal, FileCode, Bot, Lightbulb, AlertTriangle, CheckCircle, Wrench, Code } from "lucide-react";

// Claude Logo SVG
const ClaudeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <defs>
      <linearGradient id="claudeGradLarge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#claudeGradLarge)" />
    <path d="M35 40 Q50 25 65 40 Q70 50 65 60 Q50 75 35 60 Q30 50 35 40" fill="white" opacity="0.9" />
    <circle cx="50" cy="50" r="8" fill="white" />
  </svg>
);

export const metadata = {
  title: "Claude 가이드 - AI Helper",
  description: "Claude 도구별 사용법, Sonnet 4.5/Projects/Artifacts/Styles 활용 완벽 가이드 (2025년 11월)",
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
            <div className="flex items-center gap-3">
              <ClaudeLogo />
              <div>
                <h1 className="text-2xl font-bold">Claude</h1>
                <p className="text-sm text-muted-foreground">
                  긴 문서 작업의 최강자 (200K 토큰)
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 실사용자 불만사항 */}
      <section className="container mx-auto px-4 py-8">
        <div className="rounded-2xl border bg-red-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="text-xl font-semibold text-slate-900">Claude 쓰면서 답답한 점</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> &quot;짧게 써달라&quot;고 해도 또 길게 씀 (진짜 답답)</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 갑자기 &quot;제가 이 요청은 도와드리기 어렵습니다&quot; 거부</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 무료 플랜 메시지 한도 금방 참 (하루 못 버팀)</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 이미지 생성 기능 없음</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 웹 검색 기능 없음 (Pro도 없음!)</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 한국 결제 불편 (해외결제 필수)</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 가끔 &quot;이전 대화 참고해주세요&quot; 해도 못 찾음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Artifacts가 가끔 렌더링 안 됨</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg flex items-start gap-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-800">
              <strong>최고의 강점:</strong> 200K 토큰으로 책 1권 분량도 한 번에! Sonnet 4.5 코딩 1위! 지시사항 준수력 최고
            </p>
          </div>
        </div>

        {/* 모델 정보 */}
        <div className="rounded-xl border bg-gradient-to-r from-orange-50 to-amber-50 p-4 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-slate-900">현재 사용 가능한 모델 (2025년 11월)</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-3 border border-orange-100">
              <h4 className="font-medium text-orange-700 mb-1">Claude Sonnet 4.5</h4>
              <p className="text-xs text-slate-600">코딩 벤치마크 1위! 일반 작업에 최적</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-100">
              <h4 className="font-medium text-purple-700 mb-1">Claude Opus 4.1</h4>
              <p className="text-xs text-slate-600">가장 강력한 모델, 복잡한 추론</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-100">
              <h4 className="font-medium text-teal-700 mb-1">Claude Haiku 4.5</h4>
              <p className="text-xs text-slate-600">빠르고 저렴, 간단한 작업용</p>
            </div>
          </div>
        </div>

        {/* 주요 도구 카드 */}
        <div className="flex items-center gap-2 mb-6">
          <Wrench className="w-5 h-5 text-orange-600" />
          <h2 className="text-xl font-semibold text-slate-900">Claude 주요 도구 (2025년 11월)</h2>
        </div>
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
                  <p className="text-xs text-orange-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>꿀팁:</strong> 회사 스타일 가이드 올려두면 매번 &quot;우리 톤앤매너로&quot; 안 해도 됨</span>
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
                  <p className="text-xs text-purple-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> &quot;이걸 Artifacts로 보여줘&quot; → 옆 패널에서 바로 확인</span>
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
                  <p className="text-xs text-pink-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>꿀팁:</strong> &quot;3줄 이내로 답변&quot; 스타일 만들어두면 길게 안 씀</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Claude Code */}
          <Card className="group hover:shadow-lg transition-all border-orange-200 bg-orange-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white shadow-lg">
                  <Terminal className="w-6 h-6" />
                </div>
                <Badge className="bg-orange-500 text-white">코딩 1위</Badge>
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
                  <p className="text-xs text-slate-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>설치:</strong> npm install -g @anthropic-ai/claude-code</span>
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
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>참고:</strong> Claude Desktop 앱에서 설정 필요</span>
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
                  <p className="text-xs text-teal-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>강점:</strong> 지시사항 준수력 최고, 긴 문서도 앞뒤 맥락 유지</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 실제 활용 예시 */}
        <div className="rounded-2xl border bg-orange-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-orange-600" />
            <h2 className="text-xl font-semibold text-slate-900">이렇게 활용하세요</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-orange-100">
              <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                개발자 - 코드 리팩토링
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Projects에 코드베이스 업로드</li>
                <li>2. &quot;이 프로젝트의 구조 파악해줘&quot;</li>
                <li>3. &quot;OO 함수 리팩토링해줘&quot;</li>
                <li>4. Artifacts에서 코드 바로 확인</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-orange-100">
              <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <FolderKanban className="w-4 h-4" />
                작가/기획자 - 긴 문서 작업
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Styles에서 &quot;상세하고 친근하게&quot; 설정</li>
                <li>2. 전체 개요 먼저 작성 요청</li>
                <li>3. 챕터별로 세부 내용 확장</li>
                <li>4. 200K 토큰으로 전체 맥락 유지</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-orange-100">
              <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <FileCode className="w-4 h-4" />
                컨설턴트 - 계약서 검토
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Projects에 계약서 PDF 업로드</li>
                <li>2. &quot;위험 조항 찾아줘&quot;</li>
                <li>3. &quot;OO 조항 수정안 제시해줘&quot;</li>
                <li>4. 수정 전후 비교표 생성</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-orange-100">
              <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                디자이너 - SVG 생성
              </h3>
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
        <div className="rounded-2xl border bg-purple-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-slate-900">Claude 잘 쓰는 팁</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                이렇게 하면 좋아요
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 원하는 형식 명확히 지정 (표, 목록, JSON 등)</li>
                <li>• 분량 지정 (&quot;3문장으로&quot;, &quot;500자 이내&quot;)</li>
                <li>• 역할 부여 (&quot;너는 시니어 개발자야&quot;)</li>
                <li>• 예시 제공하면 퀄리티 UP</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                이러면 힘들어요
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 모호하게 &quot;좋게 써줘&quot; (구체적으로!)</li>
                <li>• 한 번에 너무 많은 요청</li>
                <li>• 웹 검색 기대 (안 됨!)</li>
                <li>• 이미지 생성 요청 (안 됨!)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 구독 플랜 비교 */}
        <div className="rounded-2xl border bg-slate-50/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-semibold text-slate-900">구독 플랜 비교 (2025년 11월)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">기능</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500">Free</th>
                  <th className="text-left py-3 px-4 font-semibold text-orange-700">Pro ($20)</th>
                  <th className="text-left py-3 px-4 font-semibold text-purple-700">Team</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Sonnet 4.5</td>
                  <td className="py-3 px-4 text-slate-500">제한적</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Opus 4.1</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Projects</td>
                  <td className="py-3 px-4 text-slate-500">제한적</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Artifacts</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">팀 공유</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-purple-600">O</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg flex items-start gap-2">
            <Lightbulb className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" />
            <p className="text-sm text-yellow-800">
              <strong>참고:</strong> 무료 플랜도 Artifacts와 기본 대화는 사용 가능! 다만 메시지 한도가 금방 차서 Pro 추천
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            Made with <span className="text-purple-500">♥</span> by{" "}
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
