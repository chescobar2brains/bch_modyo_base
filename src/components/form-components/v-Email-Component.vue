<template>
  <v-text-field :rules="rules" variant="outlined"></v-text-field>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Campo requerido.",
      (value) => (value || "").length <= 20 || "Max 20 characters",
      (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "e-mail invalido";
      },
    ],
  }),
};
</script>
