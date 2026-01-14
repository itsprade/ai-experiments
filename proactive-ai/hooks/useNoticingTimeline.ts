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

export interface InsightLine {
  icon: 'calendar' | 'sleep';
  text: string;
}

export interface NoticingState {
  id: number;
  type: 'greeting' | 'notice' | 'loading' | 'insight' | 'stacked';
  // Greeting state
  greetingText?: string;
  userName?: string;
  // Notice/Insight states
  headerText?: string;
  subheaderText?: string;
  bodyText?: string;
  insightLines?: InsightLine[];
  // Loading
  loadingText?: string;
  // Stacked card (final state)
  stackedDarkCard?: {
    headerText: string;
    bodyText: string;
    actions: Array<{ icon: 'calendar' | 'sleep'; label: string }>;
  };
}

// State definitions matching Figma screens exactly
const states: NoticingState[] = [
  // Screen 1: Good Morning with sun icon
  {
    id: 0,
    type: 'greeting',
    greetingText: "Good Morning",
    userName: "Pradeep",
    bodyText: "Today looks busy but manageable"
  },
  // Screen 2: New meeting invite
  {
    id: 1,
    type: 'notice',
    headerText: "New meeting invite",
    subheaderText: `From Sanjana at 3:30PM`,
    bodyText: "It overlaps with your focus time"
  },
  // Loading state
  {
    id: 2,
    type: 'loading',
    headerText: "New meeting invite",
    subheaderText: `From Sanjana at 3:30PM`,
    bodyText: "It overlaps with your focus time",
    loadingText: "Analyzing impact..."
  },
  // Screen 3: Calendar insight appears
  {
    id: 3,
    type: 'insight',
    headerText: "New meeting invite",
    subheaderText: `From Sanjana at 3:30PM`,
    bodyText: "It overlaps with your focus time",
    insightLines: [
      { icon: 'calendar', text: 'You calendar is 92% booked' }
    ]
  },
  // Loading state
  {
    id: 4,
    type: 'loading',
    headerText: "New meeting invite",
    subheaderText: `From Sanjana at 3:30PM`,
    bodyText: "It overlaps with your focus time",
    insightLines: [
      { icon: 'calendar', text: 'You calendar is 92% booked' }
    ],
    loadingText: "Checking your patterns..."
  },
  // Screen 4: Sleep insight added
  {
    id: 5,
    type: 'insight',
    headerText: "New meeting invite",
    subheaderText: `From Sanjana at 3:30PM`,
    bodyText: "It overlaps with your focus time",
    insightLines: [
      { icon: 'calendar', text: 'You calendar is 92% booked' },
      { icon: 'sleep', text: 'You slept only 4h 52m last night' }
    ]
  },
  // Screen 5: Stacked cards with dark card below
  {
    id: 6,
    type: 'stacked',
    headerText: "New meeting invite",
    subheaderText: `From Sanjana at 3:30PM`,
    bodyText: "It overlaps with your focus time",
    insightLines: [
      { icon: 'calendar', text: 'You calendar is 92% booked' },
      { icon: 'sleep', text: 'You slept only 4h 52m last night' }
    ],
    stackedDarkCard: {
      headerText: "On day like this",
      bodyText: "Your productivity down by ~35%",
      actions: [
        { icon: 'sleep', label: 'Move wind down early' },
        { icon: 'calendar', label: 'Reschedule meetings' }
      ]
    }
  }
];

// Timing for each state (in milliseconds)
// State 0: Good morning - 2s
// State 1: Meeting invite - 2s
// State 2: Loading "Analyzing impact..." - 2s (longer so users can read)
// State 3: Calendar insight - 2s (stays visible)
// State 4: Loading "Checking patterns..." - 2s (longer so users can read)
// State 5: Sleep insight added - 2s
// State 6: Black card appears - holds
const stateDurations = [2000, 2000, 2000, 2000, 2000, 2000, 0];

export type PlayMode = 'auto' | 'manual';

export function useNoticingTimeline() {
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const [mode, setMode] = useState<PlayMode>('auto');

  const currentState = states[currentStateIndex];

  const reset = useCallback(() => {
    setCurrentStateIndex(0);
  }, []);

  const next = useCallback(() => {
    if (currentStateIndex < states.length - 1) {
      setCurrentStateIndex(prev => prev + 1);
    }
  }, [currentStateIndex]);

  const prev = useCallback(() => {
    if (currentStateIndex > 0) {
      setCurrentStateIndex(prev => prev - 1);
    }
  }, [currentStateIndex]);

  const toggleMode = useCallback(() => {
    setMode(prev => prev === 'auto' ? 'manual' : 'auto');
    setCurrentStateIndex(0); // Reset to beginning when toggling mode
  }, []);

  const goToState = useCallback((stateIndex: number) => {
    if (stateIndex >= 0 && stateIndex < states.length) {
      setCurrentStateIndex(stateIndex);
    }
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
    reset,
    next,
    prev,
    toggleMode,
    goToState,
    canGoNext: currentStateIndex < states.length - 1,
    canGoPrev: currentStateIndex > 0
  };
}
