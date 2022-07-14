<script setup lang="ts">
// import {CjszPlayer} from "../dist/build.es"
import { ref } from "vue"
import CjszPlayer from "./packages/CjszPlayer/index.vue"

const setPlayer = ref({
  download:true,
  // url:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8"
  url:"http://192.168.196.50:9000/default/szyun/video/NO3%20%E5%89%A7%E5%8F%B2%20%E8%B6%8A%E5%89%A7%E3%80%8A%E7%BA%A2%E6%A5%BC%E6%A2%A6%E3%80%8B%E5%A4%A9%E4%B8%8A%E6%8E%89%E4%B8%8B%E4%B8%AA%E6%9E%97%E5%A6%B9%E5%A6%B9%20%E5%BE%90%E7%8E%89%E5%85%B0.%E7%8E%8B%E6%96%87%E5%A8%9F%20.mp4?Content-Disposition=attachment%3B%20filename%3D%22szyun%2Fvideo%2FNO3%20%E5%89%A7%E5%8F%B2%20%E8%B6%8A%E5%89%A7%E3%80%8A%E7%BA%A2%E6%A5%BC%E6%A2%A6%E3%80%8B%E5%A4%A9%E4%B8%8A%E6%8E%89%E4%B8%8B%E4%B8%AA%E6%9E%97%E5%A6%B9%E5%A6%B9%20%E5%BE%90%E7%8E%89%E5%85%B0.%E7%8E%8B%E6%96%87%E5%A8%9F%20.mp4%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ggwh_minio%2F20220713%2F%2Fs3%2Faws4_request&X-Amz-Date=20220713T023412Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=f3a0ef500fe0dca907ab13c203260a51f2785285788c4ca905637902891658b4"
})
</script>

<template>
  <CjszPlayer v-bind="setPlayer"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
