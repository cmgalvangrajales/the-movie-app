import { ActionType, ActionInterface } from "./Reducer.types";
import { MovieInterface } from "@/services/MoviesService.types";

export default function stateReducer(
  state: { movies: MovieInterface[] },
  action: ActionInterface
): { movies: MovieInterface[] } {
  if (!action.type) {
    throw Error("Unknown type");
  }

  const { type } = action;

  switch (type) {
    case ActionType.ADD: {
      return {
        movies: [
          ...state.movies,
          {
            ...action.movie,
          },
        ],
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
