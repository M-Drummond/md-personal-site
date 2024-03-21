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
};
</script>


<template>
<PageHeading :title="pageHeading" />
  <p class="bottom-0 absolute md:left-10 font-bold">(Scroll Down!)</p>

  <div class="min-h-[80vh] mt-[70vh]">

    <div class="h-screen bg-gray-200">

    </div>

    <div class="h-screen bg-gray-100">
        
    </div>

    <div class="h-screen bg-gray-300">
        
    </div>

  </div>


</template>

<style scoped>
@media only screen and (max-width: 767px) {
  .prose {
    padding: 3rem 2rem;
    overflow-y: scroll;
    max-height: 75vh;
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
</style>