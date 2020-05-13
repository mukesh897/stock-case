<template>
  <div class="card-wrap">
    <apexchart ref="priceChart" width="500" type="line" :options="options" :series="series"></apexchart>
    <v-btn-toggle tile color="#470ff4" group>
      <v-btn value="1W" v-on:click="updateGraph('7')">
        1W
      </v-btn>
      <v-btn value="1M" v-on:click="updateGraph('30')">
        1M
      </v-btn>
      <v-btn value="3M" v-on:click="updateGraph('90')">
        3M
      </v-btn>
      <v-btn value="6M" v-on:click="updateGraph('180')">
        6M
      </v-btn>
      <v-btn value="1Y" v-on:click="updateGraph('360')">
        1Y
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
        options: {
          chart: {
            // id: 'price-chart',
            height: '100%',
            width: '100%',
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 2,
              opacity: 3,
              color: '#000'
            },
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          grid: {
            show: false
          },
          stroke: {
            curve: 'smooth',
            colors: ['#470ff4'],
            width: 2
          },
          xaxis:{
            type: 'datetime',
            show: false,
            labels: {
              show: false
            },
            axisTicks: {
              show: false
            },
            axisBorder: {
              show: false
            },
            categories: []
          },
          yaxis: {
            show: true,
            labels: {
              show: false
            },
            axisTicks: {
              show: false
            },
            axisBorder: {
              show: false
            }
          }
        },
        series: [{
          name: 'price',
          data: []
        }]
      }
    },
    async mounted() {
      let data = await this.$store.dispatch('fetchGraphData',this.bucketList[index].bucket_id)
      for (let i = 0; i < res.data.price.length; i++) data[i] = [res.data.time[i], res.data.price[i]]
      this.$refs.priceChart.updateSeries([{
        name: 'price',
        data: data
      }])

    },
    methods: {

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

</style>