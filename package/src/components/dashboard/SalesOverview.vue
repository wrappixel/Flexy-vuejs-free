<script setup lang="ts">
import { computed } from 'vue';
const chartOptions = computed(() => {
    return {
        series: [
    {
      name: "Ample Admin",
      data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
    },
    {
      name: "Pixel Admin",
      data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
    },
  ],
  chartOptions: {
    grid: {
      show: false,
      borderColor: "transparent",
      padding: { left: 0, right: 0, bottom: 0 },
    },
    plotOptions: {
      bar: { horizontal: false, columnWidth: "42%", borderRadius: 5 },
    },
    colors: ['rgba(var(--v-theme-primary))', 'rgba(var(--v-theme-secondary))'],
    fill: { type: "solid", opacity: 1 },
    chart: {
      type: "bar",
      height: 270,
      offsetX: -15,
      toolbar: { show: false },
      foreColor: "#adb0bb",
      fontFamily: "DM sans",
      sparkline: { enabled: false },
    },
    dataLabels: { enabled: false },
    markers: { size: 0 },
    legend: { show: false },
    xaxis: {
      type: "category",
      categories: ["Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      min: 100,
      max: 400,
      tickAmount: 3,
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: { theme: "dark" },
  },
    };
});
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between pt-sm-2">
                <div><v-card-title class="card-title">Sales Overview</v-card-title></div>
                <div class="ms-auto">
                    <div class="d-flex align-center">
                        <div class="d-flex align-center px-2">
                            <span class="text-primary">
                                <span class="text-overline">
                                    <i class="mdi mdi-brightness-1 mx-1"></i>
                                </span>
                                <span class="text-subtitle-1">Ample</span>
                            </span>
                        </div>
                        <div class="d-flex align-center px-2">
                            <span class="text-secondary">
                                <span class="text-overline">
                                    <i class="mdi mdi-brightness-1 mx-1"></i>
                                </span>
                                <span class="text-subtitle-1">Pixel Admin</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <apexchart type="bar" height="370px" :options="chartOptions.chartOptions" :series="chartOptions.series"> </apexchart>
            </div>
        </v-card-item>
    </v-card>
</template>
