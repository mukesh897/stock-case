import axios from "axios"

export default {
  async getStockData(placeholder) {
    let res = await axios.post("http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/getStockData",{
        "query": placeholder
    });
    return res.data;
  },
  async getStockPrice(symbol) {
    let res = await axios.post("http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/getStockPrice",{
      "symbol": symbol
    });
    return res.data;
  },
  async searchStocks(v) {
    let res = await axios.post("http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/searchStocks",{
      "query": v
    });
    return res.data;
  },
  async getBucketNews(id) {
    let res = await axios.post("http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/getBucketNews",{
      "bucket_id": id
    });
    return res.data;
  },
  async getBuckets(id) {
    let res = await axios.post("http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/getBuckets",{
      "user_id": id
    });
    return res.data;
  },
  async addBucket(stockCase,data,user_id) {
    let res = await axios.post("http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/addBucket",{
      "bucket_name": stockCase,
      "data": data,
      "user_id": user_id
    });
    return res.data;
  },
  async getEventSingle(eventId) {
    let res = await axios.get("http://localhost:8000/events/" + eventId);
    return res.data;
  }
}