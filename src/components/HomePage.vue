<template>
    <div class="row">
        <div class="col-12 col-md-8 offset-0 offset-md-2 px-5 px-sm-5 px-md-0 ">
            <p><strong>Add cities</strong></p>
            <p>Add 5 cities whose temperature you want to track.</p>
            <add-cities-component class="mt-5"/>
        </div>
    </div>
</template>

<script>
    import AddCitiesComponent from "./AddCity";
    export default {
        name: "home-page-component",
        components: {AddCitiesComponent}
    }
</script>

<style scoped>

</style>
