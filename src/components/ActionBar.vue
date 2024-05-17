<script>
import { ref, computed } from "vue";
import useMovieStore from "../store/movieStore";

export default {
    setup() {
        const movieStore = useMovieStore();
        
        const sortByDate = ref(true);

        const moviesCount = computed(() => {
            if(movieStore.list){
                return movieStore.list.length;
            }
            else return 0; 
        });

        const sortHandler = (option) => {
            if(option === "year") sortByDate.value = true;
            else if(option === "rating") sortByDate.value = false;
            else sortByDate.value = true;
            movieStore.setSortByParam(option);
        };

        return { sortByDate, sortHandler, moviesCount }
    },
};
</script>

<template>
    <div class="panel">
        <div class="panel__moviesCount">{{ moviesCount }} movies found</div>
        <div class="panel__sort">
            <div class="panel__sort__heading">SORT BY</div>
            <div class="panel__sort__options">
                <p @click="sortHandler('year')" v-bind:class="{'panel__sort__selected': sortByDate}">RELEASE DATE</p>
                <p @click="sortHandler('rating')" v-bind:class="{'panel__sort__selected': !sortByDate}">RATING</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.panel {
    background-color: #555555;
    padding: 20px 80px;
    display: flex;
    justify-content: space-between
}

.panel__moviesCount {
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 0.8px;
    cursor: default;
    padding: 5px 0;
}

.panel__sort {
    display: flex;
    gap: 25px;
}

.panel__sort__options {
    display: flex;
    cursor: pointer;
}

.panel__sort__heading {
    color: #ffffff;
    font-weight: 400;
    letter-spacing: 0.9px;
    padding: 5px 15px;
}

.panel__sort__options>p {
    color: #ffffff;
    font-weight: 400;
    letter-spacing: 0.9px;
    padding: 5px 15px;
    background-color: #424242;
}

.panel__sort__options>.panel__sort__selected {
    background-color: #f65261;
}
</style>