<template>
    <div class="main-container container">
        <header-component/>
        <div class="row">
            <div class="col-md-12">
                <slot/>
            </div>
        </div>
        <footer-component/>
    </div>
</template>

<script>
    import FooterComponent from "../components/Footer";
    import HeaderComponent from "../components/Header";

    export default {
        name: "layout-component",
        components: {
            HeaderComponent,
            FooterComponent,
        }
    }
</script>

<style scoped>

</style>
