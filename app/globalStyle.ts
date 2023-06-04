import { AppThemeInterface } from "@/contexts/ThemeContext";
import { createGlobalStyle } from "styled-components";

interface GlobalStyleInterface {
  theme: AppThemeInterface;
}

const globalStyle = createGlobalStyle<GlobalStyleInterface>`
  body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.palette.secondary};
  }
`;

export default globalStyle;
