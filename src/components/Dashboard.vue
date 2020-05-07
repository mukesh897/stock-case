<template>
  <div class="index-wrap">
    <div class="header-wrap_index">
      <Header></Header>
    </div>  
    <div class="row-wrap">
        <div class="row">
            <div class="col-lg-8">
                <GraphView></GraphView>
            </div>
            <div class="col-lg-3">
                <Dropdown></Dropdown>
            </div>
        </div>
    </div>
    <div class="news-wrap">
      <news></news>
    </div>
    <div class="footer-wrap">
      <Footer class="footer"></Footer>
    </div> 
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import GraphView from './GraphView.vue'
import Dropdown from './Dropdown.vue'
import News from './News.vue'
export default {
  name: 'Dashboard',
  components: {
    Header,
    GraphView,
    Dropdown,
    News,
    Footer
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

  .row-wrap {
    width: 80%;
    margin: auto;
  }

  .news-wrap {
    width: 80%;
    margin-top: 48px;
    margin: auto;
  }

</style>
