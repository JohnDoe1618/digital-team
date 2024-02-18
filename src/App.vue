/* eslint-disable */
<template>
    <Swiper ref="swiperRef" :options="swiperOptions" @swiper="setThumbsSwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
    <div style="width: 100px; height: 100px; background-color: red;" @click="triger_"></div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/css";
const swiperOptions = {
    loop: true,
    autoplay: {
        delay: 5000,
    },
}

const swiperRef = ref(null);

const setThumbsSwiper = (swiper) => {
    swiperRef.value = swiper
}

function triger_() {
    console.log("swiperRef.value", swiperRef.value)
    swiperRef.value.slideNext();
}

</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
