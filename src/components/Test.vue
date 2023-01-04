<template>
  <div class="bg-primary-ultra_dark">
    <div
      class="text-backup-yellow flex gap-2 items-center justify-center text-xl bg-brand-dark"
    >
      <span class="icos-pagos-masivos"></span>
      <p class="">Testing Minerva</p>
    </div>
  </div>
</template>

<script setup>
import API from "@/api/newModyoAPI";

const newApi = API("personas", "nuevo-beneficio");

try {
  newApi.get();
} catch (error) {}
</script>

<style lang="scss" scoped></style>
