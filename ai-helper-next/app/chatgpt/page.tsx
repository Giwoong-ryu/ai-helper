import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image, MessageSquare, Wrench, Mic, FileSpreadsheet, Globe, Video, Brain, Lightbulb, AlertTriangle, CheckCircle } from "lucide-react";

// ChatGPT Logo SVG
const ChatGPTLogo = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <defs>
      <linearGradient id="gptGradLarge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#gptGradLarge)" />
    <path d="M30 50 L45 35 L45 45 L70 45 L70 55 L45 55 L45 65 Z" fill="white" opacity="0.9" />
    <circle cx="60" cy="35" r="6" fill="white" opacity="0.7" />
    <circle cx="65" cy="65" r="4" fill="white" opacity="0.5" />
  </svg>
);

export const metadata = {
  title: "ChatGPT 가이드 - AI Helper",
  description: "ChatGPT 도구별 사용법, GPT-4o/Sora 2/Canvas/GPTs 활용 완벽 가이드 (2025년 11월)",
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
            <div className="flex items-center gap-3">
              <ChatGPTLogo />
              <div>
                <h1 className="text-2xl font-bold">ChatGPT</h1>
                <p className="text-sm text-muted-foreground">
                  OpenAI의 만능 AI + Sora 2 영상 생성
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
            <h2 className="text-xl font-semibold text-slate-900">ChatGPT 쓰면서 답답한 점</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 대화 길어지면 앞에서 한 말 까먹음 (갑자기 다른 얘기 함)</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> &quot;모르겠습니다&quot; 안 하고 자신있게 거짓말함 (환각)</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 무료 플랜은 GPT-4o 몇 번 쓰면 3시간 대기</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 피크 시간에 서버 느려지거나 먹통</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Sora 영상 생성 대기 시간 김 (Plus도 50회/월)</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> GPT Store에 쓰레기 GPTs 너무 많음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 한글 맞춤법 가끔 틀림</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 코드 길어지면 중간 생략하고 &quot;... 나머지는 같습니다&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 주요 도구 카드 */}
        <div className="flex items-center gap-2 mb-6">
          <Wrench className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-semibold text-slate-900">ChatGPT 주요 도구 (2025년 11월)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Sora 2 - 신규! */}
          <Card className="group hover:shadow-lg transition-all border-green-200 bg-green-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
                  <Video className="w-6 h-6" />
                </div>
                <Badge className="bg-green-500 text-white">NEW!</Badge>
              </div>
              <CardTitle>Sora 2</CardTitle>
              <CardDescription>텍스트로 영상 생성 (1080p)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 텍스트 설명 → 12초 영상 생성</li>
                    <li>• 1080p 고화질 지원</li>
                    <li>• 영상 스타일 지정 (시네마틱, 애니메이션 등)</li>
                    <li>• 이미지를 영상으로 변환</li>
                    <li>• 영상 확장/편집</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> &quot;바다 위로 해가 뜨는 시네마틱 영상&quot; → 영상 자동 생성</span>
                  </p>
                </div>
                <div className="text-xs text-slate-500 border-t pt-2">
                  Plus: 50회/월 | Pro: 무제한
                </div>
              </div>
            </CardContent>
          </Card>

          {/* o4-mini 추론 모델 */}
          <Card className="group hover:shadow-lg transition-all border-blue-200 bg-blue-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Brain className="w-6 h-6" />
                </div>
                <Badge className="bg-blue-500 text-white">추론 특화</Badge>
              </div>
              <CardTitle>o4-mini / o3</CardTitle>
              <CardDescription>복잡한 추론 문제 해결</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 수학 문제 단계별 풀이</li>
                    <li>• 복잡한 코딩 로직 추론</li>
                    <li>• STEM 분야 전문 분석</li>
                    <li>• 데이터 사이언스 작업</li>
                    <li>• 논리 퍼즐/추론 문제</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>특징:</strong> o4-mini가 AIME 2024/2025 수학 벤치마크 1위!</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* GPT-4o 이미지 */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-lg">
                  <Image className="w-6 h-6" />
                </div>
                <Badge variant="secondary">이미지 생성</Badge>
              </div>
              <CardTitle>GPT-4o 이미지 / DALL-E 3</CardTitle>
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
                  <p className="text-xs text-pink-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>참고:</strong> 사실적 사진은 Gemini Imagen 3가 더 좋음. 창작/일러스트는 DALL-E</span>
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
                  <p className="text-xs text-purple-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>팁:</strong> Enterprise/Edu는 o3, o4-mini로 Custom GPTs 제작 가능</span>
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
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> &quot;이 문서를 Canvas로 열어줘&quot; → 옆 패널에서 직접 편집</span>
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
                  <p className="text-xs text-orange-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>팁:</strong> 여행 중 &quot;이 문장 일본어로 말해줘&quot; → 바로 음성 통역</span>
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
                  <p className="text-xs text-green-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> 매출 엑셀 파일 업로드 → &quot;월별 트렌드 그래프 그려줘&quot;</span>
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
                  <p className="text-xs text-teal-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>참고:</strong> 심층 검색은 Perplexity가 더 나음 (출처 명시)</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 실제 활용 예시 */}
        <div className="rounded-2xl border bg-green-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-semibold text-slate-900">이렇게 활용하세요</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-green-100">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Video className="w-4 h-4" />
                콘텐츠 크리에이터
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Sora 2로 인트로/아웃트로 영상 생성</li>
                <li>2. DALL-E로 썸네일 이미지 제작</li>
                <li>3. Canvas로 스크립트 작성 + 수정</li>
                <li>4. Voice Mode로 발음 연습</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-green-100">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4" />
                직장인 보고서 작성
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. 엑셀 데이터 업로드 → Code Interpreter 분석</li>
                <li>2. 자동 생성된 그래프 활용</li>
                <li>3. Canvas로 보고서 초안 작성</li>
                <li>4. &quot;더 formal하게&quot; 톤 조정 요청</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-green-100">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                개발자 코딩
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. o4-mini로 복잡한 알고리즘 설계</li>
                <li>2. Canvas에서 코드 작성/수정</li>
                <li>3. 버그 디버깅 요청</li>
                <li>4. 단, 대규모 리팩토링은 Claude가 더 나음</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-green-100">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Mic className="w-4 h-4" />
                언어 학습자
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Voice Mode로 영어 회화 연습</li>
                <li>2. 발음 틀리면 바로 교정 받기</li>
                <li>3. GPTs &quot;영어 튜터&quot; 봇으로 문법 학습</li>
                <li>4. 실제 상황별 롤플레이</li>
              </ol>
            </div>
          </div>
        </div>

        {/* 구독 플랜 비교 */}
        <div className="rounded-2xl border bg-purple-50/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-slate-900">구독 플랜 비교 (2025년 11월)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">기능</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500">Free</th>
                  <th className="text-left py-3 px-4 font-semibold text-green-700">Plus ($20)</th>
                  <th className="text-left py-3 px-4 font-semibold text-purple-700">Pro ($200)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">GPT-4o</td>
                  <td className="py-3 px-4 text-slate-500">제한적</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                  <td className="py-3 px-4 text-purple-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">o4-mini (추론)</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-green-600">제한적</td>
                  <td className="py-3 px-4 text-purple-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Sora 2 영상</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-green-600">50회/월</td>
                  <td className="py-3 px-4 text-purple-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">DALL-E 이미지</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-purple-600">O</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">o3 (최신 추론)</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-purple-600">O</td>
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
