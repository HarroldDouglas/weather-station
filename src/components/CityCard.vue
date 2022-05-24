<template>
    <div class="card">
        <div class="card-header">
            <h3>{{city.name}}</h3>
            <h6>{{city.country}}</h6>
        </div>
        <div class="card-body">
            <h1>{{city.weather}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "city-card-component",
        props: ["city"]
    }
</script>

<style scoped>

</style>
