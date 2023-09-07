import { Button } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import useMovieQueryStore from "../store";

const LanguageSwitch = () => {
  const selectedLanguage = useMovieQueryStore((m) => m.movieQuery.language_iso);
  const setSelectedLanguage = useMovieQueryStore((m) => m.setLanguage);

  return (
    <Button
      leftIcon={<BsGlobe />}
      onClick={() =>
        setSelectedLanguage(selectedLanguage === "en" ? "zh" : "en")
      }
    >
      {selectedLanguage === "en" ? "EN" : "中文"}
    </Button>
  );
};

export default LanguageSwitch;
