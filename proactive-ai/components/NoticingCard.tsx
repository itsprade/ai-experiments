'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { NoticingState } from "@/hooks/useNoticingTimeline";

interface NoticingCardProps {
  currentState: NoticingState;
  currentStateIndex: number;
  isTransitioning: boolean;
}

export function NoticingCard({ currentState, currentStateIndex, isTransitioning }: NoticingCardProps) {
  return (
    <Card
      className={`
        w-[calc(100%-3rem)] max-w-[532px] h-[350px]
        rounded-[20px]
        p-6 md:p-8
        flex flex-col
        transition-all duration-300 ease-out
        ${isTransitioning ? 'opacity-60' : 'opacity-100'}
        ${currentState.id === 3 ? 'animate-subtle-scale' : ''}
        ${currentState.id === 1 ? 'ring-2 ring-blue-200/50 animate-pulse-once' : ''}
      `}
    >
      {/* 🔽 Header Section */}
      <div className="space-y-4">
        <p className="text-sm font-inter text-black/70 tracking-[-0.14px]">
          {currentState.headerText}
        </p>

        {/* 🔽 Body Lines Section */}
        <div className="space-y-2">
          {currentState.bodyLines.map((line, idx) => (
            <p key={idx} className="text-base font-inter leading-[1.4] text-black">
              {line}
            </p>
          ))}
        </div>

        {/* 🔽 Meta Text Section */}
        {currentState.metaText && (
          <p className="text-sm text-black/50 mt-3 font-inter">
            {currentState.metaText}
          </p>
        )}
      </div>

      {/* 🔽 Actions Section */}
      {currentState.actions.length > 0 && (
        <div className="mt-auto pt-6 flex flex-col gap-2 animate-slide-up">
          {currentState.actions.map((action, idx) => (
            <Button
              key={idx}
              variant={action.type === 'primary' ? 'default' : action.type === 'secondary' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </Card>
  );
}
