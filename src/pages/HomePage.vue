<template>
    <div class="row">
        <div class="col-12 col-md-8 offset-0 offset-md-2 px-5 px-sm-5 px-md-0 ">
            <p><strong>Add cities</strong></p>
            <p>Add 5 cities whose temperature you want to track.</p>
            <add-cities-component class="mt-5" v-on:add-city-event="addCity"/>
        </div>
        <div class="col-12 pt-5" v-if="showCities">
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
                showCities: true,
                cities: [],
            }
        },
        // Creating methods
        methods: {
            // Creating addCity function
            addCity(newCity){
                this.cities = [...this.cities, newCity]
                this.showCities = true
            },
        },
        watch: {
            cities: {
                handler() {
                    localStorage.setItem('cities',JSON.stringify(this.cities))
                },
                deep: true
            }
        },
        mounted() {
            if (localStorage.getItem("cities")){
                this.cities = JSON.parse(localStorage.getItem("cities"))
            }
        }
    }
</script>

<style scoped>

</style>
