import { useQuery } from "@tanstack/react-query";
import Image from "../entities/Image";
import APIClient from "../services/api-client";

interface ImageFetchResponse {
  backdrops: Image[];
}

const useImages = (movieId: number) => {
  const apiClient = new APIClient<ImageFetchResponse>(
    `/movie/${movieId}/images`
  );

  return useQuery<ImageFetchResponse, Error>({
    queryKey: ["movie", movieId, "images"],
    queryFn: () => apiClient.getAll(),
  });
};

export default useImages;
