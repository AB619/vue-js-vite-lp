<script>
import { ref } from "vue";

export default {
    setup() {
        const searchByTitle = ref(true);

        const searchHandler = (option) => {
            if (option === "title") searchByTitle.value = true;
            else if (option === "genre") searchByTitle.value = false;
            else searchByTitle.value = true;
        };

        return { searchByTitle, searchHandler };
    },
};
</script>

<template>
    <div class="root">
        <header>
            <span class="header__text1">netflix</span>
            <span>roulette</span>
        </header>
        <div class="panel">
            <div class="searchlabel">FIND YOUR MOVIE</div>
            <div class="searchbar">
                <input />
                <button>SEARCH</button>
            </div>
            <div class="searchby">
                <div class="searchby__heading">SEARCH BY</div>
                <div class="searchby__options">
                    <p @click="searchHandler('title')" v-bind:class="{ 'searchby__selected': searchByTitle }">TITLE</p>
                    <p @click="searchHandler('genre')" v-bind:class="{ 'searchby__selected': !searchByTitle }">GENRE</p>
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
}

header>span {
    color: #f65261;
    font-size: 20px;
    letter-spacing: 0.04em;
}

.header__text1 {
    font-weight: 1000;
}

.panel {
    margin: 40px 90px;
}

.panel > div {
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

.searchby__options>p {
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 5px 35px;
    background-color: #424242;
    border-radius: 4px;
}

.searchby__options>.searchby__selected {
    background-color: #f65261;
}

.searchbar {
    display: flex;
    height: 50px;
}

.searchbar > input {
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

.searchbar > button{
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