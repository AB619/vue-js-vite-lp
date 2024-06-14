<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import MovieList from "../components/MovieList.vue";
import Footer from "../components/Footer.vue";
import ActionBar from "../components/ActionBar.vue";
import Banner from "../components/Banner.vue";
import useMovieStore from "../store/movieStore";

const route = useRoute();
const movieStore = useMovieStore();
const movieQuery = computed(() => route.query.search);

onMounted(() => {
    movieStore.toggleMovieDetailPanel(null);
    if(movieQuery.value){
        movieStore.setSearchQuery(movieQuery.value);
        movieStore.searchMovies();
    }
});
</script>

<template>
    <Banner />
    <ActionBar />
    <MovieList />
    <Footer />
</template>