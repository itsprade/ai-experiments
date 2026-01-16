import { Metadata } from 'next';
import { findQuestionMetaBySlug, findQuestionMetaById } from '@/lib/questions-data';
import QuestionPageClient from './QuestionPageClient';

// Base URL for the site - update this for production
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://itsprade-ai-experiments.vercel.app';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate dynamic metadata for each question page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;

  // Try to find question by slug first, then by numeric ID
  let question = findQuestionMetaBySlug(id);
  if (!question) {
    const numericId = parseInt(id, 10);
    if (!isNaN(numericId)) {
      question = findQuestionMetaById(numericId);
    }
  }

  // Default metadata if question not found
  if (!question) {
    return {
      title: 'Question Not Found | Proactive AI',
      description: 'The requested question could not be found.',
    };
  }

  // Use custom OG values or fall back to question text/detail
  const title = question.ogTitle || `${question.text} | Proactive AI`;
  const description = question.ogDescription || question.detail;
  const ogImage = question.ogImage || '/og/default.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/the-shift/${question.slug}`,
      siteName: 'Proactive AI',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function QuestionDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <QuestionPageClient idParam={id} />;
}
