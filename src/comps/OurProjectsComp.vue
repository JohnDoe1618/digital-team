<template>
    <div class="section">
        <img src="../assets/images/4.jpg" alt="">
        <div class="our-project__container">
            <swiper :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }" :navigation="true" :modules="[Navigation]">
                <swiper-slide>
                    <div class="slide"></div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide"></div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

</script>
<style scoped>
.section {
    position: relative;
    width: 100vw;
    height: 100vh;
}

img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transform: rotate(180deg);
}
.our-project__container {
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid white;
}

.slide{
    width: 450px;
    height: 500px;
    border: 1px solid white;
}
.swiper {
    position: relative;
    width: 85%;
    height: 100%;
}

.swiper-slide {
    position: relative;
    font-size: 18px;
    box-sizing: border-box;
    padding: 40px 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>