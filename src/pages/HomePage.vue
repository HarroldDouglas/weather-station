<template>
    <layout-component>
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
    </layout-component>
</template>

<script>
    // The home page
    import AddCitiesComponent from "../components/AddCity";
    import CitiesComponent from "../components/Cities";
    import LayoutComponent from "../layouts/Layout";

    export default {
        name: "home-page-component",
        components: {CitiesComponent, AddCitiesComponent, LayoutComponent},
        data() {
            return {
                showCities: true, // show cities when add new city
                cities: [], // store all cities
            }
        },
        // Creating methods
        methods: {
            // Creating addCity function
            // Add city in the cities array
            addCity(newCity) {
                this.cities = [...this.cities, newCity]
                this.showCities = true // we can display cities
            },
        },
        watch: {
            cities: {
                handler() {
                    // we store cities to the local database
                    localStorage.setItem('cities', JSON.stringify(this.cities))
                },
                deep: true
            }
        },
        mounted() {
            if (localStorage.getItem("cities")) {
                // we load stored cities from local database
                this.cities = JSON.parse(localStorage.getItem("cities"))
            }
        }
    }
</script>

<style scoped>

</style>
