"use client";
import { useTranslations } from "next-intl";
import { Layout, Row, Breadcrumb } from "antd";
import { useEffect, useState } from "react";
import { getPopularMovies } from "@/services/MoviesService";
import { MoviesStateInterface } from "./page.types";
import type { PaginationProps } from "antd";

import { HomeStyles } from "./page.styles";
import Menu from "../components/Menu";
import Banner, { BannerType } from "../components/Banner";
import MovieGrid from "../components/MovieGrid";

const { Header, Footer } = Layout;

export default function Index() {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [movies, setMovies] = useState<MoviesStateInterface>({
    list: [],
    total_pages: 1,
    total_results: 0,
  });

  const t = useTranslations("Index");
  const footer = useTranslations("footer");

  const getMovies = async (page: number) => {
    setLoading(true);
    const { results, total_pages, total_results } = await getPopularMovies({
      page,
    });
    setMovies({ list: results, total_pages, total_results });
    setLoading(false);
  };

  const onPaginationChange: PaginationProps["onChange"] = (page) => {
    getMovies(page);
    setCurrentPage(page);
  };

  useEffect(() => {
    getMovies(1);
  }, []);

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
              title: "Home",
            },
          ]}
        />
        <Row>
          <Banner type={BannerType.Basic}>
            <h1>{t("banner.title")}</h1>
            <p>{t("banner.description")}</p>
          </Banner>
        </Row>
        {!loading && movies && (
          <MovieGrid
            {...{ movies, onPaginationChange, loading, currentPage }}
          />
        )}
      </HomeStyles.Container>
      <Footer style={{ textAlign: "center" }}>{footer("title")}</Footer>
    </Layout>
  );
}
