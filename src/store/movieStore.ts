import {  ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { IMockMovie, mockMoviesList } from "../mockedData/mockedData.ts";
import { useSearch } from '../utils.ts';

const useMovieStore = defineStore(
    'movieStore', () => {
        const initialList = ref(mockMoviesList);
        const sortByParam = ref("releaseDate");
        const isMovieDetailOpen = ref<number | null>(null);
        const { searchQuery, setSearchQuery, searchedMovies, setFilterParam, searchMovies } = useSearch(initialList.value);

        const setSortByParam = (param: string) => {
            sortByParam.value = param;
        }

        const toggleMovieDetailPanel = (val: number | null) => {
            isMovieDetailOpen.value = val;
            if(typeof val === 'number'){
                setFilterParam("genres");
            }
            else{
                setFilterParam("title");
                setSearchQuery("");   
            }
        }

        const getMovieById = computed(() =>{
            if(isMovieDetailOpen.value){
                const movie = initialList.value.find((movie: IMockMovie) => movie.id === isMovieDetailOpen.value);
                movie ? setSearchQuery(movie.genres[0]) : undefined;
                return movie;
            }
            return undefined;
        });

        const list = computed(() => {
            let filteredList: IMockMovie[] = [...initialList.value];
            if (searchQuery) {
                searchMovies();
                filteredList = searchedMovies.value as IMockMovie[];
            }  

            if (sortByParam.value) {
                filteredList = filteredList.sort((a: IMockMovie, b: IMockMovie) => {
                    const aValue = a[sortByParam.value];
                    const bValue = b[sortByParam.value];

                    if (typeof aValue === 'string' && typeof bValue === 'string') {
                        return aValue.localeCompare(bValue);
                    } else {
                        return bValue - aValue;
                    }
                });
            }

            return filteredList;
        });

        return {list, isMovieDetailOpen, setSortByParam, setFilterParam, setSearchQuery, toggleMovieDetailPanel, getMovieById}
    }
);

export default useMovieStore;