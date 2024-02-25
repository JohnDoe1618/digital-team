<template>
    <v-card 
        class="d-question py-5 px-5"
    >
        <v-card-text>
            Здесь вы обращаетесь конкретно к {{ props.name }}
        </v-card-text>

        <!-- FORM -->
        <v-card class="py-5 px-5" variant="none">
            <form class="form-question">
                <v-text-field
                    v-model="state.name"
                    :error-messages="v$.name.$errors.map(e => e.$message)"
                    :counter="10"
                    label="Ваше имя"
                    required
                    @input="v$.name.$touch"
                    @blur="v$.name.$touch"
                    density="compact"
                    variant="outlined"
                ></v-text-field>
    
                <v-text-field
                    v-model="state.email"
                    :error-messages="v$.email.$errors.map(e => e.$message)"
                    label="Ваша почта"
                    required
                    @input="v$.email.$touch"
                    @blur="v$.email.$touch"
                    density="compact"
                    variant="outlined"
                ></v-text-field>
    
                <v-select
                    v-model="state.select"
                    :items="items"
                    :error-messages="v$.select.$errors.map(e => e.$message)"
                    label="Услуга"
                    required
                    @change="v$.select.$touch"
                    @blur="v$.select.$touch"
                    density="compact"
                    variant="outlined"
                ></v-select>
    
                <!-- <v-checkbox
                    v-model="state.checkbox"
                    :error-messages="v$.checkbox.$errors.map(e => e.$message)"
                    label="Do you agree?"
                    required
                    @change="v$.checkbox.$touch"
                    @blur="v$.checkbox.$touch"
                ></v-checkbox> -->

                <v-textarea
                    class="mb-5"
                    v-model="description"
                    label="Введите текст"
                    base-color="rgb(120, 120, 120)"
                    color="white"
                    bg-color="rgb(40, 40, 40)"
                    :no-resize="true"
                    rows="5"
                    :rules="rulesDescription"
                    variant="outlined"
                >
                    <template v-slot:details>
                        <p :style="(description.length <= 1000)? {color: 'white'} : {color: 'red'}">{{ description.length }}/1000</p>
                    </template>
                </v-textarea>
    
                <v-btn
                    @click="v$.$validate"
                    class="mb-6"
                    base-color="white" 
                    color="rgb(120, 120, 120)"
                    bg-color="rgb(120, 120, 120)"
                >
                    Отправить
                </v-btn>

                <v-btn 
                    @click="clear"
                    class="mb-6 mx-5"
                    base-color="white" 
                    color="rgb(120, 120, 120)"
                    bg-color="rgb(120, 120, 120)"
                >
                    Отмена
                </v-btn>

            </form>
        </v-card>
    </v-card>
</template>
<script setup>
import { defineEmits, reactive, ref, defineProps, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
// import ApiFirebase from '@/api/database';
// const profile = ref({});
onMounted(async () => {
    // Здесь идет запрос через api firebase по id на получение профиля выбраного разработчика
    // const api = new ApiFirebase('developers')
    // profile.value = await api.getDocumentById(props?.devId)
})

const description = ref('');
const rulesDescription = [v => v.length <= 1000 || 'Вы превысили лимит в 1000 символов'];

const props = defineProps({
  devId: String,
  name: String,
})

const emit = defineEmits(['close'])

function closeDialog() {
    emit('close')
}

const initialState = {
    name: '',
    email: '',
    select: null,
    checkbox: null,
}

const state = reactive({
    ...initialState,
})

const items = [
    'Обычный вопрос',
    'Заказать проект'
]

const rules = {
    name: { required },
    email: { required, email },
    select: { required },
    items: { required },
    checkbox: { required },
}

const v$ = useVuelidate(rules, state)

function clear () {
    v$.value.$reset()
    closeDialog()

for (const [key, value] of Object.entries(initialState)) {
        state[key] = value
    }
}

</script>

<style lang="scss" scoped>
.d-question {
    background-color: rgba($color: #2b2b2b, $alpha: .9);
    color: white;
}
</style>