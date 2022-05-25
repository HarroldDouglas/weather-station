<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 text-left">
                            <h3 class="my-0 text-primary" style="font-size: 15px;"><strong>{{city.name}}</strong></h3>
                            <h6 class="my-0" style="font-size: 12px;">{{city.country}}</h6>
                            <h6 class="my-0" style="font-size: 12px;">{{data.coord.lat}}°N, {{data.coord.lon}}°E</h6>
                        </div>
                        <div class="col-md-4">
                            <h2><span class="fa fa-sun-o text-primary"></span></h2>
                            <h2 class="mt-3" style="font-size: 26px;"><strong>{{data.main.temp}}  <sup>°</sup>C</strong></h2>
                        </div>
                        <div class="col-md-4">
                            <p class="m-0 p-0 text-dark"><span class="text-primary font-weight-bold">Feel like </span>: {{data.main.feels_like}}°C</p>
                            <p class="m-0 p-0 text-dark"><span class="text-primary font-weight-bold">Humidity </span>: {{data.main.humidity}}</p>
                            <p class="m-0 p-0 text-dark"><span class="text-primary font-weight-bold">Pressure </span>: {{data.main.pressure}}</p>
                            <p class="m-0 p-0 text-dark"><span class="text-primary font-weight-bold">Wind </span>: {{data.wind.speed}}m/s</p>
                            <p class="m-0 p-0 text-dark"><span class="text-primary font-weight-bold">UV index </span>: Slow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // This component provide the footer for all pages
    export default {
        name: "weather-card-component",
        props: ["city", "data"],
        data() {
        },
        methods: {
            // Creating showCity function
            showCity() {
                this.$router.push({name: 'details', params: {name: this.city.name}})
            },
        },
    }
</script>

<style scoped>

</style>
