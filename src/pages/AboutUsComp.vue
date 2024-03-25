<template>
        <v-main>
            <v-card height="500px" width="100%">
                <span>Hello</span>
            </v-card>
            <!-- Модальное окно сделки блиать -->
            <v-dialog v-model="dialogDeal">
                <aboutUsDealComp />
            </v-dialog>
        </v-main>
</template>

<script setup>
import aboutUsDealComp from '@/comps/aboutUsDeal/aboutUsDealComp';
import { ref } from 'vue';
const dialogDeal = ref(false);

</script>