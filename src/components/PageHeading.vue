<script setup lang="ts">

import { onMounted, updated, watch } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { useRoute } from 'vue-router';
import { Route } from 'vue-router';

import { useRouter } from "vue-router";

const route = useRoute();

const router = useRouter();

router.afterEach((to, from) => {

  console.log(to)

});


</script>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};





</script>

<template>


  <div class="absolute overflow-hidden bottom-0 left-0 z-0 flex flex-col pl-8 pb-8 md:pb-8">

    <div class="  w-full">

      <transition name="slide-up" v-cloak v-show="route.path !== '/' ? '' : 'opacity-0'">
        <p class="text-sm lg:text-3xl">Mackinley Drummond</p>
      </transition>

      <transition name="slide-up" delay="200" v-cloak v-show="route.path !== '/' ? '' : 'opacity-0'">
        <p class="text-xs lg:text-2xl">Web Developer</p>

      </transition>
    </div>

    <transition name="title" mode="out-in">
      <h1 id="pageTitleText" :key="route.name"
        class="text-[4.75rem] capitalize bold leading-[6rem] lg:text-[12rem] 2xl:text-[18rem] lg:leading-[18.5rem] font-bold mb-0">
        {{
        route.name }}</h1>
    </transition>


  </div>

</template>