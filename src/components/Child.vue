<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="msg" @input="inputChange"/>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      msg: 'this is child'
    }
  },
  methods: {
    inputChange: function () {
      this.$emit('upMethod', this.msg)
    }
  }
}
</script>