<script lang="ts">
import Vue from 'vue';
import { Screen, ScreenWrapper, Layout } from './vue-mobile-sized-view.styles';

export default /*#__PURE__*/Vue.extend({
  name: 'VueMobileSizedView', // vue component name
  props: [
    'backgroundColor', 'screenBackgroundColor', 'screenLightShadow', 'screenDarkShadow', 'isRounded'
  ],
  components: {
    'mv-screen': Screen,
    'mv-screen-wrapper': ScreenWrapper,
    'mv-layout': Layout,
  },
});
</script>

<template>
  <mv-layout
    :background-color="backgroundColor">
    <mv-screen-wrapper>
      <mv-screen
        :screen-background-color="screenBackgroundColor"
        :screen-light-shadow="screenLightShadow"
        :screen-dark-shadow="screenDarkShadow"
        :is-rounded="isRounded">
        <slot></slot>
      </mv-screen>
    </mv-screen-wrapper>
  </mv-layout>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
