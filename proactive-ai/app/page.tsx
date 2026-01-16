import { Metadata } from 'next';
import IntroductionClient from './IntroductionClient';

// Base URL for the site
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://itsprade-ai-experiments.vercel.app';

export const metadata: Metadata = {
  title: 'Rewiring how designers think about software in the age of AI',
  description: 'Software is fundamentally changing. As AI becomes a core part of how products work, systems are moving beyond predictable, deterministic interfaces toward behavior that adapts, reasons, and acts on its own.',
  openGraph: {
    title: 'Rewiring how designers think about software in the age of AI',
    description: 'Software is fundamentally changing. As AI becomes a core part of how products work, systems are moving beyond predictable, deterministic interfaces toward behavior that adapts, reasons, and acts on its own.',
    url: BASE_URL,
    siteName: 'Proactive AI',
    images: [
      {
        url: '/og/introduction.png',
        width: 1200,
        height: 630,
        alt: 'Rewiring how designers think about software in the age of AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rewiring how designers think about software in the age of AI',
    description: 'Software is fundamentally changing. As AI becomes a core part of how products work, systems are moving beyond predictable, deterministic interfaces toward behavior that adapts, reasons, and acts on its own.',
    images: ['/og/introduction.png'],
  },
};

export default function Home() {
  return <IntroductionClient />;
}
