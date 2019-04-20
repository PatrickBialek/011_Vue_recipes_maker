<template>
  <div class="index">
    <div class="index-content">
      <div class="card" v-for="drink in drinks" :key="drink.id">
        <i class="card-remove" @click="deleteDrink(drink.id)">X</i>
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
      this.drinks = this.drinks.filter(drink => {
        return drink.id != id;
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
  border: 1px dashed #ccc;
  border-radius: 5px;
  margin: 0 10px;
  text-align: center;
  position: relative;
}
.card-remove {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  color: red;
  cursor: pointer;
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
