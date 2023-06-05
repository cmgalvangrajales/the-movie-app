interface MovieBasics {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface GenreInterface {
  id: number;
  name: string;
}

interface ProductCompaniesInterface {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductCountriesInterface {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguagesInterface {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieInterface extends MovieBasics {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: GenreInterface[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductCompaniesInterface[];
  production_countries: ProductCountriesInterface[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguagesInterface[];
  status: string;
  tagline: string;
}

export interface MoviesInterface extends MovieBasics {
  genre_ids: number[];
}
