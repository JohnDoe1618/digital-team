<template>
        <v-main class="fill-height">
            <div class="fill-height py-5 px-8">
                <v-row no-gutters>
                    <v-col cols="12" md="4">
                        <v-card
                            class="mx-5"
                            append-icon="mdi-home"
                        >
                            <template v-slot:append>
                                <i class="fi fi-rr-revenue-alt"></i>
                            </template>
                            <template v-slot:title>
                                200,000 R
                            </template>

                            <v-card-text>
                                Доходы
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-card
                            class="mx-5"
                        >
                            <template v-slot:append>
                                <i class="fi fi-rr-expense"></i>
                            </template>
                            <template v-slot:title>
                                30,000 R
                            </template>

                            <v-card-text>
                                Расходы
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-card
                            class="mx-5"
                        >
                            <template v-slot:append>
                                <i class="fi fi-rr-receipt" style="color: green;"></i>
                            </template>

                            <template v-slot:title>
                                1,143
                            </template>

                            <v-card-text>
                                Всего сделок
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row no-gutters class="my-5">
                    <v-col cols="12" md="4">
                        <v-card
                            class="mx-5"
                            append-icon="mdi-home"
                        >
                            <template v-slot:append>
                                <i class="fi fi-rr-revenue-alt"></i>
                            </template>
                            <template v-slot:title>
                                321
                            </template>

                            <v-card-text>
                                Новых клиентов
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-card
                            class="mx-5"
                        >
                            <template v-slot:append>
                                <i class="fi fi-rr-expense"></i>
                            </template>
                            <template v-slot:title>
                                534
                            </template>

                            <v-card-text>
                                Выполненных проектов
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-card
                            class="mx-5"
                        >
                            <template v-slot:append>
                                <i class="fi fi-rr-receipt" style="color: green;"></i>
                            </template>

                            <template v-slot:title>
                                1,143
                            </template>

                            <v-card-text>
                                Совершено звонков
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="my-5">
                    <v-col cols="12" md="4">
                        <Bar
                            id="my-chart-id"
                            :options="chartOptions"
                            :data="chartData"
                        />
                    </v-col>
                    
                    <v-col cols="12" md="4">
                        <Line :data="newClientsData" :options="LineOptions" />
                    </v-col>

                    <v-col cols="12" md="4">
                        <Pie :data="PieData" :options="PieOptions" />
                    </v-col>

                </v-row>

                <v-row no-gutters>
                    <v-col cols="12" md="12">
                        <v-card 
                            class="mx-auto my-8"
                            title="Транзакции"
                        >
                            <v-data-table
                                :headers="headers"
                                :items="transactions"
                                loading-text="Загрузка... Пожалуйста подождите"
                                :loading="false"
                            >
                                <template v-slot:item.sum="{ item }">
                                    <v-chip :color="getColor(item.sum)">
                                        {{ item.sum }}
                                    </v-chip>
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-col>
                </v-row>

            </div>
            <!-- Модальное окно сделки блиать -->
            <v-dialog v-model="dialogDeal">
                <aboutUsDealComp />
            </v-dialog>
        </v-main>
</template>

<script setup>
import aboutUsDealComp from '@/comps/aboutUsDeal/aboutUsDealComp';
import { ref } from 'vue';
import { Bar, Pie, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, LineElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, LineElement)

const chartData = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    datasets: [ { 
        label: 'Данные',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    } ]
}

const newClientsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Статистика новых клиентов',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
        }
    ]
}

const PieData = {
  labels: ['Завершенные', 'В процессе', 'Невыполненные', 'Отмененные'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [153, 3, 0, 2]
    }
  ]
}

const chartOptions = {
    responsive: true
}

const PieOptions = {
    responsive: true,
    maintainAspectRatio: false
}

const LineOptions = {
    responsive: true,
    maintainAspectRatio: false
}

const dialogDeal = ref(false);


// TABLE

const headers = [
    { title: 'Имя', key: 'name' },
    { title: 'Категория', key: 'category' },
    { title: 'Проект', key: 'project' },
    { title: 'Сумма транзакции / Руб', key: 'sum' },
    { title: 'Дата', key: 'created_at' },
]

const transactions = [
        {
          name: 'Эрик',
          category: 'Разработка',
          project: 'Сайт стомотологии',
          sum: 120_000,
          created_at: '12.03.2024 12:35:51 AM',
          iron: '15%',
        },
        {
          name: 'Эрик',
          category: 'Разработка',
          project: 'Сайт стомотологии',
          sum: 45_000,
          created_at: '12.03.2024 12:35:51 AM',
          iron: '15%',
        },
]

function getColor (value) {
    console.log(value)
    if (value > 100_000) return 'green'
    else if (value > 50_000) return 'orange'
    else return 'red'
}
</script>