<template>
    <div class="row">
        <div class="col-12 col-md-8 offset-0 offset-md-2 px-5 px-sm-5 px-md-0 ">
            <p><strong>Add cities</strong></p>
            <p>Add 5 cities whose temperature you want to track.</p>
            <add-cities-component class="mt-5" @click="addCity"/>
        </div>
        <div class="col-12" v-if="showCities">
            <cities-component v-bind:cities="cities"/>
        </div>
    </div>
</template>

<script>
    import AddCitiesComponent from "../components/AddCity";
    import CitiesComponent from "../components/Cities";

    export default {
        name: "home-page-component",
        components: {CitiesComponent, AddCitiesComponent},
        data() {
            return {
                showCities: false,
                cityName: null,
                cities: [],
            }
        },
        // Creating methods
        methods: {
            // Creating addCity function
            addCity: function () {
                this.showCities = true;
                let city = {
                    name: this.cityName,
                    weather: Math.floor(Math.random() * 100),
                    country: 'Cameroun'
                };
                if (city.name !== '') {
                    //this.$emit('add-city-event', city);
                    this.cities = [...this.cities, city]
                    console.log(this.cities)
                }
                this.cityName = ''
            }
        }
    }
</script>

<style scoped>

</style>
