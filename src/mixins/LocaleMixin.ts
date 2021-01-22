import Vue from 'vue';

const LocaleMixin = Vue.extend({
  name: 'LocaleMixin',

  methods: {
    $localeFormatPrice(price: number, withCents = false): string {
      const minus = price < 0 ? '-' : '';
      return `${minus}$${price.toFixed(withCents ? 2 : 0)}`;
    },
  },
});

export default LocaleMixin;
