<template>
  <div id="chatHeader">
    <div class="header-title">
      {{titleText}}
    </div>
    <i class="icon-man" @click="goToSet"></i>
  </div>
</template>

<script>
export default {
  name: 'chatHeader',
  props: {
    titleText: {
      type: String,
      default: 'vue-chat'
    }
  },
  data () {
  },
  methods: {
    goToSet () {
      // 点击设置
    }
  }
}
</script>

<style lang="less">
  @import '~assets/less/fontIcon.less';
  #chatHeader {
    display: flex;
    justify-content: center;
    .header-title {
      display: inline-block;
      width: 100px;
      height: 100%;
      text-align: center;
      line-height: 50px;
    }
    i {
      position: absolute;
      top: 12px;
      right: 15px;
      font-size: 25px;
      cursor: pointer;
    }
  }
  // #chatHeader::after {
  //   content: '\e900';
  //   position: absolute;
  //   right: 15px;
  //   top: 12px;
  // }
</style>
