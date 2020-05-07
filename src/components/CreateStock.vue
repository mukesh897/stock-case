<template>
  <div>
      <div class="card-wrap">
        <div class="title-wrapper">
          <div class="Create-stockcase">Create Stockcase</div>
          <div style="width: 30%; float: right;">
            <v-autocomplete
              v-model="select"
              :loading="loading"
              :items="items"
              :search-input.sync="search"
              cache-items
              class="mx-4"
              flat
              hide-no-data
              hide-details
              label="Select minimum 2 stocks"
              solo-inverted
          ></v-autocomplete>
          </div>
        </div>
        <div v-if="zeroState == 'true'" class="">
          <div class="">

          </div>
          <div class="zero-text-wrap">
            <p class="zero-state-text">
              Create and analyse
              your stockcase
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CreateStock',
  data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        stocks: [
          'Facebook',
          'Snapchat',
          'Twitter',
        ],
      }
    },
    watch: {
      search (val) {
        this.$store.state.zeroState = !this.$store.state.zeroState
        val && val !== this.select && this.querySelections(val)
      },
    },
    computed: {
      ...mapState ({
        zeroState: "zeroState"
      }),
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.stocks.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card-wrap {
      height: 360px;
      border-radius: 5px;
      box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
      background-color: #252834 !important;
    }
    .zero-text-wrap {
      width: 50%;
      margin-top: 30px;
      margin-right: 50px;
      margin-left: auto;
    }
    .zero-state-text {
      font-family: MarkPro;
      font-size: 52.5px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.27;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    }
    .title-wrapper {
      display:flex;
      justify-content: space-between;
      margin-top: 5%;
      width: 90%;
      margin: auto;
      padding-top: 2%;
    }
    .Create-stockcase {
      font-family: MarkPro;
      font-size: 25px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.28;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }
</style>

<style>
 .v-input__slot {
    border-radius: 10.5px !important;
    border: solid 0.5px #707070 !important;
    background-color: #252834;
    width: 30%;
    min-height: 31px !important;
    float: right !important;
    margin-left: auto;
  }
  .theme--light.v-sheet{
    border: solid 0.5px #707070 !important;
    background-color: #252834 !important;
  }
  .v-input .v-label {
    opacity: 0.15 !important;
    font-family: MarkPro !important;
    font-size: 12.5px !important;
    font-weight: 500 !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24 !important;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff !important;
  }
  .theme--light.v-list-item .v-list-item__mask {
    color: #514abf !important;
    background: transparent !important;
  }
  .v-list-item__title {
    font-family: MarkPro !important;
    font-size: 16.5px !important;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24 !important;
    letter-spacing: normal;
    color: #ffffff !important;
  }
</style>
