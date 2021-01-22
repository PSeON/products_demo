<template>
  <div class="Products">
    <h1>Products</h1>
    <ProductsFilter v-model="filter" />
    <ProductsList :products="filteredProducts" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductsFilter from '@/components/ProductsFilter.vue';
import ProductsList from '@/components/ProductsList.vue';
import { Product } from '@/models/Product';
import { ProductFilter } from '@/models/ProductFilter';
import { products } from '@/store';

export default Vue.extend({
  name: 'Products',

  components: {
    ProductsFilter,
    ProductsList,
  },

  computed: {
    filter: {
      get(): ProductFilter {
        return products.filter;
      },
      set(value: ProductFilter) {
        products.setFilter(value);
      },
    },

    filteredProducts(): Product[] {
      return products.filteredProducts;
    },
  },
});
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
