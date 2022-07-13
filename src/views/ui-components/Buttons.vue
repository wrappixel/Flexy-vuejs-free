<script setup lang="ts">
import { ref } from "vue";
import BaseCard from "@/components/BaseCard.vue";

import ButtonsDefault from "@/components/vuetifyComponents/buttons/ButtonsDefault.vue";
import ButtonsOutlined from "@/components/vuetifyComponents/buttons/ButtonsOutlined.vue";
import ButtonsBlock from "@/components/vuetifyComponents/buttons/ButtonsBlock.vue";
import ButtonsIcon from "@/components/vuetifyComponents/buttons/ButtonsIcon.vue";
import ButtonsRounded from "@/components/vuetifyComponents/buttons/ButtonsRounded.vue";
import ButtonsSizing from "@/components/vuetifyComponents/buttons/ButtonsSizing.vue";

</script>

<template>
  <v-row>
    <v-col cols="12" sm="12">
      <BaseCard heading="Default">
        <ButtonsDefault />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12">
      <BaseCard heading="Outlined">
        <ButtonsOutlined />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4">
      <BaseCard heading="Block">
        <ButtonsBlock />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="Icons">
        <ButtonsIcon />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="Rounded">
        <ButtonsRounded />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Button Size">
        <ButtonsSizing />
      </BaseCard>
    </v-col>
  </v-row>
</template>
