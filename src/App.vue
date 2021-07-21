<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "topimage">
        <img src = "./assets/charlesface.jpg" class="pull-left" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      </div>
      <div class = "toptext">
        <h1>Charles Ingulli</h1>
        <h3>charlesfi@outlook.com</h3>
        <a href="CV.1.10.2021.pdf">Curriculum Vitae</a>
        <div class = "icons">
         <a href="https://www.linkedin.com/in/charles-ingulli-ci111/"><img src="./assets/linkedin23px.svg" style="margin:10px 5px 5px 5px; width:23px; height:auto;"/></a>
         <a href="https://github.com/ci2131a"><img src="./assets/ghicon.svg" style="margin:10px 5px 5px 5px; width:23px; height:auto;"/></a>
         <img src="./assets/PL23px.svg" style="margin:10px 5px 5px 5px; width:auto; height:23px;">
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
  /*line-height: 20px;*/
  margin: 0px;
}
h3 {
  font-size: 16px;
  /*line-height: 3px;*/
  font-weight:normal; 
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color:  #000000;
  margin-top: 60px;
}
.toprow {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
a {
  /*color: #42b983;*/
  color: #ff8000;
}
</style>

<!--  color: #2c3e50; -->
<!--  background-color: #d3d3d3; -->
