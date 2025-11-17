import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Claude 가이드 - AI Helper",
  description: "Claude Code를 위한 31개 스킬셋, 커맨드, 에이전트 완벽 가이드",
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
                Anthropic의 강력한 AI 어시스턴트
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <section id="ai-tools" className="mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <img src="/ai-helper/assets/icons/skills-icon.png" alt="Skills 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Skills</h3>
              <p className="text-base text-slate-600">Claude Code를 위한 강력한 AI 자동화 스킬</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>n8n 워크플로우 전문 (6개)</li>
                <li>개발 생산성 도구 (6개)</li>
                <li>한국어 콘텐츠 생성 (4개)</li>
                <li>바이럴 마케팅 (4개)</li>
                <li>개발 자동화 (5개)</li>
              </ul>
              <a href="https://github.com/Giwoong-ryu/my-skills" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <img src="/ai-helper/assets/icons/commands-icon.png" alt="Commands 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Commands</h3>
              <p className="text-base text-slate-600">슬래시 커맨드로 빠르게 실행하는 자동화 작업</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>반복 작업 자동화</li>
                <li>한 줄 명령어 실행</li>
                <li>프로젝트 초기화</li>
                <li>문서 자동 생성</li>
                <li>커스텀 명령어 지원</li>
              </ul>
              <a href="#commands" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:bg-gray-50">
            <img src="/ai-helper/assets/icons/agents-icon.png" alt="Agents 아이콘" className="w-full h-48 object-cover" />
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Agents</h3>
              <p className="text-base text-slate-600">전문 분야별 AI 페르소나</p>
              <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                <li>언어별 전문가 (10개 언어)</li>
                <li>아키텍처 설계</li>
                <li>DevOps 자동화</li>
                <li>테스트 전략</li>
                <li>문서화 전문가</li>
              </ul>
              <a href="#agents" className="inline-flex items-center text-indigo-500 hover:underline">자세히 보기 →</a>
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
