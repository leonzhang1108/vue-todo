<template>
  <ul>
    <li v-for='a in msg' @click.stop='show=!show'>
      {{a.text}}
      <tree-items :msg='a.next' v-if='show' ></tree-items>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tree-items',
  props: ['msg'],
  data () {
    return {
      show: false
    }
  }
}
</script>

