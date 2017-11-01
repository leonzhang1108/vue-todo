<template>
  <div>
    <h3 @click="childClick">child{{ index + 1 }}: {{ msg.content }}</h3>
    <input v-model="msg.content" test-content='true'/>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    childMsg: Object,
    index: Number
  },
  data: function () {
    return {
      msg: this.childMsg
    }
  },
  methods: {
    childClick: function () {
      this.$emit('onChildClick', this.index)
    }
  }
}
</script>