<template>
  <v-text-field :rules="rules" label="Rut" variant="outlined"></v-text-field>
</template>

<script>
import { validateRut } from "@fdograph/rut-utilities";

export default {
  data: () => ({
    rules: [
      (value) => !!value || "Campo requerido.",
      (value) => validateRut(value) || "Rut incorrecto",
    ],
  }),
};
</script>
