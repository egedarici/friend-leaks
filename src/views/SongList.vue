
<template>
  <h1> Songs from Friends </h1>
  <div class="songs">
    <SongCard v-for="song in songs" :key="song.id" :song="song"/>

    <div class="pagination">

    <router-link 
    id="page-prev"
    :to="{ name: 'song-list', query: { page: page - 1}}"
    rel="prev"
    v-if="page !=1"
    >&#60; Previous</router-link>

    <router-link
    id="page-next"
    :to="{ name: 'song-list', query: { page: page + 1}}"
    rel="next"
    v-if="hasNextPage"
    >Next &#62;</router-link>
  </div>
  </div>
</template>

<script setup lang="ts">
import SongCard from '@/components/SongCard.vue';
import songService from '@/services/songService';
import { ref, onMounted, computed, watchEffect } from 'vue';

type Song = {
  id: number,
  title: string,
  artist: string,
  album: string,
  };
const props = defineProps(['page'])

const songs = ref<Song[]>([]);
const totalSongs = ref(0);

const page = computed(() => props.page)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalSongs.value / 2)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    songs.value = null;
    songService.getSongs(2, page.value)
    .then((response) => {
      songs.value = response.data;
      totalSongs.value = response.headers['x-total-count']
      console.log(songs);
      
    })
    .catch((error) => {
      console.log(error);
    });
  })
});

</script>

<style scoped>
.songs {
  display: flex;
  flex-direction: column;
  align-items: center
}

.pagination {
  display: flex;
  justify-content: center;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
