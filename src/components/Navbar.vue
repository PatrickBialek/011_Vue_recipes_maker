<template>
  <nav class="nav-bar">
    <div class="nav-bar-content">
      <router-link to>
        <div class="nav-bar-logo-box">
          <img src="@/assets/drink-logo.png">
        </div>
      </router-link>
      <a href class="nav-bar-add-box">
        <span>{{ btnText }}</span>
        <router-link to>
          <i class="nav-bar-add-btn">+</i>
        </router-link>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      btnText: "Add new drink:"
    };
  }
};
</script>

<style scoped>
.nav-bar {
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  border-bottom: 1px dashed #ccc;
}
.nav-bar,
.nav-bar-content,
.nav-bar-logo-box,
.nav-bar-add-box,
.nav-bar-add-btn {
  display: flex;
}
.nav-bar-content {
  width: 100%;
  max-width: 1200px;
  flex-direction: row;
  justify-content: space-between;
}
.nav-bar-content a {
  text-decoration: none;
}
.nav-bar-logo-box,
.nav-bar-add-btn,
.nav-bar-add-box {
  justify-content: center;
  align-items: center;
}
.nav-bar-logo-box,
.nav-bar-add-btn {
  border-radius: 50%;
  background-color: #43b02a;
}
.nav-bar-add-box span {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
  font-size: 20px;
}
.nav-bar-add-btn {
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  height: 40px;
  width: 40px;
}
</style>

