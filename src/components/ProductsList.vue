<template>
  <div class="ProductsList">
    <div class="ProductsList-wrapper">
      <router-link
        class="ProductsList-item"
        v-for="product in products"
        :key="product.id"
        :to="{ name: 'Product', params: { id: product.id } }"
      >
        <ProductCard :product="product" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'ProductsList',

  components: {
    ProductCard,
  },

  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.ProductsList {
  display: flex;
}

.ProductsList-wrapper {
  flex: 1 0 0px;
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.ProductsList-item {
  display: flex;
  padding: 8px;
  flex: 1 0 25%;
  min-width: 0;
  max-width: 25%;

  > * {
    flex: 1 0 0;
    min-width: 0;
  }
}
</style>
