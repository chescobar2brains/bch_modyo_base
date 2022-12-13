const { defineConfig } = require('@vue/cli-service');
const { VuetifyPlugin } = require("webpack-plugin-vuetify");

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new VuetifyPlugin({
        styles: { configFile: "src/settings.scss" },
      }),
    ],
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
});
