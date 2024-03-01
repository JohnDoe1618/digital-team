<template>
    <div class="section">
        <!-- <img src="../assets/images/5.jpg" alt=""> -->

        <div class="main-block">
            <div class="inner-container">
                <div class="primary-info">
                    <div class="row">
                        <div class="row-title">
                            Название:
                        </div>
                        <div class="row-text">
                            Digital Artifact .inc
                        </div>
                    </div>
                    <div class="row">
                        <div class="row-title">
                            ИНН:
                        </div>
                        <div class="row-text">
                            2423129031293
                        </div>
                    </div>
                    <div class="row">
                        <div class="row-title">
                            КПП:
                        </div>
                        <div class="row-text">
                            32423423423
                        </div>
                    </div>
                    <div class="row">
                        <div class="row-title">
                            ОГРН:
                        </div>
                        <div class="row-text">
                            0920923412
                        </div>
                    </div>
                    <div class="row">
                        <div class="row-title">
                            Адрес:
                        </div>
                        <div class="row-text">
                            Российская федерация, Краснодарский край, г. Краснодар
                        </div>
                    </div>
                    <div class="row">
                        <div class="row-title">
                            Дата создания:
                        </div>
                        <div class="row-text">
                            28 марта 2024 года
                        </div>
                    </div>
                    <div class="row">
                        <div class="row-title">
                            Дата Регистрации:
                        </div>
                        <div class="row-text">
                            30 марта 2024 года
                        </div>
                    </div>
                    <div class="row">
                        <div class="row-title">
                            E-mail:
                        </div>
                        <div class="row-text">
                            work@gmail.com
                        </div>
                    </div>
                    <div class="row">
                        <div class="row-title">
                            Рабочий номер:
                        </div>
                        <div class="row-text">
                            +79995550888
                        </div>
                    </div>
                    <div class="row-col">
                        <div class="row-title-col">
                            Описание:
                        </div>
                        <div class="row-text">
                            Digital Artifact .inc - это инновационная технологическая компания, специализирующаяся на разработке высококачественных и индивидуальных IT-решений для различных отраслей бизнеса. Мы предлагаем широкий спектр услуг, включая создание сервисов, CRM систем, сайтов и программного обеспечения на различных технологиях и языках программирования.
                        </div>
                    </div>
                </div>
                <div class="secondary-info">

                    <div class="el-row" @click="() => isActiveCookie = true">
                        <div class="icon">
                            <img src="../assets/icons/cookie.png" alt="">
                        </div>
                        <div class="wrapper-text">
                            <div class="text">
                                Cookies
                            </div>
                            <div class="desc">
                                Хранение данных на сайте для персонализации и аналитики
                            </div>
                        </div>
                    </div>

                    <div class="el-row" @click="() => isActivePolicy = true">
                        <div class="icon">
                            <img src="../assets/icons/document-signed.png" alt="">
                        </div>
                        <div class="wrapper-text">
                            <div class="text">
                                Политика конфиденциальности
                            </div>
                            <div class="desc">
                                Защита данных пользователей и их конфиденциальность
                            </div>
                        </div>
                    </div>

                    <div class="el-row" @click="() => isActiveAgreement = true">
                        <div class="icon">
                            <img src="../assets/icons/handshake.png" alt="">
                        </div>
                        <div class="wrapper-text">
                            <div class="text">
                                Соглашения
                            </div>
                            <div class="desc">
                                Условия использования сервиса, правила и ответственность
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    /**
        Диалоговые окна
    */
    <!-- Для Cookies -->
        <v-dialog
            v-model="isActiveCookie"
            width="auto"
        >
            <v-card 
                class="d-cookie"
            >
                <v-card-text>
                    Куки — это небольшие текстовые файлы, которые веб-сайт сохраняет на компьютере пользователя. Они играют важную роль в предоставлении персонализированного опыта использования веб-сайта и предоставлении различных функциональных возможностей. Вот некоторые основные причины для использования куки на сайте для клиентов:
                    <p style="margin-top: 20px;">
                        1. **Аутентификация и сессии**: Куки могут использоваться для хранения информации о сессии пользователя, такой как идентификатор сеанса или токен аутентификации, чтобы позволить пользователям авторизоваться на сайте.
                    </p>
                    <p>
                        2. **Запоминание предпочтений пользователя**: Куки могут содержать данные о предпочтениях пользователя, такие как язык, регион или тема сайта, чтобы обеспечить более персонализированный опыт использования.
                    </p>
                    <p>
                        3. **Отслеживание поведения пользователя**: Куки могут использоваться для отслеживания действий пользователя на сайте, таких как посещенные страницы, продукты в корзине или проведенное время на сайте, чтобы улучшить аналитику и рекламные стратегии.
                    </p>
                    <p>
                        4. **Рекламные цели**: Куки позволяют сайтам показывать персонализированную рекламу на основе интересов пользователя, собранных из его действий на сайте.
                    </p>
                    <p>
                        5. **Сохранение состояния интерфейса**: Куки могут использоваться для сохранения настроек или состояния интерфейса пользователя, таких как предпочитаемый вид списка товаров или выбранные фильтры на сайте.
                    </p>
                    <p style="margin-bottom: 20px;">
                        6. **Аналитика и улучшение производительности**: Куки могут помочь в сборе данных о том, как пользователи взаимодействуют с сайтом, что поможет улучшить его производительность, удобство использования и маркетинговые усилия.
                    </p>
                    Важно отметить, что использование куки должно соответствовать законодательству о конфиденциальности данных, такому как GDPR в Европе, и включать прозрачные политики конфиденциальности, разъясняющие, какие данные собираются и как они используются.
                </v-card-text>
                <v-card-actions>
                <v-btn style="margin-left: auto;" @click="isActiveCookie = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Для Policy -->
        <v-dialog
            v-model="isActivePolicy"
            width="auto"
        >
            <v-card 
                class="d-cookie"
            >
                <v-card-text>
                    Политика конфиденциальности на сайте представляет собой документ, который описывает, какие персональные данные собираются от пользователей сайта, как эти данные используются, обрабатываются и защищаются. Вот несколько основных причин, почему политика конфиденциальности важна для клиентов на сайте:
                    <p style="margin-top: 20px;">
                        1. Защита личной информации: Пользователи обеспокоены конфиденциальностью своих данных в Интернете. Политика конфиденциальности помогает пользователю понять, как именно их данные будут использованы и защищены.
                    </p>
                    <p>
                        2. Доверие и прозрачность: Наличие политики конфиденциальности на сайте демонстрирует заботу компании о конфиденциальности и безопасности своих пользователей. Это способ повысить доверие и привлечь новых клиентов.
                    </p>
                    <p>
                        3. Соблюдение законодательства: Во многих странах существуют законы и нормативные акты, обязывающие владельцев сайтов предоставить пользователю доступ к информации о сборе и использовании их данных. Несоблюдение этих законов может привести к штрафам и юридическим последствиям.
                    </p>
                    <p style="margin-bottom: 20px;">
                        4. Оптимизация маркетинга и аналитики: Понимание того, какие данные собираются о пользователях, помогает компании оптимизировать свои маркетинговые стратегии, улучшить взаимодействие с клиентами и повысить эффективность веб-аналитики.
                    </p>
                    В целом, политика конфиденциальности является важным инструментом для защиты личной информации пользователей, повышения доверия к сайту и соблюдения законодательства в области защиты данных. Клиенты могут быть уверены, что их данные будут использованы с соблюдением прав и безопасно.
                </v-card-text>
                <v-card-actions>
                <v-btn style="margin-left: auto;" @click="isActivePolicy = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Для Agreements -->
        <v-dialog
            v-model="isActiveAgreement"
            width="auto"
        >
            <v-card 
                class="d-cookie"
            >
                <v-card-text>
                    Пользовательское соглашение (или Условия использования) на сайте представляет собой юридический документ, который устанавливает правила и условия использования сайта пользователями. Вот несколько основных причин, почему пользовательское соглашение важно для клиентов на сайте:
                    <p style="margin-top: 20px;">
                        1. Определение прав и обязанностей: В пользовательском соглашении четко прописаны права и обязанности как для пользователя, так и для владельца сайта. Это позволяет установить четкие рамки взаимодействия между сторонами и предотвратить возможные споры и недоразумения.
                    </p>
                    <p>
                        2. Ограничение ответственности: В пользовательском соглашении обычно указывается ограничение ответственности владельца сайта за возможные убытки или ущерб, возникшие в результате использования сайта. Это защищает владельца от возможных юридических проблем, связанных с претензиями пользователей.
                    </p>
                    <p>
                        3. Защита интеллектуальной собственности: В пользовательском соглашении может быть прописана защита интеллектуальной собственности (авторские права, товарные знаки и пр.), что помогает защитить сайт и его содержимое от несанкционированного использования и копирования.
                    </p>
                    <p>
                        4. Урегулирование споров: Пользовательское соглашение может содержать положения о порядке урегулирования споров между пользователями и владельцем сайта. Это помогает минимизировать риски возможных конфликтов и облегчает разрешение споров в случае их возникновения.
                    </p>
                    <p style="margin-bottom: 20px;">
                        5. Соблюдение законодательства: Наличие пользовательского соглашения на сайте помогает владельцу сайта соблюсти законодательство в области защиты потребителей, конфиденциальности данных и других сферах, что важно для защиты прав пользователей и соблюдения нормативных требований.
                    </p>
                    В целом, пользовательское соглашение является важным документом для установления правил и условий использования сайта, обеспечивая правовую защиту как для владельца сайта, так и для его пользователей. Клиенты могут быть уверены, что их права и интересы защищены, а владелец сайта имеет четкие правила взаимодействия с пользователями.
                </v-card-text>
                <v-card-actions>
                <v-btn style="margin-left: auto;" @click="isActiveAgreement = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

</template>

<script setup>
import {ref} from 'vue'

const isActiveCookie = ref(false)
const isActivePolicy = ref(false)
const isActiveAgreement = ref(false)

</script>
<style scoped lang="scss">

/**
    Диалоговые окна
*/

.d-cookie {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    border: 1px solid gray;
}

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

.main-block {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.inner-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    text-align: center;
    background-color: rgba($color: #000000, $alpha: .5);
    padding: 20px;
    display: flex;
    border: 1px solid #535353;
    border-radius: 10px;
}

.primary-info {
    position: relative;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: 1;
    padding: 20px;
}

.primary-info .row {
    display: flex;
    align-items: center;
    color: white;
    text-align: center;
    width: fit-content;
    margin-top: 10px;
}

.primary-info .row-col {
    display: flex;
    flex-direction: column;
    color: white;
    width: fit-content;
    margin-top: 100px;
}

.row .row-title {
    font-size: 18px;
}

.row .row-title-col {
    font-size: 18px;
}

.row .row-text {
    font-size: 16px;
    margin-left: 20px;
}

.secondary-info {
    width: 50%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.secondary-info .el-row 
{
    margin-top: 10px;
    width: 80%;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    padding: 15px;
}

.secondary-info .el-row:hover
{
    cursor: pointer;
    background-color: rgb(177, 177, 177);
    color: white;
    border: 1px solid rgb(255, 255, 255);
    transition: all .3s ease;
}

.secondary-info .wrapper-text
{
    width: 100%;
    margin-left: 20px;
    height: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
}

.el-row .icon
{
    display: flex;
    align-items: center;
    justify-content: center;
}
.el-row .icon img
{
    position: relative;
    width: 28px;
    height: 28px;
}

.el-row .text
{
    color: white;
}

.el-row .desc
{
    color: white;
    font-size: 12px;
}

</style>