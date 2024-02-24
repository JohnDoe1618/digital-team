<template>
    <div class="section">
        <img src="../assets/images/5.jpg" alt="">

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
                    <div class="el-row">
                        <div class="icon">
                            <img src="../assets/icons/cookie.png" alt="">
                        </div>
                        <div class="wrapper-text">
                            <div class="text">
                                Cookies
                            </div>
                            <div class="desc">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
<style scoped lang="scss">
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
    border: 1px solid rgb(177, 177, 177);
    background-color: rgba($color: #000000, $alpha: .5);
    padding: 20px;
    display: flex;
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
    width: 60%;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    padding: 20px;
}

.secondary-info .wrapper-text
{
    width: 80%;
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
    
}

</style>