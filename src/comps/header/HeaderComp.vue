<template>
    <v-card
    variant="text"
    >
        <v-toolbar
            dense
            floating
            style="padding-left: 70px;"
            color="white"
        >
        <v-row>
            <v-col cols="12" sm="2">
                <v-text-field
                    prepend-icon="mdi-magnify"
                    hide-details
                    single-line
                    variant="outlined"
                    density="compact"
                    label="Поиск"
                    v-model="searchField"
                    @keyup.enter="handlerSearch"
                ></v-text-field>
            </v-col>
        </v-row>

        <template v-slot:append>
            <v-btn class="text-none" stacked>
                <v-icon>mdi-account-multiple-outline</v-icon>
            </v-btn>
            <v-btn class="text-none" stacked>
            <v-badge color="error" content="2">
                <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
            </v-btn>
            <v-btn class="ml-5 mr-2" variant="outlined" density="default" @click="dialogDeal = true" color="#5E6CE7">
                Оформить сделку
            </v-btn>
        </template>
        </v-toolbar>
  </v-card>
    <v-dialog v-model="dialogDeal">
        <aboutUsDealComp />
    </v-dialog>
</template>
<script setup>
import {ref} from 'vue';
import aboutUsDealComp from '../aboutUsDeal/aboutUsDealComp.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const dialogDeal = ref(false);
const searchField = ref('');

function handlerSearch() {
    router.push({name: 'searchingResult'});
}
</script>
<style lang="scss" scoped>
.header {
    position: absolute;
    width: 100%;
    color: $light-primary-text-color;
    z-index: 2;
}
</style>