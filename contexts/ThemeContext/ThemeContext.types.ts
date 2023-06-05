import { ReactNode } from 'react';

export interface ThemeProviderInterface {
  children: ReactNode;
}

export enum FontFamily {
  Helvetica = 'Helvetica',
  GothamBook = 'GothamBook',
  GothamBold = 'Gotham Bold',
  GothamBookItalic = 'GothamBookItalic',
}

export interface AppThemeInterface {
  breakPointSize: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tabletS: string;
    tabletM: string;
    laptopS: string;
    laptopM: string;
    laptopML: string;
    laptopL: string;
    desktop: string;
  };
  mediaQueries: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tabletS: string;
    tabletM: string;
    laptopS: string;
    laptopM: string;
    laptopL: string;
    desktop: string;
  };
  palette: {
    primary: string;
    primary100: string;
    primary300: string;
    primary400: string;
    secondary: string;
    tertiary50: string;
    tertiary100: string;
    tertiary200: string;
    tertiary300: string;
    tertiary400: string;
    black: string;
    white: string;
    green: string;
    blue: string;
    red: string;
    gray300: string;
    gray: string;
    grayLight: string;
    grayLightLight: string;
    grayExtraLight: string;
    grayDark: string;
    message: string;
    error: string;
    success: string;
    warning: string;
    overlay: string;
  };
}
