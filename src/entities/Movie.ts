import Company from "./Company";
import Country from "./Country";
import Genre from "./Genre";
import Language from "./Language";

export default interface Movie {
  genres: Genre[];
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  runtime: number;
  spoken_languages: Language[];
  release_date: string;
  tagline: string;
  vote_average: number;
}
