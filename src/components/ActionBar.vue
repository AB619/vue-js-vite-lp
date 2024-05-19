<script setup>
import { ref, computed } from "vue";
import useMovieStore from "../store/movieStore";

const movieStore = useMovieStore();

const sortByDate = ref(true);

const moviesCount = computed(() => {
    if (movieStore.list) {
        return movieStore.list.length;
    }
    else return 0;
});

const sortHandler = (option) => {
    if (option === "releaseDate") sortByDate.value = true;
    else if (option === "imdbRating") sortByDate.value = false;
    else sortByDate.value = true;
    movieStore.setSortByParam(option);
};
</script>

<template>
    <div class="panel">
        <div v-if="movieStore.isMovieDetailOpen" class="panel__moviesCount">Films by {{ movieStore.getMovieById.genres[0] }} genre</div>
        <div v-else class="panel__moviesCount">{{ moviesCount.valueOf() }} movies found</div>
        <div v-if="!movieStore.isMovieDetailOpen" class="panel__sort">
            <div class="panel__sort__heading">SORT BY</div>
            <div class="panel__sort__options">
                <p @click="sortHandler('releaseDate')" v-bind:class="{ 'panel__sort__selected': sortByDate }">RELEASE DATE
                </p>
                <p @click="sortHandler('imdbRating')" v-bind:class="{ 'panel__sort__selected': !sortByDate }">RATING</p>
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