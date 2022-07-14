<script setup lang="ts">
import { ref, onMounted } from "vue";
import { SalesOverviewData } from "./SalesOverviewData";

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});
</script>


<template>
  <!-- ------------------------------------ -->
  <!-- html -->
  <!-- ------------------------------------ -->
  <v-card>
    <v-card-text class="pa-7">
      <div class="d-sm-flex align-center mb-5">
        <div>
          <h3 class="text-h6 title font-weight-medium">Sales Overview</h3>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div class="d-flex align-center">
            <div class="d-flex align-center px-2">
              <span class="text-primary">
                <span class="text-overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="font-weight-regular">Ample</span>
              </span>
            </div>
            <div class="d-flex align-center px-2">
              <span class="text-secondary">
                <span class="text-overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="font-weight-regular">Pixel Admin</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="elementVisible">
        <apexchart
          type="bar"
          height="280px"
          :options="SalesOverviewData.chartOptions"
          :series="SalesOverviewData.series"
        ></apexchart>
      </div>
    </v-card-text>
  </v-card>
</template>


