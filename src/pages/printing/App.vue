<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "toptext">
        <h1>3D Printing</h1>
      </div>
    </div>
      <div class = main>
    <b-container class = "maincontainer">
    <div class = "container">
    
    <p>One of my favorite extracurriculars is 3D printing. It started as a result of my employment in DaBL. I have learned a lot about the process, industry, and application over the past several years and regard myself as quite knowledgable. Within DaBL, I have taught students, staff, and faculty the necessary information to operate the printers safely. I began printing on a Type A Series 1 Pro but as the company went out of business, it was discontinued from use. The printer market is somewhat volatile with a lot of entries and exits from the market. Now I use a Prusa i3 MK3S which produces some excellent results. I have also used a Formlabs Form 1+ but it is rather expensive and messy to use on an everyday basis. The Stratasys printer was the most involved as it required the use of a lye bath.</p>
    
    <p>Throughout my printing history, I have made a number of objects for practical use such as the <a href = "/faceshield">face shields</a>. However, I do take the time to print fun objects that I often paint for decoration. Some of the designs come from the internet. The site known as <a href = "https://www.thingiverse.com/">Thingiverse</a> is an excellent place for open source designs that are ready to print. For example, one Halloween I print a copy of Mjolnir for my Thor costume. After the Avengers movie, I also printed the movie version of Stormbreaker. 
      
      <div class = "imagerow">
        <img src = "@/assets/image3.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
        <img src = "@/assets/IMG2042.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      </div>

    <p>
    Other designs are ones that I have created myself. Below is as a custom coffee mug printed with color changing filament such that the temperature of the liquid changes the color of the mug. The printed object was coated with a food-safe resin to make the mug usable. Additionally, there is a rendition of a <a href = "https://en.wikipedia.org/wiki/David_Drake_(potter)">David Drake</a> pot which was for an art professor's class.</p>

      <div class = "imagerow">
        <img src = "@/assets/image1.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
        <img src = "@/assets/image2.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
        <img src = "@/assets/IMG_1780.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      </div>

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
    margin-left: 3rem;
    margin-right: 3rem;
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
