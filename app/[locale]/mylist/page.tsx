"use client";
import Menu from "@/components/Menu";
import { HomeStyles } from "../page.styles";
import { Layout, Breadcrumb } from "antd";

const { Header } = Layout;

export default function Index() {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: 0,
        }}
      >
        <Menu />
      </Header>
      <HomeStyles.Container isBodyContainer>
        <Breadcrumb
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: "My List",
            },
          ]}
        />
      </HomeStyles.Container>
    </Layout>
  );
}
