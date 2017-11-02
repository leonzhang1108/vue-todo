<template>
  <ul>
    <li class="tree-li" v-for='(a, i) in message'>
      <div class="text" >
        <span
          v-if="a.next && a.next.length !== 0"
          class="arrow"
          @click.stop='show[i].state =! show[i].state'
        > 
          {{ show[i].state ? '↓' : '→' }}
        </span>
        <span v-else class="arrow">●</span>
        <span class="content">{{a.text}}</span>
        <span class="add-btn" @click.stop='add(i, a)'>+</span>
      </div>
      <tree-items @add='add' :msg='a.next' v-if='show[i].state' ></tree-items>
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
    return {
      show,
      message: this.msg
    }
  },
  watch: {
    msg: {
      handler (newMsgs, oldMsgs) {
        this.show.push({state: false})
      },
      deep: true
    }
  },
  methods: {
    add: function (i, a) {
      this.$emit('add', i, a)
      this.show[i].state = true
    }
  }
}
</script>


