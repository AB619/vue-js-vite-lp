<script setup lang="ts">
import { defineProps, getCurrentInstance } from "vue";
import { lazyloadDirective } from '../utils.js';

const instance = getCurrentInstance();
if(instance){
  const app = instance.appContext.app;
  app?.directive('lazyload', lazyloadDirective);
}

interface Movie {
  name: string;
  genre: string;
  year: number;
  rating: number;
  movieLength: number;
  description: string;
  poster: string;
}
defineProps<{ movies: Movie[] }>();
</script>

<template>
  <div class="movies">
    <div v-if="movies.length > 0" class="movies__list">
      <div v-for="(m, i) in movies" class="card" :key="i">
        <img class="card__img" v-lazyload="m.poster" :alt="m.name" />
        <div class="card__info">
          <div class="card__info__name">{{ m.name }}</div>
          <div class="card__info__year">{{ m.year }}</div>
        </div>
        <div class="card__genre">{{ m.genre }}</div>
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
  max-width: 300px;
  padding: 5px;
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
