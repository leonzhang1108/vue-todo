<template>
  <div>
    <div v-for="msg in msgs">
      <h1>parent: {{ msg.content }}</h1>
    </div>
    <template v-for="msg in msgs">
      <Child :child-msg='msg' />
    </template>
  </div>
</template>

<script>
import Child from '@/components/Child'
export default {
  name: 'ComponentDemo',
  components: {
    Child
  },
  data () {
    return {
      msgs: [{
        content: 'first msg'
      }, {
        content: 'second msg'
      }, {
        content: 'thrid msg'
      }]
    }
  },
  watch: {
    msgs: {
      handler (newMsgs, oldMsgs) {
        newMsgs.forEach(msg => {
          console.log(msg.content)
        })
      },
      deep: true
    }
  }
}
</script>
