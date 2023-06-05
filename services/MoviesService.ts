import { get } from "./ServiceBase";
import {
  MoviesInterface,
  MovieInterface,
  GuestSessionInterface,
} from "./MoviesService.types";

/**
 * Get popular movies
 */
export function getPopularMovies({ page }: { page: number }): Promise<{
  page: number;
  results: MoviesInterface[];
  total_pages: number;
  total_results: number;
}> {
  return get({
    servicePath: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    params: {},
  });
}

/**
 * Get popular movies
 */
export function getMovie({ id }: { id: number }): Promise<MovieInterface> {
  return get({
    servicePath: `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    params: {},
  });
}

/**
 * Create guest session
 */
export function createGuestSession(): Promise<GuestSessionInterface> {
  return get({
    servicePath: `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    params: {},
  });
}
