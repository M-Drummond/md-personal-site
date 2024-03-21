<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue';
</script>

<script lang="ts">

export default {
  data() {
    return {
      pageHeading: 'About',
    };
  },
};
</script>


<template>
  <div class="about prose xl:prose-xl mr-0 ml-auto">
    
    <transition-group name="fade" mode="out-in">

    <p :key="1" class="text-lg md:text-2xl">Long-term lead developer and optimisation expert.
    </p>

    <p :key="2" class="text-lg md:text-2xl">8+ years in development agencies.
    </p>

    <p :key="3" class="text-lg md:text-2xl">
      Over a decade of CMS experience, including Shopify, Wordpress and CraftCMS.
    </p>

    <p :key="4" class="text-md md:text-xl">
      View my <a href="https://github.com/M-Drummond">Github</a> or <a href="https://www.linkedin.com/in/mackinley-drummond-4b7ba92b9">LinkedIn</a>
    </p>

    </transition-group>

  </div>
  <PageHeading :title="pageHeading" />
</template>

 