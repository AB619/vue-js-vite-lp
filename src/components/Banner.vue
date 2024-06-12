<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useMovieStore from "../store/movieStore";

const router = useRouter();
const movieStore = useMovieStore();
const query = ref('');
const selectedMovie = computed(() => movieStore.selectedMovie);

const searchHandler = (option) => {
  movieStore.setFilterParam(option);
};

const clickHandler = () => {
  movieStore.setSearchQuery(query.value);
  movieStore.searchMovies();
}

const searchClickHandler = () => {
  movieStore.toggleMovieDetailPanel(null);
  router.push("/movies");
}

</script>

<template>
  <div class="root">
    <header>
      <div class="header__left">
        <span class="header__text1">netflix</span>
        <span>roulette</span>
      </div>
      <div v-if="movieStore.isMovieDetailOpen" class="header__right">
        <img src="../assets/search.svg" @click="searchClickHandler">
      </div>
    </header>
    <div v-if="movieStore.isMovieDetailOpen" class="banner">
      <img class="banner-img"
        :src="selectedMovie.posterurl"
        :alt="selectedMovie.title" />
      <div class="banner-info">
        <div>
          <span>{{ selectedMovie.title }}</span>
          <span class="banner-info__rating">{{ selectedMovie.imdbRating }}</span>
        </div>
        <div class="banner-info__year">
          <span>{{ selectedMovie.year }}</span>
          <span>{{ selectedMovie.duration.slice(2).replace('M', '') }} min</span>
        </div>
        <div class="banner-info__storyline">{{ selectedMovie.storyline }}</div>
      </div>
    </div>
    <div v-else class="panel">
      <div class="searchlabel">FIND YOUR MOVIE</div>
      <form class="searchbar" @submit.prevent="clickHandler()">
        <input type="text" v-model="query" placeholder="Type and Search" />
        <button type="submit">SEARCH</button>
      </form>
      <div class="searchby">
        <div class="searchby__heading">SEARCH BY</div>
        <div class="searchby__options">
          <p @click="searchHandler('title')" class="title" :class="{ 'searchby--selected': movieStore.filterParam === 'title' }">
            TITLE
          </p>
          <p @click="searchHandler('genres')" class="genres" :class="{ 'searchby--selected': movieStore.filterParam === 'genres' }">
            GENRE
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.root {
  background: url("../assets/background.jpg");
  min-height: 400px;
}

header {
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
}

.header__left {
  color: #f65261;
  font-size: 20px;
  letter-spacing: 0.04em;
}

.header__text1 {
  font-weight: 1000;
}

.banner {
  display: flex;
  margin: 0 90px;
  align-items: center;
}

.banner-img {
  flex: 1;
  height: 450px;
  width: 300px;
  margin: 30px;
}

.banner-info {
  flex: 3;
  color: #ffffff;
  font-size: 45px;
  letter-spacing: 0.04em;
}

.banner-info__rating {
  color: #a1e66f;
  border: 1px solid #ffffff;
  padding: 5px;
  border-radius: 50px;
  margin: 20px;
}

.banner-info__year>span {
  color: #f65261;
  margin-right: 30px;
  font-size: 35px;
}

.banner-info__storyline {
  margin-top: 20px;
  font-size: 20px;
}

.panel {
  margin: 40px 90px;
}

.panel>div {
  margin: 30px;
}

.searchlabel {
  color: #ffffff;
  font-size: 45px;
  letter-spacing: 0.04em;
}

.searchby {
  display: flex;
  gap: 25px;
}

.searchby__options {
  display: flex;
  cursor: pointer;
}

.searchby__heading {
  color: #999999;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 5px 0px;
}

.genres, .title {
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 5px 35px;
  background-color: #424242;
  border-radius: 4px;
}

.searchby--selected {
  background-color: #f65261;
}

.searchbar {
  display: flex;
  height: 50px;
}

.searchbar>input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 5;
  font-size: 20px;
  margin-right: 5px;
  background-color: rgba(79, 77, 77, 0.336);
  border: 1px solid rgba(79, 77, 77, 0.336);
  border-radius: 3px;
  color: #ffffff;
  padding: 2px 10px;
}

.searchbar>button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex: 1;
  margin-left: 5px;
  background-color: #f65261;
  border: 1px solid #f65261;
  border-radius: 3px;
  color: #ffffff;
}
</style>
