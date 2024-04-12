<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useSound } from '@vueuse/sound'
import drumSfx from '@/assets/sounds/909-drums.mp3'


const { play } = useSound(drumSfx, {
    sprite: {
        kick: [0, 350],
        hihat: [374, 160],
        snare: [666, 290],
        cowbell: [968, 200],
    },
})

const playSound = (id) => {
    play({ id })
}


</script>

<script lang="ts">

</script>

<template>
    <div class="items-center justify-center hidden gap-4 py-4 md:flex md:justify-start">
        <span class="hidden md:block">Sounds Like: </span>
        <button @click="playSound('kick')" label="Kick">1</button>
        <button @click="playSound('hihat')" label="Hi-hat">2</button>
        <button @click="playSound('snare')" label="Snare">3</button>
        <button @click="playSound('cowbell')" label="Cowbell">4</button>
    </div>
</template>
<style scoped>
button {
    @apply px-4 py-2 border-orange-500 border-solid border hover:bg-black
}
</style>
