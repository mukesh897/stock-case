import axios from 'axios'

export default {
  async getGraphData(symbol, interval) {
    const response = await axios.post('http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/getStockGraph', {
      'symbol': symbol,
      'range': interval
    })
    return response.data
  }
}