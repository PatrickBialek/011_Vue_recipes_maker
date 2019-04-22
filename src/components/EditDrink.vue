<template>
  <div class="add-drink">
    <div v-if="drink" class="add-drink-content">
      <h2>Edit drink {{ this.$route.params.drink_slug}}</h2>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "EditDrink",
  data() {
    return {
      drink: null
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
  }
};
</script>

<style scoped>
</style>
