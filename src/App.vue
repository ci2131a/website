<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "topimage">
        <img src = "./assets/charlesface.jpg" class="pull-left" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      </div>
      <div class = "toptext">
        <h1>Charles Ingulli</h1>
        <h3>charlesfi@outlook.com</h3>
        <a href="My_CV.pdf">Curriculum Vitae</a>
        <div class = "icons">
         <a href="https://github.com/ci2131a"><img src="./assets/ghicon.svg" style="margin:10px 5px 5px 5px; width:23px; height:auto;"/></a>
         <img src="./assets/PL.png" style="margin:10px 5px 5px 5px; width:auto; height:23px;">
        </div>
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
h1 {
  font-size: 42px;
  line-height: 20px;
}
h3 {
  font-size: 16px;
  line-height: 3px;
  font-weight:normal; 
}
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
