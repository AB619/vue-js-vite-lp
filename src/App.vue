<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import useMovieStore from "./store/movieStore";

const movieStore = useMovieStore();

onMounted(async () => {
  await movieStore.fetchMovies();
});
</script>

<template>
  <RouterView />
</template>