<style scoped>
.songs {
  display: flex;
  flex-direction: column;
  align-items: center
}
</style>

<script setup lang="ts">
import SongCard from '@/components/SongCard.vue';
import { ref } from 'vue';

const songs = ref([
  {
    id: 1,
    title: 'Song 1',
    artist: 'Artist 1',
    album: 'Album 1'
  },
  {
    id: 2,
    title: 'Song 2',
    artist: 'Artist 2',
    album: 'Album 2'
  },
  {
    id: 3,
    title: 'Song 3',
    artist: 'Artist 3',
    album: 'Album 3'
  },
])

</script>

<template>
<h1> Songs from Friends </h1>
<div class="songs">
  <SongCard v-for="song in songs" :key="song.id" :song="song"/>
</div>
</template>
