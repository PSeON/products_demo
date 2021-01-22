<template>
  <div class="Products">
    <h1>Products</h1>
    <ProductsFilter v-model="filter" />
    <ProductsList :products="filteredProducts" />
  </div>
</template>

<script>
import ProductsFilter from '@/components/ProductsFilter.vue';
import ProductsList from '@/components/ProductsList.vue';
import { products } from '@/store';

export default {
  name: 'Products',

  components: {
    ProductsFilter,
    ProductsList,
  },

  computed: {
    filter: {
      get() {
        return products.filter;
      },
      set(value) {
        products.setFilter(value);
      },
    },

    filteredProducts() {
      return products.filteredProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.Products {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
