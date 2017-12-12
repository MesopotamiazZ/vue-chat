<template>
  <div class="bubble" :class="{mySelf: isSelf, other: !isSelf}" :style="{fontSize: fontSize + 'px'}">
    {{message}}
  </div>
</template>
<script>
  export default {
    name: 'bubble',
    props: {
      isSelf: {
        type: Boolean
      },
      message: {
        type: String
      },
      fontSize: {
        type: Number
      }
    }
  }
</script>
<style lang="less">
  .bubble {
    display: inline-block;
    max-width: 200px;
    min-height: 30px;
    line-height: 30px;
    word-wrap: break-word;
    padding: 2px 10px;
  }
  .mySelf {
    border-radius: 4px;
    background: #D9D9D9;
  }
  .other {
    border-radius: 4px;
    background: lightgreen;
  }
</style>
