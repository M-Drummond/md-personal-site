<script setup lang="ts">
import PageText from '@/components/PageText.vue' 
</script>

<script lang="ts">



const about = `<p" class="text-lg md:text-2xl"> Long - term lead developer and optimisation expert.</p>

<pclass="text-lg md:text-2xl" > 8 + years in development agencies.</p>

<p  class="text-lg md:text-2xl" >Over a decade of CMS experience, including Shopify, Wordpress and CraftCMS.</p>

<p class="text-md md:text-xl" >
View my <a class="decoration-orange-500 hover:text-white hover:bg-purple-400" href="https://github.com/M-Drummond" > Github </a> or
<a class="hover:bg-orange-500 hover:text-white decoration-purple-400" href= "https://www.linkedin.com/in/mackinley-drummond-4b7ba92b9"> LinkedIn </a>
</p>` ;

</script>


<template>

  <PageText :content="about" />

</template>