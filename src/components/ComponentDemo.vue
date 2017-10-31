<template>
  <div>
    <h1>{{ msg }}</h1>
    <Child :child-msg='msg' @upMethod='changeMsg'/>
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
      msg: 'this is ComponentDemo'
    }
  },
  methods: {
    changeMsg: function (msg) {
      this.msg = 'parents: ' + msg
    }
  }
}
</script>
