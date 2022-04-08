<template>
    <div>

        <div class="profile-card">

            <div class="profile-card__header">
                <img src="@/images/beer2.jpg">
            </div>

            <div class="profile-card__body" v-for="item in profile">
                <div class="photo__wrapper">
                    <img class="user__photo" :src="item.avatar">
                </div>

                <div class="name">{{item.first_name + " " + item.last_name}}</div>

                <div class="age"><strong>Возраст:</strong> {{curentAge(item.date_of_birth)}}</div>

                <div class="employment">{{item.employment.title}}</div>

            </div>

            <random-beer :randomBeer="beer" />


            <my-button @click="fetchBeer">Еще вариантик</my-button>
        </div>
        
    </div>
</template>

<script>
    import RandomBeer from '@/components/RandomBeer';
    import axios from 'axios';

    export default {
        components: {
            RandomBeer
        },
        data() {
            return {
                beer: [],
                profile: []
            };
        },
        methods: {
            async fetchUser() {
                try {
                    const response = await axios.get('https://random-data-api.com/api/users/random_user');
                    this.profile.push(response.data);
                } catch (e) {
                    alert('Error')
                }
            },
            async fetchBeer() {
                try {
                    const response = await axios.get('https://random-data-api.com/api/beer/random_beer');
                    this.beer.pop();
                    this.beer.push(response.data);
                } catch (e) {
                    alert('Error')
                }
            },
            curentAge(date){
                let newDateArr = date.split('-');
                
                let year = newDateArr[0];

                let mounth = newDateArr[1];

                let day = newDateArr[2];

                let currentDate = new Date();

                return ( currentDate.getFullYear() - year - ((currentDate.getMonth() - --mounth||currentDate.getDate() - day) < 0) );
            }
        },
        mounted(){
            this.fetchUser()
            this.fetchBeer()
        }
    };
</script>

<style>
 .profile-card {
        margin: 0 auto;
        padding-bottom: 10px;
        max-width: 390px;
        text-align: center;
        /* height: auto; */
        -webkit-box-shadow: 0px 0px 24px 0px rgba(48, 48, 56, .15);
                box-shadow: 0px 0px 24px 0px rgba(48, 48, 56, .15);
        background-color: #f2f2f2;
        border-radius: 0 0 40px 40px;
    }

    .profile-card__header {
        height: 100px;
    }

    .profile-card__body {
        background-color: #f2f2f2;
        padding: 20px 40px 20px 40px;
    }

    .photo__wrapper {
        margin-top: -20px;
        margin-bottom: 20px;
    }

    .user__photo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        padding: 5px;
        background-color: #fff;
    }

    .name {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 700;
    }

    .age {
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
    }

    .employment {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
    }
</style>