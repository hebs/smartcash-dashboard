import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://dbserver:8081'
  })
}
