'use client';

import { getPageConfig } from "@/lib/pageContent";
import { PageNavigation } from "@/components/PageNavigation";

export default function IntroductionClient() {
  // Page 1 configuration
  const pageConfig = getPageConfig(1);
  const ContentComponent = pageConfig.leftPanelComponent;

  return (
    <div className="min-h-screen w-full relative bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* 🔽 Centered Content */}
      <div className="w-full max-w-4xl mx-auto">
        <ContentComponent />
      </div>

      <PageNavigation activePage="introduction" />
    </div>
  );
}
