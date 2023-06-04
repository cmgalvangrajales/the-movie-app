import styled from "styled-components";
import { ContainerInterface } from "./page.types";

const Container = styled.div<ContainerInterface>`
  min-height: 100vh;
  padding: ${({ isBodyContainer = false }) => (isBodyContainer ? "10px 20px" : "0")};
`;

export const HomeStyles = {
  Container,
};
