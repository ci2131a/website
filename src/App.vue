<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "topimage">
        <img src = "./assets/charlesface.jpg" class="pull-left" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      </div>
      <div class = "toptext">
        <h1>Charles Ingulli</h1>
        <h4>charlesfi@outlook.com</h4>
      </div>
    </div>
    <CI/>
  </div>
</template>


<script>
import CI from "./components/CI.vue";

export default {
  name: "App",
  components: {
    CI
  }
};
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
.toprow {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
</style>

<!--  color: #2c3e50; -->
<!--  background-color: #d3d3d3; -->
