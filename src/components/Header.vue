<template>
  <div class="header-wrap">
    <div class= "logo">stock <span class="logo_text-style-1">case </span></div>
    <div class="right-container" v-if="true">
      <a @click= "showLoginModal" class="log-in">login</a>
      <button @click="showSignupModal" class="sign-up__button">sign up</button>
    </div>
    <div class="right-container" v-else>
      <button @click="userLogout" class="log-out__button">logout</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: mapState(['isUserLoggedIn']),
  methods: {
    showLoginModal() {
      this.$store.dispatch('showModalWithOptions', { name: 'loginModal' })
    },

    showSignupModal() {
      this.$store.dispatch('showModalWithOptions', { name: 'signUpModal' })
    },

    userLogout() {
      this.$store.dispatch('setIsUserLoggedIn', false)
      this.$store.dispatch('setUserId', '')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrap {
    display: flex;
    background-color: #1e2029;
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

.log-in {
    cursor: pointer;
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

.log-out__button {
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
