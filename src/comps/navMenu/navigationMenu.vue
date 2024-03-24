<template>
    <div>
        <v-navigation-drawer expand-on-hover rail>
            <v-list>
                <!-- :prepend-avatar="object_user_data_template.icon_link" -->
                <v-list-item
                :title="'.DCK'"
                :subtitle="'Computer'"
                ></v-list-item>
            </v-list>

            <v-divider></v-divider>
            
            <v-list
            v-for="it of navList"
            :key="it.id"
            density="compact"
            nav
            >
            <!-- @click="goOtherPage(it.id)" -->
            <!-- :title="it.title" -->
            <v-list-item
              :value="it.value"
              :active="it.id === selectedItemId"
              >
              <template v-slot:default>
                  <h6 class="text-title">
                      {{ it.title }}
                    </h6>
                </template>
                <template v-slot:prepend>
                    <v-avatar size="20" rounded="0">
                        <img
                        :src="require(`@/assets/icons/prodaction/${it.icon}`)"
                        style="object-fit: contain"
                        />
                    </v-avatar>
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
  const { navList, object_user_data_template } = useNavigationDrawer();
  
  const selectedItemId = ref("");
  
//   function goOtherPage(id) {
//     switch (id) {
//       case "1":
//         // window.location.href = "/articles";
//         selectedItemId.value = id;
//         router.push({ name: "articles" });
//         break;
//       case "2":
//         selectedItemId.value = id;
//         router.push({ name: "arhives" });
//         break;
//       case "3":
//         selectedItemId.value = id;
//         break;
//       case "4":
//         selectedItemId.value = id;
//         break;
//       case "5":
//         selectedItemId.value = id;
//         break;
//       case "6":
//         selectedItemId.value = id;
//         break;
//       case "7":
//     }
//   }
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