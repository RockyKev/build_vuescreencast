<template>
    <div>
        <h1> {{ video.name }}</h1>
        <!-- <h2>{{this.$route.params.id}}</h2> -->
        <div v-html="video.description"></div>
        <img :src="video.thumbnail">
    </div>
</template>

<script>
export default {
    computed: {
        video() {
            return this.$store.state.videos.find(vid => vid.id == this.$route.params.id)
        }
    },
}
</script>

<style>
    img {
        max-width: 50%;
    }

</style>