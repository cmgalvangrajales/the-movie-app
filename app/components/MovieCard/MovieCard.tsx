import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

import {
  MoviesInterface,
  MovieInterface,
} from "@/services/MoviesService.types";
import Wrapper from "../WrapperContainer";
import { MovieCard as MovieCardStyles } from "./MovieCard.styles";

const MovieCard = ({
  loading,
  movies,
}: {
  loading: boolean;
  movies: MoviesInterface[] | MovieInterface[];
}) => {
  if (loading) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return <Spin indicator={antIcon} />;
  }

  return (
    <MovieCardStyles.GridContainer>
      {!loading &&
        movies &&
        movies.map((item) => (
          <Wrapper key={item.id} customStyles={{ flex: 1 }}>
            <Link href={`movie/${item.id}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${item.poster_path}`}
                alt={`movie ${item.title}`}
                width={150}
                height={225}
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <h2>{item.title}</h2>
              <p>{item.release_date}</p>
            </Link>
          </Wrapper>
        ))}
    </MovieCardStyles.GridContainer>
  );
};

export default MovieCard;
