<template>
  <div>
    <h3>child: {{ msg.content }}</h3>
    <input v-model="msg.content" />
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: ['child-msg'],
  data: function () {
    return {
      msg: this.childMsg
    }
  }
}
</script>