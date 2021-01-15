<template>
  <div id="callAllComponentHere">
    <Loader></Loader>
    <Home></Home>
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Loader,
    Home,
  },
};
</script>

<style>
/* Include Site Web fonts In Our Site */
@import url("https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i&amp;display=swap");
/* Include Web fonts In Our Site */
/* Include Main Style CSS in Our Site */
@import "./assets/css/style.css";
/* Include Main Style CSS in Our Site */
</style>
