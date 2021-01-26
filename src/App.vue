<template>
  <div id="callAllComponentHere">
    <Loader></Loader>
    <Cursor></Cursor>
    <Navigation></Navigation>
    <Home></Home>
    <About></About>
    <Contact></Contact>
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Cursor from "./components/Cursor.vue";
import Navigation from "./components/Navigation.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    Loader,
    Cursor,
    Navigation,
    Home,
    About,
    Contact,
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
