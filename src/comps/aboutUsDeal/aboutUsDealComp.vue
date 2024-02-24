<template>
    <v-card class="form-deal__container">
        <!-- Форма оформления сделки -->
        <v-form class="form-deal">
            <h1 class="form-deal__title">Оформление сделки</h1>
            <div class="form-deal__top-block">
                <div class="form-deal__input-block">
                    <!-- Выбор вида услуги -->
                    <v-select 
                    chips 
                    clearable
                    label="Выберите вид услуги"
                    base-color="white" 
                    color="white"
                    bg-color="rgb(120, 120, 120)"
                    theme="dark"
                    :items="serviceItems"
                    variant="outlined"
                    :density="'comfortable'"
                    ></v-select>
                </div>
                <div class="form-deal__input-block">
                    <!-- Бюджет проекта -->
                    <v-select 
                    chips 
                    clearable
                    label="Выберите бюджет проекта"
                    base-color="white" 
                    color="white"
                    bg-color="rgb(120, 120, 120)"
                    theme="dark"
                    :items="serviceBudget"
                    variant="outlined"
                    :density="'comfortable'"
                    ></v-select>
                </div>
            </div>
            <v-divider color="white"></v-divider>

            <!-- Описание проекта -->
            <div class="form-deal__middle-block">
                <v-textarea
                v-model="description"
                label="Введите описание проекта"
                base-color="rgb(120, 120, 120)"
                color="white"
                bg-color="rgb(40, 40, 40)"
                :no-resize="true"
                rows="5"
                :rules="rulesDescription"
                >
                    <template v-slot:details>
                        <p :style="(description.length <= 1000)? {color: 'white'} : {color: 'red'}">{{ description.length }}/1000</p>
                    </template>
                </v-textarea>

                <!-- Ввод файлов -->
                <div class="middle-block__file-input-block">
                    <label class="file-input" for="deal-file-input">
                        <v-icon 
                        class="file-input__cancel-btn"
                        @click.prevent="inputFile = null"
                        v-show="inputFile !== null"
                        color="red"
                        icon="mdi-close-circle-outline"
                        ></v-icon>
                        <p v-show="inputFile === null" class="file-input-hint">Прикрепите файл</p>
                        <p v-show="inputFile !== null" class="file-input-hint">
                            {{ inputFile?.name }} 

                        </p>
                    </label>
                    <input 
                    @change="(e) => handlerFileInput(e)"
                    v-show="false"  
                    id="deal-file-input" 
                    type="file"/>
                </div>

                <!-- Ввод учетных данных -->
            </div>
            <div class="form-deal__bottom-block">
                <div class="bottom-block__input-block">
                    <!-- Ваше имя -->
                    <v-text-field
                    class="ma-1"
                    variant="outlined"
                    :density="'compact'"
                    label="Ваше имя"
                    base-color="white" 
                    color="white"
                    bg-color="rgb(120, 120, 120)"
                    ></v-text-field>

                    <!-- Телефон -->
                    <v-text-field
                    class="ma-1"
                    variant="outlined"
                    :density="'compact'" 
                    label="Телефон"
                    base-color="white" 
                    color="white"
                    bg-color="rgb(120, 120, 120)"
                    ></v-text-field>

                    <!-- E-mail -->
                    <v-text-field
                    class="ma-1"
                    variant="outlined"
                    :density="'compact'"
                    label="E-mail"
                    base-color="white" 
                    color="white"
                    bg-color="rgb(120, 120, 120)"
                    ></v-text-field>
                </div>
                <!-- Кнопка отправки формы -->
                <v-btn
                class="mb-6"
                base-color="white" 
                color="rgb(120, 120, 120)"
                bg-color="rgb(120, 120, 120)"
                >Отправить форму</v-btn>
            </div>

        </v-form>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';

const inputFile = ref(null);
const description = ref('');
const rulesDescription = [v => v.length <= 1000 || 'Вы превысили лимит в 1000 символов'];

const serviceItems = ref([
    "Сайт под ключ",
    "Дизайн и верстка веб-сайта",
    "Разработка CMS-системы",
    "Разработка серверного API",
    "Гадание на картах",
    "Танцы с бубном",
])
// ₽
const serviceBudget = ref([
    "от 90-100 тыс.р",
    "от 100-120 тыс.р",
    "от 120-150 тыс.р",
    "от 200-300 тыс.р",

])

function handlerFileInput(e) {
    console.log();
    if(e.target.files[0] !== undefined) {
        inputFile.value = e.target.files[0];
    } else {
        inputFile.value = null;
    }
}

</script>

<style scoped>

.form-deal__container {
    width: 700px;
    height: max-content;
    margin: auto;
    background-color: rgba(58, 58, 58, 0.781);
    backdrop-filter: blur(4px);
}

.form-deal__title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    font-weight: 400;
    font-family: 'Lato', monospace;
}
.form-deal__top-block {
    width: 100%;
    padding: 0 2rem;
    margin-top: 1rem;
    display: flex;
    /* border: 1px solid white; */
}
.form-deal__middle-block {
    margin-top: 1rem;
    padding: 0 2rem;
}
.middle-block__file-input-block {
    padding: 25px;
    margin-top: 1rem;
}
.file-input {
    position: relative;
    width: max-content;
    background-image: url("data:image/svg+xml,%3csvg width='100%' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%' height='100%25' fill='none' stroke='%23ccc' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    padding: 30px 50px;
    width: 500px;
    color: white;
    cursor: pointer;
    transition: color 0.4s ease;
}
.file-input:hover {
    transition: color 0.4s ease;
    color: rgb(197, 197, 197);
}
.file-input-hint {
    position: relative;
    top: 5px;
    display: flex;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 200px;
    display: inline-block;
}

.file-input__cancel-btn {
    cursor: pointer;
    position: absolute; 
    right: 20px; 
    top: 25px;
    transition: color 0.4s ease;
}
.file-input__cancel-btn:hover {
    color: rgb(184, 45, 45) !important;
    transition: color 0.4s ease;
}
.form-deal__input-block {
    width: 50%;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    /* border: 1px solid white; */
}
.form-deal__bottom-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 28%;
    margin-top: 1rem;
    padding: 5px 2rem 0 2rem;
}
.bottom-block__input-block {
    width: 100%;
    display: flex;
    margin-top: 1rem;
}
</style>