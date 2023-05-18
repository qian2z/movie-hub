import noImage from "../assets/no-image-placeholder.webp";

const getImageUrl = (url: string) => {
  if (!url) return noImage;
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return baseURL + url;
};

export default getImageUrl;
