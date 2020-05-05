<template>
  <div>
    <div>
      <div style="display: flex; margin-top: 60px;">
        <div class="news-heading news-title">NEWS:</div>
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab :title-link-class="linkClass(0)" title="General">
            <newsClip
              v-for="item in general"
              :key="item.id"
              :heading="item.heading"
              :subHeading="item.subHeading"
              :content="item.content"
            ></newsClip>
          </b-tab>
          <b-tab :title-link-class="linkClass(1)" title="Positive">
            <p>I'm the second tab</p>
          </b-tab>
          <b-tab :title-link-class="linkClass(2)" title="Negative">
            <p>I'm a disabled tab!</p>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import newsClip from './NewsClip';
export default {
  name: "News",
  components: {newsClip},
  data() {
    return {
      tabIndex: 0,
      general: [
        {
          id: 0,
          heading: "The Wall Street Journal",
          subHeading: "3h",
          content: `Musk’s SpaceX, Bezos’ Blue Origin land contract
      to build NASA’s astronaut moon lander`
        },
        {
          id: 1,
          heading: "The Wall Street Journal",
          subHeading: "3h",
          content: `Musk’s SpaceX, Bezos’ Blue Origin land contract
      to build NASA’s astronaut moon lander`
        },
        {
          id: 2,
          heading: "The Wall Street Journal",
          subHeading: "3h",
          content: `Musk’s SpaceX, Bezos’ Blue Origin land contract
      to build NASA’s astronaut moon lander`
        }
      ]
    };
  },
  methods: {
    linkClass(i) {
      if (this.tabIndex === i) {
        return ['tab-1']
      } else {
        return ['tab-text']
      }
    }
  }
};
</script>

<style>

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
/* #tab-1 .ul .li {
  border-bottom: 2px solid red !important;
} */
</style>