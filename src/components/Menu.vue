<template>
  <div class='menu-wrap'>
    <router-link 
      v-for='page in pages' 
      class="item"
      key='$index' 
      :to="page.router" >
      {{page.name}}
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data: function () {
    return {
      pages: [
        {
          router: '/',
          name: 'Todo'
        }, {
          router: '/componentdemo',
          name: 'componentdemo'
        }, {
          router: '/tree',
          name: 'tree'
        }, {
          router: '/canvas',
          name: 'canvas'
        }
      ]
    }
  }
}
</script>
<style>
.menu-wrap {
  position: fixed;
  background: aqua;
  float: left;
  width: 200px;
  height: 100%;
}
.item {
  display: block;
}
</style>

