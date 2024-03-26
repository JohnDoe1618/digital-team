<template>
    <div>
        <v-navigation-drawer expand-on-hover rail>
            <v-list>
                <!-- :prepend-avatar="object_user_data_template.icon_link" -->
                <v-list-item
                    :title="'Digital Team'"
                    :subtitle="'New Service'"
                    :prepend-avatar="require('../../assets/Logo.svg')"
                >
                </v-list-item>
            </v-list>

            <v-divider></v-divider>
            
            <v-list
            v-for="it of navList"
            :key="it.id"
            density="compact"
            nav
            >
            <!-- :title="it.title" -->
            <v-list-item
                @click="goOtherPage(it.id)"
                :value="it.value"
                :active="it.id === selectedItemId"
              >
              <template v-slot:default>
                  <h6 class="text-title">
                      {{ it.title }}
                    </h6>
                </template>
                <template v-slot:prepend>
                    <v-avatar size="20" rounded="100">
                        <img
                        :src="require(`@/assets/production/${it.icon}`)"
                        style="object-fit: fill; width: 20px; height: 20px;"
                        />
                    </v-avatar>
                </template>
                <template  v-slot:append>
                    <v-badge
                        v-if="it.value === '2' && it.value !== '3'"
                        color="info"
                        content="6"
                        inline
                    ></v-badge>
                    <v-badge
                        v-if="it.value !== '2' && it.value === '3'"
                        color="success"
                        content="12"
                        inline
                    ></v-badge>

                </template>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
            <v-list-item
            :prepend-avatar="object_user_data_template.icon_link"
            :title="object_user_data_template.title"
            :subtitle="object_user_data_template.subtitle"
            ></v-list-item>
        </v-list>
        </v-navigation-drawer>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  import {
    useNavigationDrawer,
  } from '../../composables/NavigationDrawer/useNavigationDrawer'
  import { useRouter } from "vue-router";

  const router = useRouter();

  const { navList, object_user_data_template } = useNavigationDrawer();
  const selectedItemId = ref("");
  
  function goOtherPage(id) {
    switch (id) {
      case "1":
        selectedItemId.value = id;
        router.push({name: 'main'})
        break;
      case "2":
        selectedItemId.value = id;
        router.push({name: 'requests'})
        break;
      case "3":
        router.push({name: 'chat'})
        selectedItemId.value = id;
        break;
      case "4":
        router.push({name: 'contract'})
        selectedItemId.value = id;
        break;
      case "5":
        router.push({name: 'project'})
        selectedItemId.value = id;
        break;
      case "6":
        router.push({name: 'developers'})
        selectedItemId.value = id;
        break;
      case "7":
        router.push({name: 'settings'})
        selectedItemId.value = id;
        break;
    }
  }
  </script>

<style lang="scss" scoped>
.text-title {
    font-size: .8rem;
    font-weight: 700;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: $light-primary-text-color;
    opacity: .6;
    display: flex;
    align-items: start;
}
</style>