<script setup lang="ts">
import { ref } from "vue";
import { profile } from "./data";

const userprofile = ref(profile);
</script>

<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu anchor="bottom end" origin="auto" min-width="300">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="pa-0 px-1"
          elevation="0"
          color="transparent"
          plain
          :ripple="false"
        >
          <v-avatar size="35">
            <img src="@/assets/images/users/user2.jpg" alt="Julia" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg">
        <v-list-item
          class="pa-3 mb-2"
          v-for="(item, i) in userprofile"
          :key="i"
          :value="item"
          :title="item.title"
          :subtitle="item.desc"
          rounded="lg"
        >
         
        </v-list-item>
        <v-btn block color="secondary" variant="contained" class="mt-4 py-4"
          >Logout</v-btn
        >
      </v-list>
    </v-menu>
  </div>
</template>
