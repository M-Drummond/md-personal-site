<script setup lang="ts">
import { watch, computed, ref, defineComponent } from 'vue'
import { RouterLink, RouterView, useRoute } from "vue-router";
import PageHeading from "./components/PageHeading.vue";
import MainNav from "./components/MainNav.vue"
import Bio from "./components/Bio.vue"

import { globalState } from "./stores/global";

const global = globalState();
const route = useRoute()

const frameClasses = computed(() => {

  if (route.path == '/') {
    return 'bg-red-50'
  } else if (route.path == '/projects') {
    return 'bg-blue-50'
  } else if (route.path == '/about') {
    return 'bg-green-50'
  }
});


</script>

<template>
  <div id="frame" class="min-h-[100.1vh] delay-200 duration-300 overflow-x-hidden max-w-screen transition-colors"
    :class="frameClasses">

    <header>
      <div class="wrapper h-full w-full">
        <MainNav />
      </div>
    </header>

    <Bio />

    <RouterView v-slot="{ Component }" class="">
      <transition appear :name="route.meta.transition">

        <component :is="Component" />
      </transition>

    </RouterView>

    <PageHeading :title="route.name" />

  </div>
</template>