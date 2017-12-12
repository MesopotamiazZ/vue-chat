<template>
  <div class="login">
    <div class="login-content">
      <span class="content-title">请输入昵称</span>
      <Input v-model="nickname"></Input>
      <Button type="success" long @click="goToChat">进入聊天</Button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        nickname: ''
      }
    },
    methods: {
      goToChat () {
        this.$router.push('/chat')
      }
    }
  }
</script>
<style lang="less">
  .login {
    height: 87vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .login-content {
      .content-title {
        display: block;
        font-size: 20px;
        text-align: center;
      }
      .ivu-input-wrapper {
        display: block;
        width: 350px;
        margin-top: 25px;
      }
      .ivu-btn-long {
        width: 350px;
        display: block;
        margin-top: 25px;
      }
    }
  }
</style>
