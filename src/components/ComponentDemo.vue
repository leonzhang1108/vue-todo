<template>
  <div>
    <div v-for="(msg, index) in msgs">
      <h1>parent{{ index + 1 }}: {{ msg.content }}</h1>
    </div>
    <template v-for="(msg, index) in msgs">
      <Child :child-msg='msg' :index='index' @onChildClick='childEvent'/>
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
  },
  methods: {
    childEvent: function (index) {
      console.log('lalala')
      console.log(`the index is ${index}`)
    }
  }
}
</script>
