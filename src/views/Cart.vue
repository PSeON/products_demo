<template>
  <div class="Cart">
    <h1>Cart</h1>
    <div v-if="!cartProducts.length" class="Cart-empty">Cart is empty</div>
    <template v-else>
      <Card v-for="(cartItem, index) in cartProducts" :key="cartItem.productId">
        <div class="Cart-item">
          <span>{{ index + 1 }}.</span>
          <span class="Cart-itemName">
            {{ cartItem.product.name }}
          </span>
          <span class="Cart-itemAmount">
            <input
              type="number"
              :value="cartItem.amount"
              @input="setAmount(cartItem, $event.target.value)"
            />
          </span>
          <button class="Cart-itemRemove" @click="removeFromCart(cartItem)">Remove</button>
        </div>
      </Card>
      <h2>Total: {{ $localeFormatPrice(totalPrice) }}</h2>
    </template>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import LocaleMixin from '@/mixins/LocaleMixin';
import { cart, products } from '@/store';

export default {
  name: 'Cart',

  mixins: [LocaleMixin],

  components: {
    Card,
  },

  computed: {
    cartProducts() {
      return cart.items.map(cartItem => {
        return {
          ...cartItem,
          product: products.products.find(product => product.id === cartItem.productId),
        };
      });
    },

    totalPrice() {
      return this.cartProducts.reduce(
        (sum, item) => sum + (item.product?.price ?? 0) * item.amount,
        0,
      );
    },
  },

  methods: {
    removeFromCart(cartItem) {
      cart.removeItem(cartItem.productId);
    },

    setAmount(cartItem, value) {
      const amount = parseInt(value);
      if (isNaN(amount) || amount <= 0) {
        throw new Error('Invalind amount');
      }
      cart.updateItem({ productId: cartItem.productId, amount });
    },
  },
};
</script>

<style lang="scss" scoped>
.Cart {
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

.Cart-empty {
  text-align: center;
  font-size: 26px;
}

.Cart-item {
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

.Cart-itemName {
  flex: 1 1 0px;
  min-width: 0;
}
</style>
