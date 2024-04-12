<script setup lang="ts">

import { ref, computed, onMounted, onUnmounted } from "vue";

import router from "@/router";

import PageHeading from '@/components/PageHeading.vue';
import PageText from '@/components/PageText.vue'

import playableButtons from '@/components/PlayableButtons.vue'

import Slider from '@vueform/slider'
import { useIntersectionObserver } from '@vueuse/core'
import { useSound } from '@vueuse/sound'

const targetIsVisible = ref(false)

onMounted(() => {

  // Get all <section> elements
  const sections = document.querySelectorAll("section");

  const offset = "40px"; // You can adjust this value according to your needs


  // Loop through each <section> element
  sections.forEach(section => {
    // Create an IntersectionObserver for each section
    const observer = new IntersectionObserver(([entry]) => {



      if (entry.isIntersecting) {
        // If the section is intersecting with the viewport, do your logic here
        targetIsVisible.value = true;
        const sectionId = section.id;
        router.replace('/projects#' + sectionId);
      } else {
        targetIsVisible.value = false;
        router.replace('/projects')
      }

    }, {
      rootMargin: offset
    });

    // Start observing the section
    observer.observe(section);
  });

  if (router.currentRoute.hash) {
    document.getElementById(router.to.has)?.scrollIntoView();

  }


});



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

  <p class="text-lg md:text-2xl right-8 px-8 md:px-0 md:max-w-[600px] ml-auto mr-0">There's
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
  <div class="min-h-[20vh] mt-[70vh]" id="0"><!-- spacer div, call the cops.--></div>
  <div ref="root">



    <section class="flex flex-col items-start justify-center min-h-screen px-8 py-24 font-black font-archivo"
      ref="gradients" id="gradients"
      :style="{ background: 'linear-gradient(' + rotation + 'deg, ' + colour1 + ' 27%, ' + colour2 + ' 55%, ' + colour3 + ' 100%)' }">

      <div
        class="flex flex-col-reverse items-center justify-center w-full px-4 mx-auto bg-white border border-8 border-black xl:max-w-screen-xl md:px-0 md:flex-row shadow-base">
        <div class="w-full prose text-black border-black md:order-r-8 ">
          <h2 class="text-3xl tracking-widest uppercase">Gradient generator</h2>
          <p>A <span class="px-1 text-white bg-black">Vue</span> powered gradient generator. A Single Page App that
            uses TypeScript and Pinia under the hood.</p>
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

          <p class="flex flex-col items-center text-sm text-center md:flex-row md:text-base justify-normal">
            <a class="inline-block p-4 mt-8 w-[85%] no-underline md:mr-4 rounded-[8px] active:translate-y-[1px] uppercase shadow-button bg-white border border-black font-black  hover:text-white hover:bg-black"
              href="https://gradient-md.netlify.app/">Use It Here</a>
            <a class="inline-block p-4 mt-8 no-underline w-[85%] rounded-[8px] active:translate-y-[1px] uppercase shadow-button bg-white border border-black font-black hover:text-white hover:bg-black"
              href="https://github.com/M-Drummond/gradients">View On github</a>
          </p>
        </div>


        <div class="w-full h-auto overflow-hidden prose max-h-none">
          <img src="/gradient-gen.png" alt="screenshot of gradient generator site"
            class="mx-auto border border-blue-800 border-solid" />
        </div>

      </div>
    </section>

    <section
      class="flex flex-col items-start justify-center min-h-[50vh] px-8 py-24   border-y-8 border-black bg-[#555] "
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
              href="https://github.com/M-Drummond/beatmachine">View On github</a>
          </p>

          <playableButtons />

        </div>


        <div class="w-full h-auto overflow-hidden prose max-h-none">
          <img src="/beats.png" alt="screenshot of beatsmachine site"
            class="px-2 mx-auto border border-orange-500 border-solid" />
        </div>

      </div>
    </section>



    <section ref="megabits"
      class="relative flex flex-col items-start justify-center min-h-screen px-8 py-24 font-mono bg-yellow-50"
      id="megabits">

      <div class="flex flex-col items-center justify-center w-full md:flex-row">
        <div class="w-full prose text-black flex-0 ">
          <h2 class="text-3xl font-bold text-black">Megabits Calculator</h2>
          <p>This is a <span class="px-1 text-white bg-black">react</span> app to convert megabits to, and from,
            megabytes.</p>
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
    </section>

    <section ref="ecd" class="flex flex-col items-start justify-center min-h-screen px-8 py-24 font-roboto" id="ecd"
      style="background-color: rgb(44, 82, 130) ;">

      <div class="flex flex-col items-center justify-center w-full md:flex-row-reverse">
        <div class="w-full prose text-white roboto-slab-500">
          <h2 class="text-3xl font-bold font-black text-white uppercase">ECD Inflatables</h2>
          <p>A super-slim "business card" style website, for my father's small business.</p>
          <p>Completely over-kill with <span class="px-1 text-white bg-black">NuxtJS</span> and a
            <span class="px-1 text-white bg-black">Github/Netlify</span> build setup.
          </p>
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


    <section class=" border-y-orange-400 border-y-8 font-manrope bg-slate-800" ref="platemath" id="platemath">
      <div class="flex flex-col items-start justify-center border-teal-700 border-y-8 px-8 py-24  min-h-[80vh]">
        <div
          class="flex flex-col-reverse items-center justify-center w-full px-4 mx-auto border border-orange-400 border-1 xl:max-w-screen-xl md:px-0 md:flex-row ">
          <div class="w-full prose text-orange-400 border-black md:order-r-8 ">
            <h2 class="text-3xl uppercase text-inherit">Plate Math</h2>
            <p>Barbell calculator, programmed in <span class="px-1 text-black bg-orange-400">Vue</span></p>
            <p>Adding 20 and 20 is now a little easier.</p>


            <p
              class="flex flex-col items-center space-y-4 text-sm text-center md:flex-row md:text-base md:space-x-4 md:space-y-0 justify-normal">
              <a class="w-full p-4 font-bold text-teal-700 no-underline bg-orange-400 border border-orange-400 hover:text-orange-400 hover:bg-teal-700 hover:underline font-boldd"
                href="https://beatsmachine.netlify.app/">Use it Here</a>
              <a class="w-full p-4 font-bold text-orange-400 no-underline border border-white hover:bg-black hover:underline font-boldd"
                href="https://github.com/M-Drummond/beatmachine">View On github</a>
            </p>


          </div>


          <div class="w-full h-auto overflow-hidden prose max-h-none ]">
            <img src="/platemath.png" alt="screenshot of platemath site"
              class="px-2 mx-auto border border-orange-500 border-solid" />
          </div>

        </div>
      </div>
    </section>


    <section class="py-8 text-lg text-center md:text-2xl">
      That's it for now! More coming soon, check the <a
        class="underline decoration-orange-500 hover:text-white hover:bg-purple-400"
        href="https://github.com/M-Drummond">Github</a> page for updates as they happen.
    </section>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap');

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

.font-manrope {
  font-family: "Manrope", sans-serif;

}

.shadow-button {
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.85);
}

.shadow-base {
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
}
</style>
