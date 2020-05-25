<template>
  <div class="home">
    <h1>Videos</h1>
    <h2>{{myKey}}</h2>

    <div class="video-container">
      <div v-for="video in videos" :key="video.name">
        <router-link :to="{ name: 'video-watch', params: { id: video.id}}">
          <div class="video-box">
            <img :src="video.thumbnail" />
            <div class="video-content">
              <h3>{{ video.name}}</h3>
              <div v-html="video.description"></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      myKey: "hey",
      videos: this.$store.state.videos
    };
  }
};
</script>


<style scoped lang="scss">
.video-container {
  .video-box {
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;

    text-align: left;

    display: flex;
    justify-content: flex-start;
  }
}

img {
  padding-right: 10px;
}
</style>