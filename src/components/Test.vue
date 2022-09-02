<template>
  <div>
    <h1>Testing</h1>
  </div>
</template>

<script setup>
import API from "@/assets/helpers/newModyoAPI.js";

const newApi = API("personas", "nuevo-beneficio");

try {
  newApi.get();
} catch (error) {}
</script>

<style lang="scss" scoped>
// Using this should get you the variables
@import "../sass/color-system-bch";
h1 {
  color: $primary;
}
</style>
