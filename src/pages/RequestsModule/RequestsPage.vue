<template>
    <v-main class="fill-height">
        <div class="fill-height py-5 px-8">
            <v-row no-gutters>

                <v-row >
                    <v-col cols="3" md="3">
                        <v-item-group>
                            <v-btn
                            variant="outlined"
                            density="default"
                            >Фильтр</v-btn>
                            <v-btn
                            variant="outlined"
                            density="default"
                            class="ml-2"
                            >Все</v-btn>
                            <v-btn
                            variant="outlined"
                            density="default"
                            class="ml-2"
                            >Новые</v-btn>
                        </v-item-group>
                    </v-col>

                    <v-col cols="2" md="2">
                        <v-select
                            label="Категория"
                            :items="['Сайт-под-ключ', 'Дизайн', 'Парсер', 'Georgia', 'Texas', 'Wyoming']"
                            variant="outlined"
                            density="compact"
                            ></v-select>
                    </v-col>

                    
                    <v-col cols="2" md="2">
                        <v-select
                            label="Сумма"
                            :items="['от 60 до 100', 'от 100 до 200', 'Парсер', 'Georgia', 'Texas', 'Wyoming']"
                            variant="outlined"
                            density="compact"
                            ></v-select>
                    </v-col>

                                        
                    <v-col cols="2" md="2">
                        <v-select
                            label="Разработчик"
                            :items="['Владислав Эвери', 'Эрик Эртман',]"
                            variant="outlined"
                            density="compact"
                            ></v-select>
                    </v-col>

                    <v-col cols="3" md="3" class="d-flex align-items-end">
                        <v-btn
                            variant="outlined"
                            density="default"
                            class="ml-auto"
                            >Создать заявку</v-btn>
                    </v-col>
                </v-row>
            </v-row>

            <v-row no-gutters>
                <v-col cols="12" md="12">
                    <v-card 
                        class="mx-auto my-8"
                        title="Заявки"
                        variant="text"
                    >
                        <v-data-table
                            :headers="headers"
                            :items="requests"
                            loading-text="Загрузка... Пожалуйста подождите"
                            :loading="false"
                        >
                            <template v-slot:item.sum="{ item }">
                                <v-chip :color="getColor(item.sum)">
                                    {{ item.sum }}
                                </v-chip>
                            </template>
                            <template v-slot:item.category="{ item }">
                                <v-chip :color="'#5E6CE7'">
                                    {{ item.category }}
                                </v-chip>
                            </template>
                            <template v-slot:item.deadline_at="{ item }">
                                <v-chip :color="selectColorDeadLine(item.deadline_at)">
                                    {{ new Date(item.deadline_at).toLocaleString() }}
                                </v-chip>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-menu
                                    transition="scale-transition"
                                    >
                                    <template v-slot:activator="{ props }">
                                        <div v-bind="props" class="btn-actions">
                                            <i class="fi fi-rr-angle-right"></i>
                                        </div>
                                    </template>

                                    <v-list>
                                        <v-list-item
                                            v-for="(item, i) in actionsItems"
                                            :key="i"
                                            :value="i"
                                            style="display: flex; align-items: center;"
                                            >
                                            <template v-slot:prepend>
                                                <i :class="item.icon"></i>
                                            </template>
                                            <v-list-item-title style="font-size: 14px; margin-left: 10px;">{{ item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                    </v-menu>
                            </template>
                            <!-- <template v-slot:no-data>
                                <v-btn
                                    color="primary"
                                    @click="initialize"
                                >
                                    Reset
                                </v-btn>
                            </template> -->
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-main>
</template>
<script setup>
import {ref} from 'vue';
// TABLE
const headers = ref([
    { title: 'Имя', key: 'name', sortable: false, },
    { title: 'Категория', key: 'category', sortable: false, },
    { title: 'Цена / R', key: 'sum' },
    { title: 'Разработчик/Команда', key: 'developer', sortable: false, },
    { title: 'Дедлайн', key: 'deadline_at' },
    { title: 'Дата публикации', key: 'created_at' },
    { title: 'Действия', key: 'actions' },
])

const requests = ref([
    {
        name: 'Джон',
        category: 'Разработка',
        project: 'Сайт стомотологии',
        sum: 120_000,
        developer: '-',
        deadline_at: 'Wed May 27 2024 10:39:39',
        created_at: '12.03.2024 12:35:51 AM',
    },
    {
        name: 'Константин',
        category: 'Дизайн',
        project: 'Сайт админка',
        sum: 230_000,
        developer: 'Эрик Эртман',
        deadline_at: 'Wed April 27 2024 10:39:39',
        created_at: '12.03.2024 12:35:51 AM',
    },
    {
        name: 'Мария',
        category: 'Дизайн',
        project: 'Парсер',
        sum: 110_000,
        developer: '-',
        deadline_at: 'Wed April 5 2024 10:39:39',
        created_at: '12.03.2024 12:35:51 AM',
    },
    {
        name: 'Елена',
        category: 'Доработка',
        project: 'Сайт админка',
        sum: 40_000,
        developer: 'Эрик Эртман',
        deadline_at: 'Wed April 5 2024 10:39:39',
        created_at: '12.03.2024 12:35:51 AM',
    },
    {
        name: 'Даниил',
        category: 'Настройка',
        project: 'Сайт админка',
        sum: 10_000,
        developer: 'Влад Эвери',
        deadline_at: 'Wed April 1 2024 10:39:39',
        created_at: '12.03.2024 12:35:51 AM',
    },
])

function getColor (value) {
    if (value > 100_000) return 'green'
    else if (value > 50_000) return 'orange'
    else return 'red'
}

function selectColorDeadLine(deadline) {
    const deadlineDate = new Date(deadline);
    const today = new Date();

    const diffTime = Math.abs(deadlineDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(today)
    if (diffDays >= 60) {
        return 'green'; // 2 месяца и более
    } else if (diffDays >= 30) {
        return 'blue'; // 1 месяц
    } else if (diffDays >= 14) {
        return 'orange'; // неделя
    } else {
        return 'red'; // менее недели
    }
}

const actionsItems = ref([
    { title: 'Редактировать', icon: 'fi fi-rr-pencil' },
    { title: 'Примянить', icon: 'mdi-clock' },
    { title: 'Отказаться', icon: 'mdi-clock' },
    { title: 'Новое окно', icon: 'mdi-clock' },
])
</script>

<style scoped lang="scss">
.btn-actions {
    width: fit-content;
    height: fit-content;
    padding: 5px 10px 0px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid #f8f8f8;
    cursor: pointer;
}
</style>