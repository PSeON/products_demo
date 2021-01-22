<template>
  <div class="Product">
    <div v-if="!product" class="Product-notFound">Product not found</div>
    <div v-else class="Product-wrapper">
      <div class="Product-column">
        <ProductCard :product="product" />
      </div>
      <div class="Product-separator"></div>
      <div class="Product-column">
        <Card>
          <div v-if="isInCart" class="Product-cartItem">
            <span class="Product-cartItemLabel">Added to cart:</span>
            <input type="number" v-model="cartAmount" />
            <button @click="removeFromCart">Remove</button>
          </div>
          <div v-else class="Product-cartItem">
            <button @click="addToCart">Add to cart</button>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import ProductCard from '@/components/ProductCard.vue';
import { cart, products } from '@/store';

export default {
  name: 'Product',

  components: {
    Card,
    ProductCard,
  },

  computed: {
    productId() {
      const rawId = this.$route.params?.id;
      if (!rawId) {
        throw new Error('Incorrect product id');
      }
      const id = parseInt(rawId);
      if (isNaN(id)) {
        throw new Error('Incorrect product id');
      }
      return id;
    },

    product() {
      return products.products.find(item => item.id === this.productId);
    },

    cartItem() {
      return cart.items.find(item => item.productId === this.productId);
    },

    isInCart() {
      return !!this.cartItem;
    },

    cartAmount: {
      get() {
        return String(this.cartItem?.amount ?? 0);
      },
      set(value) {
        const amount = parseInt(value);
        if (isNaN(amount) || amount <= 0) {
          throw new Error('Invalind amount');
        }
        cart.updateItem({ productId: this.productId, amount });
      },
    },
  },

  methods: {
    addToCart() {
      cart.addItem({ productId: this.productId, amount: 1 });
    },

    removeFromCart() {
      cart.removeItem(this.productId);
    },
  },
};
</script>

<style lang="scss" scoped>
.Product {
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

.Product-notFound {
  text-align: center;
  font-size: 36px;
}

.Product-wrapper {
  display: flex;

  > * {
    flex: 1 0 0px;
    min-width: 0;
  }
}

.Product-separator {
  flex: 0 0 16px;
}

.Product-cartItem {
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

.Product-cartItemLabel {
  flex: 1 0 auto;
}
</style>
