import { MovieInterface } from "@/services/MoviesService.types";
import { Row, Col, Typography } from "antd";
import Image from "next/image";
import { BannerType } from "./Banner.types";

import { BannerStyles } from "./Banner.styles";

const { Paragraph } = Typography;

const Banner = ({
  movie,
  type = BannerType.Movie,
  children,
}: {
  movie?: MovieInterface;
  children?: React.ReactNode;
  type?: BannerType;
}) => {
  // TODO: update the req idiom

  if (type === BannerType.Basic || !movie) {
    return (
      <BannerStyles.BannerContainerBasic>
        {children}
      </BannerStyles.BannerContainerBasic>
    );
  }

  return (
    <BannerStyles.BannerContainer
      background={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
    >
      <BannerStyles.ExtraLayer>
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
            <BannerStyles.Title>{movie.title}</BannerStyles.Title>
            <BannerStyles.Title level={4}>
              {movie.release_date}
            </BannerStyles.Title>
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
      </BannerStyles.ExtraLayer>
    </BannerStyles.BannerContainer>
  );
};

export default Banner;
