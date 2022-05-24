<template>
    <div class="main-container container">
        <header-component/>
        <div class="row">
            <div class="col-md-12">
                <home-page-component/>
            </div>
        </div>
        <footer-component/>
    </div>
</template>

<script>
    import FooterComponent from "../components/Footer";
    import HeaderComponent from "../components/Header";
    import HomePageComponent from "../pages/HomePage";

    export default {
        name: "layout-component",
        components: {
            HomePageComponent,
            HeaderComponent,
            FooterComponent,
        }
    }
</script>

<style scoped>

</style>
