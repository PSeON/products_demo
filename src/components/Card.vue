<template>
  <div class="Card"><slot></slot></div>
</template>

<style lang="scss" scoped>
.Card {
  border-radius: 3px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background: #fff;
}
</style>
