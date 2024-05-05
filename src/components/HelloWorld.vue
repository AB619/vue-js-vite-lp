<script setup lang="ts">
import MovieList from "./MovieList.vue";
import Footer from "./Footer.vue";
import SortPanel from "./SortPanel.vue";
import Header from "./Header.vue";
import { mockMoviesList } from "../mockedData/mockedData.js";
</script>

<template>
  <Header />
  <SortPanel />
  <MovieList :movies="mockMoviesList" />
  <Footer />
</template>