<template>
  <div id = "app">
    <div class = "toprow">
      <div class = "toptext">
        <h1>Low Back Pain Analysis</h1>
      </div>
    </div>
    <div class = main>


    <div class = "container1">

    <p>During the summer between my undergraduate and graduate studies, I began working on a project to analyze low back pain (LBP) within the context of multi-state models (MSMs). This project has culminated in <a href = "https://doi.org/10.57912/23856978.v1">my master's thesis</a> and has led to other projects including an R package and conference presentation. </p>


    <p>I am currently in the process of revising some of the analysis for further publication. Some of these results were presented during a talk at the 2024 Symposium on Data Science & Statistics (SDSS) through a referred abstract submission. Some of the SDSS talking points are reproduced below. A bit of discussion on the results from my thesis follows. </p>

    <h2>SDSS 2024</h2>
    <h3>An Analysis of Low Back Pain with Associated Risk Factors Through the Implementation of Multi-State Markov Models</h3>

    <p> The motivation behind this analysis stems from initial research into the associations between LBP progression over time and specific covariates. Several cohort studies of midwestern manufacturing plants conducted repeated observation measurements of a participant's LBP status. These observations were taken on an approximate 1-month follow-up schedule and considered several case definitions for measurement. </p>

    <p>The LBP case definitions were defined as: </p>

    <ul>
        <li> Low Back Pain (LBP) - Any LBP lasting 7 continuous days or more in the past year </li>
        <li> Seeking Care for LBP (SC LBP) - LBP resulting in medical attention </li>
        <li> Lost Time for LBP (LT LBP) - LBP resulting in time away from work </li>
    </ul>

    <p>A MSM is characterized by the states through which subjects may transition. Visually, this is often depicted through a state space diagram. Three different state space diagrams are shown below for each of the three models considered in analysis. The approach to model building was to start small and build in increasing complexity. As such, the simple model incorporates only the first LBP case definition while subsequent models incorporate more case definitions. </p>


    <div class = "imagerow">
        <img src = "@/assets/2statespace.png" style="margin:20px 20px 20px 20px; width:240px; height:auto;" />
        <img src = "@/assets/3statespace.png" style="margin:20px 20px 20px 20px; width:240px; height:auto;" />
        <img src = "@/assets/5statespace.png" style="margin:20px 20px 20px 20px; width:240px; height:auto;" />
    </div>


    <p>Starting on the left, we see a two-state model where states correspond to whether an individual is or is not a candidate for the first LBP case definition, LBP. The second state space diagram incorporates the second case definition, SC LBP, as another state that individuals can transition to and from. The final model is the largest model that is computationally available given the data and incorporates all three case definitions as individual states while also creating a state for the overlap of SC LBP and LT LBP as it is possible for individuals to qualify for both case definitions. </p>


    <p> Relevant covariates for this analysis include: </p>

    <ul>
      <li> Age - the age of the individual in years at baseline </li>
      <li> Gender - the self-reported gender of the individual (male or female) </li>
      <li> Body Mass Index (BMI) - the calculated BMI based on height and weight </li>
      <li> Supervisor Support - the level that an individual feels supported by their supervisor </li>
      <li> Coworker Support - the level that an individual feels supported by their coworkers </li>
      <li> Job Satisfaction - the level of satisfaction that an individual feels about their job </li>
    </ul>

    <p> here age and BMI are numeric while all other covariates are categorical. Supervisor support and coworker support are broken down into levels: almost always, some of the time, and hardly ever. Job satisfaction is broken down into levels: very satisfied, somewhat satisfied, a little satisfied, not at all satisfied. All covariates were measured at baseline assessment and were treated as constant over time. </p>

    <h3> Two-State Results </h3>

    <p> The first model, the two-state model, uses the LBP case definition in order to define states of having LBP or not. This is shown in the left state space image above. Selected hazard ratios for the model show a 42% increased hazard of transitioning from the no LBP to LBP state for an individual that hardly ever feels support from their coworkers compared to someone that almost always feels support from their coworkers. Similarly, there is a 52% greater hazard for individuals that feel somewhat satisfied with their job of transitioning from the no LBP state to the LBP state compared to individuals that feel very satisfied with their job. </p>


    <p> Transition probabilities can show the chances of moving from one state to another over time. Selected transition probabilities are plotted below.  </p>

    <div class = "oneimage">
        <img id = "img1" src = "@/assets/2stateprob.png" style="margin:10px 10px 10px 10px; max-width: 100%;" />
    </div>


    <h3> Three-State Results </h3>


    <p>Next is the three-state model that builds upon the two-state by incorporating the SC LBP case definition as an additional state. This is shown by the middle state space diagram above. Selected hazard ratios are discussed here. For job satisfaction, we see that individuals that feel somewhat satisfied with their job have about a 55% greater hazard to transition to the LBP state than individuals that are very satisfied. Additionally, individuals that feel somewhat satisfied with their job have about a 3% lesser hazard to transition to the SC LBP state than individuals that are very satisfied. It should be noted that the confidence interval on this last result is quite large.  </p>


    <p> The transition probabilitiy graph for the three-state model is plotted below. </p>

    <div class = "imagerow">
        <img id = "img2" src = "@/assets/3stateprob1.png" style="margin:10px 10px 10px 10px; max-width: 100%;" />
        <img id = "img3" src = "@/assets/3stateprob2.png" style="margin:10px 10px 10px 10px; max-width: 100%;" />
    </div>


    <h3> Five-State Model Results </h3>

    <p> The five-state model is the largest possible model that is able to be fit with the current data set. It builds upon the three-state model by incorporating the LT LBP case definition as its own separate state but also creating a state that is the combination of occurrence of the SC LBP and LT LBP case definition as individuals may qualify for one or both of these case definitions during assessment. As the state space configuration was complex for the given data set, the full suite of covariates was not able to be included. Therefore, the transition probabilities are the focus of interpretation. Selected transition probabilities are plotted below. </p>


    <div class = "imagerow">
        <img id = "img4" src = "@/assets/5stateprob1.png" style="margin:10px 10px 10px 10px; max-width: 100%;" />
        <img id = "img5" src = "@/assets/5stateprob2.png" style="margin:10px 10px 10px 10px; max-width: 100%;" />
    </div>


    <h3> Concluding Remarks </h3>

    <p> From the selected results, the implementation of a MSM in order to analyze transitions between different levels of LBP is possible. Data size constraints limit the complexity of the state space configuration and therefore impact the scope of results. The models that were implemented can be refined to further inform researchers on questions of interest. Additional techniques may be considered to address the size constraints of the data set.  </p>


    <h2> Thesis </h2>
    <h3> A Survey of Statistical Methods for Investigating Risk of Low Back Pain in a Cohort of Manufacturing Workers </h3>

    <p> The overarching goal of my thesis was to explore the validity of several different models that can be used within the risk assessment of repeated observation low back pain (LBP) data. Several different approaches were possible depending on the type of risk that was of interest. A count based approach would aggregate occurrences of LBP in order to look at risk of counts of incidents. Survival models analyze the time to event and can be leveraged to look at the time to first event. Through a random effects term, a multi-observation scheme data set can be used in a survival model to analyze the risk of repeated events. Lastly, the Multi-State Model (MSM) can look at transitions between predefined LBP states to evaluate the risk of transitioning between them. The data set used in this analysis is similar to the SDSS data set but is different because baseline data was not available at that time and so all individuals are assumed to be LBP free at baseline assessment. </p>

    <h3> Count Model Results </h3>

    <p> The count models look to analyze instances of an event so occurrences of the LBP case definition were aggregated into totals by individual. A Poisson regression model was considered in order to look at the relationship between counts of LBP and related covariates. Here, the covariates of interest were age and gender. Both were used in the model fit as well as an interaction term. Risk ratio results showed that a 1-year increase in age at baseline assessment for males is associated with an increase in the risk on the rate of experiencing LBP by a factor of 1.004933. Conversely, a 1-year increase in age at baseline assessment for females is associated with a decrease in the risk on the rate of experiencing LBP by a factor of 0.9983686. Predicted values show that a male individual that is 25 years old can expect to experience about 3.6 instances of LBP over a 15 monthly follow-up visit period while females are expected to experience about 4.3 instances. This increases to 3.9 in 45 year old males and decreases to 4.2 in 45-year old females over the same time period. The figure below shows the estimated average risk on the rate of occurrence for LBP for selected ages across gender. It can be seen from this image that as age at baseline increases in males then the average risk increases while as age at baseline decreases in females then the average risk decreases.</p>


    <div class = "oneimage">
        <img id = "img6" src = "@/assets/poissonrisk.png" style="margin:10px 10px 10px 10px; max-width: 100%;" />
    </div>

    <p> In the model, individual covariate significance proved inconclusive while overall, the model was significant at the 95% confidence level. The data contains a large number of individuals that experience 0 instances of LBP over the course of the study period. This affects not only the results but also the distributional assumption. For the count regression model, a Poisson distribution was assumed. Such an inflation of 0 counts might align with another distribution. This thesis looked at zero-inflated models specifically, the zero-inflated Poisson model that introduces a point mass on occurrences of 0. Other models that could be considered include quasi-Poisson or negative binomial models.  </p>


    <h3> Survival Model Results </h3>


    <p> A survival model looks at risk in a time-to-event capacity. This class of method can analyze the time to first LBP occurrence using a Cox proportional-hazard model. The model is expanded to account for recurrent events through a random effects term for each individual's repeated event instances. This is known as a frailty model. Included covariates are age and gender as well as their interaction term. Results of the Cox proportional-hazard model show that each individual covariate is not significant in the context of risk for the first LBP occurrence. For males, a 1-year increase in age at baseline assessment corresponds to a decrease in risk for first experiencing LBP by an approximate factor of 0.9986602. Similarly, a 1-year increase in age at baseline assessment for females corresponds to an increase in risk for first experiencing LBP by an approximate factor of 1.001583. The results of the frailty model show the same covariates are not individually significant. For an average male, a 1-year increase in age at baseline assessment corresponds to a decrease in risk for experiencing LBP by a factor of 0.9988867. Subsequently for an average female, a 1-year increase in age at baseline assessment corresponds to a decrease in risk of experiencing LBP by a factor of 0.9983996. In both models, the proportional hazard assumption was tested and verified. </p>


    <h3> Multi-State Model Results </h3>

    <p> The MSM functions similar to those discussed from SDSS. As a reminder, they build off of a state space to analyze transitions between the various conditions of a subject over time. The LBP state space incorporates the various case definitions that individuals may be candidates for over time. One or more of the case definitions can be experienced at once so transitions are possible to a variety of states. The model building procedures start small with simple states that grow in complexity. These MSMs differ from those in the SDSS discussions in that they have another case definition, LBP Meds where an individual is taking medication to treat LBP, as well as the assumption that case definitions were progressive. That is, if someone was a candidate for a higher order case definition then they were a candidate for lower order definitions. For example, if an individual was a candidate for LBP LT then they were also a candidate for LBP SC, LBP Med, and LBP. </p>

    <p> To avoid too much repetition, only the largest model will be discussed in this section as it is similar to the SDSS model. The major difference being this is a five-state model that incorporates a different set of case definitions. It instead uses the case definition of LBP Med and the higher order case definitions are assumed to include the lower order ones. The latter assumption means that there is no overlap in states which differs a bit from the SDSS case definitions. A diagram of the state space is shown below. </p>

    <div class = "oneimage">
        <img id = "img7" src = "@/assets/5state.png" style="margin:10px 10px 10px 10px; max-width: 100%;" />
    </div>

    <p> Similar to the five-state model from SDSS, covariates were excluded from this model due to computation issues. From the diagram above, there are 20 distinct state transitions to estimate which require a larger data set than available. However, there are some notable probability results from this model. The probability of transitioning to the healthy state (the state where one does not have any LBP) from any other state approaches about 75% by day 500 after baseline. Other results follow similar patterns where they increase in probability within the first 100 days after baseline before plateauing by day 500. The highest probability in transitioning from the LBP Meds state in the first 100 days is the transition to the LBP only state which is a little bit less than 40%.  </p>

    <div class = "oneimage">
        <img id = "img8" src = "@/assets/5probs.png" style="margin:10px 10px 10px 10px; max-width: 100%;" />
    </div>


    <h3> Final Notes </h3>

    <p> The analysis presented in this thesis successfully demonstrates that the several approaches and models discussed can be used to evaluate the risk of LBP in a repeated observation study. Each section has its own assumptions and lens through which to view the results. However, not all of the analysis possessed impactful results. Some of the most notable results being the effects of age and gender on counts of LBP events, the changes in probability transition for the first 100 days after baseline, and the prevalence of returning to a healthy state (no LBP). Regardless of the results, the analysis here presents a methodology for a multiple perspective risk assessment from repeated observation data. Different viewpoints can be evaluated for a wholistic report of the results. This work serves as an important template for other data sets to be leveraged in a similar manner. It also allows for refinement, which is how the MSM section was able to be retooled in order to refine results for SDSS. Overall, this work has presented a number of great opportunities and insights to both myself and others. One development that came out of this thesis work was the creation of an R package, wlsd, for managing the data needed to support each of the aforementioned models. That work can be explored more <a href = "../wlsd">here</a>. </p>


    </div>

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
  color:  #000000;
  margin-top: 60px;
}

/* Mobile: max-width: 480px */

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

.feet {
  text-align: center;
  padding-top: 3rem;
}

a {
  color: #ff8000;
}

h2 {
  text-align: center;
  padding-top: 2.5rem;
}

h3 {
  text-align: center;
}

.imagerow {
  text-align: center;
  display: block;
}

.oneimage {
  text-align: center;
  display: block;
}

#img1{
    width: 100%;
    height: auto !important;
    max-width: 100%;
}


/* Tablet */

@media (min-width:600px) { /* Adjust for tablets and smaller screens: max-width: 768px */

  .container1 {
    padding: 24px;
  }
  .imagerow {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    align-items: center; 
    justify-content: center; 
    text-align: center;
  }

}



/* Desktop */
@media (min-width:1100px) {
  .container1 {
        padding: 24px;
        text-align: left;
        padding-left: 22%;
        padding-right: 22%;
    }

  .imagerow {
    display: grid; 
    grid-auto-flow: column; 
    align-items: center; 
    justify-content: center;
  }
  
  #img1{
    width: 50%;
    height: auto !important;
  }

  #img2{
    width: 100%;
    height: auto !important;
    max-width: 100%;
  }

  #img3{
    width: 100%;
    height: auto !important;
    max-width: 100%;
  }

  #img7{
    width: 50%;
    height: auto !important;
    max-width: 100%;
  }


}

</style>