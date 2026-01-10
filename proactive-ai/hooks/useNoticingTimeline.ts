import { useState, useEffect, useCallback } from 'react';

// 🧪 Dummy Data: Replace with real data later
export const mockData = {
  newMeetingTime: "3:30 PM",
  overlapTarget: "focus time",
  calendarBookedPercent: 92,
  uninterruptedBlocks: 0,
  sleepDuration: "4h 52m",
  productivityDropPercent: 35,
  confidence: "High"
};

export interface NoticingState {
  id: number;
  headerText: string;
  bodyLines: string[];
  metaText: string | null;
  actions: Array<{ label: string; type: 'primary' | 'secondary' | 'tertiary' }>;
}

// State definitions based on spec
const states: NoticingState[] = [
  {
    id: 0,
    headerText: "Good morning",
    bodyLines: ["Today looks busy, but manageable."],
    metaText: null,
    actions: []
  },
  {
    id: 1,
    headerText: "I noticed a change",
    bodyLines: [
      `A new meeting was added at ${mockData.newMeetingTime}.`,
      `It overlaps with your ${mockData.overlapTarget}.`
    ],
    metaText: null,
    actions: []
  },
  {
    id: 2,
    headerText: "This affects your day",
    bodyLines: [
      `Your calendar is now ${mockData.calendarBookedPercent}% booked.`,
      `You have no uninterrupted work blocks left.`
    ],
    metaText: null,
    actions: []
  },
  {
    id: 3,
    headerText: "There's a risk here",
    bodyLines: [
      `You slept ${mockData.sleepDuration} last night.`,
      `On days like this, your productivity usually drops by ~${mockData.productivityDropPercent}%.`
    ],
    metaText: "Based on similar days in the past",
    actions: []
  },
  {
    id: 4,
    headerText: "Want help adjusting?",
    bodyLines: [
      "I can reschedule one meeting or defer low-priority tasks to tomorrow."
    ],
    metaText: "Based on similar days in the past",
    actions: [
      { label: "Reschedule for me", type: "primary" },
      { label: "Review options", type: "secondary" },
      { label: "Not now", type: "tertiary" }
    ]
  }
];

// Timing for each state (in milliseconds)
const stateDurations = [2000, 2000, 2000, 3000, 2000];

export type PlayMode = 'auto' | 'manual';

export function useNoticingTimeline() {
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const [mode, setMode] = useState<PlayMode>('auto');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentState = states[currentStateIndex];

  const reset = useCallback(() => {
    setCurrentStateIndex(0);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300);
  }, []);

  const next = useCallback(() => {
    if (currentStateIndex < states.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStateIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 200);
    }
  }, [currentStateIndex]);

  const prev = useCallback(() => {
    if (currentStateIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStateIndex(prev => prev - 1);
        setIsTransitioning(false);
      }, 200);
    }
  }, [currentStateIndex]);

  const toggleMode = useCallback(() => {
    setMode(prev => prev === 'auto' ? 'manual' : 'auto');
  }, []);

  // Auto-advance logic
  useEffect(() => {
    if (mode === 'auto' && currentStateIndex < states.length - 1) {
      const duration = stateDurations[currentStateIndex];
      const timer = setTimeout(() => {
        next();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [mode, currentStateIndex, next]);

  return {
    currentState,
    currentStateIndex,
    totalStates: states.length,
    mode,
    isTransitioning,
    reset,
    next,
    prev,
    toggleMode,
    canGoNext: currentStateIndex < states.length - 1,
    canGoPrev: currentStateIndex > 0
  };
}
