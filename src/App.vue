<template>
    <div class="section" @wheel="handleScroll">
        <div style="height: 100vh; overflow-y: scroll;">
            <AboutUsComp v-show="showAboutUsComp" />
            <DevelopersComp v-show="showDevelopersComp" />
            <OurProjectsComp v-show="showOurProjectsComp" />
            <ContactWithUsComp v-show="showContactWithUsComp" />
            <FooterInfoComp v-show="showFooterInfoComp" />
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
</script>

<style lang="css">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
}

.section {
    width: 100%;
    height: 100vh;
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
</style>