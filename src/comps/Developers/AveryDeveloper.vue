<template>
    <div class="inner-container_">
        <div class="info-block">
            <div class="title">
                <h1>{{ user.name }}</h1>
            </div>

            <div class="citate">
                <h5>
                    {{ user.title }}
                </h5>
            </div>

            <div class="buttons">
                <div class="button">Обратиться</div>
                <div class="button">Telegram</div>
            </div>
        </div>

        <div id="profile-block" class="profile-block" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <img id="profile-avatar-developer" class="profile-avatar-developer"
                src="../../assets/developers/smiling-young-man-with-crossed-arms-outdoors (1)-fotor-bg-remover-20240223194416.png"
                alt="">

            <div v-show="true" id="detail-info" class="detail-info">
                <div class="abstract-block">
                    <div class="ab-title">Навыки / технологии</div>
                    <div class="sub-ab-block">
                        <div class="card-skills">
                            <div class="badge"  v-for="skill of skills" :key="skill.id">{{ skill.name }}</div>
                        </div>
                    </div>

                </div>

                <div class="abstract-block">
                    <div class="ab-title">Репозитори / Проекты / Отзывы</div>
                    <div class="sub-ab-block">
                        <div class="xxx-info-block">
                            <div class="start-block">
                                <div class="start-block-title">Репозитории</div>
                                <div class="subtitle">{{ user.counts.repos }}</div>

                            </div>
                            <div class="middle-block">
                                <div class="middle-block-title">Проекты</div>
                                <div class="subtitle">{{ user.counts.projects }}</div>

                            </div>
                            <div class="end-block">
                                <div class="end-block-title">Отзывы</div>
                                <div class="subtitle">{{ user.counts.reviews }}</div>
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
</template>
<script setup>
import gsap from 'gsap';
import {ref} from 'vue';

function handleMouseEnter() {
    gsap.to('#detail-info', { duration: 0.4, bottom: 0 });
}

function handleMouseLeave() {
    gsap.to('#detail-info', { duration: 0.4, bottom: '-100vh' });
}


/**
 * Here data of profile developers
 */

 const user = ref({
    id: 1,
    name: 'Avery Vladislav',
    avatar: '../assets/developers/smiling-young-man-with-crossed-arms-outdoors (1)-fotor-bg-remover-20240223194416.png',
    title: ` Здравствуйте! Я - Full Stack Developer, специализирующийся на создании высококачественных
            программ и веб-сайтов. Могу воплотить ваши идеи в жизнь, используя передовые технологии, такие
            как Vue.js, JavaScript, TypeScript, Python и Adonis.js. Обладаю опытом работы как с frontend
            (Vue, JS, TS), так и с backend (Python, Adonis), что позволяет мне создавать мощные и
            инновационные проекты с нуля. Доверьте мне вашу задачу, и я с удовольствием превращу ее в
            успешный продукт, сочетающий в себе функциональность, качество и элегантный дизайн`,
    counts: {
        repos: 124,
        projects: 34,
        reviews: 21,
    }
 })

 const skills = ref([
    {
        id: 1,
        name: 'Vue v3',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'Nuxt3',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'Fast Api',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'Redis',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'Mariadb',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'RabbitMQ',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'Linux',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'Express',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'Adonis',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'PostgreSQL',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
    {
        id: 1,
        name: 'MongoDB',
        description: 'vue 3 is the most popular profile for developers and developers that'
    },
 ])

</script>
<style lang="scss" scoped>
.inner-container_{
    width: 100%;
    height: 90%;
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
    height: 70%;
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