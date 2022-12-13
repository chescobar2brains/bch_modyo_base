<template>
  <div class="flex flex-col w-full">
    <label
      v-if="label"
      class="absolute bg-white ml-4 px-2 -mt-2 transition-all text-2 text-[#8393a3] peer-placeholder-shown:text-base peer-placeholder-shown:mt-4 peer-focus:text-2 peer-focus:-mt-2"
      >{{ label }}</label
    >
    <select
      :value="modelValue"
      :placeholder="label"
      class="field peer w-full h-[56px] pl-4 border-1 border-[#52677b] rounded-2 placeholder-transparent"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>
