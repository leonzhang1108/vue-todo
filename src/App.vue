<template>
  <div id="app">
    <Menu/>
    <div class="content-wrap">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
  height: 100%;
}
.content-wrap {
  margin-left: 200px;
}
.router-links a {
  display: inline-block;
  background: #e8e8e8;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  width: 100px;
}
.router-links a.router-link-active {
  background-color: #3affff;
}
</style>
