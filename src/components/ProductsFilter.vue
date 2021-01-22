<template>
  <Card>
    <div class="ProductsFilter">
      <div class="ProductsFilter-item">Filter:</div>
      <div class="ProductsFilter-item">
        Name:
        <input type="text" v-model="name" />
      </div>
      <div class="ProductsFilter-item">
        Min price:
        <input type="number" v-model="minPrice" />
      </div>
      <div class="ProductsFilter-item">
        Max price:
        <input type="number" v-model="maxPrice" />
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import Card from '@/components/Card.vue';
import { ProductFilter } from '@/models/ProductFilter';

export default Vue.extend({
  name: 'ProductsFilter',

  components: {
    Card,
  },

  props: {
    value: {
      type: Object,
      required: true,
    } as PropOptions<ProductFilter>,
  },

  computed: {
    name: {
      get(): string {
        return this.value.name ?? '';
      },
      set(name: string) {
        this.$emit('input', { ...this.value, name: name || null });
      },
    },

    minPrice: {
      get(): string {
        return String(this.value.minPrice) ?? '';
      },
      set(minPrice: string) {
        this.$emit('input', { ...this.value, minPrice: parseFloat(minPrice) || null });
      },
    },

    maxPrice: {
      get(): string {
        return String(this.value.maxPrice) ?? '';
      },
      set(maxPrice: string) {
        this.$emit('input', { ...this.value, maxPrice: parseFloat(maxPrice) || null });
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.ProductsFilter {
  display: flex;
  align-items: center;
  padding: 8px;

  > * {
    margin-left: 16px;

    &:first-child {
      margin-left: 0;
    }
  }
}

.ProductsFilter-item {
  display: flex;
  align-items: center;
}
</style>
