<template>
  <div class="card-wrap">
    <apexchart ref="priceChart" width="500" type="line" :options="options" :series="series"></apexchart>
    <v-btn-toggle tile color="#470ff4" group>
      <v-btn value="1W" dark v-on:click="updateGraph('7')">
        1W
      </v-btn>
      <v-btn value="1M" dark v-on:click="updateGraph('30')">
        1M
      </v-btn>
      <v-btn value="3M" dark v-on:click="updateGraph('90')">
        3M
      </v-btn>
      <v-btn value="6M" dark v-on:click="updateGraph('180')">
        6M
      </v-btn>
      <v-btn value="1Y" dark v-on:click="updateGraph('360')">
        1Y
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'
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
    computed: mapGetters(['graphData']),
    async mounted() {
      const data = this.graphData
      console.log(data)
      await this.$refs.priceChart.updateSeries([{
        name: 'price',
        data: data
      }])
      await this.$refs.priceChart.addXaxisAnnotation({
        x: data[Math.round(data.length/3)][0],
        strokeDashArray: 0,
        borderColor: '#f35b04',
        fillColor: '#f35b04',
        label: {
          borderColor: '#1b1b1d',
          borderWidth: 1,
          text: 'Negative News',
          textAnchor: 'middle',
          position: 'top',
          orientation: 'horizontal',
          offsetX: 0,
          offsetY: 0,
          style: {
            background: '#1b1b1d',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-annotation-label',
          }
        }
      })
      await this.$refs.priceChart.addXaxisAnnotation({
        x: data[Math.round(2*data.length/3)][0],
        strokeDashArray: 0,
        borderColor: '#34d1bf',
        fillColor: '#34d1bf',
        label: {
          borderColor: '#1b1b1d',
          borderWidth: 1,
          text: 'Positive News',
          textAnchor: 'middle',
          position: 'top',
          orientation: 'horizontal',
          offsetX: 0,
          offsetY: 0,
          style: {
            background: '#1b1b1d',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-annotation-label',
          }
        }
      })
    },
    methods: {
      async updateGraph(interval) {
        var data = await this.$store.dispatch('fetchGraphData', { symbol: this.$route.query.symbol, interval: interval})
        console.log(data)
        this.$refs.priceChart.updateSeries([{
          name: 'price',
          data: data
        }])
        await this.$refs.priceChart.addXaxisAnnotation({
          x: data[Math.round(2*data.length/3)][0],
          strokeDashArray: 0,
          borderColor: '#f35b04',
          fillColor: '#f35b04',
          label: {
            borderColor: '#1b1b1d',
            borderWidth: 1,
            text: 'Negative News',
            textAnchor: 'middle',
            position: 'top',
            orientation: 'horizontal',
            offsetX: 0,
            offsetY: 0,
            style: {
              background: '#1b1b1d',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-annotation-label',
            }
          }
        })
        await this.$refs.priceChart.addXaxisAnnotation({
          x: data[Math.round(2*data.length/3)][0],
          strokeDashArray: 0,
          borderColor: '#34d1bf',
          fillColor: '#34d1bf',
          label: {
            borderColor: '#1b1b1d',
            borderWidth: 1,
            text: 'Positive News',
            textAnchor: 'middle',
            position: 'top',
            orientation: 'horizontal',
            offsetX: 0,
            offsetY: 0,
            style: {
              background: '#1b1b1d',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-annotation-label',
            }
          }
        })
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

</style>