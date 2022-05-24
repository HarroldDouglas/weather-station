<template>
    <layout-component>
        <div class="row">
            <div class="col-12">
                <div class="lds-ellipsis" v-if="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h3 v-if="error">{{error}}</h3>
                <weather-card-component v-if="data" :city="city" :data="data"/>
            </div>
        </div>
    </layout-component>
</template>

<script>
    import LayoutComponent from "../layouts/Layout";
    import WeatherCardComponent from "../components/WeatherCard";
    import $ from 'jquery'

    export default {
        name: "city-page-component",
        components: {WeatherCardComponent, LayoutComponent},
        data() {
            return {
                loading: true,
                cities: [],
                city: null,
                error: null,
                data: null
            }
        },
        // Creating methods
        methods: {
            // Creating findCity function
            findCity(name) {
                console.log('cities::',this.cities)
                let that = this
                this.cities.forEach(function (city) {
                    console.log('city::',city.name)
                    if (city.name === name) {
                        console.log('city2::',city.name)
                        that.city = city;
                    }
                })
                return null;
            },
            // loadWeather findCity function
            loadWeather(){
                let that = this;
                let link = 'https://api.openweathermap.org/data/2.5/weather'
                let API = 'a495404234abce9b5830b1e8d20e90a6'
                $.getJSON(link + "?q=" + this.city.name + "&units=metric&lang=en&appid=" + API,
                    function (data) {
                        that.data = data
                        that.loading = false
                        console.log(data)
                    });
            }
        },
        mounted() {
            if (localStorage.getItem("cities")) {
                this.cities = JSON.parse(localStorage.getItem("cities"))
            }
            this.findCity(this.$route.params.name)
            if (this.city == null) {
                this.loading = false
                this.error = "Sorry!!! City not found"
            } else {
                this.loadWeather()
            }
        }
    }
</script>

<style scoped>

</style>
