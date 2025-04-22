<script setup>
import Logo from "@/assets/images/logos/logo.svg";

</script>
<template>
  <div class="logo">
      <RouterLink to="/">
          <img :src="Logo" alt="logo" />
      </RouterLink>
  </div>
</template>
