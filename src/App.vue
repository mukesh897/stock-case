<template>
  <v-app>
    <div class="main-wrap">
      <login-modal></login-modal>
      <sign-up-modal></sign-up-modal>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import loginModal from './globals/LoginModal.vue'
import signUpModal from './globals/SignupModal.vue'

export default {
  name: 'App',
  components: {
    loginModal,
    signUpModal
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .main-wrap {
    margin: -8px;
  }

</style>
