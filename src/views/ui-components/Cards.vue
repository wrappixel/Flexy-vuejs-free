
<script setup lang="ts">
import { ref } from "vue";

import BaseCard from "@/components/BaseCard.vue";

import CardsProps from "@/components/vuetifyComponents/cards/CardsProps.vue";
import CardsSlots from "@/components/vuetifyComponents/cards/CardsSlots.vue";
import CardsContentWrap from "@/components/vuetifyComponents/cards/CardsContentWrap.vue";
import CardsMedia from "@/components/vuetifyComponents/cards/CardsMedia.vue";
import CardsWeather from "@/components/vuetifyComponents/cards/CardsWeather.vue";
import CardsTwitter from "@/components/vuetifyComponents/cards/CardsTwitter.vue";

</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="With Props">
        <CardsProps />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="With Slots">
        <CardsSlots />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Content Wrap">
        <CardsContentWrap />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Card Media">
        <CardsMedia />
      </BaseCard>
    </v-col>

    

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Weather Card">
        <CardsWeather />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Twitter Card">
        <CardsTwitter />
      </BaseCard>
    </v-col>
  </v-row>
</template>
