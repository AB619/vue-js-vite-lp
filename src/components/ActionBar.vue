<script setup>
import { ref, computed } from "vue";
import useMovieStore from "../store/movieStore";

const movieStore = useMovieStore();

const moviesCount = computed(() => {
    return movieStore.list?.length || 0;
});

const sortHandler = (option) => {
    movieStore.setSortByParam(option);
};
</script>

<template>
    <div class="panel">
        <div v-if="movieStore.isMovieDetailOpen" class="panel__moviesCount">Films by {{ movieStore.selectedMovie.genres[0] }} genre</div>
        <div v-else class="panel__moviesCount">{{ moviesCount.valueOf() }} movies found</div>
        
        <div v-if="!movieStore.isMovieDetailOpen" class="panel__sort">
            <div class="panel__sort__heading">SORT BY</div>
            <div class="panel__sort__options">
                <p @click="sortHandler('releaseDate')" :class="{ 'panel__sort--selected': movieStore.sortByParam === 'releaseDate' }">RELEASE DATE</p>
                <p @click="sortHandler('imdbRating')" :class="{ 'panel__sort--selected': movieStore.sortByParam === 'imdbRating' }">RATING</p>
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

.panel__sort__options > .panel__sort--selected {
    background-color: #f65261;
}
</style>