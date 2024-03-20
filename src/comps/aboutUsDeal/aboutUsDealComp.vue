<template>
    <v-card class="form-deal__container">
        <!-- Форма оформления сделки -->
        <v-form class="form-deal">
            <h1 class="form-deal__title">Оформление сделки</h1>

            <!-- Ввод учетных данных -->
            <v-row no-gutters>
                <!-- Ваше имя -->
                <v-col cols="12" sm="4">
                    <v-text-field
                        v-model="user.firstName"
                        variant="outlined"
                        density="compact"
                        label="Ваше имя"
                        base-color="white" 
                        color="white"
                        bg-color="#181818"
                        required
                    ></v-text-field>
                </v-col>
                <!-- Телефон -->
                <v-col cols="12" sm="4">
                    <v-text-field
                        v-model="user.phone"
                        variant="outlined"
                        :density="'compact'" 
                        label="Телефон"
                        base-color="white" 
                        color="white"
                        bg-color="#181818"
                        required
                    ></v-text-field>
                </v-col>
                <!-- E-mail -->
                <v-col cols="12" sm="4">
                    <v-text-field
                        v-model="user.email"
                        variant="outlined"
                        :density="'compact'"
                        label="E-mail"
                        base-color="white" 
                        color="white"
                        bg-color="#181818"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <!-- Выбор вида услуги -->
                <v-col cols="12" sm="6">
                    <v-select
                        v-model="deliveryProject.view"
                        chips
                        clearable
                        label="Выберите вид услуги"
                        base-color="white" 
                        color="white"
                        bg-color="#181818"
                        theme="dark"
                        :items="serviceItems"
                        variant="outlined"
                        density="compact"
                        required
                    ></v-select>
                </v-col>
                    <!-- Бюджет проекта -->
                <v-col cols="12" sm="6">
                    <v-select
                    v-model="deliveryProject.cost"
                    chips 
                    clearable
                    label="Выберите бюджет проекта"
                    base-color="white" 
                    color="white"
                    bg-color="#181818"
                    theme="dark"
                    :items="serviceBudget"
                    variant="outlined"
                    density="compact"
                    required
                    ></v-select>
                </v-col>

            </v-row>

            <!-- Описание проекта -->
            <div>
                <v-textarea
                    v-model="deliveryProject.description"
                    label="Введите описание проекта"
                    base-color="rgb(120, 120, 120)"
                    color="white"
                    bg-color="#181818"
                    :no-resize="true"
                    rows="5"
                    :rules="rulesDescription"
                    variant="outlined"
                    required
                >
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
                        type="file"
                        ref="fileInputRef"
                    />
                </div>
            </div>
            <!-- Кнопка отправки формы -->
            <v-row no-gutters>
                <v-col cols="12" sm="10"></v-col>
                <v-col cols="12" sm="2">
                    <v-btn
                        base-color="white"
                        color="#28a745"
                        bg-color="#181818"
                        @click.prevent="send()"
                    >Отправить</v-btn>
                </v-col>
            </v-row>

        </v-form>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
import ApiFirebase from '@/api/database';
import { Timestamp } from "firebase/firestore"; 

const apiDeliveryProject = new ApiFirebase("delivery-project");
// const apiUser = new ApiFirebase("contracts");

const inputFile = ref(null);
const rulesDescription = [v => v.length <= 1000 || 'Вы превысили лимит в 1000 символов'];

const user = ref({
    firstName: null,
    lastName: null,
    surName: null,
    phone: null,
    email: null,
})

const deliveryProject = ref({
    view: null,
    cost: null,
    description: "",
    file: {
        name: null,
        url: null,
        ext: null,
        size: null,
    },
    atCreated: null,
    atUpdated: null,
})

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
    if(!e.target.files[0]) {
        inputFile.value = e.target.files[0];
    } else {
        inputFile.value = null;
    }
}

async function send() {
    if(apiDeliveryProject.collectionRef === "delivery-project") {
        const result = await apiDeliveryProject.addDocument(Object.assign({}, deliveryProject.value, {
            atCreated: Timestamp.fromDate(new Date()),
            atUpdated: Timestamp.fromDate(new Date()),
        }));
        console.log(result);
    }
}

</script>

<style lang="scss" scoped>
.form-deal__container {
    width: 50%;
    height: max-content;
    margin: auto;
    backdrop-filter: blur(4px);
    padding: 25px;
    background-color: rgba($dark-window-glass-color, .78);
}

.form-deal__title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: #c2c2c2;
    font-weight: 400;
    font-family: 'Lato', monospace;
}
.form-deal__top-block {
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 1rem;
    display: flex;
}

.middle-block__file-input-block {
    padding: 15px 0px;
    margin-top: 1rem;
}
.file-input {
    position: relative;
    width: max-content;
    background-image: url("data:image/svg+xml,%3csvg width='100%' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%' height='100%25' fill='none' stroke='%23ccc' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    padding: 15px 20px;
    width: 400px;
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
    width: 150px;
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