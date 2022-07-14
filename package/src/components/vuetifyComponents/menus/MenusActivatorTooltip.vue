<script setup lang="ts">
import { ref, mergeProps } from "vue";
const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" }
]);
mergeProps();
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Activator and tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    With the new v-slot syntax, nested activators such as those seen with a
    v-menu and v-tooltip attached to the same activator button, need a
    particular setup in order to function correctly.
  </p>
  <div class="text-center mt-4">
    <v-menu>
      <template v-slot:activator="{ props: menu }">
        <v-tooltip anchor="top">
          <template v-slot:activator="{ props: tooltip }">
            <v-btn color="primary" v-bind="mergeProps(menu, tooltip)">
              Dropdown w/ Tooltip
            </v-btn>
          </template>
          <span>I'm A Tooltip</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

