<template>
  <div class="bg-primary-ultra_dark">
    <div
      class="flex items-center justify-center gap-2 text-xl text-backup-yellow bg-brand-dark"
    >
      <span class="icos-pagos-masivos"></span>
      <p class="">{{ $t('message') }}</p>
    </div>
  </div>
</template>

<script setup>
import API from "@/api/newModyoAPI";

const newApi = API("personas", "nuevo-beneficio");

const localeLng = window.liquid.languageSelected;

language: localeLng || "es";

try {
  newApi.get();
} catch (error) {}
</script>

<script></script>

<style lang="scss" scoped></style>
