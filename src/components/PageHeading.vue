<script setup lang="ts">

import { useRoute } from 'vue-router';


const route = useRoute()

console.log( route ) ;

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

        
        <div class="absolute bottom-0 left-0 z-0 flex flex-col pl-8 pb-8 md:pb-8">
            <transition name="fade" mode="out-in">
                <p v-show="route.path !== '/' ? '' : 'hidden' " class="text-sm lg:text-3xl">Personal Website of Mackinley Drummond</p>
            </transition>
            <transition name="fade" mode="out-in">
                <p v-show="route.path !== '/' ? '' : 'hidden' " class="text-xs lg:text-2xl">Web Developer</p>
            </transition>

            <h1 id="pageTitleText" class="text-[5rem] leading-[6rem] lg:text-[18rem] lg:leading-[18.5rem] font-bold mb-0">{{ title }}</h1>
            
        </div>
    
</template>