import {  ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { IMockMovie, mockMoviesList } from "../mockedData/mockedData.ts";

const useMovieStore = defineStore(
    'movieStore', () => {
        const initialList = ref(mockMoviesList);
        const sortByParam = ref("year");
        const searchByParam = ref("");

        const setSortByParam = (param: string) => {
            sortByParam.value = param;
        }

        const setSearchByParam = (param: string) => {
            searchByParam.value = param;
        }

        const list = computed(() => {
            let filteredList = [...initialList.value];
            /* if (searchByParam.value) {
                filteredList = filteredList.filter(movie => 
                    movie.name.toLowerCase().includes(searchByParam.value)
                );
            } */

            if (sortByParam.value) {
                filteredList = filteredList.sort((a: IMockMovie, b: IMockMovie) => {
                    if (typeof a[sortByParam.value] === 'string') {
                        return (a[sortByParam.value] as string).localeCompare(b[sortByParam.value] as string);
                    }
                    return (b[sortByParam.value] as number) - (a[sortByParam.value] as number);
                });
            }
            return filteredList;
        });

        return {list, setSortByParam, setSearchByParam}
    }
);

export default useMovieStore;