<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "topimage">
        <img src = "@/assets/charlesface.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      </div>
      <div class = "toptext">
        <h1>Charles Ingulli</h1>
        <h3>charlesfi@outlook.com</h3>
        <a href="resume.pdf">Resumé</a>
        <div class = "icons">
         <a href="https://www.linkedin.com/in/charles-ingulli/"><img src="@/assets/linkedin23px.svg" style="margin:10px 5px 5px 5px; width:23px; height:auto;"/></a>
         <a href="https://github.com/ci2131a"><img src="@/assets/ghicon.svg" style="margin:10px 5px 5px 5px; width:23px; height:auto;"/></a>
        </div>
      </div>
    </div>
    <div class = main>
    <b-container class = "container1">
    <div class = "container2">

      <p>Welcome! My name is Charles and you have stumbled upon my personal website. I am a statistician and data scientist who studied at American University (AU) and currently work as an analytical consultant. My research has largely been focused on applying various statistical models to quantitatively approach risk. I love finding new methods or math to approach an old problem in different ways. Outside of my work, I have a number of hobbies including using 3D printers to create cool and useful objects. </p>

      <p>Check out some current projects:</p>

      <div class = "container3">

      <ul>
      <li> <a href = "/lbp">Low Back Pain Research</a> - estimating the risk of low back pain and associated risk factors using Markov models. </li>
      <li> <a href = "/wlsd">Wrangling Longitudinal Survival Data (wlsd)</a> - an R package for transitioning between different survival data formats.</li>
      <li> <a href = "/printing">3D Printing</a> - designing and building a variety of objects for practical and aesthetic uses.</li>
      </ul>

      </div>
      <p>as well as some other notable items.</p>
      <div class = "container3">
      <ul>
      <li> <a href = "/faceshield">Face Shield Fabrication</a> - manufacturing approved personal protective equipment for donation to medical facilities. </li>
      <li> <a href = "https://www.american.edu/news/when-is-grad-school-worth-it.cfm">Article Quote</a> - an American University article about Graduate school for which I was interviewed. </li>
      </ul>

      </div>

      <h2>Publications</h2>
      <p>Ingulli, Charles (2020). "A survey of statistical methods for investigating risk of low back pain in a cohort of manufacturing workers." American University. Thesis. <a href = "https://doi.org/10.57912/23856978.v1">https://doi.org/10.57912/23856978.v1</a>.</p>

    </div>
    </b-container>
    <div class = "feet">
      <footer>&copy; Copyright 2024 <a href = "https://ci2131a.github.io/mywebsite/" style = "text-decoration: none; color: inherit;">Charles</a> Ingulli</footer>
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
