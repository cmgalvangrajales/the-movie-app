import { MoviesInterface } from "@/services/MoviesService.types";

export interface ContainerInterface {
  isBodyContainer?: boolean;
}

export interface MoviesStateInterface {
  list: MoviesInterface[];
  total_pages: number;
  total_results: number;
}
