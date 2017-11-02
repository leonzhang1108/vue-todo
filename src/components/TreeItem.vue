<template>
  <ul>
    <li v-for='(a, i) in msg'>
      <div class="text" @click.stop='show[i].state=!show[i].state'>{{a.text}}</div>
      <tree-items :msg='a.next' v-if='show[i].state' ></tree-items>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tree-items',
  props: ['msg'],
  data () {
    let show = []
    let length = this.msg ? this.msg.length : 0
    for (let i = 0; i < length; i++) {
      show.push({ state: false })
    }
    return { show }
  }
}
</script>
<style>
ul {
  -webkit-padding-start: 24px;
}
.text {
  text-align: left;
  cursor: pointer;
}
</style>


