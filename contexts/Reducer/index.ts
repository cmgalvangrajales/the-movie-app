import {
  ReducerProvider,
  useValoredMovies,
  UserValoredMovies,
} from "./ReducerContext";

import { contextValueInterface } from "./Reducer.types";

export default ReducerProvider;
export { useValoredMovies, UserValoredMovies };
export type contextAppValueInterface = contextValueInterface;
