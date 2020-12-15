<template>
  <div id="app">
    <TopBar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopBar from '@/components/TopBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TopBar
  }
});
</script>

<style lang="scss" scoped>

</style>
