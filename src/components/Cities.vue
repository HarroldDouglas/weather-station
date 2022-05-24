<template>
<div class="col-md-2" v-bind:key="city.name" v-for="city in cities">
    <city-card-component :city="city"/>
</div>
</template>

<script>
    import CityCardComponent from "./CityCard";
    export default {
        name: "cities-component",
        components: {CityCardComponent},
        props: ["cities"]
    }
</script>

<style scoped>

</style>
