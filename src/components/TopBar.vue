<template>
  <div class="topBar">
    <span class="logo">V</span>
    <input type="search" placeholder="Search...">
    <div class="menu">
      <a v-for="menu in menus" :class="{'menu-item':true, 'activeRoute': activeRoute === menu.route?true:false}"
         :href="menu.route">{{ menu.tag }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopBar',
  data() {
    return {
      menus: [
        {route: '/', tag: '主页'},
        {route: '/blog', tag: '博客'},
        {route: '/label', tag: '标签'},
        {route: '/classification', tag: '分类'},
        {route: '/contact', tag: '联系'}
      ],
      activeRoute: null
    };
  },
  watch: {
    '$route': {
      handler(route) {
        this.activeRoute = this.$route.path;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.topBar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  z-index: 2;

  .logo {
    position: relative;
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: .5px solid darken(black, 20);
    color: darken(black, 20);
    justify-content: center;
    align-items: center;
    transition: all .5s;
    margin: 3px 0 0 20px;
    cursor: pointer;
    font-size: 24px;

    &:hover {
      border-color: lighten(black, 30);
      color: lighten(black, 30);
    }
  }

  input[type="search"] {
    position: absolute;
    height: 40px;
    width: 400px;
    border-radius: 20px;
    top: 10px;
    left: 300px;
    outline: none;
    padding: 0 20px;

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/328e4d97f9d0d68ea04e872f68e508e3.png) no-repeat;
      background-size: contain;
    }
  }

  .menu {
    color: #000;
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
        width: 0px;
        height: 1px;
        bottom: -5px;
        left: 0;
        background-color: #000;
        transition: all 400ms;
      }

      &.activeRoute::after {
        width: 100%;
      }

      &:hover {
        color: black;

        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>