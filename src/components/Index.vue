<template>
  <div class="index">
    <div class="card" v-for="drink in drinks" :key="drink.id">
      <div class="card-content">
        <h2 class="card-title">{{ drink.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in drink.ingredients" :key="index">
            <span>{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      drinks: [
        {
          title: "Vodka with lemon",
          slug: "vodka-with-lemon",
          ingredients: ["50 ml of vodka", "Slice of lemon", "2 ice cube"],
          id: 1
        },
        {
          title: "Girl Scout Cookie Cocktail",
          slug: "girl-scout-cookie-cocktail",
          ingredients: [
            "1/2 ounce coffee liqueur",
            "1/2 ounce ​Irish cream liqueur",
            "1/2 ounce ​peppermint schnapps"
          ],
          id: 2
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
