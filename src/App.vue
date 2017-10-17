<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="router-links">
      <router-link to="/todo/all">all</router-link>
      <router-link to="/todo/done">done</router-link>
      <router-link to="/todo/notdone">not done</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 500px;
  margin: 0 auto;
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
