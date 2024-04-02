<template>
    <div class="prose xl:prose-xl mr-0 ml-auto" v-cloak>
        <div v-html="content">

        </div>
    </div>


</template>


<script>
export default {
    props: {
        content: {
            type: String,
            required: true
        }
    }
};
</script>