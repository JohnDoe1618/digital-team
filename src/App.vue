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
</style>