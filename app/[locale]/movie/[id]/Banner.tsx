import { MovieInterface } from "@/services/MoviesService.types";
import { Row, Col, Typography } from "antd";
import Image from "next/image";

import { MovieDetail } from "./Movie.styles";

const { Paragraph } = Typography;

const Banner = ({ movie }: { movie: MovieInterface }) => {
  // TODO: add images path to env
  // TODO: update the req idiom
  // TODO: update font-size for mobile
  // TODO: remove breadscrumb for mobile

  return (
    <MovieDetail.BannerContainer
      background={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
    >
      <MovieDetail.ExtraLayer>
        <Row>
          <Col xs={24} sm={24} lg={9} xl={8} xxl={6}>
            <Image
              src={`https://image.tmdb.org/t/p/w300_and_h450_face${movie.poster_path}`}
              alt={`movie ${movie.title}`}
              width={300}
              height={450}
              style={{ borderRadius: "8px", height: "auto", maxWidth: "100%" }}
            />
          </Col>
          <Col xs={24} sm={24} lg={15} xl={16} xxl={18}>
            <MovieDetail.Title>{movie.title}</MovieDetail.Title>
            <MovieDetail.Title level={4}>
              {movie.release_date}
            </MovieDetail.Title>
            <Paragraph style={{ color: "white" }}>{movie.overview}</Paragraph>
            <Paragraph style={{ color: "white" }}>
              {movie.genres.map((item, index) => (
                <span key={item.id}>
                  {item.name}
                  {index + 1 < movie.genres.length ? " - " : ""}
                </span>
              ))}
            </Paragraph>
          </Col>
        </Row>
      </MovieDetail.ExtraLayer>
    </MovieDetail.BannerContainer>
  );
};

export default Banner;
