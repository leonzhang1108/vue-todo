<template>
  <ul>
    <li class="tree-li" v-for='(a, i) in msg'>
      <div class="text" >
        <span 
          class="arrow"
          @click.stop='show[i].state =! show[i].state'
          v-if="a.next && a.next.length !== 0"
        > 
          {{ show[i].state ? '↓' : '→' }}
        </span>
        <span class="content">{{a.text}}</span>
        <span class="add-btn" @click.stop='' v-if="a.next && a.next.length !== 0">+</span>
      </div>
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


