import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Presentation, Sparkles, Youtube, FileText, Mail, Search, Image, Bot, Brain, Lightbulb, AlertTriangle, CheckCircle, Wrench, Users } from "lucide-react";

// Gemini Logo SVG
const GeminiLogo = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <defs>
      <linearGradient id="geminiGradLarge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#geminiGradLarge)" />
    <path d="M50 20 L60 40 L80 40 L65 55 L70 75 L50 62 L30 75 L35 55 L20 40 L40 40 Z" fill="white" opacity="0.9" />
  </svg>
);

export const metadata = {
  title: "Gemini 가이드 - AI Helper",
  description: "Gemini 3 도구별 사용법, Imagen 3/Agent/Canvas/Gems 활용 완벽 가이드 (2025년 11월)",
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
            <div className="flex items-center gap-3">
              <GeminiLogo />
              <div>
                <h1 className="text-2xl font-bold">Gemini</h1>
                <p className="text-sm text-muted-foreground">
                  Gemini 3 + Imagen 3 이미지 혁신
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 사용자 현황 */}
      <section className="container mx-auto px-4 pt-8">
        <div className="rounded-xl border bg-gradient-to-r from-blue-50 to-purple-50 p-4 mb-6 flex items-center gap-3">
          <Users className="w-5 h-5 text-blue-600" />
          <p className="text-sm text-slate-700">
            <strong className="text-blue-600">월 6.5억 사용자</strong> - 가장 많은 사용자를 보유한 AI 플랫폼 (2025년 11월 기준)
          </p>
        </div>
      </section>

      {/* 실사용자 불만사항 */}
      <section className="container mx-auto px-4 py-4">
        <div className="rounded-2xl border bg-red-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="text-xl font-semibold text-slate-900">Gemini 쓰면서 답답한 점</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 창의적인 글쓰기가 밋밋하고 뻔함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 복잡한 지시 2-3개 주면 하나는 빼먹음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 코딩 실력이 Claude나 GPT보다 확실히 떨어짐</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 한국어 답변이 번역투일 때가 있음</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Gemini Agent 아직 미국만 사용 가능</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> AI Ultra 구독료가 비쌈</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> &quot;Google 검색해봤는데&quot; 하고 오래된 정보 줄 때</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Gems 만들어도 생각보다 멍청할 때</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg flex items-start gap-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-800">
              <strong>최고의 장점:</strong> Imagen 3 이미지 퀄리티 1위! 무료로 거의 무제한 사용 가능! Google 서비스와 연동이 진짜 편함
            </p>
          </div>
        </div>

        {/* 주요 도구 카드 */}
        <div className="flex items-center gap-2 mb-6">
          <Wrench className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">Gemini 주요 도구 (2025년 11월)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Imagen 3 - 이미지 1위! */}
          <Card className="group hover:shadow-lg transition-all border-pink-200 bg-pink-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-lg">
                  <Image className="w-6 h-6" />
                </div>
                <Badge className="bg-pink-500 text-white">품질 1위!</Badge>
              </div>
              <CardTitle>Imagen 3</CardTitle>
              <CardDescription>사진급 이미지 생성</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 사진처럼 사실적인 이미지 생성</li>
                    <li>• 제품 목업/인물 사진</li>
                    <li>• 복잡한 프롬프트도 잘 이해</li>
                    <li>• 아티팩트 없는 깨끗한 결과물</li>
                    <li>• 텍스트 렌더링도 가능</li>
                  </ul>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="text-xs text-pink-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>vs DALL-E:</strong> 사실적 사진은 Imagen 3 압승! 일러스트/만화는 DALL-E</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gemini 3 + Deep Think */}
          <Card className="group hover:shadow-lg transition-all border-purple-200 bg-purple-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Brain className="w-6 h-6" />
                </div>
                <Badge className="bg-purple-500 text-white">NEW!</Badge>
              </div>
              <CardTitle>Gemini 3 + Deep Think</CardTitle>
              <CardDescription>최신 모델 + 심층 추론</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Gemini 3 Pro - 최신 기본 모델</li>
                    <li>• Deep Think - 복잡한 추론 모드</li>
                    <li>• Generative UI - 맞춤형 인터페이스</li>
                    <li>• WebDev Arena 코딩 1위 (1487 Elo)</li>
                    <li>• ARC-AGI-2 45.1% (새로운 벤치마크)</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>특징:</strong> vibe coding 최고! 프론트엔드 개발에 특히 강함</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gemini Agent */}
          <Card className="group hover:shadow-lg transition-all border-blue-200 bg-blue-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <Badge className="bg-blue-500 text-white">AI Ultra</Badge>
              </div>
              <CardTitle>Gemini Agent</CardTitle>
              <CardDescription>복잡한 작업 자동화</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 웹 브라우징 + 작업 실행</li>
                    <li>• Deep Research 자동 실행</li>
                    <li>• Gmail/Calendar 연동 작업</li>
                    <li>• 멀티스텝 복잡한 요청 처리</li>
                    <li>• Project Mariner 기반</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>참고:</strong> 현재 미국 AI Ultra 구독자만 사용 가능</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> &quot;AI 트렌드 발표자료 5장으로 만들어줘&quot; → 바로 슬라이드 생성</span>
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
                  <p className="text-xs text-purple-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>팁:</strong> &quot;항상 3줄로 요약해주는 Gem&quot; 만들어두면 편함</span>
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
                  <p className="text-xs text-red-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> YouTube 링크 붙여넣기 → &quot;이 영상 핵심만 정리해줘&quot;</span>
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
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> Google Docs에서 텍스트 선택 → 우클릭 → Help me write</span>
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
                  <p className="text-xs text-orange-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>팁:</strong> Gmail에서 &quot;Help me write&quot; → 요점만 적으면 정중한 이메일로 변환</span>
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
                  <p className="text-xs text-teal-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>vs Perplexity:</strong> 출처 링크는 Perplexity가 더 명확함</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 실제 활용 예시 */}
        <div className="rounded-2xl border bg-blue-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-slate-900">이렇게 활용하세요</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <Image className="w-4 h-4" />
                사진급 이미지 생성
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. &quot;사실적인 스타일로&quot; 프롬프트에 추가</li>
                <li>2. 원하는 장면 상세히 설명</li>
                <li>3. Imagen 3로 고퀄리티 이미지 생성</li>
                <li>4. DALL-E보다 사실적인 결과물!</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <Presentation className="w-4 h-4" />
                회사원 - 발표 준비
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. &quot;OO 주제 발표자료 만들어줘&quot;</li>
                <li>2. Canvas에서 슬라이드 생성</li>
                <li>3. Google Slides로 내보내기</li>
                <li>4. 필요한 부분만 수정해서 발표!</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <Youtube className="w-4 h-4" />
                학생 - 강의 복습
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. 유튜브 강의 링크 복사</li>
                <li>2. Gemini에 붙여넣기</li>
                <li>3. &quot;이 강의 핵심 개념 정리해줘&quot;</li>
                <li>4. 이해 안 되는 부분 추가 질문</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                비즈니스 이메일
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Gmail에서 새 메일 작성</li>
                <li>2. &quot;Help me write&quot; 클릭</li>
                <li>3. 요점만 간단히 입력</li>
                <li>4. 격식체 비즈니스 이메일 완성</li>
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
                  <th className="text-left py-3 px-4 font-semibold text-blue-700">AI Pro ($20)</th>
                  <th className="text-left py-3 px-4 font-semibold text-purple-700">AI Ultra</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Gemini 3 Pro</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Imagen 3 이미지</td>
                  <td className="py-3 px-4 text-green-600">제한적</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Deep Think</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Gemini Agent</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-purple-600">O (미국만)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Google Workspace 연동</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg flex items-start gap-2">
            <Lightbulb className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" />
            <p className="text-sm text-yellow-800">
              <strong>참고:</strong> 기존 Google One AI Premium은 &quot;Google AI Pro&quot;로 이름 변경됨 ($19.99/월)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-8">
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
