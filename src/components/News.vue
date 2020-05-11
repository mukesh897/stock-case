<template>
    <div>
       <div>
           <div style="display: flex; margin-top: 60px;">
               <div class="news-heading news-title">NEWS:</div>
            <b-tabs  v-model="tabIndex" content-class="mt-3">
                <div class="scroll">
                    <b-tab class="tab-text" :title-link-class="linkClass(0)" id="tab-1" title="General" active>
                        <news-clip v-for="(news, index) in news"
                        :key="index"
                        :title="news.title"
                        :description="news.description"
                        :url="news.image_url"
                        :time="news.date"
                        :link="news.news_url">
                        </news-clip>    
                    </b-tab>
                </div>
                <div class="scroll">
                <b-tab class="tab-text" :title-link-class="linkClass(1)" title="Positive">
                    <news-clip v-for="(news, index) in positiveNews"
                    :key="index"
                    :title="news.title"
                    :description="news.description"
                    :url="news.image_url"
                    :time="news.date"
                    :link="news.news_url">
                    </news-clip>   
                </b-tab>
                </div>
                <div class="scroll">
                    <b-tab  class="tab-text" :title-link-class="linkClass(2)" title="Negative">
                        <news-clip v-for="(news, index) in negativeNews"
                        :key="index"
                        :title="news.title"
                        :description="news.description"
                        :url="news.image_url"
                        :time="news.date"
                        :link="news.news_url">
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
} */
.news-wrap-content {
    box-shadow: -2.5px -2.5px 2.5px 0 rgba(68, 63, 153, 0.07);
    background-color: #1e2029;
    padding: 15px;
    margin-left: -109px !important;
}

.tab-under-a {
    border-bottom: #ffffff;
}

.tab-1 {
    border-bottom: 2px solid purple;
}

.tab-2 {
    border-bottom: 2px solid green;
}
.tab-3 {
     border-bottom: 2px solid red;
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