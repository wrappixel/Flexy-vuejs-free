<script setup lang="ts">
import { ref } from "vue";

import TheSalesOverview from "./dashboardComponents/sales-overview/TheSalesOverview.vue";
import DailyActivities from "./dashboardComponents/daily-activities/DailyActivities.vue";
import ProductMonthTable from "./dashboardComponents/project-month-table/ProductMonthTable.vue";
import BlogCard from "./dashboardComponents/blog-card/BlogCard.vue";
</script>

<template>
  
  <v-row>
    <v-col cols="12" sm="12">
      <TheSalesOverview />
    </v-col>
    <v-col cols="12" lg="4">
      <DailyActivities />
    </v-col>
    <v-col cols="12" lg="8">
      <ProductMonthTable />
    </v-col>
    <BlogCard />
  </v-row>
</template>
