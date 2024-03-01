<template>
    <PhotoViewer v-if="false"></PhotoViewer>
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
import PhotoViewer from '../comps/dialogs/PhotoViewer.vue';
import ourProjectItemComp from './ourProjects/ourProjectItemComp.vue';
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ApiFirebase from '@/api/database';

onMounted(
    async () => await fetchItems()
)

const api = new ApiFirebase("projects")

const projects = ref([])

async function fetchItems() {
    projects.value = await api.getAllDocuments()
}

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