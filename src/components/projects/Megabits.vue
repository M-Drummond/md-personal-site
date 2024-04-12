<script setup lang="ts">

</script>

<script lang="ts">

</script>

<template>
    <section ref="megabits"
        class="relative flex flex-col items-start justify-center min-h-screen px-8 py-24 font-mono bg-yellow-50"
        id="megabits">

        <div
            class="flex flex-col items-center justify-center w-full border-4 border-current border-double md:py-24 md:flex-row">
            <div class="w-full prose text-black flex-0 ">
                <h2 class="text-3xl font-bold text-black">Megabits Calculator</h2>
                <p>This is a <span class="px-1 text-white bg-black">react</span> app to convert megabits to, and from,
                    megabytes.</p>
                <p>I made this because download managers sometimes don't do this.</p>
                <p class="flex flex-row items-center text-center justify-normal">
                    <a class="inline-block p-4 mt-8 text-black no-underline border border-black border-solid hover:underline"
                        href="https://megabits.netlify.app/">Use it Here</a>
                    <a class="inline-block p-4 mt-8 ml-4 text-black no-underline border border-black border-solid bg-yellow-50 hover:underline"
                        href="https://github.com/M-Drummond/Megabites-Megabytes">View On GitHub</a>
                </p>
            </div>


            <div class="w-full border-black border-solid shadow-base md:w-1/4">
                <img src="/megabits.png" class="block w-full h-full max-w-full" width="100" height="100"
                    alt="screenshot of megabits app" />
            </div>

        </div>
    </section>
</template>
<style scoped></style>
