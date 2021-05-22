# vue-mobile-sized-view

[![NPM](https://nodei.co/npm/vue-mobile-sized-view.png)](https://nodei.co/npm/vue-mobile-sized-view/)

> Responsive Mobile-sized Wrapper for Vuejs - Easily prototype your mobile-sized web apps with desktop support  

> This project's source and idea are fully based on [`react-mobile-sized-view`](https://github.com/junhoyeo/react-mobile-sized-view)  
> Special thanks to [@junhoyeo](https://github.com/junhoyeo)

## 🚀 Demo & Examples
> Find out [here](https://github.com/junhoyeo/react-mobile-sized-view#-examples)

## 📦 Usage

```bash
yarn add vue-mobile-sized-view
```

```ts
import Vue from 'vue';
import VueMobileSizedView from 'vue-mobile-sized-view';

export default Vue.extend({
  name: 'ComponentA',
  components: {
    VueMobileSizedView
  },
  data () {
    return {
      backgroundColor: "#f6dadb",
      screenBackgroundColor: "#fefefe",
      screenLightShadow: "-31px -31px 62px #FAE0E0",
      screenDarkShadow: "31px 31px 62px #EAB6BE",
      isRounded: true,
    };
  }
});
```

```html
<template>
  <vue-mobile-sized-view
    :background-color="backgroundColor"
    :screen-background-color="screenBackgroundColor"
    :screen-light-shadow="screenLightShadow"
    :screen-dark-shadow="screenDarkShadow"
    :is-rounded="isRounded">
    <div>Replace here with your contents.</div>
  </vue-mobile-sized-view>
</template>
```
