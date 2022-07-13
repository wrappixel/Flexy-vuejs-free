<script setup lang="ts">
import { ref } from "vue";
import BaseCard from "@/components/BaseCard.vue";

import MenusAnchor from "@/components/vuetifyComponents/menus/MenusAnchor.vue";
import MenusHover from "@/components/vuetifyComponents/menus/MenusHover.vue";
import MenusActivatorTooltip from "@/components/vuetifyComponents/menus/MenusActivatorTooltip.vue";
import MenusPopover from "@/components/vuetifyComponents/menus/MenusPopover.vue";

</script>

<template>
  <v-row>
    <v-col cols="12" sm="12">
      <BaseCard heading="Anchor">
        <MenusAnchor />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Hover">
        <MenusHover />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Activator and tooltip">
        <MenusActivatorTooltip />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Popover">
        <MenusPopover />
      </BaseCard>
    </v-col>
  </v-row>
</template>
