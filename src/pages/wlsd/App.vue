<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "topimage">
        <img src = "@/assets/wlsd-logo.png" style="margin:20px 20px 20px 20px; width:200px; height:auto;" />
      </div>
      <div class = "toptext">
        <h1>Wrangling Longitudinal Survival Data (wlsd)</h1>
      </div>
    </div>
      <div class = main>
    <b-container class = "maincontainer">
    <div class = "container">
    <h4>Introduction</h4>
    <p>Survival analysis is a statistical discipline for evaluating the time to event occurrence. The event may be death, the onset of an illness, or the failure of a machine. These events also need not occur only once. Different models can look at repeated events or multiple events. Data formats exist to supply information as input to these models in order to obtain results. However, different models may use different data formats to supply similar information. These formats may include counting process format where events are organized by a column-wise time interval or long format where time intervals are created row-wise. Performing analysis using one or more of the relevant models requires intimate knowledge of the respective data format. Data preparation becomes an important but time consuming step in model building and data analysis. </p>
    <p>The wlsd package (wrangling longitudinal survival data) is an R package that provides a set of functions for transitioning between different usable data formats for survival analysis. This project began as tangential work to some graduate research. As the research progressed, the tailored code for data formatting was constantly rewritten to accommodate the latest needs. The code was then generalized into reusable functions that were bundled into an R package to be made more readily accessible to other projects and other researchers. Currently, the package does not exist as one of R’s supported packages on the Comprehensive R Archive Network (CRAN) but may be available as such in the future. As of right now, the package exists on GitHub and can be installed from there. The <a href= "https://github.com/ci2131a/wlsd">GitHub repository</a> has all available source code as well as some examples. For more detailed information, see the package README or vignette and stay tuned for any future updates. </p>
    </div>
    </b-container>
    <div class = "feet">
      <footer>&copy; Copyright 2024 Charles Ingulli</footer>
    </div>
  </div>
  </div>
</template>


<script>

export default {
  name: "App"
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color:  #000000;
  margin-top: 60px;
}

h1 {
  font-size: 42px;
  /*line-height: 20px;*/
  margin: 0px;
}

h2, h4 {
  text-align: center;
}

h3 {
  font-size: 16px;
  /*line-height: 3px;*/
  font-weight:normal; 
  margin: 0px;
}

.toprow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.toptext {
  text-align: center;
}

.maincontainer {
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
  align-items: center;
}


/* Mobile */
.container {
    padding: 1%;
}

/* Tablet */
@media (min-width:600px) {
    .container {
        padding: 1%;
    }
}

/* Desktop */
@media (min-width:900px) {
    .container {
        padding-left: 15%;
        padding-right: 15%;
    }
}



.imagerow {
  text-align: center;
}

.feet {
  text-align: center;
}

p {
    display: block;
}


a {
  /*color: #42b983;*/
  color: #ff8000;
}

html {
  /*background-color: #F0F0F0;*/
}

</style>

<!--  color: #2c3e50; -->
<!--  background-color: #d3d3d3; -->
