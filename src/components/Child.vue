<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="msg" @input="inputChange"/>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data: function () {
    console.log(this)
    return {
      msg: '123123'
    }
  },
  methods: {
    inputChange: function (msg) {
      console.log(msg)
    }
  }
}
</script>