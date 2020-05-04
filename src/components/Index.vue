<template>
  <div class="index-wrap">
    <div class="header-wrap_index">
      <Header></Header>
    </div>  
    <div >
      <Create-Stock class="card-wrap"></Create-Stock>
    </div>
    <div class="news-wrap">
      <news></news>
    </div>
    <div class="faq-wrap">
    <Faqs></Faqs>
    </div>
    <div class="footer-wrap">
      <Footer class="footer"></Footer>
    </div> 
  </div>
</template>

<script>
import Header from './Header.vue'
import Faqs from './Faques.vue'
import Footer from './Footer.vue'
import CreateStock from './CreateStock.vue'
import News from './News.vue'
export default {
  name: 'Index',
  components: {
    Header,
    CreateStock,
    News,
    Footer,
    Faqs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-wrap {
    width: 100%;
    height: 100%;
    background-color: #1e2029;
    padding-bottom: 80px;
  }

  .header-wrap_index {
    width: 80%;
    margin: auto;
    padding: 50px 0px;
  }

  .faq-wrap {
    width: 80%;
    padding-top: 60px;
    margin: auto;
  }

  .footer-wrap {
    margin-top: 80px;
    padding-top: 50px;
    width: 100%;
    position: absolute;
    background-color: #0e0e13
  }

  .footer {
    width: 80%;
    margin: auto;
  }

  .card-wrap {
    width: 80%;
    margin-bottom: 48px;
    margin: auto;
  }

  .news-wrap {
    width: 80%;
    margin-top: 48px;
    margin: auto;
  }

</style>
