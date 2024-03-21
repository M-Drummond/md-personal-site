<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue';
</script>

<script lang="ts">

export default {
  data() {
    return {
      pageHeading: 'Welcome',
    };
  },
};

</script>


<template>
  <PageHeading :title="pageHeading" />
</template>
