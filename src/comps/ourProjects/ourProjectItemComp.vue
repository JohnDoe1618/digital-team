<template>
    <div class="project-container">

        <!-- Блок Информации о проекте -->
        <div class="project-container__info-block">

            <!-- Название проекта -->
            <div class="info-block__title-block">
                <h1 class="info-block__title-block--title">{{ props.projectData?.title }}</h1>
            </div>

            <!-- Описание проекта -->
            <div class="info-block__descrition-block">
                <p>
                    {{ props.projectData?.description }}
                </p>
            </div>

            <!-- Используемые технологии в проекте -->
            <div class="info-block__tech-block">
                <!-- Заголовок -->
                <h2 class="tech-block__title">Используемые технологии</h2>
                <!-- Используемые технологии -->
                <div class="tech-block__items">
                    <v-chip :density="'comfortable'" color="white" v-for="(item, index) in techItems" :key="index">
                        {{ item }}
                    </v-chip>
                </div>
            </div>

            <!-- Время разработки проекта  -->
            <div class="info-block__time-block">
                <!-- Заголовок -->
                <h2 class="time-block__title">Время разработки проекта</h2>
                <!-- Время разработки проекта -->
                <div class="time-block__body">
                    <p>Дата начала: <span class="input-time">{{ props.projectData?.beginDevTime }}</span></p>
                    <p>Дата выпуска: <span class="output-time">{{ props.projectData?.endDevTime }}</span></p>
                </div>
            </div>

        </div>

        <!-- Блок отрисовки превью картинок -->
        <div class="project-container__preview-block">
            <!-- Слайдер для превью-картинок проекта -->
            <swiper :navigation="{ prevEl: '#prev-btn', nextEl: '#next-btn' }"
                @_slide-class="(e) => updatePagination(e.activeIndex)" :modules="[Navigation]" direction="vertical">

                <swiper-slide v-for="(image, index) in props.projectData?.images" :key="index">
                    <img class="preview-block__image" :src="require(`../../assets/images/stub/${image}`)" alt="project-preview-image">
                </swiper-slide>

            </swiper>

            <!-- Блок пагинации превью-картинок  -->
            <div class="preview-block__pagination">
                <v-icon id="prev-btn" class="mb-2 pagination-arrow" style="cursor: pointer;" icon="mdi-arrow-up"
                    size="20"></v-icon>

                <div 
                class="pagination-dots"
                v-for="(image, index) in props.projectData?.images" :key="index"
                :style="(currentSlide === index) ? { backgroundColor: 'rgb(0, 195, 255)' } : {}"
                ></div>

                <v-icon id="next-btn" class="mt-2 pagination-arrow" style="cursor: pointer;" icon="mdi-arrow-down"
                    size="20"></v-icon>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const props = defineProps({
    projectData: {
        type: Object
    }
});

const currentSlide = ref(0);
const techItems = ref(['JavaScript', 'Vue3', 'TypeScript', 'Vuetify', 'Webpack'])

function updatePagination(indexSlide) {
    currentSlide.value = indexSlide;
}
</script>

<style scoped>

.project-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
    background-color: rgba(17, 17, 17, 0.7);
}

.project-container__info-block {
    width: 50%;
    height: 100%;
    padding: 2rem 3rem;
}

.info-block__title-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
}

.info-block__title-block--title {
    color: white;
}

.info-block__descrition-block {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
    overflow: hidden;
    height: 45%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;

}

.info-block__tech-block {
    height: 20%;
    margin-top: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    padding: 1rem;
}

.tech-block__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: white;
    font-weight: 300;
    font-size: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.tech-block__items {
    width: 100%;
    padding: 0.5rem 0;
    height: max-content;
}

.info-block__time-block {
    margin-top: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    padding: 1rem;
}

.time-block__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: white;
    font-weight: 300;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.time-block__body {
    margin-top: 0.4rem;
    display: flex;
    justify-content: space-evenly;
    color: white;
    font-size: 12px;
}

.input-time {
    color: aquamarine;
    font-style: italic;
}

.output-time {
    color: rgb(249, 255, 127);
    font-style: italic;
}

.info-block__descrition-block p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
    overflow: hidden;
    font-weight: bold;
    font-size: 15px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.project-container__preview-block {
    position: relative;
    display: flex;
    justify-content: center;
    width: 45%;
    height: 95%;
    padding: 2.4rem;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
}

.preview-block__pagination {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    right: 10px;
    width: max-content;
    height: max-content;
    z-index: 20;

}

.pagination-arrow {
    color: white;
    transition: color 0.4s ease;
}

.pagination-arrow:hover {
    color: rgb(130, 130, 130);
    transition: color 0.4s ease;
}

.pagination-dots {
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.4s ease;
}

.pagination-dots:hover {
    background-color: rgb(163, 163, 163);
    transition: background-color 0.4s ease;
}

.pagination-dots+.pagination-dots {
    margin-top: 10px;
}

.preview-block__image {
    width: 100%;
    height: 100%;
    z-index: 0;
    transform: rotate(180deg);
    object-fit: contain;
    height: 100%;
    rotate: 180deg;
}

</style>