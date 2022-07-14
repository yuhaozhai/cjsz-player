<template>
	<div id="vs"></div>
</template>
<script setup lang="ts">
import HlsJsPlayer from "xgplayer-hls";
// import Player from "xgplayer";
// import "../../../assets/xgplayer/.xgplayer/skin/index"
import Player from "../../../assets/xgplayer/.xgplayer/skin/index";
import play from "../../../assets/xgplayer/.xgplayer/skin/controls/play";
import fullscreen from "../../../assets/xgplayer/.xgplayer/skin/controls/fullscreen";
import progress from "../../../assets/xgplayer/.xgplayer/skin/controls/progress";
import volume from "../../../assets/xgplayer/.xgplayer/skin/controls/volume";
import pip from "../../../assets/xgplayer/.xgplayer/skin/controls/pip";
import flex from "../../../assets/xgplayer/.xgplayer/skin/controls/flex";
import download from "../../../assets/xgplayer/.xgplayer/skin/controls/download";
import screenShot from "../../../assets/xgplayer/.xgplayer/skin/controls/screenShot";
import cssFullscreen from "../../../assets/xgplayer/.xgplayer/skin/controls/cssFullscreen";
import playbackRate from "../../../assets/xgplayer/.xgplayer/skin/controls/playbackRate";
import {removeClass} from "xgplayer/src/utils/util"
// import play from "xgplayer/dist/controls/play";
// import fullscreen from "xgplayer/dist/controls/fullscreen";
// import progress from "xgplayer/dist/controls/progress";
// import volume from "xgplayer/dist/controls/volume";
// import pip from "xgplayer/dist/controls/pip";
// import flex from "xgplayer/dist/controls/flex";
// import download from "xgplayer/dist/controls/download";
// import screenShot from "xgplayer/dist/controls/screenShot";
// import cssFullscreen from "xgplayer/dist/controls/cssFullscreen";
// import playbackRate from "xgplayer/dist/controls/playbackRate";
// import "xgplayer/src/skin/index.js";
import { onMounted, toRaw, onBeforeMount } from "vue";

const props = defineProps({
	// id: {
	// 	type: String,
	// 	default: "vs",
	// },
	height: {
		type: Number,
		default: 337.5,
	},
	width: {
		type: Number,
		default: 600,
	},
	controlPlugins: {
		type: Array,
		// , progress, volume, pip, flex, download, screenShot, cssFullscreen, playbackRate, fullscreen
		default: [],
	},
	autoplay: {
		type: Boolean,
		default: false,
	},
	videoInit: {
		type: Boolean,
		default: true,
	},
	screenShot: {
		type: Object,
		default: {
			saveImg: false,
			quality: 0.92,
			type: "image/png",
			format: ".png",
		},
	},
	download: {
		type: Boolean,
		default: false,
	},
	cssFullscreen: {
		type: Boolean,
		default: false,
	},
	// rotateFullscreen: {
	// 	type: Boolean,
	// 	default: true,
	// },
	// rotate:{
	//   type:Object,
	//   default:()=>{return {   //视频旋转按钮配置项
	//       innerRotate: false, //只旋转内部video
	//       clockwise: false // 旋转方向是否为顺时针
	//   }}
	// },
	url: {
		type: String,
		default: "",
	},
	poster: {
		type: String,
		default: "",
	},
	playbackRate: {
		type: Array,
		default: [0.5, 0.75, 1, 1.5, 2],
	},
	progressDot: {
		type: Array,
		default: [
			// {
			// 	time: 10, //展示标记的时间
			// 	text: "标记文字", //鼠标hover在标记时展示的文字
			// 	duration: 8, //标记段长度（以时长计算）
			// 	style: {
			// 		//标记样式
			// 		background: "blue",
			// 	},
			// },
			// {
			// 	time: 22,
			// 	text: "标记文字",
			// },
			// {
			// 	time: 56,
			// 	duration: 8,
			// },
			// {
			// 	time: 76,
			// },
		],
	},
});
const defalutConfig = {
	id: "vs",
	lang: "zh-cn",
	screenShot: {
		saveImg: true,
		quality: 0.92,
		type: "image/png",
		format: ".png",
	},
};

onMounted(() => {
	let format = props.url.substring(props.url.lastIndexOf(".") + 1).toLowerCase();
	let config: any = Object.assign({}, toRaw(props), defalutConfig);
	let player;
	if (format && format === "m3u8") {
		player = new HlsJsPlayer(config);
	} else {
		player = new Player(config);
	}
	player.once('ready',()=>{
		// console.log(document.getElementsByClassName("xgplayer-skin-xg-player"));
		removeClass(document.getElementsByClassName("xgplayer-skin-xg-player")[0],"xgplayer-skin-default")
	})
});
</script>
<style lang="scss"></style>
