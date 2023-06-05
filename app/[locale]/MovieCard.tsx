import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

import { MoviesInterface } from "@/services/MoviesService.types";
import Wrapper from "../components/WrapperContainer";
import { HomeStyles } from "./page.styles";

const MovieCard = ({
  loading,
  movies,
}: {
  loading: boolean;
  movies: MoviesInterface[];
}) => {
  if (loading) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return <Spin indicator={antIcon} />;
  }

  // TODO: validate if there is no image or title or date

  return (
    <HomeStyles.GridContainer>
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
                style={{ borderRadius: "8px" }}
              />
              <h2>{item.title}</h2>
              <p>{item.release_date}</p>
            </Link>
          </Wrapper>
        ))}
    </HomeStyles.GridContainer>
  );
};

export default MovieCard;
