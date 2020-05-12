import axios from 'axios'
import CryptoJS from 'crypto-js'

export default {
  async userLogin(email, password) {
    const passwordBase64 = CryptoJS.enc.Base64.parse(password)
    const passwordDigest = CryptoJS.SHA256(passwordBase64).toString()
    axios.post('http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/userLogin', {
      'email': email,
      'password': passwordDigest
    })
      .then((response) => {
        if (response.data.result.length === 0) {
          console.error('Auth error')
        } else {
          console.log('Auth Success')
          return response.data.result[0].user_id
        }
      })
      .catch((error) => {
        return null
        console.error(error)
      })
  },

  async userSignUp(firstName, lastName, email, password) {
    const passwordBase64 = CryptoJS.enc.Base64.parse(password)
    const passwordDigest = CryptoJS.SHA256(passwordBase64).toString()
    axios.post('http://ec2-54-67-79-231.us-west-1.compute.amazonaws.com:8080/stockcase/api/v1/userSignUp', {
      'email': email,
      'password': passwordDigest,
      'first_name': firstName,
      'last_name': lastName
    })
      .then((response) => {
        if (response.data.result.length === 0) {
          console.error('Signup error')
        } else {
          console.log('Signup Success')
          return response.data.result[0].user_id
        }
      })
      .catch((error) => {
        return null
        console.error(error)
      })
  }
}