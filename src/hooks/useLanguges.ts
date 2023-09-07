import languages from "../data/languages";

export interface Language {
  iso_639_1: string;
  english_name: string;
}

const useLanguages = () => ({
  data: languages,
  error: null,
  isLoading: false,
});

export default useLanguages;
