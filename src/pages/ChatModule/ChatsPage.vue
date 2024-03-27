<template>
            <v-main class="fill-height">
                <div class="fill-height py-5 px-8" style="display: flex;">
                    <v-card class="fill-height py-5 px-5" width="30%" max-height="90vh" style="overflow: auto;" id="section__chats">
                        <v-list
                            :items="items"
                            lines="three"
                            item-props
                            >
                            <template v-slot:subtitle="{ subtitle }">
                                <div v-html="subtitle"></div>
                            </template>
                        </v-list>
                    </v-card>

                    <div style="display: flex; flex-direction: column; width: 100%; height: 92.3vh;">
                        <v-card variant="elevated" class="fill-height py-5 px-5" width="100%" style="overflow: auto;">
                        </v-card>
                        <v-text-field
                            v-model="message"
                            :append-inner-icon="message ? 'mdi-send' : 'mdi-microphone'"
                            :prepend-icon="icon"
                            clear-icon="mdi-close-circle"
                            label="Message"
                            type="text"
                            variant="outlined"
                            clearable
                            @click:append="sendMessage"
                            @click:append-inner="sendMessage"
                            @click:clear="clearMessage"
                            @click:prepend="changeIcon"
                        ></v-text-field>
                    </div>
                </div>
            </v-main>
</template>

<script setup>
import { computed } from 'vue';
import {ref} from 'vue';
const items = ref([
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Техническая поддержка',
        subtitle: `<span class="text-primary">Ответ может занять несколько часов</span>`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
])

const message = ''
const marker = true
const iconIndex = 0
const icons = [
    'mdi-emoticon',
    'mdi-emoticon-cool',
    'mdi-emoticon-dead',
    'mdi-emoticon-excited',
    'mdi-emoticon-happy',
    'mdi-emoticon-neutral',
    'mdi-emoticon-sad',
    'mdi-emoticon-tongue',
]

function toggleMarker() {
    this.marker = !this.marker
}
function sendMessage () {
    this.resetIcon()
    this.clearMessage()
}
function clearMessage () {
    this.message = ''
}
function resetIcon () {
    this.iconIndex = 0
}
function changeIcon () {
    this.iconIndex === this.icons.length - 1
    ? this.iconIndex = 0
    : this.iconIndex++
}

computed({
    icon () {
        return this.icons[this.iconIndex]
    },
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
  background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}
</style>