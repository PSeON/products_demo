import { createModule, action, mutation } from 'vuex-class-component';
import { CartItem, cartItemRuntype } from '@/models/CartItem';
import * as runtypes from 'runtypes';

const cartItemArrayRuntype = runtypes.Array(cartItemRuntype);

function loadCartFromLocalStorage(): CartItem[] {
  try {
    const rawValue = window.localStorage.getItem('cart');
    if (!rawValue) {
      return [];
    }
    const data = JSON.parse(rawValue);
    if (cartItemArrayRuntype.guard(data)) {
      return data;
    }
    return [];
  } catch {
    return [];
  }
}

const VuexModule = createModule({ namespaced: 'cart', strict: false });

export default class CartModule extends VuexModule {
  private cartItems: CartItem[] = loadCartFromLocalStorage();

  get items(): CartItem[] {
    return this.cartItems;
  }

  @mutation
  setItems(value: CartItem[]): void {
    this.cartItems = value;
    window.localStorage.setItem('cart', JSON.stringify(value));
  }

  @action
  async addItem(cartItem: CartItem): Promise<void> {
    this.setItems([...this.items, cartItem]);
  }

  @action
  async updateItem(cartItem: CartItem): Promise<void> {
    const index = this.items.findIndex(item => item.productId === cartItem.productId);
    if (index === -1) {
      throw new Error('Cart item not found');
    }
    const items = this.items.slice();
    items[index] = cartItem;
    this.setItems(items);
  }

  @action
  async removeItem(productId: number): Promise<void> {
    const itemIndex = this.items.findIndex(item => item.productId === productId);
    if (itemIndex === -1) {
      throw new Error('Cart item not found');
    }
    this.setItems(this.items.filter((_, index) => itemIndex !== index));
  }
}
