<template>
  <div class="app">
    <navbar></navbar>
    <div class="container"></div>
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
</style>
