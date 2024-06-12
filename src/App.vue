<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import useMovieStore from "./store/movieStore";

const movieStore = useMovieStore();
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await movieStore.fetchMovies();
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <RouterView v-else />
</template>