import styled from "styled-components";
import { Typography, Col } from "antd";

import { AppThemeInterface } from "@/contexts/ThemeContext";

const { Title: antdTitle } = Typography;

const BannerContainer = styled.div<{
  theme?: AppThemeInterface;
  background: string;
}>`
  background-color: ${({ theme }) => theme.palette.white};
  background-image: url(${({ background }) => background});

  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ExtraLayer = styled.div`
  background-color: #00000069;
  display: flex;
  padding: 30px 40px;
`;

const Title = styled(antdTitle)<{ theme?: AppThemeInterface }>`
  color: ${({ theme }) => theme.palette.white} !important;
`;

const BannerContainerBasic = styled(Col)<{ theme?: AppThemeInterface }>`
  padding: 10px 20px;
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.blue};
  margin-bottom: 2em;
  margin-top: 1.5em;
  color: ${({ theme }) => theme.palette.white};
`;

export const BannerStyles = {
  BannerContainerBasic,
  BannerContainer,
  ExtraLayer,
  Title,
};
