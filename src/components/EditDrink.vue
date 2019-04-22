<template>
  <div class="edit-drink">
    <div v-if="drink" class="edit-drink-content">
      <h2>You are editing drink: {{ title }}</h2>
      <form @submit.prevent="editDrink" class="edit-drink-form">
        <div>
          <label for="title">Drink name:</label>
          <input type="text" name="title" v-model="drink.title">
        </div>
        <div v-for="(ingredient, index) in drink.ingredients" :key="index">
          <label for="ingredient">Ingredient:</label>
          <input type="text" name="ingredient" v-model="drink.ingredients[index]">
          <i class="ingredient-remove fas fa-trash-alt" @click="deleteIng(ingredient)"></i>
        </div>
        <div>
          <span class="hint">Press tab to add</span>
          <label for="add-ingredient">Add an ingredient:</label>
          <input type="text" name="add-ingredient" @keydown.tab="addIngredient" v-model="another">
        </div>
        <p class="error" v-if="feedback">{{ feedback }}</p>
        <button class="btn">Update Drink</button>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "EditDrink",
  data() {
    return {
      drink: null,
      another: null,
      feedback: null,
      title: this.$route.params.drink_slug
    };
  },
  created() {
    let ref = db
      .collection("drinks")
      .where("slug", "==", this.$route.params.drink_slug);

    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.drink = doc.data();
        this.drink.id = doc.id;
      });
    });

    this.title = this.title.replace(/-/g, " ");
  },
  methods: {
    editDrink() {
      if (this.drink.title && this.drink.ingredients.length != 0) {
        this.feedback = null;
        const slug = this.drink.title
          .toLowerCase()
          .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
          .replace(/ /g, "-");
        this.drink.slug = slug;

        db.collection("drinks")
          .doc(this.drink.id)
          .update({
            title: this.drink.title,
            ingredients: this.drink.ingredients,
            slug: this.drink.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.feedback =
          "To add a drink you have to add title and requied ingredients";
      }
    },
    addIngredient() {
      if (this.another) {
        this.drink.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    },
    deleteIng(ingredientToRemove) {
      this.drink.ingredients = this.drink.ingredients.filter(ingredient => {
        return ingredient != ingredientToRemove;
      });
    }
  }
};
</script>

<style scoped>
.edit-drink {
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
}
.edit-drink,
.edit-drink-content,
.edit-drink-form > div {
  display: flex;
  box-sizing: border-box;
}
.edit-drink-content,
.edit-drink-form {
  width: 100%;
  max-width: 500px;
  flex-direction: column;
  text-align: center;
}
.edit-drink-content h2 {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
}
.edit-drink-form > div {
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
  position: relative;
}
.edit-drink-form label {
  font-size: 16px;
  margin-bottom: 4px;
}
.edit-drink-form input[type="text"] {
  border: 1px solid #e8e8e8;
  padding: 6px 12px;
}
.ingredient-remove {
  position: absolute;
  right: -5px;
  top: 17px;
  cursor: pointer;
  background-color: red;
  padding: 10px;
  border-radius: 50%;
  color: #fff;
}
.hint {
  font-size: 12px;
  font-style: italic;
  margin-bottom: 4px;
}
.edit-drink-form input[type="text"],
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
