<template>
  <div class="about" id="About">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content-content">
            <div class="row">
              <div class="col-md-12">
                <div class="section-heading page-heading">
                  <p class="contact-sub-desc"></p>
                  <h2 class="section-title">About Me</h2>
                  <div class="animated-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-section single-section">
        <div class="row">
          <div class="col-md-12">
            <div class="row align-items-center">
              <!-- Image Section -->
              <div class="col-6 col-lg-5 info-img">
                <div class="image-cropper align-items-center">
                  <img class="profile-pic" src="../assets/images/MP-Profile-Picture.png" alt="About Picture" />
                </div>
              </div>
              <!-- Image Section -->
              <!-- Description Section -->
              <div class="col-6 col-lg-7">
                <div class="content-block align-items-center">
                  <h6 class="content-title">
                    I'm Maulik Parmar, a Web Developer and Designer
                  </h6>
                  <div class="content-description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque a veritatis reiciendis, rerum consequatur amet dolor
                      dicta tempore alias facilis culpa aperiam aliquid
                      blanditiis neque sed ut quo error repellat!
                    </p>
                  </div>
                  <address class="content-info">
                    <div class="row">
                      <div class="col-12 col-md-6 single-info">
                        <span>Name:</span>
                        <p>Maulik Parmar</p>
                      </div>
                      <div class="col-12 col-md-6 single-info">
                        <span>Email:</span>
                        <p>
                          <a href="mailto:Mkparmar41@gmail.com">Mkparmar41@gmail.com</a>
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md-6 single-info">
                        <span>Age:</span>
                        <p>22</p>
                      </div>
                      <div class="col-12 col-md-6 single-info">
                        <span>From:</span>
                        <p>Jamnagar, Gujrat, India</p>
                      </div>
                    </div>
                  </address>
                  <div class="d-block d-sm-flex pull-right">
                    <button class="btn button-main button-scheme" id="contact-submit" type="submit">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
              <!-- Description Section -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About",
  };
</script>