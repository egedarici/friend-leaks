<script setup  lang="ts">
import { ref, onMounted } from 'vue'
import SongService from '@/services/songService'

const song = ref(null)

const props = defineProps({
    id: {
        required: true
    }
})

onMounted(() => {
    SongService.getSong(props.id)
    .then((response) => {
        song.value = response.data
    })
    .catch((error) => {
        console.log(error)
    })
})
</script>

<template>
    <div v-if="song">
        <div>
            <h1>{{ song.title }}</h1>
            <p>From {{ song.album }} by {{ song.artist }}</p>
        </div>  
    </div>
</template>