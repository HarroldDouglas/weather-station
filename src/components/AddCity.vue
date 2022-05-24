<template>
    <div class="add-city-btn">
        <span class="fa fa-plus-circle"/>
        <input type="text" placeholder="Add a city" v-model="cityName"/>
        <button class="btn btn-primary" @click="addCity">Add</button>
    </div>
    <div class="lds-ellipsis" v-if="loading"><div></div><div></div><div></div><div></div></div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "add-cities-component",
        data() {
            return {
                cityName: '',
                loading: false,
            }
        },
        methods: {
            addCity(e) {
                e.preventDefault();
                this.loading = true
                let that = this;
                let link = 'https://api.openweathermap.org/data/2.5/weather'
                let API = 'a495404234abce9b5830b1e8d20e90a6'
                $.getJSON(link + "?q=" + this.cityName + "&units=metric&lang=en&appid=" + API,
                    function (data) {
                        const newCity = {
                            name: that.cityName,
                            weather: data.main.temp,
                            country: data.sys.country,
                        };
                        if (newCity.name !== '') {
                            that.$emit('add-city-event', newCity);
                        }
                        that.cityName = ''
                        that.loading = false
                    });

            }
        }
    }
</script>

<style scoped>
    .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ellipsis div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }
</style>
