import { get } from "./ServiceBase";
import { MoviesInterface } from "./MoviesService.types";

/**
 * Get popular movies
 */
export function getPopularMovies(): Promise<{
  page: number;
  results: MoviesInterface[];
  total_pages: number;
  total_results: number;
}> {
  return get({
    servicePath: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    params: {},
  });
}
