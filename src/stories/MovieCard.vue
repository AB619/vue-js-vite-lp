<script setup lang="ts">
import { defineProps } from 'vue';

interface Movie {
    name: string;
    genre: string;
    year: number;
    rating: number;
    movieLength: number;
    description: string;
    poster: string;
}
defineProps<{ movie: Movie }>()
</script>

<template>
    <div class="card">
        <img 
        class="card__img" :src="`${movie.poster}`" :alt="movie.name" />
        <div class="card__info">
            <div class="card__info__name">{{ movie.name }}</div>
            <div class="card__info__year">{{ movie.year }}</div>
        </div>
        <div class="card__genre">{{ movie.genre }}</div>
    </div>
</template>

<style scoped>
.card {
    max-width: 300px;
    padding: 5px;
}

.card__info {
    display: flex;
    justify-content: space-between;
    padding: 8px 4px 0 4px;
}

.card__info>div {
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