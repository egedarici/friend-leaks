import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/egedarici/friend-leaks',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getSongs(perPage, page) {
    return apiClient.get('/songs?_limit=' + perPage + '&_page=' + page)
  },
  getSong(id) {
    return apiClient.get(`/songs/${id}`)
  }
}