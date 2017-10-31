<template>
  <div>
    <div v-for="msg in msgs">
      {{ msg }}
    </div>
    <template v-for="msg in msgs">
      <Child :child-msg='msg' @upMethod='changeMsg'/>
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
      msgs: ['111', '222', '333']
    }
  },
  methods: {
    changeMsg: function (msg) {
      console.log(msg)
    }
  }
}
</script>
