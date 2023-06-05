import { MoviesInterface, MovieInterface } from "@/services/MoviesService.types";

export interface MoviesStateInterface {
  list: MoviesInterface[] | MovieInterface[];
  total_pages?: number;
  total_results?: number;
}
