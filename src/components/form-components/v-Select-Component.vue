<template>
  <v-select
    :items="items"
    label="Compact"
    density="compact"
    variant="outlined"
  ></v-select>
</template>

<script>
export default {
  data: () => ({
    items: ["Example-1", "Example-2", "Example-3", "Example-4"],
  }),
};
</script>
