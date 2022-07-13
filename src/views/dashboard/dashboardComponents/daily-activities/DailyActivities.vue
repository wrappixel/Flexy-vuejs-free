<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
</script>

<template>
  <v-card class="w-100">
    <v-card-text>
      <div class="d-flex align-center mb-5">
        <h2 class="title text-h6 font-weight-medium">Daily Activities</h2>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-menu bottom left>
            <template v-slot:activator="{ props }">
              <v-btn icon color="inherit" v-bind="props">
                <vue-feather type="more-horizontal" size="20"></vue-feather>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <!-- timeline -->
      <v-timeline class="theme-timeline">
        <v-timeline-item dot-color="success" fill-dot size="x-small">
          <template v-slot:opposite>
            <span class="title text-body-2 font-weight-bold">09.50</span>
          </template>
          <v-card-title class="text-subtitle-2 font-weight-medium text-grey-darken-1"
            >Meeting with John
          </v-card-title>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" fill-dot size="x-small">
          <template v-slot:opposite>
            <span class="title text-body-2 font-weight-bold">09.46</span>
          </template>
          <v-card-title class="text-subtitle-2 font-weight-medium text-grey-darken-1"
            >Payment received of $385.90
          </v-card-title>
        </v-timeline-item>
        <v-timeline-item dot-color="secondary" fill-dot size="x-small">
          <template v-slot:opposite>
            <span class="title text-body-2 font-weight-bold">09.47</span>
          </template>
          <v-card-title class="text-subtitle-2 font-weight-medium text-grey-darken-1"
            >Project Meeting
          </v-card-title>
        </v-timeline-item>
        <v-timeline-item dot-color="warning" fill-dot size="x-small">
          <template v-slot:opposite>
            <span class="title text-body-2 font-weight-bold">09.48</span>
          </template>
          <v-card-title class="text-subtitle-2 font-weight-medium text-grey-darken-1"
            >New Sale recorded #ML-3467
          </v-card-title>
        </v-timeline-item>
        <v-timeline-item dot-color="error" fill-dot size="x-small">
          <template v-slot:opposite>
            <span class="title text-body-2 font-weight-bold">09.49</span>
          </template>
          <v-card-title class="text-subtitle-2 font-weight-medium text-grey-darken-1"
            >Payment was made to Michael Anderson
          </v-card-title>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>