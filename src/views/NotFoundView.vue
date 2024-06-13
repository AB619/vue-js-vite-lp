<script setup>
import Footer from "../components/Footer.vue";
</script>

<template>
    <div class="not__found">
        <h3>404 Page Not Found</h3>
    </div>
    <Footer />
</template>

<style>
.not__found {
    height: 90vh;
    display: flex;
    flex-direction: column;
    font-size: 40px;
    letter-spacing: 4px;
    background-color: black;
    color: white;
    justify-content: center;
    align-items: center;
}
</style>