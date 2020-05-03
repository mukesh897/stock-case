<template>
  <div class="main-wrap">
    <login-modal></login-modal>
    <router-view></router-view>
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
