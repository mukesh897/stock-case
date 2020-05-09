import axios from "axios"

export default {
  async getStockData(placeholder) {
    let res = await axios.post("http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/getStockData",{
        "query": placeholder
    });
    return res.data;
  },
  async getEventSingle(eventId) {
    let res = await axios.get("http://localhost:8000/events/" + eventId);
    return res.data;
  }
}