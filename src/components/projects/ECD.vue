<script setup lang="ts">

</script>

<script lang="ts">

</script>

<template>
    <section ref="ecd" class="flex flex-col items-start justify-center min-h-screen px-8 py-24 font-roboto" id="ecd"
        style="background-color: rgb(44, 82, 130) ;">

        <div class="flex flex-col items-center justify-center w-full md:flex-row-reverse">
            <div class="w-full prose text-white roboto-slab-500">
                <h2 class="text-3xl font-bold font-black text-white uppercase">ECD Inflatables</h2>
                <p>A super-slim "business card" style website, for my father's small business.</p>
                <p>Completely over-kill with <span class="px-1 text-white bg-black">NuxtJS</span> and a
                    <span class="px-1 text-white bg-black">Github/Netlify</span> build setup.
                </p>
                <p>
                    <a class="inline-block p-4 mt-8 text-blue-900 no-underline uppercase bg-white border border-white border-solid hover:underline"
                        href="https://ecdinflatables.com/">View The Site</a>

                </p>
            </div>


            <div class="w-full h-auto overflow-hidden prose bg-white border-black border-solid max-h-none shadow-base">
                <img src="/ecd.png" alt="screenshot of ecd site" class="mx-auto " />
            </div>

        </div>
    </section>

</template>
<style scoped>
.roboto-slab-500 {
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-style: normal;

}
</style>
