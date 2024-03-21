<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue';
</script>

<script lang="ts">

export default {
  data() {
    return {
      pageHeading: 'Projects',
    };
  },
  methods: {

  }
};



</script>


<template>


  <div class="about prose xl:prose-xl mr-0 ml-auto">
    <p class="text-lg md:text-2xl">Recent focus on agency work means most of my jobs are white-label, and I can't
      show them off!</p>
    <p class="text-lg md:text-2xl">There's still some fun stuff to show off <RouterLink
                  class="decoration-orange-500 hover:text-white hover:bg-purple-400"
                  to="/projects#megabits">below.</RouterLink>
    </p>
  </div>


  <PageHeading :title="pageHeading" />


  <RouterLink to="/projects#megabits" class="bottom-0 absolute md:left-10 font-bold">(Scroll Down!)</RouterLink>

  <div class="min-h-[20vh] mt-[70vh]"><!-- spacer div, call the cops.--></div>

  <section class="min-h-screen bg-gray-800 font-mono flex flex-col px-8 py-24 items-start justify-center relative"
           id="megabits">

    <div class="flex flex-col md:flex-row justify-center items-center w-full">
      <div class="prose text-white w-full flex-0 ">
        <h2 class="text-3xl font-bold  text-white">Megabits Calculator</h2>
        <p>This is a react app to convert megabits to, and from, megabytes.</p>
        <p>I made this because download managers sometimes don't do this.</p>
        <p class="flex flex-row items-center justify-normal text-center">
          <a class="p-4 mt-8 inline-block  text-white  border-solid border no-underline hover:underline border-white"
             href="https://megabits.netlify.app/">Use it Here</a>
          <a class="p-4 mt-8 inline-block  text-black bg-yellow-50 ml-4 border-solid border no-underline hover:underline border-white"
             href="https://github.com/M-Drummond/Megabites-Megabytes">View On GitHub</a>
        </p>
      </div>


      <div class="w-full md:w-1/4 bg-white border border-solid border-white">
        <img src="/megabits.png" class="w-full  h-full block max-w-full" width="100" height="100" alt="screenshot of megabits app"/>
      </div>

    </div>
    <!-- <RouterLink to="/projects#ecd"
                class="bottom-0 decoration-orange-500 hover:text-white hover:bg-purple-400 absolute text-white mb-4 ml-auto mr-0 block md:left-10 font-bold">
      Next Project</RouterLink> -->
  </section>

  <section class="min-h-screen font-roboto flex flex-col px-8 py-24 items-start justify-center" id="ecd"
           style="background-color: rgb(44, 82, 130) ;">

      <div class="flex flex-col md:flex-row-reverse justify-center items-center w-full">
      <div class="prose text-white w-full roboto-slab-500">
        <h2 class="text-3xl font-bold  text-white font-black uppercase">ECD Inflatables</h2>
        <p>A super-slim "business card" style website, for my father's small business.</p>
        <p>Completely over-kill with NuxtJS and a Github/Netlify build setup.</p>
        <p>
          <a class="p-4 mt-8 inline-block text-blue-900 bg-white uppercase border-solid border no-underline hover:underline border-white"
             href="https://ecdinflatables.com/">View The Site</a>

        </p>
      </div>


      <div class="prose h-auto w-full bg-white overflow-hidden max-h-none">
        <img src="/ecd.png" alt="screenshot of ecd site" class="mx-auto border border-solid border-blue-800" />
      </div>

    </div>
  </section> 

  <section class="py-8 bg-gray-500 text-white text-center text-2xl">
    That's it for now! More coming soon, check the <a
           class="decoration-orange-500 underline hover:text-white hover:bg-purple-400" href="https://github.com/M-Drummond">Github</a> page for updates as they happen.
  </section>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@media only screen and (max-width: 767px) {
  .prose {
    padding: 3rem 2rem;
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
</style>
