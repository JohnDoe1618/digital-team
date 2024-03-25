<template>
    <div class="section">
        <!-- <img class="backg" src="../assets/images/3.jpg" alt=""> -->
        <div class="container">
            <swiper
                :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }"
                :navigation="true"
                :modules="[Navigation]"
            >
                <swiper-slide>
                    <AveryDeveloper></AveryDeveloper>
                </swiper-slide>
                <swiper-slide>
                    <LeonhardDeveloper></LeonhardDeveloper>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import AveryDeveloper from '../comps/Developers/AveryDeveloper.vue'
import LeonhardDeveloper from '../comps/Developers/LeonhardDeveloper.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


</script>
<style scoped lang="scss">

/** START
 * @Author: 刁文杰 - Leonhard
 * @Date: 2022-01-12 15:10:12
 * @LastEditTime: 2022-01-12 15:10:12
 * @LastEditors: 刁文杰 - Leonhard
 * @Description: Here swiper styles
*/

/** END
 * @Author: 刁文杰 - Leonhard
 * @Date: 2022-01-12 15:10:12
 * @LastEditTime: 2022-01-12 15:10:12
 * @LastEditors: 刁文杰 - Leonhard
 * @Description: Here swiper styles
*/

.section {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.backg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transform: rotate(180deg);
}

.container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 86px;
    font-family: 'Fira Mono', monospace;
    letter-spacing: -7px;
    z-index: 1;
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