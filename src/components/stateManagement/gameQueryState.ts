import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sort?: string | null;
    searchText?: string;
}

interface GameQueryState {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSort: (sort: string) => void;
}

const useGameQueryStore = create<GameQueryState>((set) => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
    setPlatformId: (platformId) => set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
    setSort: (sort) => set((state) => ({ gameQuery: { ...state.gameQuery, sort } })),
}));

export default useGameQueryStore;