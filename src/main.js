import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
createApp(App).use(i18n).mount(`#${process.env.VUE_APP_WIDGET_NAME}`)

