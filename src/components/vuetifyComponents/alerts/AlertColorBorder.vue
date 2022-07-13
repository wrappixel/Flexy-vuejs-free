<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Coloured Border -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The
      <span class="font-weight-bold">colored-border</span>
      prop removes the alert background in order to accent the
      <span class="font-weight-bold">border</span>
      prop. If a
      <span class="font-weight-bold">type</span> is set, it will use the types
      default color. If no <span class="font-weight-bold">color</span> or
      <span class="font-weight-bold">type</span> is set, the color will default
      to the inverted color of the applied theme (black for light and white/gray
      for dark).
    </p>
    <div class="mt-4">
      <v-alert class="mb-3" border="start" border-color="deep-purple accent-4">
        Aliquam eu nunc. Fusce commodo aliquam arcu.
      </v-alert>
      <v-alert class="mb-3" border="top" border-color="success">
        Aliquam eu nunc. Fusce commodo aliquam arcu.
      </v-alert>
      <v-alert class="mb-3" border="bottom" border-color="warning">
        Aliquam eu nunc. Fusce commodo aliquam arcu.
      </v-alert>

      <v-alert border="end" border-color="error">
        Aliquam eu nunc. Fusce commodo aliquam arcu.
      </v-alert>
    </div>
  </div>
</template>
