<template>
  <div class="home w">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '@/components/Card.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Card
  }
});
</script>

<style lang="scss" scoped>
.home {
  margin-top: 60px;
}
</style>
