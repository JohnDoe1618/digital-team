<template>
    <v-app id="app">
        <header-comp></header-comp>
        <navigationMenu></navigationMenu>
        <v-main style="padding: 0;">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script setup>
import navigationMenu from './comps/navMenu/navigationMenu.vue';
import HeaderComp from './comps/header/HeaderComp.vue';

</script>

<style lang="scss">
#app {
    background-color: $light-base-color;
}

*
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

body::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}
</style>