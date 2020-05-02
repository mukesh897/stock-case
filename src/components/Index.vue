<template>
  <div class="index-wrap">
    <div class="header-wrap_index">
      <Header></Header>
    </div>  
    <div >
      <Create-Stock class="card-wrap"></Create-Stock>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateStock from './CreateStock.vue'
export default {
  name: 'Index',
  components: {
    Header,
    CreateStock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-wrap {
    width: 100%;
    height: 100%;
    background-color: #1e2029;
  }

  .header-wrap_index {
    width: 80%;
    margin: auto;
    padding: 32px 0px;
  }

  .card-wrap {
    width: 80%;
    margin-bottom: 48px;
    margin: auto;
  }

</style>
