import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

const apiClient = new APIClient<{ genres: Genre[] }>("/genre/movie/list");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });

export default useGenres;
