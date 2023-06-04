import styled from "styled-components";

import { AppThemeInterface } from "@/contexts/ThemeContext";

const Container = styled.div<{ theme?: AppThemeInterface }>`
  padding: 16;
  background-color: ${({ theme }) => theme.palette.gray40};
  border-radius: 4;
  width: 100%;
  margin-bottom: 16;
`;

export const WrapperStyles = {
  Container,
};
