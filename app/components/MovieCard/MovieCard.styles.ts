import styled from "styled-components";

import { AppThemeInterface } from "@/contexts/ThemeContext";

const GridContainer = styled.div<{ theme?: AppThemeInterface }>`
  width: 100%;

  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: start;

  a {
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  h2,
  p {
    font-size: 1em;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    color: ${({ theme }) => theme.palette.grayLight};
    margin-top: 0;
  }
`;

export const MovieCard = {
  GridContainer,
};
