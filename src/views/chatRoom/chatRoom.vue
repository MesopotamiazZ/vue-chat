<template>
  <div class="chatRoom">
    chatRoom
    <bubble :message="'我的一生最美好的场景就是遇见你，在人海茫茫中，看到你的消息，陌生又熟悉'" 
    :isSelf="false"
    :fontSize="15"></bubble>
  </div>
</template>
<script>
  import bubble from '../components/bubble'
  export default {
    name: 'chatRoom',
    components: {
      bubble
    }
  }
</script>
<style lang="less">

</style>
