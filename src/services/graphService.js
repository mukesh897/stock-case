import axios from 'axios'

export default {
  async getGraphData(symbol, interval) {
    return new Promise((resolve, reject) => {
      axios.post('http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/getStockGraph', {
        'symbol': symbol,
        'range': interval
      })
        .then((response) => {
          if (response.data === {}) {
            console.error('getGraphData: Empty data from post call')
            reject(error)
          } else {
            console.log('getGraphData: Fetch graph data success')
            resolve(response.data)
          }
        })
        .catch((error) => {
          console.error(error)
          reject(error)
        })
    })
  },

  async getBucketGraphData(id) {
    return new Promise((resolve, reject) => {
      axios.post('http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/getStockGraph', {
        'bucket_id': id
      })
        .then((response) => {
          if (response.data === {}) {
            console.error('getBucketGraphData: Empty data from post call')
            reject(error)
          } else {
            console.log('getBucketGraphData: Fetch graph data success')
            resolve(response.data)
          }
        })
        .catch((error) => {
          console.error(error)
          reject(error)
        })
    })
  }
}