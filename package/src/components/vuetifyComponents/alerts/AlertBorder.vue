<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Border -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The
      <span class="font-weight-bold">border</span>
      prop adds a simple border to one of the 4 sides of the alert. This can be
      combined props like with
      <span class="font-weight-bold">color, dark,</span>
      and
      <span class="font-weight-bold">type</span> to provide unique accents to
      the alert.
    </p>
    <div class="mt-4">
      <v-alert class="mb-3" border="top" color="success" dark
        >I'm an alert with a top border and success color</v-alert
      >
      <v-alert class="mb-3" border="right" color="info" dark
        >I'm an alert with a right border and info color</v-alert
      >
      <v-alert class="mb-3" border="bottom" color="success" dark
        >I'm an alert with a bottom border and success color</v-alert
      >
      <v-alert border="left" color="info" dark
        >I'm an alert with a border left type info</v-alert
      >
    </div>
  </div>
</template>
