<template>
  <div class="add-drink">
    <div class="add-drink-content">
      <h2>Add new drink</h2>
      <form @submit.prevent="AddDrink" class="add-drink-form">
        <div>
          <label for="title">Drink name:</label>
          <input type="text" name="title" v-model="title">
        </div>
        <div>
          <label for="add-ingredient">Add an ingredient:</label>
          <input type="text" name="add-ingredient">
        </div>
        <button class="btn">Add Drink</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddDrink",
  data() {
    return {
      title: null
    };
  },
  methods: {
    AddDrink() {
      console.log(this.title);
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
</style>

