<template>
    <div class="card-wrap">
        <div>
        <b-dropdown style="width: 100%; font-size: 20px; font-family: MarkPro; text-align: left;" id="dropdown-1" :text="placeholder" class="m-md-2">
            <b-dropdown-item  v-for="(item,index) in bucketList"
            :key="index"><span class="list-text" @click="updateList(index)">{{item.bucket_name}}</span></b-dropdown-item>
        </b-dropdown>
        <div style="height: 300px; overflow-y: scroll; width: 80%; margin: auto;">
            <table>
                <thead>
                    <th style="width:78%" class="list-text">Symbol</th>
                    <th  class="list-text">Price</th>
                </thead>
                <tbody>
                    <tr class="list-item" v-for="(item, index) in bucketStockList"
                        :key="index">
                        <td style="width:78%" class="list-text">{{item.symbol}}</td>
                        <td class="list-text">{{item.price}}</td>
                    </tr>
                </tbody>
            </table>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
import NewsService from '../NewsService'

    export default {
        data() {
            return {
                bucketList: [],
                bucketStockList: [],
                placeholder: ""
            }
        },
      computed: {
        userId() {
          return this.$store.state.userId
        },
        isUserLoggedIn() {
          return this.$store.state.isUserLoggedIn
        }
      },
        async mounted() {
            try{
                var data = await NewsService.getBuckets(this.userId);
                this.bucketList = data.bucket;
                this.placeholder = this.bucketList[0].bucket_name
                this.bucketStockList = this.bucketList[0].bucket_stocks
                setInterval(this.updateTime, 1000);
            } catch (error) {
                console.log(error);
                this.$router.push('/');
            }
        },
        methods: {
            async updateList(index) {
                this.placeholder = this.bucketList[index].bucket_name
                this.bucketStockList = []
                this.bucketStockList = this.bucketList[index].bucket_stocks
                console.log(this.bucketList[index].bucket_id + "ID ID")
                await this.$store.dispatch("fetchBucketNews",this.bucketList[index].bucket_id);
              await this.$store.dispatch("fetchBucketGraph",this.bucketList[index].bucket_id);
            },
            async updateNews(index) {
                await this.$store.dispatch("fetchBucketNews",this.bucketStockList[index].symbol);
            }
        }
    }
</script>



<style>
    .list-item {
        padding: 15px 5px;
    }
    .list-text  {
        font-family: MarkPro;
        color: white;
        font-size: 20px;       
    }
    .card-wrap {
      height: 360px;
      border-radius: 5px;
      box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
      background-color: #252834 !important;
    }

    .btn-group > .btn {
        background: transparent;
        border: 0px;
    }
    .dropdown-menu.show {
        background-color: #252834 !important;
        width: 100%;
    }
    .v-application ul {
        padding-left: 0px !important;
    }
    .v-application a {
        color: #ffffff !important;
        font-size: 20px;
    }
    .show > .btn-secondary.dropdown-toggle {
        background-color: transparent;
        border: 0px;
    }
    .show > .btn-secondary.dropdown-toggle {
        border: 0px !important;
        text-align: left;
        font-family: MarkPro;
        font-size: 20px;
    }
    .btn-secondary:focus {
        border: 0px !important;
        text-align: left;
        font-family: MarkPro;
        font-size: 20px;
    }

</style>