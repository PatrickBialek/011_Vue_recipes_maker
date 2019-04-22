<template>
  <div class="index">
    <div class="index-content">
      <div class="card" v-for="drink in drinks" :key="drink.id">
        <i class="card-remove fas fa-trash-alt" @click="deleteDrink(drink.id)"></i>
        <router-link
          class="card-edit-link"
          :to="{name: 'EditDrink', params: {drink_slug: drink.slug}}"
        >
          <i class="card-edit fas fa-pen"></i>
        </router-link>
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
import db from "@/firebase/init";

export default {
  name: "Index",
  data() {
    return {
      drinks: []
    };
  },
  methods: {
    deleteDrink(id) {
      db.collection("drinks")
        .doc(id)
        .delete()
        .then(() => {
          this.drinks = this.drinks.filter(drink => {
            return drink.id != id;
          });
        });
    }
  },
  created() {
    // Fetch data from the firestorm
    db.collection("drinks")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let drink = doc.data();
          drink.id = doc.id;
          this.drinks.push(drink);
        });
      });
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
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  margin: 0 10px 20px;
  text-align: center;
  position: relative;
}
.card-remove,
.card-edit-link {
  display: block;
  position: absolute;
  cursor: pointer;
  right: 5px;
}
.card-edit-link {
  top: 45px;
}
.card-edit,
.card-remove {
  border-radius: 50%;
  color: #fff;
  padding: 7px;
}
.card-remove {
  background-color: red;
  top: 5px;
}
.card-edit {
  top: 40px;
  background-color: #43b02a;
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
