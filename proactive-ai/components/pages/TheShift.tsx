'use client';

import { useState, useEffect, useRef } from 'react';

// Question data structure
interface Question {
  id: number;
  slug: string; // URL-friendly identifier for routing
  text: string;
  detail: string;
  richDetail?: React.ReactNode; // Optional rich content for expanded detail
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
    title: "Dynamic Interfaces",
    subtitle: "How do interfaces compose themselves?",
    questions: [
      {
        id: 1,
        slug: "context-driven-interfaces",
        text: "How do we design interfaces that change based on context, not navigation?",
        detail: "Design systems need AI-ready components. This explores the building blocks that AI can combine into coherent interfaces.",
        enabled: true,
        richDetail: (
          <div className="space-y-8">
            {/* Introduction paragraph */}
            <p className="text-[15px] leading-[1.7] text-black/70 dark:text-white/70">
              Designing interfaces that respond to context requires rethinking how software works at a fundamental level. Instead of users navigating to information, the system needs to understand what matters in the moment and surface it proactively. This shift changes how interfaces are structured, when they appear, and what role they play.
            </p>

            {/* The Paradigm Shift content */}
            <div>
              <p className="text-[11px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.12em] mb-5">The Paradigm Shift</p>
              <div className="space-y-4">
                <div className="border-l-2 border-black/10 dark:border-white/10 pl-4 py-1">
                  <p className="text-[10px] font-semibold text-black/35 dark:text-white/35 uppercase tracking-[0.1em] mb-2">Today</p>
                  <p className="text-[13px] leading-[1.6] text-black/55 dark:text-white/55 flex items-center flex-wrap gap-x-2 gap-y-1.5">
                    <span>User</span>
                    <svg className="w-3 h-3 text-black/25 dark:text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>Opens App</span>
                    <svg className="w-3 h-3 text-black/25 dark:text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>Navigates</span>
                    <svg className="w-3 h-3 text-black/25 dark:text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>Finds Data</span>
                    <svg className="w-3 h-3 text-black/25 dark:text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>Interprets</span>
                    <svg className="w-3 h-3 text-black/25 dark:text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>Decides</span>
                    <svg className="w-3 h-3 text-black/25 dark:text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>Acts</span>
                  </p>
                </div>

                <div className="border-l-2 border-black/80 dark:border-white/80 pl-4 py-1">
                  <p className="text-[10px] font-semibold text-black/35 dark:text-white/35 uppercase tracking-[0.1em] mb-2">Tomorrow</p>
                  <p className="text-[13px] leading-[1.6] text-black/75 dark:text-white/75 flex items-center flex-wrap gap-x-2 gap-y-1.5">
                    <span className="font-medium">AI Layer</span>
                    <svg className="w-3 h-3 text-black/40 dark:text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>Understands Context</span>
                    <svg className="w-3 h-3 text-black/40 dark:text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>Surfaces Insight</span>
                    <svg className="w-3 h-3 text-black/40 dark:text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>User Confirms</span>
                    <svg className="w-3 h-3 text-black/40 dark:text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <span>Action Happens</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[15px] leading-[1.7] text-black/70 dark:text-white/70">
              The app "dissolves" into the background. The frontend becomes emergent, generated in the moment based on what matters <em className="text-black/90 dark:text-white/90 not-italic font-medium">right now</em> for <em className="text-black/90 dark:text-white/90 not-italic font-medium">this specific person</em>.
            </p>

            {/* Three Capabilities */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.12em] mb-5">Three capabilities make this possible</p>
              <div className="space-y-5">
                <div>
                  <p className="text-[14px] font-semibold text-black/90 dark:text-white/90 mb-1.5">1. Detecting change</p>
                  <p className="text-[14px] leading-[1.65] text-black/55 dark:text-white/55">The system notices meaningful shifts, not everything that changes. Designers define which signals matter.</p>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-black/90 dark:text-white/90 mb-1.5">2. Finding patterns</p>
                  <p className="text-[14px] leading-[1.65] text-black/55 dark:text-white/55">Raw data becomes insight when connected to history and outcomes. Patterns explain why something matters.</p>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-black/90 dark:text-white/90 mb-1.5">3. Suggesting action</p>
                  <p className="text-[14px] leading-[1.65] text-black/55 dark:text-white/55">Insights must lead to action. The system proposes the right action, at the right moment, with the right urgency.</p>
                </div>
              </div>
            </div>

            {/* Designing rules, not screens */}
            <div className="pt-4">
              <p className="text-[11px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.12em] mb-5">Designing rules, not screens</p>
              <div className="space-y-4">
                <p className="text-[15px] leading-[1.7] text-black/70 dark:text-white/70">
                  We no longer design screens. We design the rules that shape system behavior.
                </p>
                <p className="text-[14px] leading-[1.65] text-black/55 dark:text-white/55">
                  I&apos;ve been working on this template as a way to structure my own thinking around proactive AI systems. It&apos;s the framework I use to reason about what the system should notice, how it should interpret patterns, and when it should act.
                </p>
                <p className="text-[14px] leading-[1.65] text-black/55 dark:text-white/55">
                  Use it to map detection triggers, define pattern logic, and document the actions your system should suggest. It&apos;s meant to help move from abstract ideas to concrete design decisions.
                </p>
              </div>

              {/* GitHub Download Component */}
              <a
                href="https://github.com/itsprade/ai-feature-spec-template"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 p-4 mt-6 rounded-xl bg-gradient-to-r from-[#474747] to-[#1a1a1a] dark:from-[#3a3a3a] dark:to-[#252525] border border-white/10 hover:border-white/20 transition-all"
              >
                {/* GitHub Icon */}
                <svg
                  className="w-6 h-6 text-white/80 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-medium text-white">
                    ai-feature-spec-template
                  </p>
                  <p className="text-[12px] text-white/50">
                    Download from GitHub
                  </p>
                </div>

                {/* Arrow Icon */}
                <svg
                  className="w-5 h-5 text-white/40 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>

              <p className="text-[13px] leading-[1.6] text-black/45 dark:text-white/45 mt-5 italic">
                This is a starting point for thinking about interfaces as systems, not screens.
              </p>
            </div>
          </div>
        )
      },
      { id: 2, slug: "adaptive-data-density", text: "How does the same data render differently based on context? (glance vs. deep dive)", detail: "Adaptive density serves different needs. A prototype might show the same data as a badge, card, or full detail view based on context." },
      { id: 3, slug: "urgency-visual-weight", text: "How does urgency translate to visual weight?", detail: "Priority should be visible. The prototype establishes rules for how importance affects size, color, position, and motion." },
      { id: 4, slug: "consistent-vs-flexible", text: "What stays consistent vs. what flexes in a dynamic interface?", detail: "Some anchors must remain stable. This explores what elements users rely on for orientation in changing interfaces." },
      { id: 5, slug: "user-override-ai", text: "How does the user correct AI when it chooses the wrong display?", detail: "Users know best sometimes. The prototype explores override mechanisms and preference learning." },
    ]
  },
  {
    id: 2,
    title: "Agency & Control",
    subtitle: "Where does AI end and human begin?",
    questions: [
      { id: 6, slug: "automatic-vs-confirmed", text: "What decisions can AI make automatically vs. what needs human confirmation?", detail: "This explores the spectrum of autonomy—from fully automated background tasks to high-stakes decisions requiring explicit approval. The prototype could visualize different decision tiers and their confirmation patterns." },
      { id: 7, slug: "ai-user-handoff", text: "How do you design the handoff moment when AI passes control to the user?", detail: "The transition from AI-driven to human-controlled action is a critical UX moment. A prototype might explore different handoff animations, context summaries, and state preservation techniques." },
      { id: 8, slug: "autonomy-level-controls", text: "How do users adjust AI's autonomy level? (\"Do more for me\" vs \"Let me decide\")", detail: "Users need intuitive controls to calibrate how much AI should do. This could be a slider, contextual settings, or adaptive controls that learn user preferences over time." },
      { id: 9, slug: "ai-action-emotional-response", text: "What should the user feel when AI acts on their behalf—empowered or anxious?", detail: "Emotional design matters. The prototype could test different feedback patterns—celebratory vs. subtle confirmation—to find the right balance of reassurance without condescension." },
      { id: 10, slug: "ai-error-recovery", text: "How does the system recover when AI acts autonomously and gets it wrong?", detail: "Graceful recovery is essential for trust. This explores undo mechanisms, rollback options, and how to communicate what went wrong without undermining confidence in the system." },
    ]
  },
  {
    id: 3,
    title: "Trust & Confidence",
    subtitle: "How do users trust AI reasoning?",
    questions: [
      { id: 11, slug: "visual-uncertainty", text: "What's the visual language of uncertainty? How does \"probably\" look different from \"definitely\"?", detail: "Uncertainty needs visual representation—perhaps through opacity, animation speed, or iconography. A prototype could establish a confidence spectrum users instinctively understand." },
      { id: 12, slug: "confidence-display", text: "How do you show AI's confidence without undermining trust in uncertain cases?", detail: "Showing low confidence is honest but risky. The prototype explores how to frame uncertainty as transparency rather than incompetence." },
      { id: 13, slug: "ai-track-record", text: "Can users see AI's track record? (\"This prediction has been 85% accurate\")", detail: "Historical accuracy builds trust. This explores compact ways to surface performance metrics without overwhelming the interface." },
      { id: 14, slug: "explanation-depth", text: "How deep can users go when they ask \"why?\"", detail: "Explanation depth varies by user. A prototype might offer progressive disclosure—summary, details, technical, raw data—letting users choose their depth." },
      { id: 15, slug: "trust-recovery", text: "How does trust recover after AI makes a mistake?", detail: "Trust repair is harder than trust building. This explores acknowledgment patterns, corrective actions, and how to demonstrate learning from errors." },
    ]
  },
  {
    id: 4,
    title: "Transparency & Explanation",
    subtitle: "How much should AI reveal?",
    questions: [
      { id: 16, slug: "explanation-range", text: "What's the minimum vs. maximum explanation for an AI decision?", detail: "From a simple icon to a full audit trail—this explores the range of explanation depth and when each is appropriate." },
      { id: 17, slug: "hidden-content-transparency", text: "Should users see why they're not seeing something?", detail: "Filtered-out content is invisible by design, but users might wonder what they're missing. This explores opt-in transparency for hidden items." },
      { id: 18, slug: "non-technical-reasoning", text: "How do you make AI reasoning inspectable without making it technical?", detail: "Non-technical users deserve understanding too. The prototype explores metaphors, visualizations, and plain-language explanations." },
      { id: 19, slug: "explanation-time-scale", text: "How does explanation scale—5 seconds vs. 5 minutes?", detail: "Different contexts demand different depths. A quick glance needs a different explanation than a deep investigation." },
      { id: 20, slug: "guessing-vs-certain", text: "Should AI admit when it's guessing vs. when it's certain?", detail: "Honesty about uncertainty builds long-term trust. This explores language and visual cues that distinguish speculation from confidence." },
    ]
  },
  {
    id: 5,
    title: "Serendipity & Exploration",
    subtitle: "How do users discover when AI curates?",
    questions: [
      { id: 21, slug: "curated-vs-complete", text: "How do users toggle between \"show me what matters\" and \"show me everything\"?", detail: "Curation vs. completeness is a fundamental tension. The prototype explores view modes that let users choose their information density." },
      { id: 22, slug: "proactive-discovery", text: "How does AI surface things the user didn't know to ask for?", detail: "Proactive discovery is AI's superpower. This explores gentle interruption patterns that introduce relevant-but-unexpected information." },
      { id: 23, slug: "peripheral-awareness", text: "What's the peripheral vision of an AI interface—present but not demanding?", detail: "Some information should be available without competing for attention. This explores ambient awareness patterns." },
      { id: 24, slug: "productive-wandering", text: "How do you design for productive wandering in a curated world?", detail: "Serendipity has value. The prototype might include 'explore mode' or 'random' buttons that break users out of their filter bubble." },
      { id: 25, slug: "unexpected-content", text: "Should AI occasionally show something unexpected?", detail: "Controlled randomness can spark discovery. This explores when and how to inject surprise into personalized experiences." },
    ]
  },
  {
    id: 6,
    title: "Timing & Interruption",
    subtitle: "When should AI speak?",
    questions: [
      { id: 26, slug: "urgency-hierarchy", text: "What's the visual difference between \"urgent\" and \"whenever you're ready\"?", detail: "Urgency has visual weight—color, motion, position. The prototype establishes a clear hierarchy from critical alerts to patient suggestions." },
      { id: 27, slug: "deferred-information", text: "How does AI signal it's holding information until the right moment?", detail: "Deferred information needs a presence. This explores 'queued' states that indicate pending insights without interrupting flow." },
      { id: 28, slug: "availability-modes", text: "How do users communicate \"don't disturb\" vs. \"I'm available\"?", detail: "Availability modes let users control interruption. The prototype explores focus modes, schedules, and context-aware availability." },
      { id: 29, slug: "batched-insights", text: "How do you batch related insights to prevent notification fatigue?", detail: "Grouping reduces overwhelm. This explores digest formats, smart bundling, and summary-first patterns." },
      { id: 30, slug: "patient-information", text: "How does the \"anti-notification\" look like—information waiting patiently?", detail: "Not everything needs to push. The prototype explores pull-based patterns where information waits to be discovered." },
    ]
  },
  {
    id: 7,
    title: "Continuity & Recognition",
    subtitle: "How do users find home in a shape-shifting product?",
    questions: [
      { id: 31, slug: "intent-primitives", text: "How do you build a library of \"intent primitives\" — patterns tied to user goals that AI reaches for before generating something new?", detail: "Intent primitives are reusable patterns mapped to user goals. The prototype explores how AI can prioritize familiar, proven patterns over novel generation." },
      { id: 32, slug: "trust-changing-system", text: "How do users build trust with a system that's never the same twice?", detail: "Consistency breeds familiarity. This explores what anchors—visual, behavioral, or structural—help users feel at home despite constant change." },
      { id: 33, slug: "product-identity-ai", text: "What makes your product yours when the AI could generate anything?", detail: "Identity transcends generation. The prototype explores the signature elements that persist regardless of what AI creates." },
      { id: 34, slug: "adaptive-vs-unfamiliar", text: "Where do you draw the line between \"adaptive\" and \"unfamiliar\"?", detail: "Adaptation has limits. This explores thresholds where helpfulness becomes disorientation and how to detect them." },
      { id: 35, slug: "cost-of-novelty", text: "What's the cost of novelty? When does \"fresh\" become \"exhausting\"?", detail: "Novelty has cognitive overhead. The prototype explores when users want surprise vs. when they need predictability." },
    ]
  },
  {
    id: 8,
    title: "Adaptation & Learning",
    subtitle: "How does AI learn users?",
    questions: [
      { id: 36, slug: "ai-learned-transparency", text: "How does the user know what AI has learned about them?", detail: "User models should be transparent. This explores profile views, preference summaries, and 'what AI knows' dashboards." },
      { id: 37, slug: "edit-ai-assumptions", text: "Can users edit or correct what AI thinks it knows?", detail: "Wrong assumptions compound over time. The prototype explores correction interfaces and preference overrides." },
      { id: 38, slug: "past-vs-current-context", text: "How does AI handle conflict between past behavior and current context?", detail: "People change. This explores how AI balances historical patterns with real-time signals." },
      { id: 39, slug: "personalized-onboarding", text: "What does onboarding look like when the system is different for everyone?", detail: "Personalized systems can't show generic tours. The prototype explores adaptive onboarding that teaches the user's specific experience." },
      { id: 40, slug: "ai-getting-smarter", text: "How do you show AI getting smarter over time?", detail: "Progress is motivating. This explores subtle ways to demonstrate that the system is learning and improving." },
    ]
  },
  {
    id: 9,
    title: "Consistency & Predictability",
    subtitle: "How do users navigate non-deterministic systems?",
    questions: [
      { id: 41, slug: "fixed-anchors", text: "What anchors stay fixed so users can orient themselves?", detail: "Navigation needs stable landmarks. The prototype identifies what must never change in an otherwise dynamic interface." },
      { id: 42, slug: "building-expectations", text: "How do users build expectations when the interface keeps changing?", detail: "Predictability enables mastery. This explores patterns that help users anticipate system behavior despite variation." },
      { id: 43, slug: "product-character", text: "What makes a product feel like itself when every screen is generated?", detail: "Brand identity transcends layout. The prototype explores voice, animation, and interaction patterns that define product character." },
      { id: 44, slug: "signature-moments", text: "How do you maintain signature moments in dynamic UI?", detail: "Some moments matter for emotional connection. This explores how to preserve key experiences in generated interfaces." },
      { id: 45, slug: "variation-threshold", text: "How much variation is too much?", detail: "There's a threshold where change becomes chaos. The prototype tests where that line is for different types of content." },
    ]
  },
  {
    id: 10,
    title: "Error & Recovery",
    subtitle: "What happens when AI is wrong?",
    questions: [
      { id: 46, slug: "communicating-uncertainty", text: "How does AI communicate \"I might be wrong about this\"?", detail: "Preemptive humility sets expectations. The prototype explores hedging language and visual uncertainty markers." },
      { id: 47, slug: "escape-hatch", text: "What's the escape hatch when AI takes an action the user didn't want?", detail: "Undo must be discoverable and reliable. This explores prominent reversal options and confirmation patterns." },
      { id: 48, slug: "prevent-cascading-errors", text: "How do you prevent cascading errors—AI wrong, user acts, more wrongness?", detail: "Errors can compound. The prototype explores checkpoints and validation steps that catch problems early." },
      { id: 49, slug: "graceful-degradation", text: "What does graceful degradation look like when AI can't help?", detail: "AI won't always have answers. This explores fallback states that maintain usefulness without AI assistance." },
      { id: 50, slug: "correction-feedback-loop", text: "How does user correction feed back into the system?", detail: "Feedback loops improve AI. The prototype explores how to make correction feel valuable rather than tedious." },
    ]
  },
  {
    id: 11,
    title: "Ethics & Boundaries",
    subtitle: "What should AI never do?",
    questions: [
      { id: 51, slug: "ai-alignment-transparency", text: "How do you show users AI is working for them, not manipulating them?", detail: "Trust requires alignment transparency. The prototype explores ways to demonstrate AI's motivations and constraints." },
      { id: 52, slug: "ai-limitations-visual", text: "What visual cues communicate AI's boundaries and limitations?", detail: "Honest limitations build trust. This explores how to clearly show what AI can and cannot do." },
      { id: 53, slug: "user-dignity", text: "How do you design for user dignity—feeling in control, not controlled?", detail: "Autonomy is fundamental. The prototype explores interaction patterns that respect user agency and intelligence." },
      { id: 54, slug: "vulnerable-moments", text: "How do you handle AI in vulnerable moments? (stress, confusion, high stakes)", detail: "Sensitive contexts need careful design. This explores how AI should behave when users are most vulnerable." },
      { id: 55, slug: "hard-boundaries", text: "How does the user set hard boundaries AI must respect?", detail: "Some lines shouldn't be crossed. The prototype explores preference setting for non-negotiable limits." },
    ]
  },
  {
    id: 12,
    title: "Product Identity",
    subtitle: "What makes a product a product?",
    questions: [
      { id: 56, slug: "brand-in-generated-ui", text: "Where does brand live when UI is generated?", detail: "Brand transcends pixels. The prototype explores how voice, values, and personality persist in dynamic interfaces." },
      { id: 57, slug: "delight-dynamic-interfaces", text: "How do micro-interactions and delight work in dynamic interfaces?", detail: "Delight is intentional. This explores how to maintain craft and surprise in AI-generated experiences." },
      { id: 58, slug: "differentiation-ai-products", text: "What differentiates products when all use similar AI generation?", detail: "Commoditized AI needs differentiation. The prototype explores what makes products distinct beyond their intelligence." },
      { id: 59, slug: "personality-adaptation", text: "How do you maintain personality in a system that adapts to everyone?", detail: "Personalization can dilute identity. This explores how products stay recognizable while adapting to individuals." },
      { id: 60, slug: "immutable-signature", text: "What's the signature of your product that never changes?", detail: "Some things define you. The prototype identifies the immutable core that persists through all variation." },
    ]
  },
  {
    id: 13,
    title: "Designer's New Artifacts",
    subtitle: "What do we actually make now?",
    questions: [
      { id: 61, slug: "replacing-figma-deliverable", text: "What replaces the Figma screen as the core deliverable?", detail: "Static mockups can't capture dynamic systems. The prototype explores new artifact types: rules, constraints, principles, and logic." },
      { id: 62, slug: "prototyping-non-deterministic", text: "How do you prototype something that's never the same twice?", detail: "Non-deterministic systems need new prototyping methods. This explores range-based design and variation testing." },
      { id: 63, slug: "handoff-rules-logic", text: "How do you hand off rules and logic instead of layouts?", detail: "Developer handoff evolves. The prototype explores specification formats for behavior rather than appearance." },
      { id: 64, slug: "qa-non-deterministic", text: "How do you QA a non-deterministic system?", detail: "Testing dynamic systems is hard. This explores boundary testing, edge case catalogs, and quality metrics for AI behavior." },
      { id: 65, slug: "meta-design-system", text: "What does a design system look like for a system that designs itself?", detail: "Meta-design systems define how AI should compose. The prototype explores constraints, rules, and guardrails for generation." },
    ]
  },
];

// Helper function to find a question by slug
export function findQuestionBySlug(slug: string): Question | undefined {
  for (const category of categories) {
    const question = category.questions.find(q => q.slug === slug);
    if (question) return question;
  }
  return undefined;
}

// Helper function to find a question by ID
export function findQuestionById(id: number): Question | undefined {
  for (const category of categories) {
    const question = category.questions.find(q => q.id === id);
    if (question) return question;
  }
  return undefined;
}

// Export categories for use in other components
export { categories };
export type { Question, Category };

// Expandable Question Component with single-selection and box style when selected
// Questions appear disabled (low opacity) by default until enabled
function ExpandableQuestion({ question, isSelected, onSelect, setRef }: {
  question: Question;
  isSelected: boolean;
  onSelect: () => void;
  setRef?: (el: HTMLDivElement | null) => void;
}) {
  const isEnabled = question.enabled === true;

  // Enabled questions have full opacity, disabled questions are muted
  const numberClasses = isEnabled
    ? (isSelected ? 'text-black dark:text-white' : 'text-black/30 dark:text-white/30')
    : (isSelected ? 'text-black/40 dark:text-white/40' : 'text-black/20 dark:text-white/20');

  const textClasses = isEnabled
    ? (isSelected ? 'text-[20px] font-semibold text-black dark:text-white' : 'text-[20px] font-semibold text-black/70 dark:text-white/70 group-hover:text-black/90 dark:group-hover:text-white/90')
    : (isSelected ? 'text-[20px] font-semibold text-black/50 dark:text-white/50' : 'text-[20px] font-semibold text-black/30 dark:text-white/30 group-hover:text-black/40 dark:group-hover:text-white/40');

  const chevronClasses = isEnabled
    ? (isSelected ? 'rotate-180 text-black dark:text-white' : 'text-black/30 dark:text-white/30')
    : (isSelected ? 'rotate-180 text-black/40 dark:text-white/40' : 'text-black/20 dark:text-white/20');

  const detailClasses = isEnabled ? 'text-black/60 dark:text-white/60' : 'text-black/30 dark:text-white/30';

  // Box style: selected and hovered items get white/dark background with rounded corners
  // In light mode, add shadow for visibility against neutral-100 background
  // In dark mode, use lighter shade (neutral-900) for selected state against neutral-950 background
  const containerClasses = isEnabled && isSelected
    ? 'bg-white dark:bg-neutral-900 -mx-6 px-6 rounded-2xl shadow-sm dark:shadow-none'
    : '-mx-6 px-6 rounded-2xl hover:bg-black/[0.03] dark:hover:bg-white/5';

  return (
    <div ref={setRef} className={`transition-all duration-200 scroll-mt-20 group/question ${containerClasses}`}>
      <button
        onClick={isEnabled ? onSelect : undefined}
        disabled={!isEnabled}
        className={`w-full text-left pb-4 flex items-start gap-4 group ${isSelected ? 'pt-7' : 'pt-4'} ${!isEnabled ? 'cursor-default' : ''}`}
      >
        <span className={`text-[12px] mt-0.5 w-5 flex-shrink-0 transition-colors duration-200 ${numberClasses}`}>
          {question.id}.
        </span>
        <span className={`leading-[1.3] flex-1 transition-all duration-200 ${textClasses}`}>
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
      {/* Coming soon text for disabled questions - shows on hover with height animation */}
      {!isEnabled && (
        <div className="overflow-hidden max-h-0 group-hover/question:max-h-8 opacity-0 group-hover/question:opacity-100 transition-all duration-300 ease-out -mt-2">
          <span className="text-[12px] text-orange-500 pl-7 pb-4 block">
            Coming soon
          </span>
        </div>
      )}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isSelected ? (question.richDetail ? 'max-h-[1600px]' : 'max-h-40') + ' opacity-100 pb-7' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex">
          {question.richDetail ? (
            <div className="pl-8 pr-4">
              {question.richDetail}
            </div>
          ) : (
            <p className={`text-[14px] leading-[1.6] ${detailClasses} pl-8 pr-4`}>
              {question.detail}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Main TheShift Component
interface TheShiftProps {
  selectedQuestionId?: number;
  onQuestionSelect?: (id: number | undefined) => void;
}

export function TheShift({ selectedQuestionId, onQuestionSelect }: TheShiftProps) {
  // Refs for each question element to enable scroll-to-top
  const questionRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const hasScrolledOnMount = useRef(false);

  // Auto-scroll to selected question on initial mount (for direct URL access on mobile)
  useEffect(() => {
    if (hasScrolledOnMount.current) return;
    if (selectedQuestionId === undefined) return;

    // Only auto-scroll on mobile
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // Wait for refs to be populated and DOM to be ready
    const scrollTimeout = setTimeout(() => {
      const questionElement = questionRefs.current.get(selectedQuestionId);
      if (questionElement) {
        questionElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        hasScrolledOnMount.current = true;
      }
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, [selectedQuestionId]);

  const handleSelectQuestion = (id: number) => {
    // Toggle: if clicking the same question, deselect it
    const newId = selectedQuestionId === id ? undefined : id;

    // Notify parent component if callback is provided
    if (onQuestionSelect) {
      onQuestionSelect(newId);
    }

    // Update URL without triggering navigation (prevents scroll jump)
    if (newId === undefined) {
      window.history.pushState(null, '', '/the-shift');
    } else {
      // Find the question to get its slug
      const question = findQuestionById(newId);
      if (question) {
        window.history.pushState(null, '', `/the-shift/${question.slug}`);
      }

      // Only scroll if the element would be out of view after animation
      // Wait for animations to complete, then check if scroll is needed
      setTimeout(() => {
        const questionElement = questionRefs.current.get(newId);
        if (questionElement) {
          const rect = questionElement.getBoundingClientRect();
          const topMargin = 80;
          const bottomMargin = 100;
          const viewportHeight = window.innerHeight;

          // Check if element is above viewport (scrolled past it)
          const isAboveViewport = rect.top < topMargin;
          // Check if element top is below the visible area
          const isBelowViewport = rect.top > viewportHeight - bottomMargin;

          // Only scroll if element is not comfortably visible
          if (isAboveViewport || isBelowViewport) {
            questionElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }, 350);
    }
  };

  // Check if panel is open (a question is selected)
  const isPanelOpen = selectedQuestionId !== undefined;

  return (
    <div className={`h-full overflow-y-auto transition-colors duration-300 ${isPanelOpen ? 'bg-neutral-100 dark:bg-neutral-950' : 'bg-white dark:bg-neutral-950'}`}>
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-80 md:pb-20 md:pt-20 lg:py-24 flex justify-center">
        <article className="w-full max-w-[640px]">

          {/* Hero Section */}
          <header className="mb-16 md:mb-20">
            <h1
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-black dark:text-white font-bold mb-6"
                          >
              Designing for AI changes everything. How we think, what we deliver, and what questions we ask.
            </h1>

            <div className="space-y-4">
              <p className="text-[14px] leading-[1.6] text-black/70 dark:text-white/70">
                We&apos;re moving from deterministic flows to adaptive systems. From handing off layouts to handing off logic. From predicting every state to designing for outcomes we can&apos;t fully control.
              </p>
              <p className="text-[14px] leading-[1.6] text-black/70 dark:text-white/70">
                This is my attempt to map the new territory. Questions that sit at the heart of AI-first design, explored through prototypes, product explorations, and new artifacts along the way.
              </p>
            </div>
          </header>

          {/* Question Categories */}
          {categories.map((category) => (
            <section key={category.id} className="mb-14 md:mb-16 pb-14 md:pb-16 border-b border-black/[0.06] dark:border-white/[0.06] last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <h2
                  className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/80 dark:text-white/80 font-semibold"
                                  >
                  {category.title}
                </h2>
                {category.id !== 1 && (
                  <span
                    className="text-[10px] uppercase leading-none tracking-[0.08em] text-black/20 dark:text-white/20 font-semibold"
                                    >
                    Coming soon
                  </span>
                )}
              </div>
              <p className="text-[13px] text-black/50 dark:text-white/50 italic mb-6">
                {category.subtitle}
              </p>

              <div>
                {category.questions.map((question) => (
                  <ExpandableQuestion
                    key={question.id}
                    question={question}
                    isSelected={selectedQuestionId === question.id}
                    onSelect={() => handleSelectQuestion(question.id)}
                    setRef={(el) => {
                      if (el) questionRefs.current.set(question.id, el);
                    }}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Two Fundamental Questions */}
          <section className="mb-14 md:mb-16">
            <h2
              className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/40 dark:text-white/40 font-semibold mb-4"
                          >
              The Two Fundamental Questions
            </h2>

            <p className="text-[14px] leading-[1.6] text-black/70 dark:text-white/70 mb-8">
              This is my attempt to map the new territory. These are the two high-level questions I&apos;m exploring. Each one branches into specific design challenges, prototypes, and new ways of thinking about our craft.
            </p>

            <div className="space-y-8">
              <div className="border-l-2 border-black dark:border-white pl-4">
                <h3
                  className="text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-black dark:text-white font-semibold mb-3"
                                  >
                  How do we design for systems we can&apos;t fully predict?
                </h3>
                <p className="text-[14px] leading-[1.65] text-black/65 dark:text-white/65">
                  We&apos;re moving from deterministic flows to adaptive systems. The same user, same context, might see different things each time. How do we build trust, consistency, and user agency when we can&apos;t control every outcome?
                </p>
              </div>

              <div className="border-l-2 border-black dark:border-white pl-4">
                <h3
                  className="text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-black dark:text-white font-semibold mb-3"
                                  >
                  What do designers deliver when the interface designs itself?
                </h3>
                <p className="text-[14px] leading-[1.65] text-black/65 dark:text-white/65">
                  If AI generates the UI, what replaces the Figma file? What are our new artifacts: rules, constraints, principles? How do we hand off logic instead of layouts?
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-black/[0.06] dark:border-white/[0.06]">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-black/40 dark:text-white/40">
              <p className="flex items-center gap-1">
                <span>Built by</span>
                <a
                  href="https://itsprade.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
                >
                  itsprade
                </a>
              </p>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  Claude Code
                </span>
                <a
                  href="https://x.com/itsprade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black/80 dark:hover:text-white/80 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
