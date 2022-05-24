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

</style>
