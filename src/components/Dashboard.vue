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
      <news-dashboard></news-dashboard>
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
import Footer from './Footer.vue'
import Faqs from './Faques.vue'
import GraphView from './GraphView.vue'
import Dropdown from './Dropdown.vue'
import NewsDashboard from './NewsDashboard.vue'
export default {
  name: 'Dashboard',
  components: {
    Header,
    GraphView,
    Dropdown,
    NewsDashboard,
    Faqs,
    Footer
  },
  created() {
    console.log(this.$router.params.symbol + "dash symbol");
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
    this.$store.dispatch("fetchNews","general")
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

  /* .scroll {
    height: 400px;
    overflow-y: scroll;
    overflow-x:auto;
  } */

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

  .faq-wrap {
    width: 80%;
    padding-top: 60px;
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

<style>
#__BVID__20___BV_tab_button__{
    border-bottom: 2px solid green !important;
}
#__BVID__22___BV_tab_button__ {
    border-bottom: 2px solid red !important;
}
</style>
