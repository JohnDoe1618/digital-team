<template>
        <v-main  style="height: calc(100vh - 84px);">
            <div class="fill-height py-5 px-8" style="display: flex;">

                <div class="d-flex" style="height: 100%; width: 30%; overflow: auto;">
                    <v-list
                        id="section__chats"
                        style="overflow: auto;"
                        >
                        <v-list-item
                        v-for="item in items"
                        :key="item.id"
                        @click="onOpenChat($event, item)"
                        :title="item.title"
                        :subtitle="item.subtitle"
                        :active="false"
                        >
                        <!-- :class="{ 'even-index': getLocalChatId() === item.id }" -->
                            <template v-slot:prepend>
                                <img width="32px" height="32px" :src="item.prependAvatar" style="margin-right: 10px;">
                            </template>
                        </v-list-item>
                    </v-list>
                </div>

                <div class="fill-height d-flex px-5 py-5" style="width: 70%;">

                </div>
            </div>
        </v-main>
</template>

<script setup>
import { ref, computed } from 'vue';

const chatLocalId = 'chat:efw90j430'
const items = ref([
    {
        id: 0,
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Техническая поддержка',
        subtitle: `Ответ может занять несколько часов`,
    },
    {
        id: 1,
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: `Ответ может занять несколько часов`,
    },
])

function saveInLocalStorage(value) {
    const chatLocal = JSON.parse(localStorage.getItem(chatLocalId))
    if(chatLocal) {
        if(value.id === chatLocal.id) {
            localStorage.removeItem(chatLocalId);
        }
    } else {
        localStorage.setItem(chatLocalId, JSON.stringify(value));
    }
}

function onOpenChat(e, value) {
    console.log(e)
    saveInLocalStorage(value);
}

function getLocalChatId() {
    const chatLocal = localStorage.getItem(chatLocalId);
    if(!chatLocal) return;
    return JSON.parse(chatLocal).id;
}
const isEvenIndex = computed(() => {
    return (index) => index % 2 === 0;
})
</script>

<style scoped lang="scss">
#section__chats::-webkit-scrollbar {
  width: 5px;
}

#section__chats::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

#section__chats::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-image: linear-gradient(180deg, #c0c0c0 0%, #696969 99%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}

.even-index {
    background-color: rgb(53, 181, 255);
}
</style>