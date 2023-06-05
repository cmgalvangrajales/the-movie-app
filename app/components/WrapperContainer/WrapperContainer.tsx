import { Card, Space } from "antd";
import { WrapperStyles } from "./WrapperContainer.styles";

const Wrapper = ({
  children,
  customStyles,
}: {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
}) => {
  return (
    <WrapperStyles.Container style={customStyles}>
      {children}
    </WrapperStyles.Container>
  );
};

export default Wrapper;
