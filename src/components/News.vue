<template>
    <div>
       <div>
           <div style="display: flex; margin-top: 60px;">
               <div class="news-heading news-title">NEWS:</div>
            <b-tabs content-class="mt-3">
                
                <b-tab id="tab-1" title="General" active>
                    <news-clip v-for="(news, index) in news"
                    :key="index"
                    :title="news.title"
                    :description="news.description"
                    :url="news.urlToImage"
                    :time="news.publishedAt"
                    :link="news.url">
                    </news-clip>
                    
                </b-tab>
                <b-tab class="tab-text" title="Positive"><p>I'm the second tab</p></b-tab>
                <b-tab class="tab-text" title="Negative"><p>I'm a disabled tab!</p></b-tab>
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
components: {
    NewsClip,
    news: []
},
 computed: mapGetters(['news']),
  watch: {
    news(newValue, oldValue) {
      console.log(`Updating from ${oldValue} to ${newValue}`);
    }, 
  },  

}
</script>

<style>
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
    border: 0px;
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
#tab-1 .ul .li {
    border-bottom: 2px solid red !important;
}
</style>