<script setup lang="ts">

import { ref, computed, onMounted, onUnmounted } from "vue";

import router from "@/router";

import PageHeading from '@/components/PageHeading.vue';
import PageText from '@/components/PageText.vue'

import GradientGenerator from '@/components/projects/GradientGenerator.vue'
import Megabits from '@/components/projects/Megabits.vue'
import BeatMachine from '@/components/projects/BeatMachine.vue'

import PlateMath from '@/components/projects/PlateMath.vue'

import ECD from '@/components/projects/ECD.vue'


const targetIsVisible = ref(false)

onMounted(() => {

  // Get all <section> elements
  const sections = document.querySelectorAll("section");

  const offset = "-10px"; // You can adjust this value according to your needs


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




</script>


<template>

  <div>

    <PageText :content="projects" />

    <p class="text-lg md:text-2xl right-8 px-8 md:px-0 md:max-w-[600px] ml-auto mr-0">There's
      still some
      fun stuff
      to show off
      <a class="underline decoration-orange-500 hover:text-white hover:bg-purple-400" href="/projects#gradients">
        below.
      </a>
    </p>


    <transition name="slide-up" appear>
      <RouterLink to="/projects#gradients" class="bottom-0 absolute px-8 text-[#374151] md:left-10 font-bold">(Scroll
        Down!)</RouterLink>
    </transition>
    <div class="min-h-[20vh] mt-[70vh]" id="0"><!-- spacer div, call the cops.--></div>
    <div ref="root">



      <GradientGenerator />
      <BeatMachine />
      <Megabits />

      <ECD />


      <PlateMath />


      <section
        class="py-8 text-lg min-h-[25vh] relative flex flex-col items-center justify-center w-screen text-center md:text-2xl">
        <div class="absolute inset-0 z-20 w-full h-full pointer-events-none opacity-40"
          :style="{ background: 'linear-gradient(' + rotation + 'deg, ' + colour1 + ' 27%, ' + colour2 + ' 55%, ' + colour3 + ' 100%)' }">
        </div>
        <div class="">
          <p class="relative z-40">
            That's it for now! More coming soon, check the <a
              class="underline decoration-orange-500 hover:text-white hover:bg-purple-400"
              href="https://github.com/M-Drummond">Github</a> page for updates as they happen.
          </p>
          <button @click="newGradient()"
            class="inline-block absolute bottom-2 scale-50 right-4 hidden md:block p-2 ml-4 no-underline mt-8 rounded-[8px] active:translate-y-[1px] uppercase shadow-button bg-white border border-black font-black hover:text-white hover:bg-black">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>


          </button>
        </div>
      </section>
    </div>

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
