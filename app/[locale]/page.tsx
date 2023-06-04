"use client";
import { useTranslations } from "next-intl";

// import Menu from "@/components/Menu";
import Menu from '../components/Menu';
import { HomeStyles } from "./page.styles";
import { Alert, Layout, List, Typography, Divider, Spin } from "antd";
import { useEffect, useState } from "react";
import { getPopularMovies } from "@/services/MoviesService";
import { LoadingOutlined } from "@ant-design/icons";
import { MoviesInterface } from "@/services/MoviesService.types";

const { Header } = Layout;

export default function Index() {
  const [movies, setMovies] = useState<MoviesInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const t = useTranslations("Index");

  useEffect(() => {
    const initialLoad = async () => {
      const { results } = await getPopularMovies();
      console.log("results", results);
      setMovies(results);
      setLoading(false);
    };

    initialLoad();
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
        <Alert message={t("title")} type="info" showIcon />
        <Divider orientation="left" />
        {!loading ? (
          <List
            header={<div>{t("someTitles")}</div>}
            bordered
            dataSource={movies}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark>[TITLE]</Typography.Text> {item.title}
              </List.Item>
            )}
          />
        ) : (
          <Spin indicator={antIcon} />
        )}
      </HomeStyles.Container>
    </Layout>
  );
}
