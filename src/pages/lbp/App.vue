<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "toptext">
        <h1>Low Back Pain Analysis</h1>
      </div>
    </div>
      <div class = main>
    <b-container class = "container1">
    <div class = "container2">


    <p> During the summer between my undergraduate and graduate studies, I began working on a project to analyze low back pain (LBP) within the context of multi-state models (MSMs) which led to <a href = "https://doi.org/10.57912/23856978.v1">my master's thesis</a>.



    I am currently in the process of revising some of the analysis for further publication. Since that is not finished, I will reproduce some of my thesis results below. 
    </p>

    <p> My <a href = "https://ww2.amstat.org/meetings/sdss/2020/onlineprogram/AbstractDetails.cfm?AbstractID=308486">abstract</a> was accepted for the 2020 Symposium on Data Science & Statistics (SDSS) virtual poster session that gave an overview of the analysis techniques used in the thesis.</p>
    
    
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


.container1 {
  display: flex;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.container2 {
  text-align: left;
}

.container3 {
  text-align: left;
}



.feet {
  text-align: center;
  padding-top: 3rem;
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

ul{

}

li {
  text-align: left;
  padding-bottom: 1em;
}



/* Mobile */
.container1 {
    padding: 14px;
}
.toptext {
     text-align: center;
}

/* Tablet */
@media (min-width:600px) {
    .container1 {
        padding: 20px;
    }
    .toptext {
         text-align: left;
    }
    .container2 {
       text-align: left;
       padding-left: 12%;
       padding-right: 12%;
    }
}

/* Desktop */
@media (min-width:1100px) {
    .container1 {
        padding: 24px;
    }
    .toptext {
         text-align: left;
    }
    .container2 {
      text-align: left;
      padding-left: 22%;
      padding-right: 22%;
    }
    .container3 {
       text-align: left;
       padding-left: 8%;
       padding-right: 8%;
    }
}


</style>

<!--  color: #2c3e50; -->
<!--  background-color: #d3d3d3; -->
