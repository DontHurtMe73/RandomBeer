<template>
    <div class="beer">
        <h2 class="beer__title">Сегодня я попробую:</h2>
        <div class="beer__wrapper" v-for="beer in randomBeer">

                <div class="beer__param">
                    <strong class="beer__strong">Название:</strong>{{ beer.name }}
                </div>
                <div class="beer__param">
                    <strong class="beer__strong">Брэнд:</strong>{{ beer.brand }}
                </div>
                <div class="beer__param">
                    <strong class="beer__strong">Стиль:</strong>{{ beer.style }}
                </div>
                <div class="beer__param">
                    <strong class="beer__strong">Горечь:</strong>{{ beer.ibu }}
                </div>
                <div class="beer__param">
                    <strong class="beer__strong">Алкоголь:</strong>{{ beer.alcohol }}
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        randomBeer: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
    .beer__title{
        margin-bottom: 10px;
        font-size: 25px;
        line-height: 1.5;
        font-weight: 600;
    }

    .beer__wrapper {
        margin: 0 15px 20px 15px;
        padding: 10px;
        border: 2px solid teal;
    }

    .beer__param{
        text-align: left;
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 1.5;

    }

    .beer__param::first-letter{
        font-family: serif;
        font-size: 24px;
        color: tomato;
        text-transform: uppercase;

    }

    .beer__strong{
        margin-right: 15px;
        font-weight: 700;
        font-size: 18px;
    }
</style>
