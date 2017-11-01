<template>
  <div class="child-item">
    <slot name="header"></slot>
    <h3 @click="childClick">child{{ index + 1 }}: {{ msg.content }}</h3>
    <input v-model="msg.content" test-content='true'/>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'ChildList',
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

<style>
  .child-item {
    margin-bottom: 10px;
    padding: 10px 0;
    border: 1px solid #ccc;
  }
</style>
