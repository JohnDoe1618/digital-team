<template>
    <div class="section">
        <img src="../assets/images/4.jpg" alt="">
        <div class="our-project__container">
            <swiper :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }" :navigation="true" :modules="[Navigation]">
                <swiper-slide v-for="project in projects" :key="project.id">
                    <ourProjectItemComp :project-data="project" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import ourProjectItemComp from './ourProjects/ourProjectItemComp.vue';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = ref([
    {
        id: Date.now(),
        title: 'IDropper',
        description: 'Сервис предоставляющий сотрудникам больниц и поликлинник возможность контролировать работу нового технического устройства IDropper, которое служит для отслеживания состояния капельниц, и является одной из важнейших инновационных разработок в сфере здравоохранения за последнее время. С помощью данной системы управления, сотрудники могут контролировать и регулировать работу технического устройства IDropper.',
        technologies: ['JavaScript', 'Vue3', 'TypeScript', 'Vuetify', 'Webpack'],
        beginDevTime: '20.02.2024',
        endDevTime: 'В разработке',
        images: ['stub-1.jpg', 'stub-1.jpg', 'stub-1.jpg'],
    },
    {
        id: Date.now(),
        title: 'ToDo List',
        description: 'Описание проекта про ToDo list',
        technologies: ['JavaScript', 'React', 'TypeScript', 'Vuetify', 'Webpack'],
        beginDevTime: '12.08.2023',
        endDevTime: '15.08.2023',
        images: ['stub-2.jpg', 'stub-2.jpg', 'stub-2.jpg'],

    }
])

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