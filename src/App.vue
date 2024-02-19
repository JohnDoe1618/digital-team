/* eslint-disable */
<template>
    <div ref="mainRef" class="main_class">
        <div class="bg-blur-img"></div>
        <swiper 
            ref="swiperRef" 
            @swiper="setSwiper" 
            direction="vertical"
            effect="fade"
            class="swiper swiper-fade"
        >   
            <swiper-slide class="swiper-slide">About team</swiper-slide>
            <swiper-slide class="swiper-slide">Team</swiper-slide>
            <swiper-slide class="swiper-slide">Our products</swiper-slide>
            <swiper-slide class="swiper-slide">More</swiper-slide>
            <swiper-slide class="swiper-slide">Deal</swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onMounted } from "vue";
import "swiper/css";
import "swiper/css/effect-fade"

const swiperRef = ref(null);
const mainRef = ref(null);

const setSwiper = (swiper) => {
    swiperRef.value = swiper
}

function next() {
    swiperRef.value.slideNext();
}

function prev() {
    swiperRef.value.slidePrev();
}

// тупо стандартная дебоунс функция
function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
}

const debouncedNext = debounce(next, 200);
const debouncedPrev = debounce(prev, 200);

onMounted(() => {
    mainRef.value.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            console.log('Событие колеса мыши вниз');
            debouncedNext();
        } else if (event.deltaY < 0) {
            console.log('Событие колеса мыши вверх');
            debouncedPrev();
        }
    });
})


</script>

<style lang="css">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.main_class {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    color: white;
    font-size: 30px;
    padding: 20px;
}

.bg-blur-img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: url(../src/assets/01.jpg);  
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(30px); /* Размытие картинки */

}

.swiper {
    height: 95vh;
    border-radius: 15px;
}

.swiper-slide {
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: black;
    opacity: 0.8;
    backdrop-filter: blur(200px);
    z-index: 2;
    border-radius: 15px;

}

</style>
