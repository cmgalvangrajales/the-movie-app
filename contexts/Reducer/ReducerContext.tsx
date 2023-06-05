import { createContext, useReducer, useContext } from "react";
import { contextValueInterface, ActionType } from "./Reducer.types";
import { MovieInterface } from "@/services/MoviesService.types";
import stateReducer from "./reducer";

const initialState = {
  movies: [] as MovieInterface[],
};

export const UserValoredMovies = createContext(initialState);

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useValoredMovies = () => useContext(UserValoredMovies);

export const ReducerProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const value: contextValueInterface = {
    movies: state.movies,
    addMovie: (movie: MovieInterface): void =>
      dispatch({ type: ActionType.ADD, movie }),
  };

  return (
    <UserValoredMovies.Provider value={value}>
      {children}
    </UserValoredMovies.Provider>
  );
};
