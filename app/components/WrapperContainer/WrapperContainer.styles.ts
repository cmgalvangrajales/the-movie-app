import styled from "styled-components";

import { AppThemeInterface } from "@/contexts/ThemeContext";

const Container = styled.div<{ theme?: AppThemeInterface }>`
  background-color: ${({ theme }) => theme.palette.gray40};
  border-radius: 4px;
  width: 100%;
`;

export const WrapperStyles = {
  Container,
};
