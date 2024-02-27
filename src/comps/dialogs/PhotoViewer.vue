<template>
<div class="main-class-view-photo-window">
        <div class="wrap-wrapper-cont">
            <div class="wrapper-continer">

                <swiper
                    class="top-swiper"
                    :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }"
                    :navigation="true"
                    :modules="[Navigation]"
                    :space-between="10"
                >
                    <swiper-slide class="slide" v-for="index of photos" :key="index">
                        <img :src="index.img_url"/>
                    </swiper-slide>
                </swiper>

            </div>
        </div>
        
        <!-- <div class="animator-target" @mouseover="() => {this.showBottomSlider = true}">
            <div class="title-targer">
                <span>swipe</span>
                <i class="fi fi-bs-angle-double-small-down"></i>
            </div>
            <transition name="bottom-slide">
                <div class="list-images" @mouseleave="() => {this.showBottomSlider = false}" v-show="showBottomSlider">

                    <swiper
                    class="thumbs-swiper"
                    :modules="[Navigation, Thumbs]"
                    :space-between="10"
                    :slides-per-view="4"
                    :watch-slides-progress="true"
                    :prevent-clicks="false"
                    :prevent-clicks-propagation="false"
                    @swiper="setThumbsSwiper"
                    >
                        <swiper-slide class="slide" v-for="index in arrayListImages" :key="index">
                            <img :src="index.img_url"/>
                        </swiper-slide>
                    </swiper>

                </div>
            </transition>
        </div> -->

    </div>
</template>
<script setup>
// import { defineProps } from 'vue'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// const showBottomSlider = ref(false)


// const thumbsSwiper = ref()
// const setThumbsSwiper = (swiper) => {
//     thumbsSwiper.value = swiper
// }

const photos = ref([
    {
        img_url: 'https://firebasestorage.googleapis.com/v0/b/profile-2f601.appspot.com/o/projects%2Fwallpaperflare.com_wallpaper%20(16).jpg?alt=media&token=c4e63d9b-673c-45c0-9e02-9d34643e1117'
    },
    {
        img_url: 'https://firebasestorage.googleapis.com/v0/b/profile-2f601.appspot.com/o/projects%2Fwallpaperflare.com_wallpaper%20(16).jpg?alt=media&token=c4e63d9b-673c-45c0-9e02-9d34643e1117'
    },
    {
        img_url: 'https://firebasestorage.googleapis.com/v0/b/profile-2f601.appspot.com/o/projects%2Fwallpaperflare.com_wallpaper%20(16).jpg?alt=media&token=c4e63d9b-673c-45c0-9e02-9d34643e1117'
    },
    {
        img_url: 'https://firebasestorage.googleapis.com/v0/b/profile-2f601.appspot.com/o/projects%2Fwallpaperflare.com_wallpaper%20(13).jpg?alt=media&token=2a4608a9-12ef-4ed0-bd2f-a86a42853b4e'
    },
])

// const props = defineProps({
//     photos: {
//         type: Array,
//         required: true
//     }
// })

</script>

<style lang="scss" scoped>
.top-swiper,
.thumbs-swiper {
    .slide {
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        // image-rendering: pixelated;
      }
    }
  }

  .top-swiper {
    height: 90%;
    width: 100%;
  }

  .thumbs-swiper {
    height: 100%;
    box-sizing: border-box;
    // padding: $gap 0;

    .slide {
      width: 25%;
      height: 100%;
      opacity: 1;
      &:not(.swiper-slide-thumb-active) {
        opacity: 0.4;
      }
    }
  }


.main-class-view-photo-window {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 1);
    margin: 0;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    display: flex;
    flex-direction: column;

    .animator-target {
        position: absolute;
        width: 100%;
        height: 20%;
        // background-color: black;
        z-index: 13;
        bottom: 0;

        .title-targer
        {
            position: absolute;
            margin: 0;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -10%);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 22px;

        }
        .list-images {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
        }
    }


    .btn-container {
        position: absolute;
        margin-left: auto;
        color: white;
        // background-color: red;
        right: 0;
        font-size: 12px;
        margin-right: 10px;
        margin-top: 10px;
        z-index: 15;

        &:hover {
            cursor: pointer;
            opacity: .7;
        }

        i {

            &:hover {
            }
        }

    }
    .wrap-wrapper-cont {
        width: 100%;
        height: 100%;
        z-index: 4;
        display: flex;
        align-items: center;
        justify-content: center;


        .wrapper-continer {
            width: 80%;
            height: 95%;
            background-color: rgba($color: #000000, $alpha: 1);

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

}
</style>