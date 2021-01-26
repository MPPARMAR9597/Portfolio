<template>
  <div class="home" id="Home">
    <section class="home-section home-cover-bg" :style="{ backgroundImage: `url(${getHomePageBackgroundImage})` }">
      <!-- ?Home Page Main Content Section Code Start -->
      <div class="container height-100">
        <div class="row height-100 align-items-center justify-content-center">
          <div class="col-12 col-lg-8 home-content text-center">
            <h1 class="home-name">Maulik <span>Parmar</span></h1>
            <h4 class="cd-headline clip home-headline">
              I’m a
              <span class="single-headline" data-text='[ "Developer. ", "Designer. ", "Freelancer. " ]'></span>
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
            <li>
              <a><span class="single-language">ENG</span></a>
            </li>
            <li>
              <a><span class="single-language">GUJ</span></a>
            </li>
            <li>
              <a><span class="single-language">HINDI</span></a>
            </li>
          </ul>
        </div>
        <!-- Social media icons-->
        <div class="fixed-block block-right">
          <ul class="list-unstyled social-icons">
            <li>
              <a href="https://twitter.com/mkparmar41"><i class="icon fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="https://www.facebook.com/MP9597/"><i class="icon fa fa-facebook-official"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mp9597/"><i class="icon fa fa-linkedin-square"></i></a>
            </li>
            <li>
              <a href="https://github.com/MPPARMAR9597"><i class="icon fa fa-github"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/m_p_9597/"><i class="icon fa fa-instagram"></i></a>
            </li>
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
    typing(0, $(".single-headline").data("text"));
    function typing(index, text) {
      var textIndex = 1;
      var tmp = setInterval(function () {
        if (textIndex < text[index].length + 1) {
          $(".single-headline").text(text[index].substr(0, textIndex));
          textIndex++;
        } else {
          setTimeout(function () {
            deleting(index, text);
          }, 3000);
          clearInterval(tmp);
        }
      }, 150);
    }

    function deleting(index, text) {
      var textIndex = text[index].length;
      var tmp = setInterval(function () {
        if (textIndex + 1 > 0) {
          $(".single-headline").text(text[index].substr(0, textIndex));
          textIndex--;
        } else {
          index++;
          if (index == text.length) {
            index = 0;
          }
          typing(index, text);
          clearInterval(tmp);
        }
      }, 150);
    }
  });
// Typing Effect Code End
</script>