<template>
  <div class="topBar">
    <span class="logo">V</span>
    <div class="menu">
      <li v-for="menu in menus" class="menu-item">{{ menu }}</li>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopBar',
  data() {
    return {
      menus: ['主页', '博客', '标签', '分类', '联系']
    };
  }
});
</script>

<style lang="scss" scoped>
.topBar {
  width: 100%;
  padding: 3px;
  display: flex;
  justify-content: space-between;

  .logo {
    position: relative;
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: .5px solid darken(white, 20);
    color: darken(white, 20);
    justify-content: center;
    align-items: center;
    transition: all .5s;
    margin: 0 0 0 20px;
    cursor: pointer;
    font-size: 24px;

    &:hover {
      border-color: lighten(white, 30);
      color: lighten(white, 30);
    }
  }

  .menu {
    color: #c3c3c3;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 10px 0 0;

    .menu-item {
      font-size: 16px;
      font-weight: 100;
      cursor: pointer;
      margin-right: 20px;
      transition: all 250ms;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 1px;
        bottom: -5px;
        left: 0;
        background-color: #fff;
        transition: all 400ms;
      }

      &:hover {
        color: white;

        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>