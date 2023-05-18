import useData from "./useData";

export interface Language {
  iso_639_1: string;
  english_name: string;
}

const useLanguages = () => useData<Language>("/configuration/languages");

export default useLanguages;
