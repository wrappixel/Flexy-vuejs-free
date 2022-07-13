<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dencity -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <span class="font-weight-bold">density</span> prop decreases the
      height of the alert based upon 1 of 3 levels of density;
      <span class="font-weight-bold">default, comfortable, and compact</span>.
    </p>
    <div class="mt-4">
      <v-alert class="mb-3" density="compact" type="info">
        I'm a compact alert with a <strong>type</strong> of info
      </v-alert>
      <v-alert
        class="mb-3"
        density="comfortable"
        type="success"
        variant="contained-text"
      >
        I'm a comfortable alert with the <strong>text</strong> prop and a
        <strong>type</strong> of success
      </v-alert>
      <v-alert class="mb-3" border="start" density="default" type="warning">
        I'm a default alert with the <strong>border</strong> prop and a
        <strong>type</strong> of warning
      </v-alert>
      <v-alert prominent type="error" variant="outlined">
        I'm a default alert with the <strong>prominent</strong> prop and a
        <strong>type</strong> of error
      </v-alert>
    </div>
  </div>
</template>
