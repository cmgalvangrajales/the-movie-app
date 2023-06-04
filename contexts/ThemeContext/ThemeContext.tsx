'use client';
import GlobalStyle from '@/app/globalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './ThemeContext.theme';
import { ThemeProviderInterface } from '@/contexts/ThemeContext';

/**
 * Create provider to manage Language context
 *
 * @param { LanguageProviderInterface } props - Properties to inject in context
 *
 * @returns JSX.Element
 */
export const AppThemeProvider = ({ children }: ThemeProviderInterface): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProvider;