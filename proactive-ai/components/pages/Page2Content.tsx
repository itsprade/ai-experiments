'use client';

import { useState, useEffect } from 'react';

// Question data structure
interface Question {
  id: number;
  text: string;
  detail: string;
  enabled?: boolean; // Questions without enabled flag are disabled by default
}

interface Category {
  id: number;
  title: string;
  subtitle: string;
  questions: Question[];
}

// All 60 questions organized by category with AI-generated descriptions
const categories: Category[] = [
  {
    id: 1,
    title: "Agency & Control",
    subtitle: "Where does AI end and human begin?",
    questions: [
      { id: 1, text: "What decisions can AI make automatically vs. what needs human confirmation?", detail: "This explores the spectrum of autonomy—from fully automated background tasks to high-stakes decisions requiring explicit approval. The prototype could visualize different decision tiers and their confirmation patterns." },
      { id: 2, text: "How do you design the handoff moment when AI passes control to the user?", detail: "The transition from AI-driven to human-controlled action is a critical UX moment. A prototype might explore different handoff animations, context summaries, and state preservation techniques." },
      { id: 3, text: "How do users adjust AI's autonomy level? (\"Do more for me\" vs \"Let me decide\")", detail: "Users need intuitive controls to calibrate how much AI should do. This could be a slider, contextual settings, or adaptive controls that learn user preferences over time." },
      { id: 4, text: "What should the user feel when AI acts on their behalf—empowered or anxious?", detail: "Emotional design matters. The prototype could test different feedback patterns—celebratory vs. subtle confirmation—to find the right balance of reassurance without condescension." },
      { id: 5, text: "How does the system recover when AI acts autonomously and gets it wrong?", detail: "Graceful recovery is essential for trust. This explores undo mechanisms, rollback options, and how to communicate what went wrong without undermining confidence in the system." },
    ]
  },
  {
    id: 2,
    title: "Trust & Confidence",
    subtitle: "How do users trust AI reasoning?",
    questions: [
      { id: 6, text: "What's the visual language of uncertainty? How does \"probably\" look different from \"definitely\"?", detail: "Uncertainty needs visual representation—perhaps through opacity, animation speed, or iconography. A prototype could establish a confidence spectrum users instinctively understand." },
      { id: 7, text: "How do you show AI's confidence without undermining trust in uncertain cases?", detail: "Showing low confidence is honest but risky. The prototype explores how to frame uncertainty as transparency rather than incompetence." },
      { id: 8, text: "Can users see AI's track record? (\"This prediction has been 85% accurate\")", detail: "Historical accuracy builds trust. This explores compact ways to surface performance metrics without overwhelming the interface." },
      { id: 9, text: "How deep can users go when they ask \"why?\"", detail: "Explanation depth varies by user. A prototype might offer progressive disclosure—summary, details, technical, raw data—letting users choose their depth." },
      { id: 10, text: "How does trust recover after AI makes a mistake?", detail: "Trust repair is harder than trust building. This explores acknowledgment patterns, corrective actions, and how to demonstrate learning from errors." },
    ]
  },
  {
    id: 3,
    title: "Transparency & Explanation",
    subtitle: "How much should AI reveal?",
    questions: [
      { id: 11, text: "What's the minimum vs. maximum explanation for an AI decision?", detail: "From a simple icon to a full audit trail—this explores the range of explanation depth and when each is appropriate." },
      { id: 12, text: "Should users see why they're not seeing something?", detail: "Filtered-out content is invisible by design, but users might wonder what they're missing. This explores opt-in transparency for hidden items." },
      { id: 13, text: "How do you make AI reasoning inspectable without making it technical?", detail: "Non-technical users deserve understanding too. The prototype explores metaphors, visualizations, and plain-language explanations." },
      { id: 14, text: "How does explanation scale—5 seconds vs. 5 minutes?", detail: "Different contexts demand different depths. A quick glance needs a different explanation than a deep investigation." },
      { id: 15, text: "Should AI admit when it's guessing vs. when it's certain?", detail: "Honesty about uncertainty builds long-term trust. This explores language and visual cues that distinguish speculation from confidence." },
    ]
  },
  {
    id: 4,
    title: "Serendipity & Exploration",
    subtitle: "How do users discover when AI curates?",
    questions: [
      { id: 16, text: "How do users toggle between \"show me what matters\" and \"show me everything\"?", detail: "Curation vs. completeness is a fundamental tension. The prototype explores view modes that let users choose their information density." },
      { id: 17, text: "How does AI surface things the user didn't know to ask for?", detail: "Proactive discovery is AI's superpower. This explores gentle interruption patterns that introduce relevant-but-unexpected information." },
      { id: 18, text: "What's the peripheral vision of an AI interface—present but not demanding?", detail: "Some information should be available without competing for attention. This explores ambient awareness patterns." },
      { id: 19, text: "How do you design for productive wandering in a curated world?", detail: "Serendipity has value. The prototype might include 'explore mode' or 'random' buttons that break users out of their filter bubble." },
      { id: 20, text: "Should AI occasionally show something unexpected?", detail: "Controlled randomness can spark discovery. This explores when and how to inject surprise into personalized experiences." },
    ]
  },
  {
    id: 5,
    title: "Timing & Interruption",
    subtitle: "When should AI speak?",
    questions: [
      { id: 21, text: "What's the visual difference between \"urgent\" and \"whenever you're ready\"?", detail: "Urgency has visual weight—color, motion, position. The prototype establishes a clear hierarchy from critical alerts to patient suggestions." },
      { id: 22, text: "How does AI signal it's holding information until the right moment?", detail: "Deferred information needs a presence. This explores 'queued' states that indicate pending insights without interrupting flow." },
      { id: 23, text: "How do users communicate \"don't disturb\" vs. \"I'm available\"?", detail: "Availability modes let users control interruption. The prototype explores focus modes, schedules, and context-aware availability." },
      { id: 24, text: "How do you batch related insights to prevent notification fatigue?", detail: "Grouping reduces overwhelm. This explores digest formats, smart bundling, and summary-first patterns." },
      { id: 25, text: "What does the \"anti-notification\" look like—information waiting patiently?", detail: "Not everything needs to push. The prototype explores pull-based patterns where information waits to be discovered." },
    ]
  },
  {
    id: 6,
    title: "Dynamic Interfaces",
    subtitle: "How do interfaces compose themselves?",
    questions: [
      { id: 26, text: "How does the same data render differently based on context? (glance vs. deep dive)", detail: "Adaptive density serves different needs. A prototype might show the same data as a badge, card, or full detail view based on context." },
      { id: 27, text: "What are the atomic primitives AI composes with? (status, trend, comparison, action...)", detail: "Design systems need AI-ready components. This explores the building blocks that AI can combine into coherent interfaces." },
      { id: 28, text: "How does urgency translate to visual weight?", detail: "Priority should be visible. The prototype establishes rules for how importance affects size, color, position, and motion." },
      { id: 29, text: "What stays consistent vs. what flexes in a dynamic interface?", detail: "Some anchors must remain stable. This explores what elements users rely on for orientation in changing interfaces." },
      { id: 30, text: "How does the user correct AI when it chooses the wrong display?", detail: "Users know best sometimes. The prototype explores override mechanisms and preference learning." },
    ]
  },
  {
    id: 7,
    title: "Continuity & Recognition",
    subtitle: "How do users find home in a shape-shifting product?",
    questions: [
      { id: 31, text: "How do you build a library of \"intent primitives\" — patterns tied to user goals that AI reaches for before generating something new?", detail: "Intent primitives are reusable patterns mapped to user goals. The prototype explores how AI can prioritize familiar, proven patterns over novel generation." },
      { id: 32, text: "How do users build trust with a system that's never the same twice?", detail: "Consistency breeds familiarity. This explores what anchors—visual, behavioral, or structural—help users feel at home despite constant change." },
      { id: 33, text: "What makes your product yours when the AI could generate anything?", detail: "Identity transcends generation. The prototype explores the signature elements that persist regardless of what AI creates." },
      { id: 34, text: "Where do you draw the line between \"adaptive\" and \"unfamiliar\"?", detail: "Adaptation has limits. This explores thresholds where helpfulness becomes disorientation and how to detect them." },
      { id: 35, text: "What's the cost of novelty? When does \"fresh\" become \"exhausting\"?", detail: "Novelty has cognitive overhead. The prototype explores when users want surprise vs. when they need predictability." },
    ]
  },
  {
    id: 8,
    title: "Adaptation & Learning",
    subtitle: "How does AI learn users?",
    questions: [
      { id: 36, text: "How does the user know what AI has learned about them?", detail: "User models should be transparent. This explores profile views, preference summaries, and 'what AI knows' dashboards." },
      { id: 37, text: "Can users edit or correct what AI thinks it knows?", detail: "Wrong assumptions compound over time. The prototype explores correction interfaces and preference overrides." },
      { id: 38, text: "How does AI handle conflict between past behavior and current context?", detail: "People change. This explores how AI balances historical patterns with real-time signals." },
      { id: 39, text: "What does onboarding look like when the system is different for everyone?", detail: "Personalized systems can't show generic tours. The prototype explores adaptive onboarding that teaches the user's specific experience." },
      { id: 40, text: "How do you show AI getting smarter over time?", detail: "Progress is motivating. This explores subtle ways to demonstrate that the system is learning and improving." },
    ]
  },
  {
    id: 9,
    title: "Consistency & Predictability",
    subtitle: "How do users navigate non-deterministic systems?",
    questions: [
      { id: 41, text: "What anchors stay fixed so users can orient themselves?", detail: "Navigation needs stable landmarks. The prototype identifies what must never change in an otherwise dynamic interface." },
      { id: 42, text: "How do users build expectations when the interface keeps changing?", detail: "Predictability enables mastery. This explores patterns that help users anticipate system behavior despite variation." },
      { id: 43, text: "What makes a product feel like itself when every screen is generated?", detail: "Brand identity transcends layout. The prototype explores voice, animation, and interaction patterns that define product character." },
      { id: 44, text: "How do you maintain signature moments in dynamic UI?", detail: "Some moments matter for emotional connection. This explores how to preserve key experiences in generated interfaces." },
      { id: 45, text: "How much variation is too much?", detail: "There's a threshold where change becomes chaos. The prototype tests where that line is for different types of content." },
    ]
  },
  {
    id: 10,
    title: "Error & Recovery",
    subtitle: "What happens when AI is wrong?",
    questions: [
      { id: 46, text: "How does AI communicate \"I might be wrong about this\"?", detail: "Preemptive humility sets expectations. The prototype explores hedging language and visual uncertainty markers." },
      { id: 47, text: "What's the escape hatch when AI takes an action the user didn't want?", detail: "Undo must be discoverable and reliable. This explores prominent reversal options and confirmation patterns." },
      { id: 48, text: "How do you prevent cascading errors—AI wrong, user acts, more wrongness?", detail: "Errors can compound. The prototype explores checkpoints and validation steps that catch problems early." },
      { id: 49, text: "What does graceful degradation look like when AI can't help?", detail: "AI won't always have answers. This explores fallback states that maintain usefulness without AI assistance." },
      { id: 50, text: "How does user correction feed back into the system?", detail: "Feedback loops improve AI. The prototype explores how to make correction feel valuable rather than tedious." },
    ]
  },
  {
    id: 11,
    title: "Ethics & Boundaries",
    subtitle: "What should AI never do?",
    questions: [
      { id: 51, text: "How do you show users AI is working for them, not manipulating them?", detail: "Trust requires alignment transparency. The prototype explores ways to demonstrate AI's motivations and constraints." },
      { id: 52, text: "What visual cues communicate AI's boundaries and limitations?", detail: "Honest limitations build trust. This explores how to clearly show what AI can and cannot do." },
      { id: 53, text: "How do you design for user dignity—feeling in control, not controlled?", detail: "Autonomy is fundamental. The prototype explores interaction patterns that respect user agency and intelligence." },
      { id: 54, text: "How do you handle AI in vulnerable moments? (stress, confusion, high stakes)", detail: "Sensitive contexts need careful design. This explores how AI should behave when users are most vulnerable." },
      { id: 55, text: "How does the user set hard boundaries AI must respect?", detail: "Some lines shouldn't be crossed. The prototype explores preference setting for non-negotiable limits." },
    ]
  },
  {
    id: 12,
    title: "Product Identity",
    subtitle: "What makes a product a product?",
    questions: [
      { id: 56, text: "Where does brand live when UI is generated?", detail: "Brand transcends pixels. The prototype explores how voice, values, and personality persist in dynamic interfaces." },
      { id: 57, text: "How do micro-interactions and delight work in dynamic interfaces?", detail: "Delight is intentional. This explores how to maintain craft and surprise in AI-generated experiences." },
      { id: 58, text: "What differentiates products when all use similar AI generation?", detail: "Commoditized AI needs differentiation. The prototype explores what makes products distinct beyond their intelligence." },
      { id: 59, text: "How do you maintain personality in a system that adapts to everyone?", detail: "Personalization can dilute identity. This explores how products stay recognizable while adapting to individuals." },
      { id: 60, text: "What's the signature of your product that never changes?", detail: "Some things define you. The prototype identifies the immutable core that persists through all variation." },
    ]
  },
  {
    id: 13,
    title: "Designer's New Artifacts",
    subtitle: "What do we actually make now?",
    questions: [
      { id: 61, text: "What replaces the Figma screen as the core deliverable?", detail: "Static mockups can't capture dynamic systems. The prototype explores new artifact types: rules, constraints, principles, and logic." },
      { id: 62, text: "How do you prototype something that's never the same twice?", detail: "Non-deterministic systems need new prototyping methods. This explores range-based design and variation testing." },
      { id: 63, text: "How do you hand off rules and logic instead of layouts?", detail: "Developer handoff evolves. The prototype explores specification formats for behavior rather than appearance." },
      { id: 64, text: "How do you QA a non-deterministic system?", detail: "Testing dynamic systems is hard. This explores boundary testing, edge case catalogs, and quality metrics for AI behavior." },
      { id: 65, text: "What does a design system look like for a system that designs itself?", detail: "Meta-design systems define how AI should compose. The prototype explores constraints, rules, and guardrails for generation." },
    ]
  },
];

// Export categories for use in other components
export { categories };
export type { Question, Category };

// Expandable Question Component with single-selection and selected state styling
// Questions appear disabled (low opacity) by default until enabled
function ExpandableQuestion({ question, isSelected, onSelect }: {
  question: Question;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const isEnabled = question.enabled === true;

  // Enabled questions have full opacity, disabled questions are muted
  const numberClasses = isEnabled
    ? (isSelected ? 'text-black' : 'text-black/30')
    : (isSelected ? 'text-black/40' : 'text-black/20');

  const textClasses = isEnabled
    ? (isSelected ? 'text-black' : 'text-black/70 group-hover:text-black/90')
    : (isSelected ? 'text-black/50' : 'text-black/30 group-hover:text-black/40');

  const chevronClasses = isEnabled
    ? (isSelected ? 'rotate-180 text-black' : 'text-black/30')
    : (isSelected ? 'rotate-180 text-black/40' : 'text-black/20');

  const borderClasses = isEnabled
    ? (isSelected ? 'border-black' : 'border-black/[0.06]')
    : (isSelected ? 'border-black/30' : 'border-black/4');

  const detailClasses = isEnabled ? 'text-black/60' : 'text-black/30';

  return (
    <div className={`border-b transition-colors duration-200 ${borderClasses} last:border-b-0`}>
      <button
        onClick={isEnabled ? onSelect : undefined}
        disabled={!isEnabled}
        className={`w-full text-left py-4 flex items-start gap-3 group ${!isEnabled ? 'cursor-default' : ''}`}
      >
        <span className={`font-inter text-[12px] mt-0.5 w-5 flex-shrink-0 transition-colors duration-200 ${numberClasses}`}>
          {question.id}.
        </span>
        <span className={`font-inter text-[14px] leading-[1.6] flex-1 transition-colors duration-200 ${textClasses}`}>
          {question.text}
        </span>
        <svg
          className={`w-4 h-4 flex-shrink-0 mt-1 transition-all duration-300 ease-out ${chevronClasses}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isSelected ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className={`font-inter text-[14px] leading-[1.6] ${detailClasses} pl-8 pr-8`}>
          {question.detail}
        </p>
      </div>
    </div>
  );
}

// Main Page2Content Component
interface Page2ContentProps {
  selectedQuestionId?: number;
  onQuestionSelect?: (id: number | undefined) => void;
}

export function Page2Content({ selectedQuestionId, onQuestionSelect }: Page2ContentProps) {
  // Local state for immediate UI updates (enables smooth animations)
  const [localSelectedId, setLocalSelectedId] = useState<number | undefined>(selectedQuestionId);

  // Sync local state with prop when it changes
  useEffect(() => {
    setLocalSelectedId(selectedQuestionId);
  }, [selectedQuestionId]);

  const handleSelectQuestion = (id: number) => {
    // Update local state immediately for smooth animation
    const newId = localSelectedId === id ? undefined : id;
    setLocalSelectedId(newId);

    // Notify parent component if callback is provided
    if (onQuestionSelect) {
      onQuestionSelect(newId);
    }

    // Update URL without triggering navigation (prevents scroll jump)
    if (newId === undefined) {
      window.history.pushState(null, '', '/the-shift');
    } else {
      window.history.pushState(null, '', `/the-shift/${newId}`);
    }
  };

  // Check if panel is open (a question is selected)
  const isPanelOpen = localSelectedId !== undefined;

  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-80 md:pb-20 md:pt-20 lg:py-24">
        <article className={`max-w-[640px] transition-all duration-500 ease-out ${isPanelOpen ? 'mx-auto md:mx-0' : 'mx-auto'}`}>

          {/* Hero Section */}
          <header className="mb-16 md:mb-20">
            <h1
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-black font-bold mb-6"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              Designing for AI changes everything. How we think, what we deliver, and what questions we ask.
            </h1>

            <div className="space-y-4">
              <p className="font-inter text-[14px] leading-[1.6] text-black/70">
                We&apos;re moving from deterministic flows to adaptive systems. From handing off layouts to handing off logic. From predicting every state to designing for outcomes we can&apos;t fully control.
              </p>
              <p className="font-inter text-[14px] leading-[1.6] text-black/70">
                This is my attempt to map the new territory. Questions that sit at the heart of AI-first design, explored through prototypes, product explorations, and new artifacts along the way.
              </p>
            </div>
          </header>

          {/* Question Categories */}
          {categories.map((category) => (
            <section key={category.id} className="mb-14 md:mb-16">
              <div className="flex items-center justify-between mb-2">
                <h2
                  className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/40 font-semibold"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  {category.title}
                </h2>
                <span
                  className="text-[10px] uppercase leading-none tracking-[0.08em] text-black/20 font-semibold"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  Coming soon
                </span>
              </div>
              <p className="font-inter text-[13px] text-black/50 italic mb-6">
                {category.subtitle}
              </p>

              <div className="border-t border-black/[0.06]">
                {category.questions.map((question) => (
                  <ExpandableQuestion
                    key={question.id}
                    question={question}
                    isSelected={localSelectedId === question.id}
                    onSelect={() => handleSelectQuestion(question.id)}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Two Fundamental Questions */}
          <section className="mb-14 md:mb-16">
            <h2
              className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/40 font-semibold mb-4"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              The Two Fundamental Questions
            </h2>

            <p className="font-inter text-[14px] leading-[1.6] text-black/70 mb-8">
              This is my attempt to map the new territory. These are the two high-level questions I&apos;m exploring. Each one branches into specific design challenges, prototypes, and new ways of thinking about our craft.
            </p>

            <div className="space-y-8">
              <div className="border-l-2 border-black pl-4">
                <h3
                  className="text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-black font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  How do we design for systems we can&apos;t fully predict?
                </h3>
                <p className="font-inter text-[14px] leading-[1.65] text-black/65">
                  We&apos;re moving from deterministic flows to adaptive systems. The same user, same context, might see different things each time. How do we build trust, consistency, and user agency when we can&apos;t control every outcome?
                </p>
              </div>

              <div className="border-l-2 border-black pl-4">
                <h3
                  className="text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-black font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  What do designers deliver when the interface designs itself?
                </h3>
                <p className="font-inter text-[14px] leading-[1.65] text-black/65">
                  If AI generates the UI, what replaces the Figma file? What are our new artifacts: rules, constraints, principles? How do we hand off logic instead of layouts?
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-black/[0.06]">
            <p className="font-inter text-[13px] leading-[1.5] text-black/40">
              <span className="text-black/60 font-medium">This is a living document.</span>{' '}
              <span className="text-black/50">Questions and prototypes will evolve as we explore.</span>
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
