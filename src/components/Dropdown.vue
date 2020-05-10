<template>
    <div class="card-wrap">
        <div>
        <b-dropdown style=" width: 100%;" id="dropdown-1" text="Stockcase" class="m-md-2">
            <b-dropdown-item  v-for="(item,index) in bucketList"
            :key="index"><span @click="updateList(index)">{{item.bucket_name}}</span></b-dropdown-item>
        </b-dropdown>
        <div>
            <ul>
                <li v-for="(item, index) in bucketStockList"
                    :key="index">
                    {{item.name}}
                </li>

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
            }
        },
        async mounted() {
            try{
                var data = await NewsService.getBuckets("f451db8f-8b23-11ea-8f60-02d8ff8d84a6");
                this.bucketList = data.bucket;
                setInterval(this.updateTime, 1000);
            } catch (error) {
                console.log(error);
                this.$router.push('/');
            }
        },
        methods: {
            async updateList(index) {
                this.bucketStockList = []
                this.bucketStockList = this.bucketList[index].bucket_stocks

                await this.$store.dispatch("fetchBucketNews",this.bucketList[index].bucket_id);

            }
        }
    }
</script>



<style>
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

</style>