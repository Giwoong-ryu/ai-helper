import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, BookOpen, Zap, FolderOpen, FileText, Target, Globe, Video, Scale, TrendingUp, Lightbulb, AlertTriangle, CheckCircle, Wrench } from "lucide-react";

// Perplexity Logo SVG
const PerplexityLogo = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <defs>
      <linearGradient id="perplexityGradLarge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14B8A6" />
        <stop offset="100%" stopColor="#0891B2" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#perplexityGradLarge)" />
    <circle cx="50" cy="45" r="15" fill="none" stroke="white" strokeWidth="4" />
    <line x1="60" y1="56" x2="72" y2="72" stroke="white" strokeWidth="5" strokeLinecap="round" />
    <circle cx="50" cy="45" r="5" fill="white" />
  </svg>
);

export const metadata = {
  title: "Perplexity 가이드 - AI Helper",
  description: "Perplexity 도구별 사용법, Comet/Sora 2 Pro/Patents/Deep Research 활용 완벽 가이드 (2025년 11월)",
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
            <div className="flex items-center gap-3">
              <PerplexityLogo />
              <div>
                <h1 className="text-2xl font-bold">Perplexity</h1>
                <p className="text-sm text-muted-foreground">
                  검색 특화 AI + Comet 브라우저
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
            <h2 className="text-xl font-semibold text-slate-900">Perplexity 쓰면서 답답한 점</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 글쓰기/창작은 거의 못함 (검색 전용)</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 코딩 도움은 기대하지 말 것</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 무료 Pro Search 하루 5회 너무 적음</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 한국어 소스 검색이 영어보다 약함</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-red-100">
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 출처 링크가 가끔 관련없는 페이지</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> 복잡한 분석/추론은 부족함</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Comet 브라우저 아직 초기 단계</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> Max 구독료가 비쌈</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg flex items-start gap-2">
            <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-800">
              <strong>최고의 장점:</strong> 모든 답변에 출처 링크! 팩트 체크가 바로 가능해서 신뢰도 높음
            </p>
          </div>
        </div>

        {/* 주요 도구 카드 */}
        <div className="flex items-center gap-2 mb-6">
          <Wrench className="w-5 h-5 text-teal-600" />
          <h2 className="text-xl font-semibold text-slate-900">Perplexity 주요 도구 (2025년 11월)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Comet Browser - 신규! */}
          <Card className="group hover:shadow-lg transition-all border-teal-200 bg-teal-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                  <Globe className="w-6 h-6" />
                </div>
                <Badge className="bg-teal-500 text-white">NEW!</Badge>
              </div>
              <CardTitle>Comet 브라우저</CardTitle>
              <CardDescription>AI 기반 웹 브라우저</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 멀티탭 병렬 작업 지원</li>
                    <li>• 복잡한 멀티사이트 워크플로우</li>
                    <li>• 사이드바에서 대화 유지</li>
                    <li>• 프라이버시 컨트롤 패널</li>
                    <li>• 23% 성능 향상</li>
                  </ul>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg">
                  <p className="text-xs text-teal-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>특징:</strong> Android 버전도 출시됨!</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sora 2 Pro - 신규! */}
          <Card className="group hover:shadow-lg transition-all border-purple-200 bg-purple-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
                  <Video className="w-6 h-6" />
                </div>
                <Badge className="bg-purple-500 text-white">Max 전용</Badge>
              </div>
              <CardTitle>Sora 2 Pro</CardTitle>
              <CardDescription>최고 품질 영상 생성</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 12초 고품질 영상 생성</li>
                    <li>• OpenAI Sora 2 Pro 모델 사용</li>
                    <li>• 최고 화질 지원</li>
                    <li>• Max 구독자 자동 적용</li>
                    <li>• GPT-5.1 접근 포함</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>참고:</strong> ChatGPT Pro보다 Perplexity Max가 더 저렴할 수 있음</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Patents - 신규! */}
          <Card className="group hover:shadow-lg transition-all border-blue-200 bg-blue-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Scale className="w-6 h-6" />
                </div>
                <Badge className="bg-blue-500 text-white">NEW!</Badge>
              </div>
              <CardTitle>Perplexity Patents</CardTitle>
              <CardDescription>AI 특허 검색 에이전트</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 특허 검색 및 분석</li>
                    <li>• IP 인텔리전스 조사</li>
                    <li>• 출처 기반 특허 정보</li>
                    <li>• 누구나 접근 가능한 특허 연구</li>
                    <li>• 베타 기간 무료 사용</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>대상:</strong> 스타트업, 발명가, 특허 연구자에게 유용</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sports & Finance */}
          <Card className="group hover:shadow-lg transition-all border-green-200 bg-green-50/30">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <Badge className="bg-green-500 text-white">실시간</Badge>
              </div>
              <CardTitle>Sports & Finance</CardTitle>
              <CardDescription>실시간 스포츠/금융 정보</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-slate-800 mb-1">할 수 있는 것</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 10개 리그 실시간 점수 (ATP, PGA, EPL 등)</li>
                    <li>• 순위표, 통계, 뉴스, 배당률</li>
                    <li>• 600+ 미국 정치인 거래 추적</li>
                    <li>• 포트폴리오 모니터링</li>
                    <li>• 의회 거래 내역 확인</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-green-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>특징:</strong> Finance에서 정치인 주식 거래 추적 가능!</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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
                  <p className="text-xs text-teal-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> 검색창에서 &quot;Pro&quot; 토글 켜기 → 복잡한 질문 입력</span>
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
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> &quot;Deep Research&quot; 버튼 클릭 → 조사 주제 입력 → 5-10분 대기</span>
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
                  <p className="text-xs text-purple-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>팁:</strong> 논문 찾을 땐 Academic, 실제 후기 볼 땐 Reddit 선택</span>
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
                  <p className="text-xs text-orange-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> 검색 결과에서 &quot;+&quot; 클릭 → 컬렉션에 추가</span>
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
                  <p className="text-xs text-green-800 flex items-start gap-2">
                    <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span><strong>사용법:</strong> &quot;Create Page&quot; → 주제 입력 → 자동으로 구조화된 문서 생성</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 실제 활용 예시 */}
        <div className="rounded-2xl border bg-teal-50/50 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-teal-600" />
            <h2 className="text-xl font-semibold text-slate-900">이렇게 활용하세요</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-teal-100">
              <h3 className="font-semibold text-teal-700 mb-3 flex items-center gap-2">
                <Search className="w-4 h-4" />
                시장 조사
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Deep Research로 &quot;2025 OO 시장 동향&quot; 검색</li>
                <li>2. 5-10분 대기 후 종합 보고서 확인</li>
                <li>3. 출처 링크로 원본 확인</li>
                <li>4. Collections에 저장해서 정리</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-teal-100">
              <h3 className="font-semibold text-teal-700 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                논문 검색
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Focus를 &quot;Academic&quot;으로 설정</li>
                <li>2. 연구 주제 키워드 검색</li>
                <li>3. 관련 논문 목록 + 요약 확인</li>
                <li>4. 원본 논문 링크로 이동</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-teal-100">
              <h3 className="font-semibold text-teal-700 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                투자 정보 조사
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Finance 탭에서 관심 종목 검색</li>
                <li>2. 정치인 거래 내역 확인</li>
                <li>3. Pro Search로 심층 분석</li>
                <li>4. 여러 소스 비교해서 판단</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-5 border border-teal-100">
              <h3 className="font-semibold text-teal-700 mb-3 flex items-center gap-2">
                <Scale className="w-4 h-4" />
                특허 조사
              </h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Perplexity Patents 접속</li>
                <li>2. 기술 키워드로 특허 검색</li>
                <li>3. 관련 특허 분석 보고서 확인</li>
                <li>4. 경쟁사 특허 현황 파악</li>
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
                  <th className="text-left py-3 px-4 font-semibold text-teal-700">Pro ($20)</th>
                  <th className="text-left py-3 px-4 font-semibold text-purple-700">Max</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">기본 검색</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Pro Search</td>
                  <td className="py-3 px-4 text-slate-500">5회/일</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                  <td className="py-3 px-4 text-green-600">무제한</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Deep Research</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                  <td className="py-3 px-4 text-green-600">O</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Sora 2 Pro 영상</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-purple-600">12초 영상</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">GPT-5.1 접근</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-slate-500">X</td>
                  <td className="py-3 px-4 text-purple-600">O</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Perplexity Patents</td>
                  <td className="py-3 px-4 text-green-600">베타 무료</td>
                  <td className="py-3 px-4 text-green-600">추가 할당</td>
                  <td className="py-3 px-4 text-green-600">추가 할당</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg flex items-start gap-2">
            <Lightbulb className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" />
            <p className="text-sm text-yellow-800">
              <strong>Samsung TV 앱:</strong> Perplexity가 삼성 TV 앱으로도 출시됨! 대형 화면에서 AI 검색 가능
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
