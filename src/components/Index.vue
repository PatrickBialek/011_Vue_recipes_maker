<template>
  <div class="index">
    <div class="index-content">
      <div class="card" v-for="drink in drinks" :key="drink.id">
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
          ingredients: ["2 ounce of vodka", "Slice of lemon", "2 ice cube"],
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
.index {
  justify-content: center;
  padding: 50px 10px;
}
.index .index-content {
  display: flex;
  width: 100%;
  box-sizing: border-box;
}
.index-content {
  max-width: 1500px;
  margin: 0 auto;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: end;
}
.card {
  width: 300px;
  padding: 15px 10px;
  box-sizing: border-box;
  border: 1px dashed #ccc;
  border-radius: 5px;
  margin: 0 10px;
  text-align: center;
}
.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
}
.ingredients {
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
}
.ingredients li {
  line-height: 1.5;
  padding: 4px 8px;
  background-color: #e8e8e8;
  margin: 4px;
  border-radius: 10px;
}
</style>
