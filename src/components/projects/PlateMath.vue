<script setup lang="ts">

</script>

<script lang="ts">

</script>

<template>
    <section class=" border-y-orange-400 border-y-8 font-manrope bg-slate-800" ref="platemath" id="platemath">
        <div class="flex flex-col items-start justify-center border-teal-700 border-y-8 px-8 py-24  min-h-[80vh]">
            <div
                class="flex flex-col-reverse items-center justify-center w-full px-4 mx-auto xl:max-w-screen-xl md:px-0 md:flex-row ">
                <div class="w-full prose text-orange-400 border-black md:order-r-8 ">
                    <h2 class="text-3xl uppercase text-inherit">Plate Math</h2>
                    <p>Barbell calculator, programmed in <span class="px-1 text-black bg-orange-400">Vue</span></p>
                    <p>Adding 20 and 20 is now a little easier. Designed for phone use, it includes a dark theme and a
                        left/right handed switch. </p>


                    <p
                        class="flex flex-col items-center space-y-4 text-sm text-center md:flex-row md:text-base md:space-x-4 md:space-y-0 justify-normal">
                        <a class="w-full p-4 font-bold text-teal-700 no-underline bg-orange-400 border border-orange-400 hover:text-orange-400 hover:bg-teal-700 hover:underline font-boldd"
                            href="https://beatsmachine.netlify.app/">Use it Here</a>
                        <a class="w-full p-4 font-bold text-orange-400 no-underline border border-white hover:bg-black hover:underline font-boldd"
                            href="https://github.com/M-Drummond/beatmachine">View On github</a>
                    </p>


                </div>


                <div class="w-full h-auto overflow-hidden prose max-h-none">
                    <img src="/platemath.png" alt="screenshot of platemath site"
                        class="px-2 mx-auto border border-orange-500 border-solid shadow-base" />
                </div>

            </div>
        </div>
    </section>
</template>
<style scoped></style>
