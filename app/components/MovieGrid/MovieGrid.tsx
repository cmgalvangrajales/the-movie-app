import { MoviesStateInterface } from "./MovieGrid.types";

import { Pagination, Row, Empty } from "antd";
import MovieCard from "../MovieCard";

const MovieGrid = ({
  movies,
  onPaginationChange,
  loading,
  currentPage,
}: {
  movies: MoviesStateInterface;
  loading: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  currentPage?: number;
}) => {
  if (!movies?.list?.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <>
      <MovieCard loading={loading} movies={movies.list} />
      {movies.total_results && (
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
    </>
  );
};

export default MovieGrid;
