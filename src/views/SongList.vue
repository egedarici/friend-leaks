<style scoped>
.songs {
  display: flex;
  flex-direction: column;
  align-items: center
}
</style>

<script setup lang="ts">
import SongCard from '@/components/SongCard.vue';
import songService from '@/services/songService';
import { ref, onMounted } from 'vue';

type Song = {
  id: number,
  title: string,
  artist: string,
  album: string,
  };

const songs = ref<Song[]>([]);

onMounted(() => {
  songService.getSongs()
  .then((response) => {
    songs.value = response.data;
    console.log(songs);
    
  })
  .catch((error) => {
     console.log(error);
  })
})

</script>

<template>
<h1> Songs from Friends </h1>
<div class="songs">
  <SongCard v-for="song in songs" :key="song.id" :song="song"/>
</div>
</template>
