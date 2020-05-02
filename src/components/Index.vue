<template>
  <div class="index-wrap">
    <Header class="header-wrap"></Header>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'Index',
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-wrap {
    width: 100%;
  }

  .header-wrap {
    width: 80%;
    margin: auto;
  }

</style>
