<template>
  <div class = main>
    <p> Welcome to my personal website! I am a recent graduate of American University. My studies include topics from the disciplines of statistics, mathematics, and data science. </p>
    <div>
    <a href="../assets/My_CV.pdf">Curriculum Vitae</a>
    <h3>Notable Projects</h3>
    <h4>wlsd: Wrangling Longitudinal Surival Data</h4>
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
h3 {
  margin: 40px 0 0;
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
