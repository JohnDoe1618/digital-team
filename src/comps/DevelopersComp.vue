<template>
    <div class="section">
        <img class="backg" src="../assets/images/3.jpg" alt="">
        <div class="container">

            <div class="inner-container">

                <div class="info-block">
                    <div class="title">
                        <h1>Avery Vladislav</h1>
                    </div>

                    <div class="citate">
                        <h5>
                            Здравствуйте! Я - Full Stack Developer, специализирующийся на создании высококачественных
                            программ и веб-сайтов. Могу воплотить ваши идеи в жизнь, используя передовые технологии, такие
                            как Vue.js, JavaScript, TypeScript, Python и Adonis.js. Обладаю опытом работы как с frontend
                            (Vue, JS, TS), так и с backend (Python, Adonis), что позволяет мне создавать мощные и
                            инновационные проекты с нуля. Доверьте мне вашу задачу, и я с удовольствием превращу ее в
                            успешный продукт, сочетающий в себе функциональность, качество и элегантный дизайн
                        </h5>
                    </div>

                    <div class="buttons">
                        <div class="button">Обратиться</div>
                        <div class="button">Telegram</div>
                    </div>
                </div>

                <div id="profile-block" class="profile-block" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                    <img id="profile-avatar-developer" class="profile-avatar-developer"
                        src="../assets/developers/smiling-young-man-with-crossed-arms-outdoors (1)-fotor-bg-remover-20240223194416.png"
                        alt="">

                    <div v-show="true" id="detail-info" class="detail-info">
                        <div class="abstract-block">
                            <div class="ab-title">Навыки / технологии</div>
                            <div class="sub-ab-block">
                                <div class="card-skills">
                                    <div class="badge">Vue v3</div>
                                    <div class="badge">Vue v2</div>
                                    <div class="badge">Nuxt3</div>
                                    <div class="badge">Adonis</div>
                                    <div class="badge">Fast Api</div>
                                    <div class="badge">Typescript</div>
                                    <div class="badge">Postgresql</div>
                                    <div class="badge">RabbitMQ</div>
                                    <div class="badge">Redis</div>
                                    <div class="badge">Python</div>
                                    <div class="badge">Linux</div>
                                    <div class="badge">Java script</div>
                                    <div class="badge">Assambler</div>
                                    <div class="badge">OOP</div>
                                    <div class="badge">MySql</div>
                                    <div class="badge">Sqlite</div>
                                    <div class="badge">Mongodb</div>
                                    <div class="badge">Express</div>
                                </div>
                            </div>

                        </div>

                        <div class="abstract-block">
                            <div class="ab-title">Репозитори / Проекты / Отзывы</div>
                            <div class="sub-ab-block">
                                <div class="xxx-info-block">
                                    <div class="start-block">
                                        <div class="start-block-title">Репозитории</div>
                                        <div class="subtitle">124</div>

                                    </div>
                                    <div class="middle-block">
                                        <div class="middle-block-title">Проекты</div>
                                        <div class="subtitle">34</div>

                                    </div>
                                    <div class="end-block">
                                        <div class="end-block-title">Отзывы</div>
                                        <div class="subtitle">21</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- <div class="links">
                            
                                github link - 
                        </div> -->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';

function handleMouseEnter() {
    gsap.to('#detail-info', { duration: 0.4, bottom: 0 });
}

function handleMouseLeave() {
    gsap.to('#detail-info', { duration: 0.4, bottom: '-100vh' });
}


</script>
<style scoped lang="scss">
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

.inner-container {
    width: 80%;
    height: 80%;
    background-color: rgba($color: #111111, $alpha: .7);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-block {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.info-block .title {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-block .title h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 45px;
    font-family: 'Fira Mono', monospace;
    letter-spacing: 0px;
    margin-right: auto;
}

.info-block .citate {
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.buttons {
    margin-top: 40px;
    position: relative;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 15px;
    letter-spacing: 0px;
}

.buttons .button {
    border: 1px solid #ffffff;
    padding: 10px 20px;
}

.buttons .button:last-child {
    margin-left: 20px;
}

.buttons .button:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    cursor: pointer;
}

.info-block .citate h5 {
    margin-top: 30px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 15px;
    letter-spacing: 0px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.profile-block {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: #000000, $alpha: .7);
    border-radius: 10px;
    overflow: auto;
}

.detail-info {
    position: absolute;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    z-index: 0;
    bottom: -100vh;
    background-color: rgba($color: #080808, $alpha: .9);
    padding: 20px;
}

.profile-avatar-developer {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.abstract-block {
    position: relative;
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.ab-title {
    font-size: 15px;
    letter-spacing: 0px;
}

.sub-ab-block {
    font-size: 14px;
    letter-spacing: 0px;
    width: 100%;
    height: 100%;
    padding: 20px;
}

// .links {
//     padding: 20px;
//     margin-top: 10px;
//     width: 100%;
//     height: fit-content;
//     display: flex;
//     font-size: 15px;
//     letter-spacing: 0px;
// }

.xxx-info-block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}

.xxx-info-block .subtitle {
    font-size: 20px;
    letter-spacing: 0px;
    margin-top: 10px;
}

.start-block {
    width: 32%;
    height: 100%;
    background-color: #131313;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
}

.start-block-title {}

.middle-block {
    width: 32%;
    height: 100%;
    background-color: #131313;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;

}

.middle-block-title {}

.end-block {
    width: 32%;
    height: 100%;
    background-color: #131313;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;

}

.end-block-title {}

.card-skills {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 10px;
}

.card-skills .badge {
    margin-left: 10px;
    width: fit-content;
    height: fit-content;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    letter-spacing: 0px;
    color: #ffffff;
    background-color: #131313;
    border-radius: 10px;
}
</style>