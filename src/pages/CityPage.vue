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
                <city-weathers-component v-if="weathers" :weathers="JSON.stringify(weathers.hourly.data)"/>
            </div>
        </div>
    </layout-component>
</template>

<script>
    // This component provide details of a city weather component
    import LayoutComponent from "../layouts/Layout";
    import WeatherCardComponent from "../components/WeatherCard";
    import $ from 'jquery'
    import CityWeathersComponent from "../components/CityWeathers";

    export default {
        name: "city-page-component",
        components: {CityWeathersComponent, WeatherCardComponent, LayoutComponent},
        data() {
            return {
                loading: true, // loging before data are provided
                cities: [], // store all cities
                city: null, // current city passed in parameter
                error: null, // if execution errors
                data: null, // to store data provided by https://api.openweathermap.org
                weathers: null // to store data provided by https://csm.fusioncharts.com
            }
        },
        // Creating methods
        methods: {
            // Creating findCity function
            // This function is loading when component mounted
            // return null if the current city in not in cities array
            findCity(name) {
                let that = this // to store the current instance
                this.cities.forEach(function (city) {
                    if (city.name === name) {
                        console.log('city found', city.name)
                        that.city = city;
                    }
                })
                return null;
            },
            // to find more weather details
            fixWeatherApi() {
                let that = this // to store the current instance
                var weatherApi =
                    'https://csm.fusioncharts.com/files/assets/wb/wb-data.php?src=darksky&lat=' +
                    this.data.coord.lat + '&long=' + this.data.coord.lon
                // call api by his url
                $.getJSON(weatherApi,
                    function (data) {
                        that.loading = false // stop loading the page and display data
                        that.weathers = data // we remember the data
                        console.log('weather data fetched',data)
                    });
            },
            // loadWeather findCity function
            // We load city weather by city name
            loadWeather() {
                let that = this;
                let link = 'https://api.openweathermap.org/data/2.5/weather'
                let API = 'a495404234abce9b5830b1e8d20e90a6'
                $.getJSON(link + "?q=" + this.city.name + "&units=metric&lang=en&appid=" + API,
                    function (data) {
                        that.data = data
                        console.log('weather data fetched', data)
                        that.fixWeatherApi()
                    });
            }
        },
        mounted() {
            // we load all cities
            if (localStorage.getItem("cities")) {
                this.cities = JSON.parse(localStorage.getItem("cities"))
            }
            // check if the city name is correct
            this.findCity(this.$route.params.name)
            if (this.city == null) {
                // if no, display error message
                this.loading = false
                this.error = "Sorry!!! City not found"
            } else {
                // if yes, load weather for the city
                this.loadWeather()
            }
        }
    }
</script>

<style scoped>

</style>
