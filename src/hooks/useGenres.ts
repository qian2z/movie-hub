import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<{ genres: Genre[] }>("/genre/movie/list")
        .then((res) => res.data),
  });

export default useGenres;
