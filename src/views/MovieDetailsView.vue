<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import MovieList from "../components/MovieList.vue";
import Footer from "../components/Footer.vue";
import ActionBar from "../components/ActionBar.vue";
import Banner from "../components/Banner.vue";
import useMovieStore from "../store/movieStore";

const router = useRouter();
const movieStore = useMovieStore();
const id = computed(() => router.params.id)

onMounted(() => {
    movieStore.toggleMovieDetailPanel(id);
});
</script>

<template>
    <Banner />
    <ActionBar />
    <MovieList />
    <Footer />
</template>