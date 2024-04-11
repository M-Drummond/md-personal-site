<script setup lang="ts">

import { ref, computed, onMounted, onUnmounted } from "vue";


import PageHeading from '@/components/PageHeading.vue';
import PageText from '@/components/PageText.vue'


import Slider from '@vueform/slider'

</script>


<style src="@vueform/slider/themes/default.css"></style>

<script lang="ts">

const projects = `<p class="px-8 text-lg md:text-2xl">Recent focus on agency work means most of my jobs are white-label, and I can't
      show them off!</p>`


const rotation = ref(0)


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

var colour1 = ref(getRandColour())
var colour2 = ref(getRandColour())
var colour3 = ref(getRandColour())

export function newGradient() {
  console.log('newGradient ')
  colour1.value = getRandColour();
  colour2.value = getRandColour();
  colour3.value = getRandColour();
  rotation.value = Math.round(Math.random() * 270)
}

</script>


<template>


  <PageText :content="projects" />

  <p class="text-lg md:text-2xl   right-8 px-8 md:px-0 md:max-w-[600px] ml-auto mr-0">There's
    still some
    fun stuff
    to show off
    <RouterLink class="underline decoration-orange-500 hover:text-white hover:bg-purple-400" to="/projects#gradients">
      below.
    </RouterLink>
  </p>


  <transition name="slide-up" appear>
    <RouterLink to="/projects#gradients" class="bottom-0 absolute px-8 text-[#374151] md:left-10 font-bold">(Scroll
      Down!)</RouterLink>
  </transition>
  <div class="min-h-[20vh] mt-[70vh]"><!-- spacer div, call the cops.--></div>
  <div ref="root">



    <section class="flex flex-col items-start justify-center min-h-screen px-8 py-24 font-black font-archivo"
      id="gradients"
      :style="{ background: 'linear-gradient(' + rotation + 'deg, ' + colour1 + ' 27%, ' + colour2 + ' 55%, ' + colour3 + ' 100%)' }">

      <div
        class="flex flex-col items-center justify-center w-full bg-white border border-8 border-black md:flex-row shadow-base">
        <div class="w-full prose text-black border-r-8 border-black ">
          <h2 class="text-3xl uppercase">Gradient generator</h2>
          <p>A Vue-powered gradient generator. A Single Page App that uses TypeScript and Pinia under the hood.</p>
          <!-- <p>Allow</p> -->

          <div class="flex flex-row items-center p-8 bg-white border shadow-button">

            <!-- <span class="inline-block mb-4">Try it Out:</span> -->

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

          <p class="flex flex-row items-center text-sm text-center md:text-base justify-normal">
            <a class="inline-block p-4 mt-8 no-underline mr-4 rounded-[8px] active:translate-y-[1px] uppercase shadow-button bg-white border border-black font-black  hover:text-white hover:bg-black"
              href="https://gradient-md.netlify.app/">View The Site</a>
            <a class="inline-block p-4 mt-8 no-underline  rounded-[8px] active:translate-y-[1px] uppercase shadow-button bg-white border border-black font-black hover:text-white hover:bg-black"
              href="https://github.com/M-Drummond/gradients">View On github</a>
          </p>
        </div>


        <div class="w-full h-auto overflow-hidden prose max-h-none">
          <img src="/gradient-gen.png" alt="screenshot of ecd site"
            class="mx-auto border border-blue-800 border-solid" />
        </div>

      </div>
    </section>


    <section class="relative flex flex-col items-start justify-center min-h-screen px-8 py-24 font-mono bg-yellow-50"
      id="megabits">

      <div class="flex flex-col items-center justify-center w-full md:flex-row">
        <div class="w-full prose text-black flex-0 ">
          <h2 class="text-3xl font-bold text-black">Megabits Calculator</h2>
          <p>This is a react app to convert megabits to, and from, megabytes.</p>
          <p>I made this because download managers sometimes don't do this.</p>
          <p class="flex flex-row items-center text-center justify-normal">
            <a class="inline-block p-4 mt-8 text-black no-underline border border-black border-solid hover:underline"
              href="https://megabits.netlify.app/">Use it Here</a>
            <a class="inline-block p-4 mt-8 ml-4 text-black no-underline border border-black border-solid bg-yellow-50 hover:underline"
              href="https://github.com/M-Drummond/Megabites-Megabytes">View On GitHub</a>
          </p>
        </div>


        <div class="w-full bg-black border border-black border-solid md:w-1/4">
          <img src="/megabits.png" class="block w-full h-full max-w-full" width="100" height="100"
            alt="screenshot of megabits app" />
        </div>

      </div>
      <RouterLink to="/projects#ecd"
        class="absolute bottom-0 block mb-4 ml-auto mr-0 font-bold text-white decoration-orange-500 hover:text-white hover:bg-purple-400 md:left-10">
        Next Project</RouterLink>
    </section>

    <section class="flex flex-col items-start justify-center min-h-screen px-8 py-24 font-roboto" id="ecd"
      style="background-color: rgb(44, 82, 130) ;">

      <div class="flex flex-col items-center justify-center w-full md:flex-row-reverse">
        <div class="w-full prose text-white roboto-slab-500">
          <h2 class="text-3xl font-bold font-black text-white uppercase">ECD Inflatables</h2>
          <p>A super-slim "business card" style website, for my father's small business.</p>
          <p>Completely over-kill with NuxtJS and a Github/Netlify build setup.</p>
          <p>
            <a class="inline-block p-4 mt-8 text-blue-900 no-underline uppercase bg-white border border-white border-solid hover:underline"
              href="https://ecdinflatables.com/">View The Site</a>

          </p>
        </div>


        <div class="w-full h-auto overflow-hidden prose bg-white max-h-none">
          <img src="/ecd.png" alt="screenshot of ecd site" class="mx-auto border border-blue-800 border-solid" />
        </div>

      </div>
    </section>


    <section class="py-8 text-lg text-center text-white bg-gray-500 md:text-2xl">
      That's it for now! More coming soon, check the <a
        class="underline decoration-orange-500 hover:text-white hover:bg-purple-400"
        href="https://github.com/M-Drummond">Github</a> page for updates as they happen.
    </section>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap');

@media only screen and (max-width: 767px) {
  .prose {
    padding: 3rem 0rem;
    overflow-y: scroll;
    /* max-height: 75vh; */
  }
}

@media only screen and (min-width: 767px) {
  .prose {
    padding: 4rem;
    max-height: auto;
    overflow: auto;
  }
}

.prose p {
  margin-bottom: 1.5rem;
}

.roboto-slab-500 {
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-style: normal;

}

.roboto-slab-900 {
  font-family: "Roboto Slab Black", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.font-archivo {
  font-family: "Archivo", sans-serif;
}


.shadow-button {
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.85);
}

.shadow-base {
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
}
</style>
