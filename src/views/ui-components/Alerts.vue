<script setup lang="ts">
import { ref } from "vue";
import BaseCard from "@/components/BaseCard.vue";

import AlertType from "@/components/vuetifyComponents/alerts/AlertType.vue";
import AlertBorder from "@/components/vuetifyComponents/alerts/AlertBorder.vue";
import AlertColorBorder from "@/components/vuetifyComponents/alerts/AlertColorBorder.vue";
import AlertDensity from "@/components/vuetifyComponents/alerts/AlertDensity.vue";
import AlertClosable from "@/components/vuetifyComponents/alerts/AlertClosable.vue";

</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Type">
        <AlertType/>
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Border">
        <AlertBorder />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Coloured Border">
        <AlertColorBorder />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Density">
        <AlertDensity />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Alert - Closable">
        <AlertClosable />
      </BaseCard>
    </v-col>

  </v-row>
</template>