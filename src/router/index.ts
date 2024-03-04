import { createRouter, createWebHistory } from 'vue-router'
import SongDetails from '../views/SongDetails.vue'
import SongList from '../views/SongList.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'song-list',
      component: SongList
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/song/:id',
      name:'song-details',
      props: true,
      component: SongDetails
    }
  ]
})

export default router
