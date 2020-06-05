<template>
  <div id="app">
    <router-view />
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" />
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" />
        <img slot="item-icon-active" src="./assets/img/tabbar/category-active.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" />
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart-active.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" />
        <img slot="item-icon-active" src="./assets/img/tabbar/profile-active.svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
