// Page content configuration with dynamic component loading

import { Introduction } from '@/components/pages/Introduction';
import { TheShift } from '@/components/pages/TheShift';

export interface PageConfig {
  leftPanelComponent: React.ComponentType;
  gradient: string;
  colors: string[];
}

// Maps page numbers to their custom components and gradients
export const pageConfigs: Record<number, PageConfig> = {
  1: {
    leftPanelComponent: Introduction,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    colors: ['#667eea', '#764ba2', '#9b59b6', '#3498db']
  },
  2: {
    leftPanelComponent: TheShift,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    colors: ['#f093fb', '#f5576c', '#ff6b9d', '#c471f5']
  }
};

/**
 * Get the page configuration for a given page number
 * @param pageNumber - The page number (1-2)
 * @returns PageConfig with the component and gradient, defaults to page 1 if not found
 */
export function getPageConfig(pageNumber: number): PageConfig {
  return pageConfigs[pageNumber] || pageConfigs[1];
}
