<script lang="ts">
import Vue from 'vue';
import VueMobileSizedView from '@/vue-mobile-sized-view.vue';

export default Vue.extend({
  name: 'ServeDev',
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
</script>

<template>
  <vue-mobile-sized-view
    :background-color="backgroundColor"
    :screen-background-color="screenBackgroundColor"
    :screen-light-shadow="screenLightShadow"
    :screen-dark-shadow="screenDarkShadow"
    :is-rounded="isRounded" />
</template>
