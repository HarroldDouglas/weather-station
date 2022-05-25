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
                cityName: '', //current city name
                loading: false, //is true when city data is loading from weather api
            }
        },
        methods: {
            // add new city
            addCity(e) {
                e.preventDefault();
                this.loading = true
                let that = this; // to store the current instance
                let link = 'https://api.openweathermap.org/data/2.5/weather' // api url
                let API = 'a495404234abce9b5830b1e8d20e90a6' //pi key
                // getting weather information for the current city
                $.getJSON(link + "?q=" + this.cityName + "&units=metric&lang=en&appid=" + API,
                    function (data) {
                        const newCity = {
                            name: that.cityName,
                            weather: data.main.temp,
                            country: data.sys.country,
                        };
                        if (newCity.name !== '') {
                            // the parent component will track this event to update cities array
                            that.$emit('add-city-event', newCity);
                        }
                        //we reset the city name
                        that.cityName = ''
                        that.loading = false
                        console.log('city creation process',newCity)
                    });

            }
        }
    }
</script>

<style scoped>

</style>
