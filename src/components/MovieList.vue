<script setup lang="ts">
import { computed, getCurrentInstance } from "vue";
import { lazyloadDirective } from '../utils.ts';
import useMovieStore from "../store/movieStore";

const movieStore = useMovieStore();
const movies = computed(() => movieStore.list);

const instance = getCurrentInstance();
if(instance){
  const app = instance.appContext.app;
  if(!app.directive('lazyload'))app?.directive('lazyload', lazyloadDirective);
}

const clickHandler = (id: number) => {
  movieStore.toggleMovieDetailPanel(id);
}

</script>

<template>
  <div class="movies">
    <div v-if="movies.length > 1" class="movies__list">
      <div v-for="(m) in movies" class="card" :key="m.id" @click="clickHandler(m.id)">
        <img class="card__img" v-lazyload="m.posterurl" :alt="m.title"/>
        <div class="card__info">
          <div class="card__info__name">{{ m.title }}</div>
          <div class="card__info__year">{{ m.year }}</div>
        </div>
        <div class="card__genre">{{ m.genres.toString() }}</div>
      </div>
    </div>

    <div v-else class="movies__empty">No films found</div>
  </div>
</template>

<style>
.movies {
  background-color: #232323;
  min-height: 200px;
}

.movies__list {
  padding: 60px 0;
  gap: 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movies__empty {
  color: #ffffff;
  font-size: 40px;
  letter-spacing: 4px;
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
}

.card {
  width: 300px;
  padding: 5px;
}

.card__img {
  min-width: 300px; 
  min-height: 450px;
  max-height: 450px;
}

.card__info {
  display: flex;
  justify-content: space-between;
  padding: 8px 4px 0 4px;
}

.card__info > div {
  color: #999999;
}

.card__info__year {
  border: 1px solid #999999;
  border-radius: 6px;
  padding: 1px 8px;
}

.card__genre {
  color: #999999;
  font-size: small;
  padding: 0 4px;
}
</style>
