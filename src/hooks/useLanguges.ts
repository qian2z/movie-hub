import useData from "./useData";

interface Language {
  iso_639_1: string;
  english_name: string;
}

const useLanguages = () => useData<Language>("/configuration/languages");

export default useLanguages;
