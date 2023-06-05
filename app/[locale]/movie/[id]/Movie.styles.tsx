import styled from "styled-components";
import { Typography } from "antd";

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

export const MovieDetail = {
  BannerContainer,
  ExtraLayer,
  Title,
};
