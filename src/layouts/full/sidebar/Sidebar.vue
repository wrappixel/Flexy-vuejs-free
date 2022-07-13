<script setup lang="ts">
import { ref, watch } from "vue";
import sidebarItems from "./sidebarItem";
import LogoDark from "../logo/LogoDark.vue";

const sidebarMenu = ref(sidebarItems);
</script>

<template>
  <v-navigation-drawer
    left
    :permanent="$vuetify.display.mdAndUp"
    elevation="10"
    rail-width="75"
    mobile-breakpoint="960"
    app
    expand-on-hover
  >
    <!-- ---------------------------------------------- -->
    <!---Logo part -->
    <!-- ---------------------------------------------- -->
    <div class="pa-4">
      <LogoDark />
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div class="scrollnavbar">
      <v-list class="pa-4" color="transparent">
        <!-- ---------------------------------------------- -->
        <!---Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <!-- ---------------------------------------------- -->
          <!---Single Item-->
          <!-- ---------------------------------------------- -->
          <v-list-item  :to="item.to" rounded="lg" class="mb-1">
            <v-list-item-avatar start class="v-list-item-avatar--start">
              <v-icon
                
                class="feather-sm v-icon v-icon--size-default"
              >{{item.icon}}</v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
