<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import MovieList from "../components/MovieList.vue";
import Footer from "../components/Footer.vue";
import ActionBar from "../components/ActionBar.vue";
import Banner from "../components/Banner.vue";
import useMovieStore from "../store/movieStore";

onMounted(() => {
    const route = useRoute();
    const movieStore = useMovieStore();
    const id = computed(() => route.params.id);
    movieStore.toggleMovieDetailPanel(Number(id.value));
});
</script>

<template>
    <Banner />
    <ActionBar />
    <MovieList />
    <Footer />
</template>