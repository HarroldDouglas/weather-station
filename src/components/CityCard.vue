<template>
    <div class="card">
        <div class="card-body">
            <h3 class="my-0 text-primary" style="font-size: 15px;"><strong>{{city.name}}</strong></h3>
            <h6 class="my-0" style="font-size: 12px;">{{city.country}}</h6>
            <h2 class="mt-3" style="font-size: 26px;"><strong>{{city.weather}}  <sup>°</sup>C</strong></h2>
            <button class="btn btn-sm btn-primary w-100 mt-3" @click="showCity">View city</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "city-card-component",
        props: ["city"],
        data() {
            return {
                cityName: this.city.name,
            }
        },
        methods: {
            // Creating showCity function
            showCity() {
                this.$router.push({ name: 'details', params: { name: this.city.name } })
            },
        },
    }
</script>

<style scoped>

</style>
