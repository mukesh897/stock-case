<template>
  <div class="main-wrap">
    <router-view></router-view>
    <login-modal></login-modal>
  </div>
</template>

<script>
import loginModal from './globals/LoginModal.vue'

export default {
  name: 'App',
  components: {
    loginModal,
  }
}
</script>

<style>
  .main-wrap {
    margin: -8px;
  }

</style>
