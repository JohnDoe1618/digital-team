<template>
    <v-card class="form-deal__container">
        <!-- Форма оформления сделки -->
        <v-form class="form-deal">
            <h1 class="form-deal__title" style="margin-bottom: 30px;">Оформление сделки</h1>

            <!-- Ввод учетных данных -->
            <v-row >
                <!-- Ваше имя -->
                <v-col cols="12" sm="4">
                    <v-text-field
                        class="input_fields"
                        v-model="user.firstName"
                        variant="outlined"
                        density="compact"
                        label="Ваше имя"
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
                        class="input_fields"
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
                        class="input_fields"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row >
                <!-- Выбор вида услуги -->
                <v-col cols="12" sm="6">
                    <v-select
                        v-model="deliveryProject.view"
                        chips
                        clearable
                        label="Выберите вид услуги"
                        class="input_fields"
                        theme="light"
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
                    class="input_fields"
                    theme="light"
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
                    class="input_fields"
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
                    />
                </div>
            </div>
            <!-- Кнопка отправки формы -->
            <v-row no-gutters>
                <v-col cols="12" sm="10"></v-col>
                <v-col cols="12" sm="2">
                    <v-btn
                        class="input_fields"
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
import FirebaseStorage from '@/api/storage';
import { v4 as uuidv4 } from 'uuid';

const apiUser = new ApiFirebase("users");
const apiDeliveryProject = new ApiFirebase("order-projects");
const apiDeliveryFiles = new ApiFirebase("order-files");
const apiGeneralDocument = new ApiFirebase("users-order_projects-order_files")
const apiDeliveryProjectFile = new FirebaseStorage();

const inputFile = ref(null);
const rulesDescription = [v => v.length <= 1000 || 'Вы превысили лимит в 1000 символов'];

const user = ref({
    firstName: null,
    lastName: null,
    surName: null,
    phone: null,
    email: null,
    atCreated: null,
    atUpdated: null,
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
    !e.target.files[0] ?
        inputFile.value = null :
        inputFile.value = e.target.files[0];
}

// Отправка заявки на проект в firebase
async function send() {
    if(apiDeliveryProject.collectionRef === "order-projects") {
        const _user = await apiUser.addDocument(user.value);
        if(_user) {
            const _project = await apiDeliveryProject.addDocument(deliveryProject.value);
            if(_project) {
                if(inputFile.value) {
                    apiDeliveryProjectFile.uploadFileWithProgress(inputFile.value, "order-files/{*}".replace('{*}', `${uuidv4()}-${inputFile.value.name}`),
                    (progress) => {
                        console.log(progress)
                    },
                    async (url, ref) => {
                        const _file = await apiDeliveryFiles.addDocument({ url: url, name: ref.name, fullPath: ref.fullPath });
                        if(_file) {
                            const _general = await apiGeneralDocument.addDocument({
                                userId: _user.id,
                                orderProjectId: _project.id,
                                orderFileId: _file.id,
                            })
                            console.log(_general)
                        }
                    });
                }
            }
        }
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
    // background-color: rgba($light-base-color, .78);
}

.input_fields {
    color: $light-primary-text-color;
    background-color: $light-base-color;
}

.form-deal__title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: $light-primary-text-color;
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
    color: $light-primary-text-color;
    cursor: pointer;
    transition: color 0.4s ease;
}
.file-input:hover {
    transition: color 0.4s ease;
    color: $light-primary-color;
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