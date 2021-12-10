<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "topimage">
        <img src = "../assets/charlesface.jpg" class="pull-left" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      </div>
      <div class = "toptext">
        <h1>Charles Ingulli</h1>
        <h3>charlesfi@outlook.com</h3>
        <a href="CV.1.10.2021.pdf">Curriculum Vitae</a>
        <div class = "icons">
         <a href="https://www.linkedin.com/in/charles-ingulli/"><img src="../assets/linkedin23px.svg" style="margin:10px 5px 5px 5px; width:23px; height:auto;"/></a>
         <a href="https://github.com/ci2131a"><img src="../assets/ghicon.svg" style="margin:10px 5px 5px 5px; width:23px; height:auto;"/></a>
         <img src="../assets/PL23px.svg" style="margin:10px 5px 5px 5px; width:auto; height:23px;">
        </div>
      </div>
    </div>
      <div class = main>
    <b-container class = "maincontainer">
    <div class = "subcontainer">
      <p>I am a recent graduate of American University (AU) where I studied topics in the disciplines of statistics, mathematics, and data science. My favorite topics include survival analysis and multi-state models in their application to event probabilities. I have a lot of experience using R, the statistical programming language, but I have been actively expanding my computer science skills. I also have a great passion for creating things. During my time at AU, I worked in the <a href="http://designandbuildlab.com/">Design and Build Lab (DaBL)</a> where I used 3D printers and laser cutters to make many interesting objects. </p>
      <p>My time in grad school at AU is very special to me. In February 2020, I was interviewed about my experience for a featured <a href="https://www.american.edu/news/when-is-grad-school-worth-it.cfm">article</a>. I attribute most of my success to the wonderful faculty and staff that I have met and befriended along the way. They have all been tremendously supportive and I am grateful for all of their continued assistance.</p>
    <h2>Publications</h2>
      <p>Ingulli, Charles (2020). "A survey of statistical methods for investigating risk of low back pain in a cohort of manufacturing workers." American University, ProQuest Dissertations Publishing. 28152524.</p>
    <h2>Notable Projects</h2>
    <h4>Thesis Research</h4>
      <p>My most notable project to date is the completion of my master's thesis. It started with a question on the use of Markov models in cohort data. The result was a summary of statistical methods that can be applied to repeated measure data. Within a longitudinal study, also called a panel study, subjects are followed over time and repeatedly measured. Several approaches can be taken to investigate the data depending on the specific questions of interest. My thesis uses count regression, survival models, and multi-state models in order to analyze the risk of low back pain in manufacturing workers. The final version has been published through ProQuest and my university. My <a href = "https://ww2.amstat.org/meetings/sdss/2020/onlineprogram/AbstractDetails.cfm?AbstractID=308486">abstract</a> was accepted for the 2020 Symposium on Data Science & Statistics (SDSS) poster session that gave an overview of the techniques used. I also spent a summer developing an R package to formalize the data processing workflow.</p>
      <p>This experience taught me a lot. In addition, to learning about statistical theory and its application, I learned to conduct a full research project. This meant studying outside research articles to understand and apply a method. I worked both independently and in collaboration with my advisor. Many writtendrafts came about to summarize and showcase my work. It took a great deal of dedication and hard work to complete and I am quite proud of the end result.</p>
    <h4>wlsd: Wrangling Longitudinal Surival Data</h4>
      <p>Survival analysis data may come in different usable forms. Transitioning between formats requires detailed knowledge of how information is parsed and how variables are treated. The wlsd package in R provides methods for transforming data between usable formats in an effort to ease this process. wlsd can transition between the counting process format and longitudinal or panel format as well as setup data suitable for count data regression.</p>
      <p>This project began as a result of my thesis research. I wrote a bit of tailored code to format my data for analysis. In order to makethis available to researchers for future projects, I formalized the work I had done and bundled it into an available R package. The code for which can be accessed and installed via the GitHub repository <a href = "https://github.com/ci2131a/wlsd">here</a>. Currently, it does not exist as one of R’s supported packages but may be available as such in the future.</p>
      <p>R packages are a great way to compartmentalize projects even if you do not plan to publish them. I would recommend Hadley Wickam's <a href = "https://r-pkgs.org/index.html">book</a> if you would like to learn more.</p>
    <h4>Face Shield Fabrication</h4>
      <p>At the onset of the COVID-19 pandemic, there was an apparent lack of personal protective equipment (PPE) for health care professionals. This was a major issue that myself and my colleagues felt powerless to help correct. However, a movement of makers quickly worked to construct designs and methods for creating simple face shields to provide additional PPE to the community. The National Institute of Health (NIH) approved several designs that used 3D printers to construct headbands made of polylactic acid (PLA) and laser cutters to fabricate visors. Some designs include support parts to further the comfort and stability of the design. The NIH approved design that we chose consisted of a a simple PLA headband that can be printed in about an hour and a plastic visor that is easily attached. Using 4 printers split among our team, we were able to produce around 500 face shields that were donated to a local Washington, DC hospital. An overview of our efforts was featured in an <a href = "https://www.american.edu/magazine/article/99-ways-to-be-a-good-human.cfm">AU magazine article</a> outlining activities to help during a pandemic. Our mention can be found under the sub-heading: "DABL-ING IN PPE". It was a true honor to work on a project that had such a beneficial impact on the community. It also showed how the makerspace movement was able to contribute so heavily during times of need. Many individuals doubt the real world application of 3D printers but this showed how useful they can be.</p>
    <div class = "imagerow">
      <img src = "../assets/IMG_1176.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      <img src = "../assets/IMG_13201.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      <img src = "../assets/IMG_1178.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
    </div>
    <h4>3D Printing</h4>
      <p>One of my favorite extracurriculars is 3D printing. It started as a result of my employment in DaBL. I have learned a lot about the process, industry, and application over the past several years and regard myself as quite knowledgable. Within DaBL, I have taught students, staff, and faculty the necessary information to operate the printers safely. I began printing on a Type A Series 1 Pro but as the company went out of business, it was discontinued from use. The printer market is somewhat volatile with a lot of entries and exits from the market. Now I use a Prusa i3 MK3S which produces some excellent results. I have also used a Formlabs Form 1+ but it is rather expensive and messy to use on an everyday basis. The Stratasys printer was the most involved as it required the use of a lye bath.</p>
      <p>Throughout my printing history, I have printed a number of objects for practical use such as the face shields. However, I do take the time to print fun objects that I often paint for decoration. Some of these are objects that I have not designed myself as others have done so for me. For example, one Halloween saw me print a copy of Mjolnir to be part of my costume as Thor. Other designs are created by myself such as a custom coffee mug to change with temperature as well as a rendition of a <a href = "https://en.wikipedia.org/wiki/David_Drake_(potter)">David Drake</a> pot.</p>
      <div class = "imagerow">
        <img src = "../assets/image3.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
        <img src = "../assets/image1.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
        <img src = "../assets/image2.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
        <img src = "../assets/IMG_1780.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
      </div>
    </div>
    </b-container>
    <div class = "feet">
      <footer>&copy; Copyright 2021 <a href = "https://ci2131a.github.io/mywebsite/" style = "text-decoration: none; color: inherit;">Charles</a> Ingulli</footer>
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
html {
  background-color: #F0F0F0;
}
.subcontainer {
  margin: 0px 20% 0px 20%;
  text-align: left;
}

.imagerow {
  text-align: center;
}

.feet {
  text-align: center;
}

h2, h4 {
  text-align: center;
}

/*p {
  margin: 0px 300px 0px 300px;
  text-align: left;
  justify-content: center;
  vertical-align: middle;
}*/

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

<!--  color: #2c3e50; -->
<!--  background-color: #d3d3d3; -->
