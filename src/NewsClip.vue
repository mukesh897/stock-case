<template>
  <div @click="redirect" class="row news-wrap-content mt-cus-17">
    <div class="col-lg-8" style="padding: 15px;">
      <div style="display: flex; justify-content: space-between;">
        <div class="news-heading">{{heading}}</div>
        <div class="news-sub-heading">{{subHeading}}</div>
      </div>
      <p class="news-sub-heading mt-cus-17">{{content}}</p>
      <div class="news-sub-heading mt-cus-17">Source: {{source}}</div>
    </div>
    <div class="col-lg-4">
      <img
        class="image-wrap"
        :src="url"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    subHeading: String,
    content: String,
    url: String,
    source: String,
    link: String
  },
  methods: {
    redirect() {
      window.location = (this.link,'_blank')
    }
  }
};
</script>

<style>
.news-wrap-content {
  box-shadow: -2.5px -2.5px 2.5px 0 rgba(68, 63, 153, 0.07);
  background-color: #1e2029;
  padding: 15px;
  margin-left: -109px !important;
}
div:news-wrap-content:hover {
  border: 1px solid;
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
.mt-cus-17 {
  margin-top: 17px;
}
/* #tab-1 .ul .li {
  border-bottom: 2px solid red !important;
} */
</style>