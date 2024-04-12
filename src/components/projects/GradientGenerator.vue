<script setup lang="ts">

import { ref } from 'vue'
import Slider from '@vueform/slider'

</script>

<script lang="ts">

export const rotation = ref(0)

const presetColours = [
    '#b3ff80',
    '#d36fc5',
    '#bef3fe',
    '#c79adf',
    '#f9b4c5',
    '#f9edb4',
    '#e2bcfb',
    '#7f6fd3',
    '#b6f7b5',
    '#b6d7f7',
    '#1c8cfd'
]


export function getRandColour() {
    return presetColours[Math.round(Math.random() * 10)].toString()
}

export var colour1 = ref(getRandColour())
export var colour2 = ref(getRandColour())
export var colour3 = ref(getRandColour())

export function newGradient() {
    console.log('newGradient ')
    colour1.value = getRandColour();
    colour2.value = getRandColour();
    colour3.value = getRandColour();
    rotation.value = Math.round(Math.random() * 270)
}



</script>

<template>
    <section
        class="flex flex-col items-start justify-center min-h-screen px-8 py-24 font-black border-t-8 border-black font-archivo"
        ref="gradients" id="gradients"
        :style="{ background: 'linear-gradient(' + rotation + 'deg, ' + colour1 + ' 27%, ' + colour2 + ' 55%, ' + colour3 + ' 100%)' }">

        <div
            class="flex flex-col-reverse items-center justify-center w-full px-4 mx-auto bg-white border border-8 border-black xl:max-w-screen-xl md:px-0 md:flex-row shadow-base">
            <div class="w-full prose text-black border-black md:order-r-8 ">
                <h2 class="text-3xl tracking-widest uppercase">Gradient generator</h2>
                <p>A <span class="px-1 text-white bg-black">Vue</span> powered gradient generator. A Single Page App
                    that
                    uses TypeScript and Pinia under the hood.</p>
                <p>Try It Out: </p>

                <div class="flex flex-row items-center p-8 bg-white border shadow-button">


                    <div class="w-full">

                        <Slider showTooltip="'focus'" v-model="rotation" :max="180" :min="0" :lazy="false" />

                    </div>

                    <button @click="newGradient()"
                        class="inline-block p-4 ml-4 no-underline  rounded-[8px] active:translate-y-[1px] uppercase shadow-button bg-white border border-black font-black hover:text-white hover:bg-black">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>


                    </button>

                </div>

                <p class="flex flex-col items-center text-sm text-center md:flex-row md:text-base justify-normal">
                    <a class="inline-block p-4 mt-8 w-[85%] no-underline md:mr-4 rounded-[8px] active:translate-y-[1px] uppercase shadow-button bg-white border border-black font-black  hover:text-white hover:bg-black"
                        href="https://gradient-md.netlify.app/">Use It Here</a>
                    <a class="inline-block p-4 mt-8 no-underline w-[85%] rounded-[8px] active:translate-y-[1px] uppercase shadow-button bg-white border border-black font-black hover:text-white hover:bg-black"
                        href="https://github.com/M-Drummond/gradients">View On github</a>
                </p>
            </div>


            <div class="w-full h-auto overflow-hidden prose max-h-none">
                <img src="/gradient-gen.png" alt="screenshot of gradient generator site"
                    class="mx-auto border border-black border-solid shadow-button" />
            </div>

        </div>
    </section>

</template>
<style scoped>
.font-archivo {
    font-family: "Archivo", sans-serif;
}
</style>
