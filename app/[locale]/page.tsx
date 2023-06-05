"use client";
import { useTranslations } from "next-intl";
import { Layout, Pagination, Row, Breadcrumb } from "antd";
import { useEffect, useState } from "react";
import { getPopularMovies } from "@/services/MoviesService";
import { MoviesStateInterface } from "./page.types";
import type { PaginationProps } from "antd";
import MovieCard from "./MovieCard";

import { HomeStyles } from "./page.styles";
import Menu from "../components/Menu";

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
    console.log("total_pages", total_pages);
    setLoading(false);
  };

  const onPaginationChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    getMovies(page);
    setCurrentPage(page);
  };

  useEffect(() => {
    getMovies(1);
  }, []);

  // TODO: add message in case there are no movies

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
          <HomeStyles.BannerContainer>
            <h1>{t("banner.title")}</h1>
            <p>{t("banner.description")}</p>
          </HomeStyles.BannerContainer>
        </Row>
        <MovieCard loading={loading} movies={movies.list} />
        {movies && (
          <Row style={{ justifyContent: "center", marginTop: "10px" }}>
            <Pagination
              current={currentPage}
              total={movies.total_results > 5000 ? 5000 : movies.total_results}
              hideOnSinglePage
              responsive
              showSizeChanger={false}
              onChange={onPaginationChange}
            />
          </Row>
        )}
      </HomeStyles.Container>
      <Footer style={{ textAlign: "center" }}>{footer("title")}</Footer>
    </Layout>
  );
}
