import { createModule, action, mutation } from 'vuex-class-component';

function loadCartFromLocalStorage() {
  try {
    const rawValue = window.localStorage.getItem('cart');
    if (!rawValue) {
      return [];
    }
    const data = JSON.parse(rawValue);
    return data;
  } catch {
    return [];
  }
}

const VuexModule = createModule({ namespaced: 'cart', strict: false });

export default class CartModule extends VuexModule {
  cartItems = loadCartFromLocalStorage();

  get items() {
    return this.cartItems;
  }

  @mutation
  setItems(value) {
    this.cartItems = value;
    window.localStorage.setItem('cart', JSON.stringify(value));
  }

  @action
  async addItem(cartItem) {
    this.setItems([...this.items, cartItem]);
  }

  @action
  async updateItem(cartItem) {
    const index = this.items.findIndex(item => item.productId === cartItem.productId);
    if (index === -1) {
      throw new Error('Cart item not found');
    }
    const items = this.items.slice();
    items[index] = cartItem;
    this.setItems(items);
  }

  @action
  async removeItem(productId) {
    const itemIndex = this.items.findIndex(item => item.productId === productId);
    if (itemIndex === -1) {
      throw new Error('Cart item not found');
    }
    this.setItems(this.items.filter((_, index) => itemIndex !== index));
  }
}
