<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The
      <span class="font-weight-bold">type</span> prop
      provides 4 default <code>v-alert</code> styles:
      <span class="font-weight-bold"
        >success, info, warning,</span
      >
      and <span class="font-weight-bold">error</span>.
      Each of these styles provide a default icon and color. The default colors
      can be configured globally by customizing Vuetify's theme.
    </p>
    <div class="mt-4">
      <v-alert class="mb-3" type="success">I'm a success alert.</v-alert>

      <v-alert class="mb-3" type="info">I'm an info alert.</v-alert>

      <v-alert class="mb-3" type="warning">I'm a warning alert.</v-alert>

      <v-alert type="error">I'm an error alert.</v-alert>
    </div>
  </div>
</template>
