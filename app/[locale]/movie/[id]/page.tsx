"use client";
import { Fragment, useEffect, useState } from "react";
import { Layout, Breadcrumb, Typography, Divider } from "antd";
import { useTranslations } from "next-intl";
import { HomeStyles } from "../../page.styles";
import {
  getMovie,
  createGuestSession as createGuestSessionService,
} from "@/services/MoviesService";
import { MovieInterface } from "@/services/MoviesService.types";
import { useValoredMovies, contextAppValueInterface } from "@/contexts/Reducer";
import Menu from "../../../components/Menu";
import Banner from "@/components/Banner";
import ValidateMovieForm from "./Form";

const { Header, Footer } = Layout;
const { Title } = Typography;

const Movie = ({ params: { id } }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieInterface>();

  const appContext: contextAppValueInterface = useValoredMovies();

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

  const createGuestSession = async () => {
    const data = await createGuestSessionService();
    console.log("data from guest session", data);
    // TODO: save the guest_session_id to use it on the Add Rating req
  };

  const onFinish = (values: any) => {
    createGuestSession();

    if (appContext.addMovie && movie) {
      appContext.addMovie(movie);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
              title: movie?.title || "Not Found",
            },
          ]}
        />
        {!loading && movie ? (
          <Fragment key={movie.id}>
            <Banner movie={movie} />
            <Divider />
            <Title level={3} style={{ marginBottom: "10px" }}>
              Dont forget to leave your score
            </Title>
            <ValidateMovieForm
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            />
          </Fragment>
        ) : (
          <div>Loading</div>
        )}
      </HomeStyles.Container>
      <Footer style={{ textAlign: "center" }}>{footer("title")}</Footer>
    </Layout>
  );
};

export default Movie;
