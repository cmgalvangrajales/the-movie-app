"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Layout, Breadcrumb, Row } from "antd";
import Menu from "@/components/Menu";
import Banner, { BannerType } from "@/components/Banner";
import MovieGrid from "@/components/MovieGrid";
import { HomeStyles } from "../page.styles";
import type { PaginationProps } from "antd";
import { useValoredMovies, contextAppValueInterface } from "@/contexts/Reducer";

const { Header } = Layout;

export default function Index() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const t = useTranslations("mylist");

  const appContext: contextAppValueInterface = useValoredMovies();

  const movies = {
    list: appContext?.movies?.length ? appContext?.movies : [],
  };

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
        <Row>
          <Banner type={BannerType.Basic}>
            <h1>{t("banner.title")}</h1>
            <p>{t("banner.description")}</p>
          </Banner>
        </Row>
        <MovieGrid
          {...{
            movies,
            onPaginationChange: () => {},
            loading: false,
            currentPage,
          }}
        />
      </HomeStyles.Container>
    </Layout>
  );
}
