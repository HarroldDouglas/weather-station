<template>
  <layout-component/>
</template>

<script>
import LayoutComponent from "./layouts/Layout";

export default {
  name: 'App',
  data () {
    return {
      cities: []
    }
  },
  components: {
    LayoutComponent,
  },
  watch: {
    cities: {
      handler() {
        localStorage.setItem('cities',JSON.stringify(this.cities))
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("cities")){
      this.cities = JSON.parse(localStorage.getItem("cities"))
    }
  }
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
