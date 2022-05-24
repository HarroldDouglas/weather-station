<template>
  <layout-component/>
</template>

<script>
import LayoutComponent from "./layouts/Layout";

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    LayoutComponent,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
