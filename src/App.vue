<template>
  <div id="app">
    <chat-header class="chat-header"></chat-header>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import chatHeader from '@/views/chatHeader'
export default {
  name: 'app',
  components: {
    chatHeader
  }
}
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .chat-header {
    min-height: 50px;
    background: lightpink;
  }
  .content-wrapper {
    flex: auto;
    min-height: 400px;
    background: lightblue;
  }
  footer {
    min-height: 50px;
    background: lightpink;
  }
</style>
