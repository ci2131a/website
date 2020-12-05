<template>
  <div class = main>
    <p> Welcome to my personal website! I am a recent graduate of American University. My studies include topics from the disciplines of statistics, mathematics, and data science. </p>
    <div>
    <h2>Notable Projects</h2>
    <h4>wlsd: Wrangling Longitudinal Surival Data</h4>
    <p> Survival analysis data may come in different usable forms. Transitioning between formats requires detailed knowledge on how information is parsed and how variables are treated. The wlsd package in R provides methods for transforming data between usable formats in an effort to ease this process. wlsd can transition between the counting process format and longitudinal or panel format. It can also be used to create data formats suitable for count data regression </p>
    </div>
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
	margin: 0px 300px 0px 300px;
	text-align: left;
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
a {
  color: #42b983;
}
</style>
