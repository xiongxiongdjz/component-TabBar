<template>
  <tab-bar>
      <tab-bar-item link="/home" activeColor='#1da1f2'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor='#1da1f2'>
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/category-active.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart" activeColor='#1da1f2'>
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart-active.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor='#1da1f2'>
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>