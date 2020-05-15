<template>
    <div>
       <div>
           <div style="display: flex;">
               <div class="news-heading news-title">NEWS:</div>
            <b-tabs v-model="tabIndex" content-class="mt-3">
                <div class="scroll">
                    <b-tab class="tab-text" id="tab-1" title="General" active>
                        <news-clip v-for="(news, index) in news"
                        :key="index"
                        :title="news.headline"
                        :description="news.summary"
                        :url="news.image"
                        :time="news.datetime"
                        :link="news.url"
                        :source="news.source">
                        </news-clip>    
                    </b-tab>
                </div>
                <div class="scroll">
                <b-tab class="tab-text" title="Positive">
                    <news-clip v-for="(news, index) in positiveNews"
                    :key="index"
                    :title="news.headline"
                    :description="news.summary"
                    :url="news.image"
                    :time="news.datetime"
                    :link="news.url"
                    :source="news.source">
                    </news-clip>   
                </b-tab>
                </div>
                <div class="scroll">
                    <b-tab  class="tab-text" title="Negative">
                        <news-clip v-for="(news, index) in negativeNews"
                        :key="index"
                        :title="news.headline"
                        :description="news.summary"
                        :url="news.image"
                        :time="news.datetime"
                        :link="news.url"
                        :source="news.source">
                        </news-clip>
                    </b-tab>
                </div>    
            </b-tabs>
            </div>
       </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsClip from './NewsClip';
export default {
name: 'News', 
data() {
    return {
      tabIndex: 0,
    }
},      
components: {
    NewsClip,
    news: []
},
computed: mapGetters(['news','positiveNews','negativeNews']),
  watch: {
    news(newValue, oldValue) {
      console.log(`Updating from ${oldValue} to ${newValue}`);
    }, 
},
  methods: {
      linkClass(i) {
      if (this.tabIndex === 1) {
        return ['tab-1']
      } else if(this.tabIndex === 2){
        return ['tab-2']
      } else {
          return ['tabs-3']
      }
    }
  }

}
</script>

<style>
/* .scroll {
    height: 400px;
    overflow-y: scroll;
    overflow-x:auto;
    width: 150%;
} */
#tab-1___BV_tab_button__ {
    border-bottom: 2px solid purple !important;
}
#__BVID__28___BV_tab_button__{
    border-bottom: 2px solid green !important;
}
#__BVID__131___BV_tab_button__{
    border-bottom: 2px solid green !important;
}
#__BVID__142___BV_tab_button__ {
    border-bottom: 2px solid red !important;
}
#__BVID__19___BV_tab_button__{
    border-bottom: 2px solid green !important;
}
#__BVID__30___BV_tab_button__ {
    border-bottom: 2px solid red !important;
}
#__BVID__107___BV_tab_button__{
    border-bottom: 2px solid green !important;
}
#__BVID__114___BV_tab_button__ {
    border-bottom: 2px solid red !important;
}
.news-wrap-content {
    box-shadow: -2.5px -2.5px 2.5px 0 rgba(68, 63, 153, 0.07);
    background-color: #1e2029;
    padding: 15px;
    margin-left: -109px !important;
}

.tab-under-a {
    border-bottom: #ffffff;
}

.news-heading {
    font-family: MarkPro;
    font-size: 22.5px;
    font-weight: 500;
    opacity: 0.6;
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

.image-wrap {
    float: right;
    width: 265px;
    height: 147.5px;
    object-fit: contain;
}

.nav-tabs {
    margin-top: 48px;
    margin-left: 60px;
    border-bottom: 0px !important;
}

.nav-tabs .nav-link {
    border: 0px !important;
    color: #ffffff;
    font-size: 31px;
    font-family: MarkPro;
    opacity: 0.2;
}


.nav-tabs .nav-link.active {
    color: #ffffff;
    background-color: transparent;
    font-family: MarkPro;
    font-size: 31px;
    font-weight: 500;
    opacity: 1;
}
.news-title {
    margin-top: 70px;
}
.mt-cus-17 {
    margin-top: 17px;
}
</style>