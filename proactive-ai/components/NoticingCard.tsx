'use client';

import { Card } from "@/components/ui/card";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { SunIcon } from "@/components/icons/SunIcon";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import { SleepIcon } from "@/components/icons/SleepIcon";
import type { NoticingState } from "@/hooks/useNoticingTimeline";

interface NoticingCardProps {
  currentState: NoticingState;
  currentStateIndex: number;
  isTransitioning: boolean;
}

export function NoticingCard({ currentState, currentStateIndex, isTransitioning }: NoticingCardProps) {
  const isLoading = currentState.type === 'loading';
  const isStacked = currentState.type === 'stacked';

  // 🔽 Greeting Card (Screen 1)
  if (currentState.type === 'greeting') {
    return (
      <Card className="relative w-[432px] min-h-[250px] rounded-[20px] bg-white p-7">
        {/* Sun icon - top right */}
        <div className="absolute right-7 top-[33px]">
          <SunIcon />
        </div>

        {/* Greeting and Name Container */}
        <div className="flex flex-col gap-[2px] mb-[102px]">
          {/* Greeting */}
          <p className="text-[14px] font-inter text-black/50 leading-[18px]">
            {currentState.greetingText}
          </p>

          {/* User name */}
          <p className="text-[18px] font-inter font-semibold text-black leading-[20px]">
            {currentState.userName}
          </p>
        </div>

        {/* Body text */}
        <p className="text-[24px] font-inter font-semibold text-black leading-[26px] w-[376px]">
          {currentState.bodyText}
        </p>
      </Card>
    );
  }

  // 🔽 Dark Card (State 6 - rendered separately in stack)
  if (isStacked && currentState.stackedDarkCard) {
    return (
      <Card className="w-[432px] min-h-[170px] rounded-[20px] bg-black p-7">
        {/* Text container */}
        <div className="flex flex-col gap-1 mb-[32px]">
          {/* Header */}
          <p className="text-[14px] font-inter text-white/50 leading-[18px]">
            {currentState.stackedDarkCard.headerText}
          </p>

          {/* Body text */}
          <p className="text-[24px] font-inter font-semibold text-white leading-[26px] w-[301px]">
            {currentState.stackedDarkCard.bodyText}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-[16px]">
          {currentState.stackedDarkCard.actions.map((action, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-[7px] transition-opacity ${
                action.icon === 'sleep' ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
            >
              {action.icon === 'calendar' ? (
                <CalendarIcon className="text-white" />
              ) : (
                <SleepIcon className="text-white" />
              )}
              <span className="text-sm font-inter text-white">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </Card>
    );
  }

  // 🔽 Notice/Insight Cards (Screens 2-5)
  return (
    <Card className="relative w-[432px] min-h-[250px] rounded-[20px] bg-white p-7">
      {/* Header and Subheader Container */}
      <div className="flex flex-col gap-[2px] mb-[72px]">
        {/* Header */}
        <p className="text-[14px] font-inter text-black/50 leading-[18px]">
          {currentState.headerText}
        </p>

        {/* Subheader */}
        {currentState.subheaderText && (
          <p className="text-[18px] font-inter font-semibold leading-[20px]">
            <span className="text-black">From Sanjana at </span>
            <span className="text-black/40">3:30PM</span>
          </p>
        )}
      </div>

      {/* Bottom section: Body text + Insight lines + Loading */}
      <div className="flex flex-col gap-6">
        {/* Body text */}
        <p className="text-[24px] font-inter font-semibold text-black leading-[26px] w-[301px]">
          {currentState.bodyText}
        </p>

        {/* Insight lines */}
        {currentState.insightLines && currentState.insightLines.length > 0 && (
          <div className="space-y-[6px]">
            {currentState.insightLines.map((insight, idx) => (
              <div key={idx} className="flex items-center gap-[7px]">
                {insight.icon === 'calendar' ? (
                  <CalendarIcon className="text-black/80 shrink-0" />
                ) : (
                  <SleepIcon className="text-black/80 shrink-0" />
                )}
                <p className="text-sm font-inter text-black/50">
                  {insight.text}
                </p>
                <p className="text-sm font-inter text-black/50">→</p>
              </div>
            ))}
          </div>
        )}

        {/* Loading Indicator */}
        {isLoading && currentState.loadingText && (
          <div className="animate-fade-in">
            <LoadingIndicator text={currentState.loadingText} />
          </div>
        )}
      </div>
    </Card>
  );
}
