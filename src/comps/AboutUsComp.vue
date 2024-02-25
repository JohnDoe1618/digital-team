<template>
    <div class="section">
        <img class="backg" src="../assets/images/1.jpg" alt="">

        <div class="main-container">
            <!-- <div class="glitch" title="Digital Artifact .inc">Digital Artifact .inc</div> -->
            <div class="subtitle" title="" style="margin-top: 20px;">Решения высокого качества для вашего успеха</div>

            <div class="about-text">
                Добро пожаловать! Мы команда талантливых разработчиков, специализирующихся на создании превосходного
                программного обеспечения. Мы разрабатываем веб-сайты, мобильные приложения, CLI программы и административные
                панели на различных языках программирования. Доверьте нам ваш проект, и мы превратим вашу идею в реальность
                с помощью инновационных технологий и высокого профессионализма.
            </div>

            <!-- Модальное окно сделки блиать -->
            <v-dialog v-model="dialogDeal">
                <aboutUsDealComp />
            </v-dialog>

            <div class="button-container">
                <div class="button" @click="dialogDeal = true">
                    <h3>Заключить сделку</h3>
                </div>
                <div class="button">
                    <img src="../assets/icons/github.png" class="icon-github" alt="">
                    <a href="https://github.com/JohnDoe1618/" style="text-decoration: none;">
                        <h3 style="margin-left: 20px;">Открыть исходники на GITHUB</h3>
                    </a>
                    <!-- Here was icon github -->
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import aboutUsDealComp from '@/comps/aboutUsDeal/aboutUsDealComp';
import { ref } from 'vue';
const dialogDeal = ref(false);

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400');

.section {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
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

.main-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 86px;
    font-family: 'Fira Mono', monospace;
    letter-spacing: -7px;
    z-index: 1;
    background-color: rgba($color: #000000, $alpha: .2);
}

.button-container {
    display: flex;
    align-items: center;
    width: 50%;
    height: 10%;
    font-size: 15px;
    letter-spacing: 0px;
    font-weight: 900;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.button {
    border-radius: 10px;
    position: relative;
    padding: 10px 25px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.icon-github {
    width: 30px;
    height: 30px;
}

.button:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    border: 1px solid #000;
    transition: all 0.3s ease;
}

.button a {
    color: white;
}

.button a:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:last-child {
    margin-left: 70px;
}

.about-text {
    width: 60%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
    letter-spacing: 3px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.subtitle {
    font-size: 30px;
    color: white;
    letter-spacing: -2px;
}

/* Здесь анимация тайтла в виде глитч эффекта, спасибо автору Piotr Galor https://freefrontend.com/css-text-glitch-effects/ */
.glitch {
    animation: glitch 1s linear infinite;
}

@keyframes glitch {

    2%,
    64% {
        transform: translate(2px, 0) skew(0deg);
    }

    4%,
    60% {
        transform: translate(-2px, 0) skew(0deg);
    }

    62% {
        transform: translate(0, 0) skew(5deg);
    }
}

div:before,
div:after {
    content: attr(title);
    position: absolute;
    left: 0;
}

div:before {
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {

    2%,
    64% {
        transform: translate(2px, -2px);
    }

    4%,
    60% {
        transform: translate(-2px, 2px);
    }

    62% {
        transform: translate(13px, -1px) skew(-13deg);
    }
}

div:after {
    animation: glitchBotom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {

    2%,
    64% {
        transform: translate(-2px, 0);
    }

    4%,
    60% {
        transform: translate(-2px, 0);
    }

    62% {
        transform: translate(-22px, 5px) skew(21deg);
    }
}
</style>