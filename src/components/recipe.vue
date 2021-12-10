<template>
  <div class = main>
    <b-container class = "maincontainer">
    <div class = "subcontainer">
    Test words and phrases. Lorem ipsum.
    </div>
    </b-container>
    <div class = "feet">
      <footer>&copy; Copyright 2021 <a href = "https://ci2131a.github.io/mywebsite/" style = "text-decoration: none; color: inherit;">Charles</a> Ingulli</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "recipe",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
