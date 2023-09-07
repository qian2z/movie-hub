import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useMovieQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useMovieQueryStore((m) => m.setSearchText);
  const language_iso = useMovieQueryStore((m) => m.movieQuery.language_iso);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(language_iso, ref.current.value);
          ref.current.value = "";
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder={
            language_iso === "en" ? "Search Movies..." : "搜索电影..."
          }
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
