<template>
  <v-app>
    <div class="main-wrap">
      <login-modal></login-modal>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import loginModal from './globals/LoginModal.vue'

export default {
  name: 'App',
  components: {
    loginModal,
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
