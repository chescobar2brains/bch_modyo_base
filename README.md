# VUE CLI - Modyo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and Push to Modyo
```
npm run modyo-push
```

## Step by Step
* Update own tokens and .env variables:
    * MODYO_SITE_HOST: Site to which the widget will be sent
    * VUE_APP_WIDGET_NAME: ID that will be used to render the component in our html
    * MODYO_WIDGET_NAME: Name of our widget and how it will be called in the modyo platform
* Create Component, in its corresponding folder
* Import and add it in App.Vue
* Check it with the project (localhost)