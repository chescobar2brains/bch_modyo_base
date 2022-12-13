import { createApp } from 'vue';
import App from './App.vue';
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// Datepicker
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";

// Multilenguaje
import i18n from './i18n'

const vuetify = createVuetify({});

const requireComponent = require.context(
  "./components/form-components",
  false,
  /[A-Z]\w+\.(vue|js)$/
);

const app = createApp(App).use(i18n).use(vuetify);

app.component("Date-picker", Datepicker);

requireComponent.keys().forEach((filename) => {
  const componentConfig = requireComponent(filename);
  const componentName = upperFirst(
    camelCase(filename.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  app.component(componentName, componentConfig.default || componentConfig);
});

app.mount(`#${process.env.VUE_APP_WIDGET_NAME}`)
