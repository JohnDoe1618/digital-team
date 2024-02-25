<template>
    <div class="section">
        <img src="../assets/images/4.jpg" alt="">
        <div class="our-project__container">
            <swiper :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }" :navigation="true" :modules="[Navigation]">
                <swiper-slide>
                    <div class="project-container">

                        <!-- Блок Информации о проекте -->
                        <div class="project-container__info-block">

                            <!-- Название проекта -->
                            <div class="info-block__title-block">
                                <h1 class="info-block__title-block--title">IDropper</h1>
                            </div>

                            <!-- Описание проекта -->
                            <div 
                            class="info-block__descrition-block">
                                <p>
                                    Сервис предоставляющий сотрудникам больниц и поликлинник возможность контролировать работу нового технического устройства IDropper, которое 
                                    служит для отслеживания состояния капельниц, и является одной из важнейших инновационных разработок в сфере здравоохранения за последнее время.
                                    С помощью данной системы управления, сотрудники могут контролировать и регулировать работу технического устройства IDropper.              
                                         
                                </p>
                            </div>

                            <div class="info-block__tech-block">
                                
                            </div>
                        </div>

                        <!-- Блок отрисовки превью картинок -->
                        <div class="project-container__preview-block">
                            <swiper 
                            :navigation="{prevEl: '#prev-btn', nextEl: '#next-btn'}" 
                            @_slide-class="(e) => updatePagination(e.activeIndex)"
                            :modules="[Navigation]"
                            direction="vertical">

                                <swiper-slide>
                                    <img class="preview-block__image" src="../assets/images/stub/stub-1.jpg" alt="stub-1">
                                </swiper-slide>

                                <swiper-slide>
                                    <!-- <div class="preview-block__wrapper">
                                    </div> -->
                                    <img class="preview-block__image" src="../assets/images/stub/stub-1.jpg" alt="stub-1">
                                </swiper-slide>
                            </swiper>
                            <!-- <v-btn id="prev-btn">Prev</v-btn>
                            <v-btn id="next-btn">Next</v-btn> -->
                            <div class="preview-block__pagination">
                                <div class="pagination-dots" :style="(currentSlide === 0)? {backgroundColor: 'rgb(0, 195, 255)'} : {}"></div>
                                <div class="pagination-dots" :style="(currentSlide === 1)? {backgroundColor: 'rgb(0, 195, 255)'} : {}"></div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="project-container"></div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const currentSlide = ref(0);

function updatePagination(indexSlide) {
    currentSlide.value = indexSlide;
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
    border: 1px solid white;
}
.info-block__title-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: max-content;
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
    height: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;

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
    margin: auto;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
}
.preview-block__pagination {
    position: absolute;
    align-self: center;
    right: 10px;
    width: max-content;
    height: max-content;
    z-index: 20;
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
.pagination-dots + .pagination-dots {
    margin-top: 10px;
}
.preview-block__wrapper {
    position: relative;
    width: 100%;
    height: 80%;
    padding: 10rem;
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid white;

}

.preview-block__image {
    object-fit: contain;
    height: 100%;
    rotate: 180deg;
}

/* rgba(0, 0, 0, 0.7) */
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