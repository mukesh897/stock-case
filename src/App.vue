<template>
  <div class="main-wrap">
    <index></index>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
  .main-wrap {
    background-color: #1e2029;
    margin: -8px;
  }

</style>
