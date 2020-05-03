<template>
    <div>
       <div>
           <span>News</span>
            <b-tabs content-class="mt-3">
                
                <b-tab title="GENERAL" active>
                    <div class="row news-wrap-content">
                        <div class="col-lg-8">
                            <div style="display: flex; justify-content: space-between;">
                                <div class="news-heading"> The Wall Street Journal</div>
                                <div class="news-sub-heading mt-cus-17"> 3h </div>
                            </div>
                            <p class="news-sub-heading"> Musk’s SpaceX, Bezos’ Blue Origin land contract
                                to build NASA’s astronaut moon lander</p>
                        </div>
                        <div class="col-lg-4">
                            <!-- <img v-bind:src="require('./src/assets/images/image11@2x.png')"/> -->
                        </div>
                    </div>
                </b-tab>
                <b-tab class="tab-text" title="POSITIVE"><p>I'm the second tab</p></b-tab>
                <b-tab class="tab-text" title="NEGATIVE"><p>I'm a disabled tab!</p></b-tab>
            </b-tabs>
            </div>
        <div>Hello</div>
    </div>
</template>

<script>
export default {
name: 'News', 
}
</script>

<style>
.news-wrap-content {
    box-shadow: -2.5px -2.5px 2.5px 0 rgba(68, 63, 153, 0.07);
  background-color: #1e2029;
}
.tab-under-a {
    border-bottom: #ffffff;
}
.news-heading {
    font-family: MarkPro;
  font-size: 22.5px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}
.news-sub-heading {
      font-family: MarkPro;
  font-size: 22.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;

}

.nav-tabs {
    margin-top: 48px;
    border-bottom: 0px !important;
}
.nav-tabs .nav-link {
    border-bottom: 0px !important;
    color: #ffffff;
    font-size: 31px;
    font-family: MarkPro;
    opacity: 0.2;
}
.nav-tabs .nav-link.active {
    color: #ffffff;
    background-color: transparent;
    border: 0px;
    font-family: MarkPro;
    font-size: 31px;
    font-weight: 500;
    opacity: 1;
}
.mt-cus-17 {
    margin-top: 17px;
}
</style>