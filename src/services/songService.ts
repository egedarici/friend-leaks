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
  getSongs() {
    return apiClient.get('/songs')
  },
  getSong(id) {
    return apiClient.get(`/songs/${id}`)
  }
}