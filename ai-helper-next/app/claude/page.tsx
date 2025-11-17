import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Zap, Terminal, Bot } from "lucide-react";

export const metadata = {
  title: "Claude 가이드 - AI Helper",
  description: "Claude Code를 위한 31개 스킬셋, 커맨드, 에이전트 완벽 가이드",
};

export default function ClaudePage() {
  const sections = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "스킬셋",
      badge: "31개",
      description: "Claude Code를 위한 강력한 AI 자동화 스킬",
      features: [
        "n8n 워크플로우 전문 (6개)",
        "개발 생산성 도구 (6개)",
        "한국어 콘텐츠 생성 (4개)",
        "바이럴 마케팅 (4개)",
        "개발 자동화 (5개)",
      ],
      href: "https://github.com/Giwoong-ryu/my-skills",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "커맨드",
      badge: "17개",
      description: "슬래시 커맨드로 빠르게 실행하는 자동화 작업",
      features: [
        "반복 작업 자동화",
        "한 줄 명령어 실행",
        "프로젝트 초기화",
        "문서 자동 생성",
        "커스텀 명령어 지원",
      ],
      href: "#commands",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "에이전트",
      badge: "60개",
      description: "전문 분야별 AI 페르소나",
      features: [
        "언어별 전문가 (10개 언어)",
        "아키텍처 설계",
        "DevOps 자동화",
        "테스트 전략",
        "문서화 전문가",
      ],
      href: "#agents",
      color: "from-teal-500 to-teal-700",
    },
  ];

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
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Card key={section.title} className="group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {section.icon}
                  </div>
                  <Badge>{section.badge}</Badge>
                </div>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  자세히 보기
                  <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          ))}
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
