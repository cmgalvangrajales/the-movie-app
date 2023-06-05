import { MovieInterface } from "@/services/MoviesService.types";

export enum ActionType {
  ADD = "ADD",
}

export interface ActionInterface {
  type: ActionType;
  movie: MovieInterface;
}

export interface contextValueInterface {
  movies: MovieInterface[];
  addMovie?: (movie: MovieInterface) => void;
}
