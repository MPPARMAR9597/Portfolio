<template>
  <div class="navigation" id="navigation">
    <!-- !Navigation Section Code Start -->
    <nav class="navbar-expand-md navbar fixed-top nav-menu">
      <a class="navbar-brand" href="#home-area">
        <img
          class="img-fluid"
          src="../assets/images/brand.png"
          alt="Brand-Logo-Not-Found"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="{'active': isActive} nav-item">
            <a class="nav-link" href="#Home">Home</a>
          </li>
          <li class="{'active': isActive} nav-item">
            <a class="nav-link" href="#About">About</a>
          </li>
          <li class="{'active': isActive} nav-item">
            <a class="nav-link" href="#MySkills">My Skills</a>
          </li>
          <li class="{'active': isActive} nav-item">
            <a class="nav-link" href="#Resume">Resume</a>
          </li>
          <li class="{'active': isActive} nav-item">
            <a class="nav-link" href="#Portfolio">Portfolio</a>
          </li>
          <li class="{'active': isActive} nav-item">
            <a class="nav-link" href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- !Navigation Section Code End -->
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>