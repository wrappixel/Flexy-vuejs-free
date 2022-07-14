<script setup lang="ts">
import { ref } from "vue";

const select = ref("March");
const items = ref(["March", "April", "May", "June"]);

const monthtable = ref([
  {
    id: 1,
    activestate: "",
    leadname: "Sunil Joshi",
    leademail: "Web Designer",
    projectname: "Elite Admin",
    statuscolor: "blue lighten-1 white--text",
    statustext: "Low",
    money: "$3.9K",
  },
  {
    id: 2,
    activestate: "",
    leadname: "Andrew",
    leademail: "Project Manager",
    projectname: "Real Homes",
    statuscolor: "info",
    statustext: "Medium",
    money: "$23.9K",
  },
  {
    id: 3,
    activestate: "",
    leadname: "Bhavesh patel",
    leademail: "Developer",
    projectname: "MedicalPro Theme",
    statuscolor: "warning",
    statustext: "High",
    money: "$12.9K",
  },
  {
    id: 4,
    activestate: "",
    leadname: "Nirav Joshi",
    leademail: "Frontend Eng",
    projectname: "Elite Admin",
    statuscolor: "error",
    statustext: "Low",
    money: "$10.9K",
  },
]);
</script>

<template>
  <v-card flat class="w-100 h-100">
    <v-card-text>
      <div class="d-sm-flex align-center">
        <div>
          <h2 class="title text-h6 font-weight-medium">Product Performance</h2>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-select
            v-model="select"
            :items="items"
            variant="outlined"
            dense
            hide-details
          ></v-select>
        </div>
      </div>
      <v-table class="month-table mt-7">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="font-weight-medium text-subtitle-1">Id</th>
              <th class="font-weight-medium text-subtitle-1">Assigned</th>
              <th class="font-weight-medium text-subtitle-1">Name</th>
              <th class="font-weight-medium text-subtitle-1">Priority</th>
              <th class="font-weight-medium text-subtitle-1">Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in monthtable"
              :key="item.leadname"
              :class="item.activestate"
              class="month-item"
            >
              <td>{{ item.id }}</td>
              <td>
                <h4 class="font-weight-bold text-no-wrap">
                  {{ item.leadname }}
                </h4>
                <h6
                  class="
                    text-no-wrap
                    font-weight-regular
                    text-body-2 text-grey-darken-1
                  "
                >
                  {{ item.leademail }}
                </h6>
              </td>
              <td>
                <h5
                  class="
                    font-weight-medium
                    text-no-wrap text-body-2 text-grey-darken-1
                  "
                >
                  {{ item.projectname }}
                </h5>
              </td>
              <td>
                <v-chip
                  class="ma-2"
                  :color="item.statuscolor"
                  size="small"
                  label
                  >{{ item.statustext }}</v-chip
                >
              </td>
              <td>
                <h4>{{ item.money }}</h4>
              </td>
            </tr>
          </tbody>
        </template>
      </v-table>
    </v-card-text>
  </v-card>
</template>
