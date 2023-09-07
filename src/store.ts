import { create } from "zustand";

export interface MovieQuery {
  genreId?: number;
  language_iso: string;
  sortOrder?: string;
  searchText?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setGenre: (genreId: number) => void;
  setLanguage: (language_iso: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (language_iso: string, searchText: string) => void;
  clearFilters: (language_iso: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: { language_iso: "en" },
  setGenre: (genreId) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, genreId } })),
  setLanguage: (language_iso) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, language_iso } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, sortOrder } })),
  setSearchText: (language_iso, searchText) =>
    set(() => ({ movieQuery: { language_iso, searchText } })),
  clearFilters: (language_iso) => set(() => ({ movieQuery: { language_iso } })),
}));

export default useMovieQueryStore;
