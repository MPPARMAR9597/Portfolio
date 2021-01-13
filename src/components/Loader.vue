<template>
  <div class="loader" id="app">
    <!-- Preloader Section Code Start-->
    <div class="preloader">
      <svg x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
        <circle fill="#4285F4" stroke="none" cx="6" cy="50" r="6">
          <animateTransform attributeName="transform" dur="4s" type="translate" values="0 80 ; 0 -80; 0 80"
            repeatCount="indefinite" begin="0.1" />
        </circle>
        <circle fill="#EA4335" stroke="none" cx="30" cy="50" r="6">
          <animateTransform attributeName="transform" dur="4s" type="translate" values="0 60 ; 0 -60; 0 60"
            repeatCount="indefinite" begin="0.2" />
        </circle>
        <circle fill="#FBBC05" stroke="none" cx="54" cy="50" r="6">
          <animateTransform attributeName="transform" dur="4s" type="translate" values="0 40 ; 0 -40; 0 40"
            repeatCount="indefinite" begin="0.3" />
        </circle>
        <circle fill="#34A853" stroke="none" cx="78" cy="50" r="6">
          <animateTransform attributeName="transform" dur="4s" type="translate" values="0 20 ; 0 -20; 0 20"
            repeatCount="indefinite" begin="0.4" />
        </circle>
      </svg>
    </div>
    <!-- Preloader Section Code End-->
  </div>
</template>

<script>
  import $ from "jquery";

  export default {
    name: "Loader",
  };

  $(window).on("load", function () {
    setInterval(function () {
      $(".preloader").fadeOut("slow");
    }, 10000);
  });
</script>