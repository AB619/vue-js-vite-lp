<script setup>
import { onMounted } from "vue";
import MovieList from "../components/MovieList.vue";
import Footer from "../components/Footer.vue";
import ActionBar from "../components/ActionBar.vue";
import Banner from "../components/Banner.vue";
import useMovieStore from "../store/movieStore";

const movieStore = useMovieStore();
onMounted(() => {
    movieStore.toggleMovieDetailPanel(null);
});
</script>

<template>
    <Banner />
    <ActionBar />
    <MovieList />
    <Footer />
</template>