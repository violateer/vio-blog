<template>
  <div class="card">
    <div class="title">
      <a href="#">我是标题我是标题</a>
      <div class="description">
        <a href="#" class="date">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          2020.01.01</a>
        <a href="#" class="date">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ren"></use>
          </svg>
          作者</a>
        <a href="#" class="date">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun"></use>
          </svg>
          评论</a>
        <a href="#" class="date">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          阅读量</a>
      </div>
    </div>
    <div class="content">
      <p>自从开始早起，每天一杯咖啡就成了标配，在我的另一篇文章《咖啡+奶》中聊过，从一开始的3+1速溶进阶到黑咖啡+鲜牛奶，这次我的咖啡体验又升级啦。入了一台胶囊咖啡机…</p>
    </div>
    <button class="btn">Read More</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: ''
});
</script>

<style lang="scss" scoped>
.card {
  width: 700px;
  height: 350px;
  //background-color: green;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 50px;
  overflow: hidden;
  box-shadow: 5px 5px 5px 5px #cacaca;

  .title {
    font-size: 32px;
    letter-spacing: 2px;
    position: absolute;
    top: 40px;
    margin-bottom: 10px;
    text-align: center;

    .description a {
      font-size: 16px;
      margin-right: 10px;
    }
  }

  .content {
    margin-top: 20px;

    p {
      font-size: 24px;
    }
  }

  .btn {
    position: absolute;
    bottom: 50px;
    width: 100px;
    height: 40px;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    cursor: pointer;
  }
}

.icon {
  color: black;
}

</style>