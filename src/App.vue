<template>
  <div id="app">
    <img alt="Charles logo" src="./assets/PL.png" style="width:200px;">
    <CI msg="Charles Ingulli"/>
    <contact msg="charlesfi@outlook.com"/>
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
  color: #2c3e50;
  margin-top: 60px;
  background-color: #d3d3d3;
}
</style>
