<template>
    <div>
        <my-button class="start__btn" @click="$router.push('/random')">Get Started...</my-button>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .start__btn{
        background-color: teal;
        font-size: 40px;
        padding: 15px 20px;
        background-image: url('@/images/beer.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>