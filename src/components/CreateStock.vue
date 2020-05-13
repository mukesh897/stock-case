<template>
  <div>
      <div class="card-wrap">
        <div class="title-wrapper">
          <div class="Create-stockcase">Create  <input style="opacity: 0.5; width: 123px;" v-model="stockCase"><img style="margin-bottom: 2px;
    height: 24px;" src="https://img.icons8.com/material-two-tone/24/000000/edit.png"/><div class="under-line"></div></div>
            <div style="width: 30%; float: right;">
              <v-autocomplete
                v-model="select"
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                :autofocus = "autofocus"
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="Select maximum 3 stocks"
                solo-inverted
            ></v-autocomplete>
          </div>
        </div>
        <div v-if="zeroState == true" style="display: flex">
          <div style="width: 30%;"> 
            <img style="height: 24%; margin-left: 70px;" src="../assets/images/group_119.png">
          </div>
          <div class="zero-text-wrap">
            <p class="zero-state-text">
              Create and analyse
              your stockcase
            </p>
          </div>
        </div>
        <div v-else>
          <div style="max-height:250px; overflow-y: scroll;">
            <table>
              <thead style="margin-bottom: 10px; border-bottom: 1px solid #514abf;">
                <th style="width: 40%; text-align: left !important;">Stock</th>
                <th>Price $</th>
                <th>Change 24 hr</th>
                <th>Sentiment</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in bucket"
                :key="index">
                  <td style="width: 40%; text-align: left !important; color: #514abf;">{{bucket[index].companyName}}</td>
                  <td>{{bucket[index].latestPrice}}</td>
                  <td>{{bucket[index].change}}</td>
                  <td><span style="color: red;">3%</span><span style="color: #514abf;">/</span><span style="color: green;">97%</span></td>
                  <td style="cursor: pointer;" @click="deleteRow()">x</td>
                </tr> 
              </tbody>
            </table>
          </div>
          <div style="text-align: center; margin-top: 8px;">
            <button class="cta" @click="createBucket">CREATE</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import NewsService from '../NewsService';
export default {
  name: 'CreateStock',
  data () {
      return {
        loading: false,
        items: [],
        autofocus: false,
        zeroState: true,
        search: null,
        select: null,
        bucket: [],
        stockCase: "stockcase",
        stocks: [],
      }
    },
    watch: {
      async search(val) {
        let placeholder = val && val !== this.select && this.querySelections(val)
        if(placeholder == true){
          return placeholder
        } else {
          let symbol = ""
          this.stocks.forEach((stock)=> {
            if(stock["name"] == this.select) {
              symbol = stock["symbol"]
              this.items = [];
              this.stockNamesList = [];
              this.select = ""
            }
          })
          let data = await NewsService.getStockPrice(symbol);
          // await this.$store.dispatch("fetchNews",symbol);
          // this.select = "";
          this.autofocus = false;
          if(data.result)
          this.stockNamesList = [];
          console.log(data.result + "result")
          if(this.bucket.length <= 2) { 
            this.bucket.push(data.result);
            console.log("Printing bucker")
            console.log(this.bucket)
          } else {
            this.$alert("you can add maximum 3 stocks");
          }
        }
      },
    },
    computed: {
      userId() {
        return this.$store.state.userId
      },
      isUserLoggedIn() {
        return this.$store.state.isUserLoggedIn
      }
    },
    methods: {
      async querySelections (v) {
        this.zeroState = false;
        this.loading = true
        var data2 = await NewsService.searchStocks(v)
        this.stocks = data2.result
        setTimeout(() => {
          let stockNamesList = [];
          this.stocks.forEach(stock => {
            stockNamesList.push(stock["name"])
          })
          this.items = stockNamesList.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
      async createBucket() {
        this.$alert(this.stockCase + " created succesfully");
        let stockIdList = [];
          this.stocks.forEach(stock => {
            stockIdList.push(stock["id"])
          })
          stockIdList = JSON.stringify(stockIdList);
          var data = await NewsService.addBucket(this.stockCase, stockIdList, this.$store.state.userId)
          console.log(data.result + "addBucket")
          this.$router.push({name:'dashboard', query: {symbol: this.bucket[0].symbol}})
      },
      deleteRow(index) {
        this.bucket.splice(index,1);
      }
    },
     mounted: {
      async setNews() {
        // await this.$store.dispatch("fetchNews", "Facebook Inc. Class A")
      }
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cta {
      width: 136px;
      height: 38.5px;
      border-radius: 5px;
      color: #ffffff;
      font-family: MarkPro;
      background-color: #34d1bf;
    }
    .line {
      box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
      background-color: #514abf;;
      height: 2px;
      margin: 10px auto;
      width: 90%;
    }
    .under-line {
      height: 2px;
      width: 51%;
      margin-left: 39%;
      border-radius: 5px;
      box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
      background-color: #1e2029;;
    }
    .card-wrap {
      height: 400px;
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
    table {
      width: 90%;
      margin: 50px auto;
    }
    th {
      opacity: 0.75;
      font-family: MarkPro;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.28;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    }
    td {
      font-family: MarkPro;
      font-size: 20px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.28;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    }
    tr {
      height: 60px;
    }
</style>

<style scoped>
  .swal2-content  {
    font-family: MarkPro !important;
    color: #ffffff !important;
  }
  .swal2-show {
    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16) !important;
    background-color:  #1e2029 !important;
  }
  .swal2-styled.swal2-confirm {
    background-color: #514abf !important;
  }
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
