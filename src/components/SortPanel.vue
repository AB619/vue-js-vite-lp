<script>
import { ref } from "vue";

export default {
    setup() {
        const sortByDate = ref(true);

        const sortHandler = (option) => {
            if(option === "releaseDate") sortByDate.value = true;
            else if(option === "rating") sortByDate.value = false;
            else sortByDate.value = true;
        };

        return { sortByDate, sortHandler };
    },
};
</script>

<template>
    <div class="panel">
        <div class="panel__moviesCount">6 movies found</div>
        <div class="panel__sort">
            <div class="panel__sort__heading">SORT BY</div>
            <div class="panel__sort__options">
                <p @click="sortHandler('releaseDate')" v-bind:class="{'panel__sort__selected': sortByDate}">RELEASE DATE</p>
                <p @click="sortHandler('rating')" v-bind:class="{'panel__sort__selected': !sortByDate}">RATING</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.panel {
    background-color: #555555;
    padding: 20px 80px;
    display: flex;
    justify-content: space-between
}

.panel__moviesCount {
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 0.8px;
    cursor: default;
    padding: 5px 0;
}

.panel__sort {
    display: flex;
    gap: 25px;
}

.panel__sort__options {
    display: flex;
    cursor: pointer;
}

.panel__sort__heading {
    color: #ffffff;
    font-weight: 400;
    letter-spacing: 0.9px;
    padding: 5px 15px;
}

.panel__sort__options>p {
    color: #ffffff;
    font-weight: 400;
    letter-spacing: 0.9px;
    padding: 5px 15px;
    background-color: #424242;
}

.panel__sort__options>.panel__sort__selected {
    background-color: #f65261;
}
</style>