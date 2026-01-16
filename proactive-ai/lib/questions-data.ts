// Question data structure with metadata for OG tags
export interface QuestionMeta {
  id: number;
  slug: string;
  text: string;
  detail: string;
  enabled?: boolean;
  // OG metadata for social sharing
  ogTitle?: string; // Falls back to text if not provided
  ogDescription?: string; // Falls back to detail if not provided
  ogImage?: string; // Path to OG image, e.g., "/og/context-driven-interfaces.png"
}

export interface CategoryMeta {
  id: number;
  title: string;
  subtitle: string;
  questions: QuestionMeta[];
}

// All questions organized by category with metadata
export const questionsData: CategoryMeta[] = [
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
        ogTitle: "Context-Driven Interfaces | Proactive AI",
        ogDescription: "Designing interfaces that respond to context requires rethinking how software works. Instead of users navigating to information, the system surfaces what matters in the moment.",
        ogImage: "/og/context-driven-interfaces.png",
      },
      {
        id: 2,
        slug: "adaptive-data-density",
        text: "How does the same data render differently based on context? (glance vs. deep dive)",
        detail: "Adaptive density serves different needs. A prototype might show the same data as a badge, card, or full detail view based on context.",
        ogTitle: "Adaptive Data Density | Proactive AI",
        ogDescription: "Exploring how the same information can be presented differently based on user context - from quick glances to deep dives.",
      },
      {
        id: 3,
        slug: "urgency-visual-weight",
        text: "How does urgency translate to visual weight?",
        detail: "Priority should be visible. The prototype establishes rules for how importance affects size, color, position, and motion.",
        ogTitle: "Urgency & Visual Weight | Proactive AI",
        ogDescription: "Establishing the visual language of priority - how importance translates to size, color, position, and motion.",
      },
      {
        id: 4,
        slug: "consistent-vs-flexible",
        text: "What stays consistent vs. what flexes in a dynamic interface?",
        detail: "Some anchors must remain stable. This explores what elements users rely on for orientation in changing interfaces.",
      },
      {
        id: 5,
        slug: "user-override-ai",
        text: "How does the user correct AI when it chooses the wrong display?",
        detail: "Users know best sometimes. The prototype explores override mechanisms and preference learning.",
      },
    ]
  },
  {
    id: 2,
    title: "Agency & Control",
    subtitle: "Where does AI end and human begin?",
    questions: [
      { id: 6, slug: "automatic-vs-confirmed", text: "What decisions can AI make automatically vs. what needs human confirmation?", detail: "This explores the spectrum of autonomy—from fully automated background tasks to high-stakes decisions requiring explicit approval. The prototype could visualize different decision tiers and their confirmation patterns." },
      { id: 7, slug: "ai-user-handoff", text: "How do you design the handoff moment when AI passes control to the user?", detail: "The transition from AI-driven to human-controlled action is a critical UX moment. A prototype might explore different handoff animations, context summaries, and state preservation techniques." },
      { id: 8, slug: "user-ai-conversation", text: "How do users \"teach\" the system their preferences through use?", detail: "Implicit learning is powerful. The prototype could demonstrate how user corrections, selections, and dismissals shape future AI behavior—making the learning visible without being intrusive." },
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
      { id: 13, slug: "explain-ai-logic", text: "When should the system explain its logic vs. just act?", detail: "Explanations add cognitive load. The prototype might explore progressive disclosure—acting confidently for routine decisions while offering \"why\" for unusual ones." },
      { id: 14, slug: "trust-building", text: "How does trust build over time? What does a \"trust arc\" look like?", detail: "Trust isn't binary. A prototype could visualize the journey from skepticism to reliance, showing what interactions build confidence and which erode it." },
      { id: 15, slug: "ai-boundaries", text: "How does the UI communicate \"this is AI-driven\" vs. \"this is a rule\"?", detail: "Users should understand what's intelligent and what's deterministic. The prototype could establish visual conventions that distinguish AI suggestions from system requirements." },
    ]
  },
  {
    id: 4,
    title: "Timing & Pacing",
    subtitle: "When should AI intervene?",
    questions: [
      { id: 16, slug: "optimal-interruption", text: "What's the difference between helpful interruption and annoying notification?", detail: "Context is everything. A prototype could demonstrate how the same notification feels different based on user state, task depth, and timing." },
      { id: 17, slug: "urgency-patience", text: "How do you design for urgency without creating anxiety?", detail: "Urgency patterns easily become stressful. The prototype explores calm urgency—how to convey importance without triggering panic or notification fatigue." },
      { id: 18, slug: "attention-rhythm", text: "How does the system learn when users want proactive help vs. want to be left alone?", detail: "Attention has rhythms. A prototype might show how the system detects focus states and adjusts its proactivity accordingly—silent during deep work, helpful during transitions." },
      { id: 19, slug: "interaction-cadence", text: "What's the ideal cadence between system suggestions and user actions?", detail: "Too many suggestions overwhelm; too few miss opportunities. The prototype could explore dynamic pacing that adjusts based on user engagement patterns." },
      { id: 20, slug: "proactive-delay", text: "How do you design \"slow AI\" for decisions that shouldn't feel instant?", detail: "Some decisions benefit from deliberate pacing. A prototype might explore intentional delays that signal thoughtfulness rather than slowness." },
    ]
  },
  {
    id: 5,
    title: "Information Hierarchy",
    subtitle: "What matters most right now?",
    questions: [
      { id: 21, slug: "curated-vs-complete", text: "How do users toggle between \"show me what matters\" and \"show me everything\"?", detail: "Curation vs. completeness is a fundamental tension. The prototype explores view modes that let users choose their information density." },
      { id: 22, slug: "hidden-information", text: "When should AI hide information? What makes omission helpful vs. paternalistic?", detail: "Hiding information is powerful but risky. The prototype could explore different omission strategies—collapsing, dimming, or removing—and their trust implications." },
      { id: 23, slug: "surface-insight", text: "How does the system surface buried insights without overwhelming the user?", detail: "Insights lose value when buried. A prototype might show progressive surfacing—bringing important patterns to attention at the right moment without cluttering the default view." },
      { id: 24, slug: "priority-competition", text: "What happens when multiple high-priority items compete for attention?", detail: "Priority collision is inevitable. The prototype could demonstrate stacking, sequencing, or consolidation strategies for managing competing urgencies." },
      { id: 25, slug: "context-switching", text: "How does the interface handle context switching between tasks?", detail: "Context switches are cognitively expensive. A prototype might explore smooth transitions, state preservation, and re-orientation patterns." },
    ]
  },
  {
    id: 6,
    title: "Learning & Adaptation",
    subtitle: "How does the system get smarter?",
    questions: [
      { id: 26, slug: "visible-learning", text: "How do you make AI learning visible without being creepy?", detail: "Transparency about learning builds trust—but can feel surveillance-like. The prototype explores how to show adaptation in ways that feel helpful, not watched." },
      { id: 27, slug: "preference-correction", text: "What's the right UI for correcting AI when it misunderstands a preference?", detail: "Correction UI must be frictionless. A prototype might explore inline corrections, dedicated settings, or conversational adjustments." },
      { id: 28, slug: "learning-speed", text: "How quickly should the system adapt? When is fast learning unsettling?", detail: "Instant adaptation can feel invasive. The prototype could explore learning curves—gradual adaptation that feels natural rather than suddenly knowing too much." },
      { id: 29, slug: "forgetting-patterns", text: "How does the system \"forget\" outdated patterns gracefully?", detail: "People change. A prototype might show how the system detects stale preferences and offers to update, rather than stubbornly applying old patterns." },
      { id: 30, slug: "team-vs-individual", text: "How do you balance personalization with team/organizational standards?", detail: "Personal preferences may conflict with group norms. The prototype could explore layered preferences—personal, team, and organizational—and how they interact." },
    ]
  },
  {
    id: 7,
    title: "Privacy & Boundaries",
    subtitle: "What should AI know and not know?",
    questions: [
      { id: 31, slug: "data-access-control", text: "How do users control what data the AI can access or use?", detail: "Data boundaries need clear controls. A prototype might show granular permissions—letting users decide what the AI can see, remember, or act upon." },
      { id: 32, slug: "inference-transparency", text: "How do you show what the AI has inferred without revealing its full model?", detail: "Users want to know what AI \"thinks\" about them. The prototype could explore inference cards—showing key assumptions users can correct or confirm." },
      { id: 33, slug: "cross-context-boundaries", text: "What's the right boundary between work and personal data in AI suggestions?", detail: "Context bleeding is uncomfortable. A prototype might demonstrate strict context walls or optional bridges that users explicitly enable." },
      { id: 34, slug: "data-retention", text: "How do users \"delete\" something from AI's memory?", detail: "The right to be forgotten matters. The prototype could explore deletion UI—what it means to remove data, retrain models, or reset relationship history." },
      { id: 35, slug: "shared-ai-context", text: "How does the system handle sensitive information when multiple users share context?", detail: "Shared spaces need privacy rules. A prototype might show access controls, redaction patterns, or role-based visibility for sensitive AI insights." },
    ]
  },
  {
    id: 8,
    title: "Failure & Edge Cases",
    subtitle: "What happens when things go wrong?",
    questions: [
      { id: 36, slug: "graceful-degradation", text: "How should the interface degrade when AI is unavailable?", detail: "AI downtime happens. The prototype could show graceful fallbacks—maintaining functionality while clearly indicating reduced intelligence." },
      { id: 37, slug: "wrong-context", text: "What happens when AI acts on the wrong context?", detail: "Context errors are jarring. A prototype might explore context indicators, easy corrections, and recovery paths when the system misreads the situation." },
      { id: 38, slug: "conflicting-signals", text: "How does the system handle conflicting signals from different data sources?", detail: "Data conflicts are common. The prototype could show how to surface contradictions, let users resolve them, or handle them automatically with transparency." },
      { id: 39, slug: "catastrophic-failure", text: "What's the UX of catastrophic AI failure?", detail: "Major failures need major responses. A prototype might explore emergency states, clear communication, and rebuild-trust patterns after significant errors." },
      { id: 40, slug: "feedback-loops", text: "How do you prevent AI from creating self-reinforcing feedback loops?", detail: "AI can amplify its own biases. The prototype could visualize loop detection and show how the system breaks cycles of reinforced behavior." },
    ]
  },
  {
    id: 9,
    title: "Collaboration & Social",
    subtitle: "How does AI work with multiple users?",
    questions: [
      { id: 41, slug: "ai-multiplayer", text: "How does AI mediate between multiple users' preferences?", detail: "Shared AI must serve multiple masters. A prototype might show preference negotiation, fair-allocation algorithms, or explicit priority settings." },
      { id: 42, slug: "ai-conflict-resolution", text: "What's the UX of AI-assisted conflict resolution?", detail: "AI can help resolve disagreements. The prototype could explore neutral summaries, option generation, and facilitated decision-making." },
      { id: 43, slug: "ai-attribution", text: "How do you show what AI contributed vs. what humans created?", detail: "Attribution matters for accountability. A prototype might show provenance tracking—clearly marking AI-generated content while preserving flow." },
      { id: 44, slug: "ai-delegation", text: "How does AI handle delegation between team members?", detail: "AI can route work intelligently. The prototype could demonstrate smart assignment, load balancing, and preference-aware task distribution." },
      { id: 45, slug: "ai-presence", text: "What does AI \"presence\" look like in collaborative spaces?", detail: "AI as a participant needs representation. A prototype might explore AI avatars, contribution indicators, or ambient presence signals." },
    ]
  },
  {
    id: 10,
    title: "Onboarding & Discovery",
    subtitle: "How do users learn the system?",
    questions: [
      { id: 46, slug: "ai-introduction", text: "How do you introduce AI capabilities without overwhelming new users?", detail: "AI features need careful revelation. A prototype might show progressive onboarding—introducing capabilities as users are ready to use them." },
      { id: 47, slug: "feature-discovery", text: "How do users discover AI features they didn't know existed?", detail: "Hidden features waste potential. The prototype could explore contextual hints, feature spotlights, or capability cards that surface at relevant moments." },
      { id: 48, slug: "expectation-setting", text: "What's the right way to set expectations about AI limitations?", detail: "Overpromising breeds disappointment. A prototype might show honest capability framing—what the AI can do well, where it struggles, and how it improves." },
      { id: 49, slug: "mental-model", text: "How do you help users build an accurate mental model of how the AI works?", detail: "Understanding promotes trust. The prototype could explore interactive tutorials, behavior explanations, or \"how I decided\" panels." },
      { id: 50, slug: "ai-vocabulary", text: "What vocabulary should the system use to describe AI actions?", detail: "Language shapes perception. A prototype might test different terminology—\"suggest\" vs \"recommend\" vs \"predict\"—and their trust implications." },
    ]
  },
  {
    id: 11,
    title: "Customization & Control",
    subtitle: "How do users shape AI behavior?",
    questions: [
      { id: 51, slug: "autonomy-slider", text: "How do users adjust AI's level of autonomy?", detail: "Autonomy preferences vary. A prototype might show an autonomy spectrum—from fully manual to fully automatic—with clear implications at each level." },
      { id: 52, slug: "behavior-rules", text: "What's the UI for creating rules that govern AI behavior?", detail: "Power users want control. The prototype could explore rule builders—visual or textual ways to specify conditions and actions the AI should follow." },
      { id: 53, slug: "preset-modes", text: "How do users switch between AI \"modes\" (focused, exploratory, conservative)?", detail: "Context demands different AI personalities. A prototype might show mode switching—clear states with distinct behaviors and easy transitions." },
      { id: 54, slug: "undo-ai", text: "How do users undo AI-driven changes at various scales?", detail: "Undo needs granularity. The prototype could explore layered undo—single actions, sessions, or rolling back to previous AI behavior patterns." },
      { id: 55, slug: "ai-scheduling", text: "How do users schedule when AI should be active or quiet?", detail: "Timing preferences matter. A prototype might show AI schedules—quiet hours, high-activity windows, and event-triggered activation." },
    ]
  },
  {
    id: 12,
    title: "Ethics & Responsibility",
    subtitle: "Who is accountable for AI decisions?",
    questions: [
      { id: 56, slug: "ai-accountability", text: "How does the interface make clear who's responsible for AI-assisted decisions?", detail: "Accountability must be unambiguous. A prototype might show responsibility indicators—clearly marking human approvals, AI suggestions, and automated actions." },
      { id: 57, slug: "bias-detection", text: "How do you surface potential AI bias without creating alarm?", detail: "Bias awareness without panic. The prototype could explore calm bias indicators—patterns that might need review without implying the system is broken." },
      { id: 58, slug: "appeal-mechanism", text: "What's the UX of appealing an AI decision?", detail: "Users need recourse. A prototype might show appeal flows—how to challenge, review, and potentially override AI-driven outcomes." },
      { id: 59, slug: "audit-trail", text: "How do users access the audit trail of AI decisions?", detail: "History enables accountability. The prototype could explore decision logs—searchable, filterable records of what the AI did and why." },
      { id: 60, slug: "ethical-guardrails", text: "How does the system communicate its ethical boundaries?", detail: "AI limits should be known. A prototype might show boundary cards—clear statements about what the AI won't do, even if technically possible." },
    ]
  }
];

// Helper function to find a question by slug
export function findQuestionMetaBySlug(slug: string): QuestionMeta | undefined {
  for (const category of questionsData) {
    const question = category.questions.find(q => q.slug === slug);
    if (question) return question;
  }
  return undefined;
}

// Helper function to find a question by ID
export function findQuestionMetaById(id: number): QuestionMeta | undefined {
  for (const category of questionsData) {
    const question = category.questions.find(q => q.id === id);
    if (question) return question;
  }
  return undefined;
}

// Helper function to get all questions as a flat array
export function getAllQuestions(): QuestionMeta[] {
  return questionsData.flatMap(category => category.questions);
}
