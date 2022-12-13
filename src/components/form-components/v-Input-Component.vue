<template>
  <v-text-field
    :rules="rules"
    label="Example Label"
    variant="outlined"
  ></v-text-field>
</template>

<script>
export default {
  data: (props) => ({
    rules: [
      (value) => !!value || props.errormsg,
      (value) => (value || "").length <= 15 || "Max 20 caracteres",
    ],
  }),
  props: {
    errormsg: {
      type: String,
    },
  },
};
</script>

<style>
.v-field__outline__notch {
  border-width: 0 !important;
}

.v-field__outline__start {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.v-field__outline__end {
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
}

label.v-field--focused .v-label .v-field-label {
  color: black;
}
</style>
