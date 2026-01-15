'use client';

import { getPageConfig } from "@/lib/pageContent";
import { PageNavigation } from "@/components/PageNavigation";

export default function Home() {
  // Page 1 configuration
  const pageConfig = getPageConfig(1);
  const ContentComponent = pageConfig.leftPanelComponent;

  return (
    <div className="min-h-screen w-full relative">
      {/* 🔽 Centered Content */}
      <div className="w-full max-w-4xl mx-auto">
        <ContentComponent />
      </div>

      <PageNavigation activePage="introduction" />
    </div>
  );
}
