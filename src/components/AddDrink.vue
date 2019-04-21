<template>
  <div class="add-drink">
    <div class="add-drink-content">
      <h2>Add new drink</h2>
      <form @submit.prevent="addDrink" class="add-drink-form">
        <div>
          <label for="title">Drink name:</label>
          <input type="text" name="title" v-model="title">
        </div>
        <div v-for="(ingredient, index) in ingredients" :key="index">
          <label for="ingredient">Ingredient:</label>
          <input type="text" name="ingredient" v-model="ingredients[index]">
        </div>
        <div>
          <span class="hint">Press tab to add</span>
          <label for="add-ingredient">Add an ingredient:</label>
          <input type="text" name="add-ingredient" @keydown.tab="addIngredient" v-model="another">
        </div>
        <p class="error" v-if="feedback">{{ feedback }}</p>
        <button class="btn">Add Drink</button>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "AddDrink",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null
    };
  },
  methods: {
    addDrink() {
      if (this.title && this.ingredients.length != 0) {
        this.feedback = null;
        const slug = this.title.toLowerCase().replace(/ /g, "-");
        this.slug = slug;

        db.colletion("drinks").add({
          title: this.title,
          ingredients: this.ingredients
        });
      } else {
        this.feedback =
          "To add a drink you have to add title and requied ingredients";
      }
    },
    addIngredient() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    }
  }
};
</script>

<style scoped>
.add-drink {
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
}
.add-drink,
.add-drink-content,
.add-drink-form > div {
  display: flex;
  box-sizing: border-box;
}
.add-drink-content,
.add-drink-form {
  width: 100%;
  max-width: 500px;
  flex-direction: column;
  text-align: center;
}
.add-drink-content h2 {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
}
.add-drink-form > div {
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
}
.add-drink-form label {
  font-size: 16px;
  margin-bottom: 4px;
}
.add-drink-form input[type="text"] {
  border: 1px solid #e8e8e8;
  padding: 6px 12px;
}
.hint {
  font-size: 12px;
  font-style: italic;
  margin-bottom: 4px;
}
.add-drink-form input[type="text"],
.btn {
  border-radius: 10px;
  outline: none;
  font-size: 16px;
}
.btn {
  background-color: #43b02a;
  border: none;
  color: #fff;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  padding: 8px 16px;
}
.btn:hover {
  background-color: #30901a;
}
.error {
  color: red;
  margin-bottom: 10px;
}
</style>

