<template>
  <div class="contact" id="Contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content-content">
            <div class="row">
              <div class="col-md-12">
                <div class="section-heading page-heading">
                  <p class="contact-sub-desc"></p>
                  <h2 class="section-title">Get in Touch</h2>
                  <div class="animated-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-section single-section">
        <div class="row">
          <div class="col-12 col-lg-7">
            <form class="contact-form" id="contact-form" action="#">
              <h4 class="content-title">Message Me</h4>
              <div class="row">
                <div class="col-12 col-md-6 form-group">
                  <input class="form-control" id="contact-name" type="text" name="name" placeholder="Name"
                    required="" />
                </div>
                <div class="col-12 col-md-6 form-group">
                  <input class="form-control" id="contact-email" type="email" name="email" placeholder="Email"
                    required="" />
                </div>
                <div class="col-12 form-group form-message">
                  <textarea class="form-control" id="contact-message" name="message" placeholder="Message" rows="5"
                    required=""></textarea>
                </div>
                <div class="col-12 form-submit">
                  <button class="btn button-main button-scheme" id="contact-submit" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-12 col-lg-5">
            <div class="contact-info">
              <h4 class="content-title">Stay Connected with Me</h4>
              <p class="info-description">
                Always available for freelance work if the right project comes
                along, Feel free to contact me!
              </p>

              <div class="row">
                <div class="col-6 col-md-4 text-center">
                  <div class="social-icon-section">
                    <a href="https://twitter.com/mkparmar41">
                      <i class="fa fa fa-twitter"></i><br />
                      Twitter
                    </a>
                  </div>
                </div>

                <div class="col-6 col-md-4 text-center">
                  <div class="social-icon-section">
                    <a href="https://www.facebook.com/MP9597/">
                      <i class="fa fa-facebook-official"></i><br />
                      Facebook
                    </a>
                  </div>
                </div>

                <div class="col-6 col-md-4 text-center">
                  <div class="social-icon-section">
                    <a href="https://www.linkedin.com/in/mp9597/">
                      <i class="fa fa-linkedin-square"></i><br />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-6 col-md-4 text-center">
                  <div class="social-icon-section">
                    <a href="https://github.com/MPPARMAR9597">
                      <i class="fa fa-github"></i><br />
                      Github
                    </a>
                  </div>
                </div>

                <div class="col-6 col-md-4 text-center">
                  <div class="social-icon-section">
                    <a href="https://www.instagram.com/m_p_9597/">
                      <i class="fa fa-instagram"></i><br />
                      Instagram
                    </a>
                  </div>
                </div>

                <div class="col-6 col-md-4 text-center">
                  <div class="social-icon-section">
                    <a href="https://www.instagram.com/m_p_9597/">
                      <i class="fa fa-instagram"></i><br />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Contact",
  };
</script>