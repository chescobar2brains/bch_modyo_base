<template>
  <Date-picker v-model="date" :minDate="new Date()" />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const date = ref(new Date());

    // For demo purposes assign range from the current date
    // onMounted(() => {
    //   const startDate = new Date();
    //   const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    //   date.value = [startDate, endDate];
    // });

    return {
      date,
    };
  },
};
</script>
