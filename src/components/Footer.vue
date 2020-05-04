<template>
  <div>
        <div class="footer-wrap">
        <div class= "logo">stock <span class="logo_text-style-1">case </span></div>
        <div class="right-container">
            <a class="links">create</a>
            <a  class="links">blog</a>
            <a @click= "showLoginModal" class="links">log in</a>
            <a class="links">sign up</a>       
        </div>
    </div>
    <div class="footer-wrap"> 
        <div class="copyright">Copyrights 2020 @stockcase</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',

  methods: {
      showLoginModal() {
        this.$store.dispatch("showModalWithOptions", {
          name: "loginModal"
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copyright {
    font-family: MarkPro;
    font-size: 15px;
    margin: 30px 0px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
}
.footer-wrap {
    display: flex;
}

.logo {
    font-family: MarkPro;
    font-size: 45px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 4.5px;
    color: #ffffff;
}

.logo_text-style-1 {
    color: #514abf;
    margin-left: -15px;
}

.links {
    cursor: pointer;
    font-family: MarkPro;
    padding: 20px;
    font-size: 22.5px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 2.25px;
    text-align: center;
    color: #514abf;
}

.right-container {
    margin: auto;
    margin-right: 0px;
}

.sign-up__button {
    margin-left: 29.5px;
    padding: 0px 17px 5px;
    border-radius: 5px;
    border: solid 0.5px #707070;
    background-color: #514abf;
    font-family: MarkPro;
    font-size: 25px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
}
</style>
