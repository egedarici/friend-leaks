<script setup lang="ts">

import { ref } from 'vue'

defineProps({
  song: {
    type: Object,
    required: true
  },
})

</script>

<template>
  <div class="song-card">
    <h2> {{ song.title }}</h2>
    <span>From {{ song.album }} by {{  song.artist }}</span>
  </div>
</template>

<style scoped>
.song-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.song-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
