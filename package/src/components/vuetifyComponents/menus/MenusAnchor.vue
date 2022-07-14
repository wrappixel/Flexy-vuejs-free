<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);

const anchors = ref(["top", "bottom", "start", "end", "center"]);

const anchor = ref("end");
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Anchor -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Menu can be offset relative to the activator by using the anchor prop.
  </p>
  <div class="text-center mt-4">
    <v-select v-model="anchor" :items="anchors" label="Anchor"></v-select>
    <v-menu :anchor="anchor">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Dropdown </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

