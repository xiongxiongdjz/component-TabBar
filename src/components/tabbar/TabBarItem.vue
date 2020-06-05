<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!ifActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active: ifActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        link: String
    },
  data() {
    return {
      ifActive: false
    };
  },
  methods: {
      itemClick() {
        this.$router.replace(this.link).catch(err => err)
      }
  },
};
</script>

<style lang="" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

.active {
  color: #1da1f2;
}
</style>