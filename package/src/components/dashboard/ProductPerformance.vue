<script setup lang="ts">
import {productPerformance} from '@/data/dashboard/dashboardData';
import { ref } from 'vue';
const select = ref('March 2025');
const items = ref(['March 2025', 'April 2025', 'May 2025', 'June 2025']);
</script>
<template>
    <v-card elevation="10" class="">
        <v-card-item class="pa-6">
        <div class="d-flex align-center mb-1">
                <div>
                    <h3 class="card-title">Product Performance</h3>
                </div>

                <div class="ms-auto">
                    <v-select v-model="select" :items="items" hide-details density="compact"  variant="outlined" rounded="md"></v-select>
                </div>
            </div>
        <v-table class="month-table">
            <thead>
                <tr>
                    <th class="text-subtitle-1 font-weight-bold">Id</th>
                    <th class="text-subtitle-1 font-weight-bold">Assigned</th>
                    <th class="text-subtitle-1 font-weight-bold">Name</th>
                    <th class="text-subtitle-1 font-weight-bold">Priority</th>
                    <th class="text-subtitle-1 font-weight-bold text-right">Budget</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in productPerformance" :key="item.name" class="month-item">
                    <td>
                        <p class="text-15 font-weight-medium">{{ item.id }}</p>
                    </td>
                    <td>
                        <div class="">
                                <h6 class="text-subtitle-1 font-weight-bold">{{ item.name }}</h6>
                                <div class="text-13 mt-1 text-muted opacity-90">{{ item.post }}</div>
                        </div>
                    </td>
                    <td>
                        <h6 class="text-body-1 text-muted">{{ item.pname }}</h6>
                    </td>
                    <td>
                        <v-chip  :class="'rounded-md bg-' + item.statuscolor "   size="small" >{{
                            item.status
                        }}</v-chip>
                    </td>
                    <td>
                        <h6 class="text-subtitle-1 text-right">{{ item.budget }}</h6>
                    </td>
                </tr>
            </tbody>
        </v-table>
        </v-card-item>
    </v-card>
</template>
