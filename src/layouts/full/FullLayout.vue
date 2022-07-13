<script setup lang="ts">
import { RouterView } from "vue-router";
import SidebarVue from "./sidebar/Sidebar.vue";
import HeaderVue from "./header/Header.vue";
</script>

<template>
  <v-app>
    <SidebarVue />
    <HeaderVue />
    <v-main>
      <v-container fluid class="page-wrapper">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
