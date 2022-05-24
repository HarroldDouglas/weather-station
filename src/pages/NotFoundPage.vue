<template>
    <layout-component>
        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="text-white">404 - Page Not Found</h1>
                <p class="text-white text-center">This page no longer exists or was moved to another location.</p>
            </div>
        </div>
    </layout-component>
</template>

<script>
    import LayoutComponent from "../layouts/Layout";
    export default {
        name: "page-not-found-component",
        components: {LayoutComponent}
    }
</script>

<style scoped>

</style>
