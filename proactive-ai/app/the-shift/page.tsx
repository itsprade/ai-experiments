import { Metadata } from 'next';
import TheShiftClient from './TheShiftClient';

// Base URL for the site
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://proactive-ai.vercel.app';

export const metadata: Metadata = {
  title: 'The Shift | Designing for AI',
  description: 'Designing for AI changes everything. How we think, what we deliver, and what questions we ask. Questions that sit at the heart of AI-first design.',
  openGraph: {
    title: 'The Shift | Designing for AI',
    description: 'Designing for AI changes everything. How we think, what we deliver, and what questions we ask. Questions that sit at the heart of AI-first design.',
    url: `${BASE_URL}/the-shift`,
    siteName: 'Proactive AI',
    images: [
      {
        url: '/og/the-shift.png',
        width: 1200,
        height: 630,
        alt: 'The Shift - Designing for AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Shift | Designing for AI',
    description: 'Designing for AI changes everything. How we think, what we deliver, and what questions we ask. Questions that sit at the heart of AI-first design.',
    images: ['/og/the-shift.png'],
  },
};

export default function QuestionsPage() {
  return <TheShiftClient />;
}
