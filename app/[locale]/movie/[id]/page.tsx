"use client";
import { useEffect, useState } from "react";
import { Layout, Breadcrumb } from "antd";
import { useTranslations } from "next-intl";
import { HomeStyles } from "../../page.styles";
import { getMovie } from "@/services/MoviesService";
import Menu from "../../../components/Menu";
import { MovieInterface } from "@/services/MoviesService.types";

const { Header, Footer } = Layout;

const Movie = ({ params: { id } }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieInterface>();

  const footer = useTranslations("footer");

  useEffect(() => {
    const getMovieByID = async () => {
      setLoading(true);
      const data = await getMovie({ id });
      setMovie(data);
      setLoading(false);
    };

    getMovieByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              title: <a href="/">Home</a>,
            },
            {
              title: movie?.title || "Not Found",
            },
          ]}
        />
        {!loading && movie ? (
          <p>Movie Title {movie?.title}</p>
        ) : (
          <div>Loading</div>
        )}
      </HomeStyles.Container>
      <Footer style={{ textAlign: "center" }}>{footer("title")}</Footer>
    </Layout>
  );
};

export default Movie;
