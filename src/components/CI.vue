<template>
  <div class = main>
    <p> Welcome to my personal website! I am a recent graduate of American University (AU) where I studied topics in the disciplines of statistics, mathematics, and data science. My favorite topics include survival analysis and multi-state models in their application to event probabilities. I have a lot of experience using R, the statistical programming language, but I have been actively expanding my computer science skills. I also have a great passion for creating things. During my time at AU, I worked in the <a href="http://designandbuildlab.com/">Design and Build Lab (DaBL)</a> where I used 3D printers and laser cutters to make many interesting objects. </p><br>
    <p>My time in grad school at AU is very special to me. In February 2020, I was interviewed about my experience for a featured <a href="https://www.american.edu/news/when-is-grad-school-worth-it.cfm">article</a>. I attribute most of my success to the wonderful faculty and staff that I have met and befriended along the way. They have all been tremendously supportive and I am grateful for all of their continued assistance.</p>
    <div>
    <h2>Notable Projects</h2>
    <h4>Thesis Research</h4>
    <p> My most notable project to date is the completion of my master's thesis. It started with a question on the use of Markov models in cohort data. The end result was a summary of statistical methods that can be applied to repeated measure data. I submitted an <a href="https://ww2.amstat.org/meetings/sdss/2020/onlineprogram/AbstractDetails.cfm?AbstractID=308486">abstract</a> in the summer of 2020 for a poster session at the Symposium on Data Science & Statistics (SDSS) that gave an overview of the techniques used. I also spent the summer developing an R package to formalize the data processing workflow. This is discussed more below. The final version of the paper should be published by the end of the year 2020. Within a longitudinal study, also called a panel study, subjects are followed over time and repeatedly measured. Several approaches can be taken to investigate the data depending on the specific questions of interest. My thesis uses count regression, survival models, and multi-state models in order to analyze risk of low back pain in manufacturing workers.</p>
    <h4>wlsd: Wrangling Longitudinal Surival Data</h4>
    <p> Survival analysis data may come in different usable forms. Transitioning between formats requires detailed knowledge on how information is parsed and how variables are treated. The wlsd package in R provides methods for transforming data between usable formats in an effort to ease this process. wlsd can transition between the counting process format and longitudinal or panel format. It can also be used to create data formats suitable for count data regression </p>
    </div>
    <h4>Face Shield Fabrication</h4>
    <p> At the onset of the COVID-19 pandemic, there was an apparent lack of personal protective equipment (PPE) for health care professionals. This was a major issue that myself and my colleagues felt powerless to help correct. However, a movement of makers quickly worked to construct designs and methods for creating simple face shields to provide additional PPE to the community. The National Institute of Health (NIH) approved several designs that used 3D printers to construct headbands made of polylactic acid (PLA) and laser cutters to fabricate visors. Some designs include support parts to further the comfort and stability of the design. The NIH approved design that we chose consisted of a a simple PLA headband that can be printed in about an hour and a plastic visor that is easily attached. Using 4 printers split among our team, we were able to produce around 500 face shields that were donated to a local Washington, DC hospital. An overview of our efforts was featured in an AU magazine <a href="https://www.american.edu/magazine/article/99-ways-to-be-a-good-human.cfm">article</a> outlining kind efforts made during the pandemic. Our mention can be found under the sub-heading: "DABL-ING IN PPE". It was a true honor to work on a project that had such a beneficial impact on the community. It also showed how the makerspace movement was able to contribute so heavily during times of need. Many individuals doubt the real world application of 3D printers but this showed how useful they can be.
    </p>
    <img src = "../assets/IMG_1176.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
    <img src = "../assets/IMG_13201.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
    <img src = "../assets/IMG_1178.jpg" style="margin:20px 20px 20px 0; width:240px; height:auto;" />
    <h4>3D Printing</h4>

  </div>
</template>

<script>
export default {
  name: "CI",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
	margin: 0px 500px 0px 500px;
	text-align: left;
	justify-content: center;
    vertical-align: middle;
}
h2 {
  margin: 40px 0px 10px 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
