import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClient from "../services/api-client";

interface TrailerFetchResponse {
  id: number;
  results: Trailer[];
}

const useTrailer = (movieId: number) => {
  const apiClient = new APIClient<TrailerFetchResponse>(
    `/movie/${movieId}/videos`
  );
  return useQuery<TrailerFetchResponse, Error>({
    queryKey: ["movies", movieId, "trailer"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          language: "en",
        },
      }),
  });
};

export default useTrailer;
