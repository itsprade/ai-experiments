// Page content configuration with dynamic component loading

import { Page1Content } from '@/components/pages/Page1Content';
import { Page2Content } from '@/components/pages/Page2Content';
import { Page3Content } from '@/components/pages/Page3Content';
import { Page4Content } from '@/components/pages/Page4Content';
import { Page5Content } from '@/components/pages/Page5Content';
import { Page6Content } from '@/components/pages/Page6Content';
import { Page7Content } from '@/components/pages/Page7Content';
import { Page8Content } from '@/components/pages/Page8Content';
import { Page9Content } from '@/components/pages/Page9Content';
import { Page10Content } from '@/components/pages/Page10Content';

export interface PageConfig {
  leftPanelComponent: React.ComponentType;
  gradient: string;
  colors: string[];
}

// ✅ Reusable Component: Maps page numbers to their custom components and gradients
export const pageConfigs: Record<number, PageConfig> = {
  1: {
    leftPanelComponent: Page1Content,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    colors: ['#667eea', '#764ba2', '#9b59b6', '#3498db']
  },
  2: {
    leftPanelComponent: Page2Content,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    colors: ['#f093fb', '#f5576c', '#ff6b9d', '#c471f5']
  },
  3: {
    leftPanelComponent: Page3Content,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    colors: ['#4facfe', '#00f2fe', '#43e8d8', '#667eea']
  },
  4: {
    leftPanelComponent: Page4Content,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    colors: ['#43e97b', '#38f9d7', '#4facfe', '#00b09b']
  },
  5: {
    leftPanelComponent: Page5Content,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    colors: ['#fa709a', '#fee140', '#feca57', '#ff9ff3']
  },
  6: {
    leftPanelComponent: Page6Content,
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    colors: ['#30cfd0', '#330867', '#5a3f7e', '#48c6ef']
  },
  7: {
    leftPanelComponent: Page7Content,
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    colors: ['#a8edea', '#fed6e3', '#fbc2eb', '#a6c1ee']
  },
  8: {
    leftPanelComponent: Page8Content,
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    colors: ['#ff9a9e', '#fecfef', '#ffdde1', '#f6d365']
  },
  9: {
    leftPanelComponent: Page9Content,
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    colors: ['#ffecd2', '#fcb69f', '#ff9a56', '#ffeaa7']
  },
  10: {
    leftPanelComponent: Page10Content,
    gradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    colors: ['#ff6e7f', '#bfe9ff', '#a8e6cf', '#ffd3a5']
  }
};

/**
 * Get the page configuration for a given page number
 * @param pageNumber - The page number (1-10)
 * @returns PageConfig with the component and gradient, defaults to page 1 if not found
 */
export function getPageConfig(pageNumber: number): PageConfig {
  return pageConfigs[pageNumber] || pageConfigs[1];
}
