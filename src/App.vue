<template>
  <div id="app">
    <TopBar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TopBar, Footer
  }
});
</script>

<style lang="scss" scoped></style>
