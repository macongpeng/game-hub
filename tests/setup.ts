import "@testing-library/jest-dom/vitest";

// Fix for React 18 hooks in test environment
import React from 'react';
import { vi } from 'vitest';

// Make React available globally
(window as Window & typeof globalThis).React = React;

// Define types for image props
interface ImageProps {
  alt?: string;
  src?: string;
  boxSize?: string;
  marginTop?: number;
  [key: string]: unknown;
}

// Mock Chakra UI components that cause issues
vi.mock("@chakra-ui/react", () => {
  return {
    Image: ({ alt, src, boxSize, marginTop, ...props }: ImageProps) => {
      // Convert Chakra props to standard CSS
      const style: React.CSSProperties = {};
      
      if (boxSize) {
        style.width = boxSize;
        style.height = boxSize;
      }
      
      if (marginTop !== undefined) {
        style.marginTop = `${marginTop}px`;
      }
      
      return React.createElement('img', { 
        alt, 
        src, 
        'data-testid': 'mocked-image',
        style,
        ...props 
      });
    },
    ImageProps: {}
  };
});