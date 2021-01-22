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

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'ProductsFilter',

  components: {
    Card,
  },

  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  computed: {
    name: {
      get() {
        return this.value.name ?? '';
      },
      set(name) {
        this.$emit('input', { ...this.value, name: name || null });
      },
    },

    minPrice: {
      get() {
        return String(this.value.minPrice) ?? '';
      },
      set(minPrice) {
        this.$emit('input', { ...this.value, minPrice: parseFloat(minPrice) || null });
      },
    },

    maxPrice: {
      get() {
        return String(this.value.maxPrice) ?? '';
      },
      set(maxPrice) {
        this.$emit('input', { ...this.value, maxPrice: parseFloat(maxPrice) || null });
      },
    },
  },
};
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
