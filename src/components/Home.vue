<template>
  <div class="home" id="Home">
    <section class="home-section home-cover-bg" :style="{ backgroundImage: `url(${getHomePageBackgroundImage})` }">
      <!-- !Navigation Section Code Start -->
      <nav class="navbar-expand-md navbar fixed-top nav-menu">
        <a class="navbar-brand" href="#home-area">
          <img class="img-fluid" src="../assets/images/brand.png" alt="Brand-Logo-Not-Found">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#resume">Resume</a></li>
            <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <!-- !Navigation Section Code End -->
      <!-- ?Home Page Main Content Section Code Start -->
      <div class="container height-100">
        <div class="row height-100 align-items-center justify-content-center">
          <div class="col-12 col-lg-8 home-content text-center">
            <h1 class="home-name">Maulik <span>Parmar</span></h1>
            <h4 class="cd-headline clip home-headline">I’m a
              <span class='single-headline' data-text='[ "Developer. ", "Designer. ", "Freelancer. " ]'></span>
            </h4>
          </div>
        </div>
      </div>
      <!-- ?Home Page Main Content Section Code End -->
      <!-- !Language & Social Media Icon Section Code Start -->
      <div class="fixed-wrapper">
        <!-- Languages list-->
        <div class="fixed-block block-left">
          <ul class="list-unstyled languages-list">
            <li><a href="#0"><span class="single-language">ENG</span></a></li>
            <li><a href="#0"><span class="single-language">GUJ</span></a></li>
            <li><a href="#0"><span class="single-language">HINDI</span></a></li>
          </ul>
        </div>
        <!-- Social media icons-->
        <div class="fixed-block block-right">
          <ul class="list-unstyled social-icons">
            <li><a href="#0"><i class="icon fa fa-twitter"></i></a></li>
            <li><a href="#0"><i class="icon fa fa-facebook-official"></i></a></li>
            <li><a href="#0"><i class="icon fa fa-linkedin-square"></i></a></li>
            <li><a href="#0"><i class="icon fa fa-github"></i></a></li>
            <li><a href="#0"><i class="icon fa fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <!-- !Language & Social Media Icon Section Code End -->
    </section>
  </div>
</template>

<script>
  // Get Home Page Background Image
  import getHomePageBackgroundImage from "../assets/images/Home_BG_2.jpg";
  // Get Home Page Background Image

  import $ from "jquery";

  export default {
    name: "Home",
    data() {
      return {
        getHomePageBackgroundImage,
      };
    },
  };

  // Typing Effect Code Start
  $(document).ready(function () {
    typing(0, $('.single-headline').data('text'));
    function typing(index, text) {
      var textIndex = 1;
      var tmp = setInterval(function () {
        if (textIndex < text[index].length + 1) {
          $('.single-headline').text(text[index].substr(0, textIndex));
          textIndex++;
        } else {
          setTimeout(function () { deleting(index, text) }, 3000);
          clearInterval(tmp);
        }
      }, 150);
    }

    function deleting(index, text) {
      var textIndex = text[index].length;
      var tmp = setInterval(function () {
        if (textIndex + 1 > 0) {
          $('.single-headline').text(text[index].substr(0, textIndex));
          textIndex--;
        } else {
          index++;
          if (index == text.length) { index = 0; }
          typing(index, text);
          clearInterval(tmp);
        }
      }, 150)
    }
  });
  // Typing Effect Code End
</script>