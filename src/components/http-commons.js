import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `https://api.timepad.ru`
})
