import Vue from 'vue';
import Vuex from 'vuex';
import CartModule from '@/store/CartModule';
import ProductsModule from '@/store/ProductsModule';
import { createProxy, extractVuexModule } from 'vuex-class-component';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    ...extractVuexModule(CartModule),
    ...extractVuexModule(ProductsModule),
  },
});

export default store;
export const cart = createProxy(store, CartModule);
export const products = createProxy(store, ProductsModule);
