<script setup lang="ts">
import MovieList from "./MovieList.vue";
import Footer from "./Footer.vue";
import SortPanel from "./SortPanel.vue";
import Header from "./Header.vue";
</script>

<template>
  <Header />
  <SortPanel />
  <MovieList :movies="[{
    name: 'The Amazing Spiderman',
    genre: 'Action & Adventure',
    year: 2012,
    rating: 4.3,
    movieLength: 128,
    poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg',
    description: 'Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents disappearance leading him directly to Oscorp and the lab of Dr. Curt Connors, his father former partner. As Spider-Man is set on a collision course with Connors alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.'
  },
  {
    name: 'The Amazing Spiderman',
    genre: 'Action & Adventure',
    year: 2012,
    rating: 4.3,
    movieLength: 128,
    poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg',
    description: 'Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents disappearance leading him directly to Oscorp and the lab of Dr. Curt Connors, his father former partner. As Spider-Man is set on a collision course with Connors alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.'
  },
  {
    name: 'The Amazing Spiderman',
    genre: 'Action & Adventure',
    year: 2012,
    rating: 4.3,
    movieLength: 128,
    poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg',
    description: 'Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents disappearance leading him directly to Oscorp and the lab of Dr. Curt Connors, his father former partner. As Spider-Man is set on a collision course with Connors alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.'
  },
  {
    name: 'The Amazing Spiderman',
    genre: 'Action & Adventure',
    year: 2012,
    rating: 4.3,
    movieLength: 128,
    poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg',
    description: 'Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents disappearance leading him directly to Oscorp and the lab of Dr. Curt Connors, his father former partner. As Spider-Man is set on a collision course with Connors alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.'
  },
  {
    name: 'The Amazing Spiderman',
    genre: 'Action & Adventure',
    year: 2012,
    rating: 4.3,
    movieLength: 128,
    poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg',
    description: 'Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents disappearance leading him directly to Oscorp and the lab of Dr. Curt Connors, his father former partner. As Spider-Man is set on a collision course with Connors alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.'
  },
  {
    name: 'The Amazing Spiderman',
    genre: 'Action & Adventure',
    year: 2012,
    rating: 4.3,
    movieLength: 128,
    poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg',
    description: 'Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents disappearance leading him directly to Oscorp and the lab of Dr. Curt Connors, his father former partner. As Spider-Man is set on a collision course with Connors alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.'
  }]" />
  <Footer />
</template>

<style scoped></style>
