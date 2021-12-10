<template>
  <div id = "limon">
    <div class = "toprow">
      <div class = "toptext">
        <h1>Ralph's Cream Limoncello</h1>
        <h3>Recipe by: Ralph Russo</h3>
        <h3>Written by: Charles Ingulli</h3>
      </div>
    </div>
    <div class = main>
    <b-container class = "maincontainer">
    <div class = "subcontainer">
    <h2>Background</h2>

    <h2>Ingredients</h2>
    <div>
      <ul>
        <li>"8 Lemons"</li>
        <li>1 Liter of grain alcohol (we use Everclear)</li>
        <li>4 pounds of sugar</li>
        <li>2.5 liters of whole milk (about a gallon)</li>
        <li>3 tablespoons of corn starch</li>
      </ul>
    </div>
    <h2>Instructions</h2>
    <div>
      <ol class = "tab">
        <li>1. Peel all 8 lemons.</li>
        <li>2. Place the lemon peels into a jar and recycle the 8 lemons.</li>
        <li>pour the 1 liter of grain alcohol into the jar with the peels and let the jar sit for a minimum of 3 days.</li> 
        <li>Strain the lemon peel alcohol mixture into another bottle to be used for later. discard the lemon peels.</li>
        <li>Measure 1.5 liters of whole milk to be placed in a large pot.</li>
        <li>Heat the pot until the milk gets warm then add 4 pounds of sugar. Once added, continue to mix the sugar and milk until it is entirely dissolved. (Generally, you are not allowed to stop stirring until something funny)</li>
        <li>Take remainder 1 liter of milk and the cornstarch and mix together in a side bowl. Once mixed then add them to the large pot of sugar and milk. Continue to stir while adding.</li>
        <li>Continue to stir while the mixture comes to a boil. As it starts to boil, adjust heat to ensure the mixture does not spill over the side of the pot.</li>
        <li>5 minutes after the mixture starts to boil, turn off the heat and remove the pot to cool. My grandfather would always make a cold water bath in the sink and partially submerge the pot so that the mixture would cool quickly. </li>
        <li>Once the mixture is at a temperature to touch, add the lemon peel alcohol liquid to the sugar and milk mixture and stir them all together. </li>
        <li>Finally, bottle the limoncello into your choice of container. (The total yield is around 4.5 liters of liquid.)</li>
        <li>Let sit for several days to allow concoction to settle. (This often leads to parts shifting around in the bottle but a good shake will mix it back up.)</li>
        <li>Drink is best served chilled or over ice!</li>
      </ol>
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
  name: "App",
};

</script>

<style>

html {
  background-color: #F0F0F0;
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

.subcontainer {
  margin: 0px 20% 0px 20%;
  text-align: left;
}

.imagerow {
  text-align: right;
}

.feet {
  text-align: center;
}

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
  text-align: center;
}

h2, h4 {
  text-align: center;
}

a {
  /*color: #42b983;*/
  color: #ff8000;
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
