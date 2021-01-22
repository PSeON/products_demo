<template>
  <div class="App">
    <div class="App-nav">
      [
      <router-link :to="{ name: 'Products' }">Products</router-link>
      ] [
      <router-link :to="{ name: 'Cart' }">Cart</router-link>
      ]
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.App {
  display: flex;
  flex-direction: column;
}

.App-nav {
  margin: 64px auto 64px;

  > a {
    text-decoration: underline;
  }
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
