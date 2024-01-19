<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "toptext">
        <h1>Face Shield Fabrication</h1>
      </div>
    </div>
      <div class = main>
    <b-container class = "maincontainer">
    <div class = "container">
    
    <p>At the onset of the COVID-19 pandemic, there was a large demand for personal protective equipment (PPE) from all corners of the world. As demand skyrocketed, the supply for health care professionals diminished. This was a major issue that myself and several other individuals who were affiliated with American University's Design and Build Lab (DaBL), an educational makerspace with access to fabrication equipment, wanted to help address. </p>


    <p>
    A number of others shared this desire to help and a movement of makers worked quickly to construct PPE for the larger community. Several designs for face shields appeared online free and ready to use for anyone with access to a 3D printer. The design that we chose to use was created by <a href = "">Prusa Research</a>, a Czech 3D printing company. Their design, the <a href = "https://www.printables.com/model/25857-prusa-face-shield">Prusa Face Shield Design</a> was reviewed by the National Institute of Health (NIH) and <a href = "https://3d.nih.gov/entries/13611/2">approved as prototype PPE</a>. It was therefore a fitting choice for its approval status as well as the fact that Prusa printers were frequently used in our lab.

    The face shields consisted of 3D printed headbands made of polylactic acid (PLA) and laser cut visors from (PETE). They also included an elastic band to secure the head piece in place. Each team member had a printer to make the PLA headbands separately which took about 2 hours to make one. If multiple were printed on the same sheet at once, the number of headbands that could be printed in a day was increased. The lab laser cutter assisted in the visors and all parts were compiled for sanitation before being assembled. Some pictures are displayed below. 
    </p>

    <div class = "imagerow">
      <img src = "@/assets/IMG_1176.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      <img src = "@/assets/IMG_13201.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      <img src = "@/assets/IMG_1178.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
    </div>

    <p>
    Using 4 printers split among our team, we were able to collectively produce around 500 face shields! All face shields were donated to a local Washington, DC hospital.
    An overview of our efforts was featured in an <a href = "https://www.american.edu/magazine/article/99-ways-to-be-a-good-human.cfm">AU magazine article</a> outlining activities to help during a pandemic. Our mention can be found under the sub-heading: "DABL-ING IN PPE". It was a true honor to work on a project that had such a beneficial impact on the community. These events also showed how much the makerspace movement was able to help during a time of need. In my experience, many individuals doubt the real world application of 3D printers but this showed how useful they can be.
    </p>
    
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
