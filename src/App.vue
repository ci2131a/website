<template>
  <div id="app">
    <img alt="Charles logo" src="./assets/PL.png" style="width:200px;">
    <CI msg>
  </div>
</template>

<script>
import CI from './components/CI.vue'

export default {
  name: 'App',
  components: {
    CI
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:  #000000;
  margin-top: 60px;
}
</style>

<!--  color: #2c3e50; -->
<!--  background-color: #d3d3d3; -->
