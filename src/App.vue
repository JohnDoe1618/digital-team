<template>
    <div class="section" @wheel="handleScroll">
        <div class="header">
            <h4>
                DA .inc
            </h4>

            <div class="navigation-links">
                <div class="nav-link-about nav-link" @click="changePage(0)">About</div>
                <div class="nav-link-about nav-link" @click="changePage(1)">Developers</div>
                <div class="nav-link-about nav-link" @click="changePage(2)">Projects</div>
                <div class="nav-link-about nav-link" @click="changePage(3)">Contact</div>
                <div class="nav-link-about nav-link" @click="changePage(4)">Info</div>
            </div>
        </div>

        <div style="height: 100vh; overflow-y: scroll;">
            <transition>
                <AboutUsComp v-if="showAboutUsComp" />
            </transition>

            <transition>
                <DevelopersComp v-if="showDevelopersComp" />
            </transition>

            <transition>
                <OurProjectsComp v-if="showOurProjectsComp" />
            </transition>

            <transition>
                <ContactWithUsComp v-if="showContactWithUsComp" />
            </transition>

            <transition>
                <FooterInfoComp v-if="showFooterInfoComp" />
            </transition>
            
        </div>

        <div class="navigation-panel-left">
            <div class="dots">
                <div class="dot" :style="showAboutUsComp ? {'background-color': 'rgb(0, 195, 255)'} : null"></div>
                <div class="dot" :style="showDevelopersComp ? {'background-color': 'rgb(0, 195, 255)'} : null"></div>
                <div class="dot" :style="showOurProjectsComp ? {'background-color': 'rgb(0, 195, 255)'} : null"></div>
                <div class="dot" :style="showContactWithUsComp ? {'background-color': 'rgb(0, 195, 255)'} : null"></div>
                <div class="dot" :style="showFooterInfoComp ? {'background-color': 'rgb(0, 195, 255)'} : null"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// import all components from folder of comps

import AboutUsComp from './comps/AboutUsComp.vue';
import DevelopersComp from './comps/DevelopersComp.vue';
import OurProjectsComp from './comps/OurProjectsComp.vue';
import ContactWithUsComp from './comps/ContactWithUsComp.vue';
import FooterInfoComp from './comps/FooterInfoComp.vue';


const showAboutUsComp = ref(true);
const showDevelopersComp = ref(false);
const showOurProjectsComp = ref(false);
const showContactWithUsComp = ref(false);
const showFooterInfoComp = ref(false);

const handleScroll = (e) => {
    if (e.deltaY > 0) {
        // Scroll down
        console.debug('Scroll down')
        if (showAboutUsComp.value) {
            showAboutUsComp.value = false;
            showDevelopersComp.value = true;
        } else if (showDevelopersComp.value) {
            showDevelopersComp.value = false;
            showOurProjectsComp.value = true;
        } else if (showOurProjectsComp.value) {
            showOurProjectsComp.value = false;
            showContactWithUsComp.value = true;
        } else if (showContactWithUsComp.value) {
            showContactWithUsComp.value = false;
            showFooterInfoComp.value = true;
        }
    } else {
        // Scroll up
        console.debug('Scroll up')
        if (showFooterInfoComp.value) {
            showFooterInfoComp.value = false;
            showContactWithUsComp.value = true;
        } else if (showContactWithUsComp.value) {
            showContactWithUsComp.value = false;
            showOurProjectsComp.value = true;
        } else if (showOurProjectsComp.value) {
            showOurProjectsComp.value = false;
            showDevelopersComp.value = true;
        } else if (showDevelopersComp.value) {
            showDevelopersComp.value = false;
            showAboutUsComp.value = true;
        }
    }
};

function changePage(number) {
    if(number === 0) {
        showAboutUsComp.value = true;
        showDevelopersComp.value = false;
        showOurProjectsComp.value = false;
        showContactWithUsComp.value = false;
        showFooterInfoComp.value = false;
    }
    if(number === 1) {
        showAboutUsComp.value = false;
        showDevelopersComp.value = true;
        showOurProjectsComp.value = false;
        showContactWithUsComp.value = false;
        showFooterInfoComp.value = false;
    }
    if(number === 2) {
        showAboutUsComp.value = false;
        showDevelopersComp.value = false;
        showOurProjectsComp.value = true;
        showContactWithUsComp.value = false;
        showFooterInfoComp.value = false;
    }
    if(number === 3) {
        showAboutUsComp.value = false;
        showDevelopersComp.value = false;
        showOurProjectsComp.value = false;
        showContactWithUsComp.value = true;
        showFooterInfoComp.value = false;
    }
    if(number === 4) {
        showAboutUsComp.value = false;
        showDevelopersComp.value = false;
        showOurProjectsComp.value = false;
        showContactWithUsComp.value = false;
        showFooterInfoComp.value = true;
    }
}
</script>

<style lang="css">
#app {
    background-color: black;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
}

.section {
    position: relative;
    width: 100%;
    height: 100vh;
}

.header {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 35px;
    text-align: center;
    color: white;
    padding: 20px 100px;
    font-weight: bold;
    display: flex;
    z-index: 2;
}

.navigation-links {
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    z-index: 2;
}

.navigation-links .nav-link {
    font-size: 18px;
    color: rgb(255, 255, 255);
    border-radius: 5px;
}

.navigation-links .nav-link:hover {
    color: rgb(0, 195, 255);
    cursor: pointer;
}

.navigation-panel-left {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dots {
    width: 80%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
    z-index: 2;
}

.dots .dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    margin-top: 25px;
}

.dots .dot:hover {
    transition: .3s;
    background-color: rgb(0, 238, 255);
}

/* Стили для скрытия скроллбаров */
::-webkit-scrollbar {
    width: 0;
    height: 0;
}

/* Дополнительные стили для стилизации скроллбаров в браузерах WebKit (Chrome, Safari) */
::-webkit-scrollbar-track {
    background: transparent; /* Цвет фона трека */
}

::-webkit-scrollbar-thumb {
    background: transparent; /* Цвет ползунка */
}

::-webkit-scrollbar-thumb:hover {
    background: transparent; /* Цвет ползунка при наведении */
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: .0;
}
</style>