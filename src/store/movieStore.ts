import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { IMockMovie, mockMoviesList } from "../mockedData/mockedData.ts";
import { useMovies, useSearch } from "../utils.ts";

const useMovieStore = defineStore("movieStore", () => {
  const initialList = ref<IMockMovie[]>([]);
  const sortByParam = ref("releaseDate");
  const isMovieDetailOpen = ref<number | null>(null);
  const {
    searchQuery,
    setSearchQuery,
    searchedMovies,
    filterParam,
    setFilterParam,
    searchMovies,
  } = useSearch(initialList.value);
  
  const fetchMovies = async () => {
    const { movies, error, getAllMovies } = useMovies();
    try{
      await getAllMovies();
      initialList.value = movies.value;
    }catch{
      initialList.value = [];
      console.log(error.value);
    }
}

  const setSortByParam = (param: string) => {
    sortByParam.value = param;
  };

  const toggleMovieDetailPanel = (val: number | null) => {
    isMovieDetailOpen.value = val;
    if (typeof val === "number") {
      setFilterParam("genres");
    } else {
      setFilterParam("title");
      setSearchQuery("");
    }
  };

  const selectedMovie = computed(() => {
    if (isMovieDetailOpen.value) {
      const movie = initialList.value.find(
        (movie: IMockMovie) => movie.id === isMovieDetailOpen.value
      );
      if(movie)setSearchQuery(movie.genres[0]);
      return movie;
    }
    return undefined;
  });

  const list = computed(() => {
    let filteredList: IMockMovie[] = [...initialList.value];
    if (searchQuery.value) {
      filteredList = searchedMovies.value as IMockMovie[];
    }

    if (sortByParam.value) {
      filteredList.sort((a: IMockMovie, b: IMockMovie) => {
        const aValue = a[sortByParam.value];
        const bValue = b[sortByParam.value];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.localeCompare(bValue);
        }
        return bValue - aValue;
      });
    }
    return filteredList;
  });

  return {
    fetchMovies,
    list,
    isMovieDetailOpen,
    sortByParam,
    filterParam,
    setSortByParam,
    setFilterParam,
    setSearchQuery,
    toggleMovieDetailPanel,
    selectedMovie,
    searchMovies
  };
});

export default useMovieStore;
