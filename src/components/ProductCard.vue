<template>
  <Card class="ProductCard">
    <div class="ProductCard-body">
      <div class="ProductCard-imageWrapper">
        <div class="ProductCard-image">Image</div>
      </div>
      <div class="ProductCard-info">
        <div class="ProductCard-name">{{ product.name }}</div>
        <div class="ProductCard-price">
          <span>Price:</span>
          <strong>{{ $localeFormatPrice(product.price) }}</strong>
        </div>
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import Card from '@/components/Card.vue';
import LocaleMixin from '@/mixins/LocaleMixin';
import { Product } from '@/models/Product';

export default Vue.extend({
  name: 'ProductCard',

  components: {
    Card,
  },

  mixins: [LocaleMixin],

  props: {
    product: {
      type: Object,
      required: true,
    } as PropOptions<Product>,
  },
});
</script>

<style lang="scss" scoped>
.ProductCard-body {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.ProductCard-imageWrapper {
  border-radius: 3px 3px 0 0;
  position: relative;
  padding-bottom: calc(100% * 3 / 4);
  background: #bbb;
}

.ProductCard-image {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.ProductCard-info {
  flex: 1 0 auto;
  padding: 8px;
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }
}

.ProductCard-name {
  flex: 1 0 auto;
  font-size: 24px;
  font-weight: bold;
}
</style>
