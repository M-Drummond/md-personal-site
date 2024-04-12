<script setup lang="ts">
import playableButtons from '@/components/PlayableButtons.vue'

import { useIntersectionObserver } from '@vueuse/core'
import { useSound } from '@vueuse/sound'
</script>

<script lang="ts">

</script>

<template>
    <section
        class="flex flex-col items-start justify-center min-h-screen px-8 py-24   border-y-8 border-black bg-[#555] "
        ref="beatmachine" id="beatmachine">
        <div
            class="flex flex-col-reverse items-center justify-center w-full px-4 mx-auto border border-orange-500 border-1 xl:max-w-screen-xl md:px-0 md:flex-row ">
            <div class="w-full prose text-orange-500 border-black md:order-r-8 ">
                <h2 class="text-3xl uppercase text-inherit">BEATS MACHINE</h2>
                <p>Built with <span class="px-1 text-black bg-orange-500">Vue</span>, a playable step sequencer.</p>
                <p>Makes beats, and makes noise.</p>


                <p
                    class="flex flex-col items-center space-y-4 text-sm text-center md:space-y-0 md:flex-row md:text-base md:space-x-4 justify-normal">
                    <a class="w-full p-4 text-orange-500 no-underline border border-orange-500 hover:bg-black hover:underline font-boldd"
                        href="https://beatsmachine.netlify.app/">Play
                        Now</a>
                    <a class="w-full p-4 text-orange-500 no-underline border border-orange-500 hover:bg-black hover:underline font-boldd"
                        href="https://github.com/M-Drummond/beatmachine/tree/main/src">View On github</a>
                </p>

                <playableButtons />

            </div>


            <div class="w-full h-auto overflow-hidden prose max-h-none">
                <img src="/beats.png" alt="screenshot of beatsmachine site"
                    class="block px-2 mx-auto border border-black border-solid shadow-base " />
            </div>

        </div>
    </section>
</template>
<style scoped></style>
