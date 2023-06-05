import styled from "styled-components";
import { Col } from "antd";
import { ContainerInterface } from "./page.types";

import { AppThemeInterface } from "@/contexts/ThemeContext";

const Container = styled.div<ContainerInterface>`
  min-height: 100vh;
  padding: ${({ isBodyContainer = false }) =>
    isBodyContainer ? "10px 20px" : "0"};
`;

const BannerContainer = styled(Col)<{ theme?: AppThemeInterface }>`
  padding: 10px 20px;
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.blue};
  margin-bottom: 2em;
  margin-top: 1.5em;
  color: ${({ theme }) => theme.palette.white};
`;

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

export const HomeStyles = {
  Container,
  GridContainer,
  BannerContainer,
};
