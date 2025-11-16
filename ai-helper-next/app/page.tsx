import ComparisonTable from "@/components/comparison-table";
import { Zap, Clock, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Helper
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                모든 AI 도구를 한 곳에서
              </p>
            </div>
            <a
              href="https://github.com/Giwoong-ryu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">통합 AI 활용 가이드</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          모든 AI 도구의 활용법을
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            한 곳에서 배우세요
          </span>
        </h2>
        <p className="text-sm text-slate-400 text-center">
          주요 AI 도구들의 간단 비교만 제공합니다 — 더 많은 자료는 각 도구 링크에서 확인하세요.
        </p>
      </section>

      <ComparisonTable />

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
          <p className="mt-2">© 2025 AI Helper. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
