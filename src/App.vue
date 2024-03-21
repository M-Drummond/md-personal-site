<script setup lang="ts">
import { watch, computed, ref, defineComponent } from 'vue'
import { RouterLink, RouterView, useRoute } from "vue-router";
import PageHeading from "./components/PageHeading.vue";
import Nav from "./components/Nav.vue"
import Bio from "./components/Bio.vue"

import { globalState } from "./stores/global";

const global = globalState();
const route = useRoute()

const frameClasses = computed(() => {

  if (route.path == '/') {
    return 'bg-yellow-50'
  } else if (route.path == '/projects') {
    return 'bg-blue-50'
  } else if (route.path == '/about') {
    return 'bg-green-50'
  }
});


</script>

<template>
  <div id="frame" class="min-h-[101vh] delay-200 duration-300 transition-colors " :class="frameClasses">

    <header>
      <div class="wrapper h-full w-full">
        <Nav />
      </div>
    </header>

    <Bio />


    <RouterView />


  </div>
</template>
