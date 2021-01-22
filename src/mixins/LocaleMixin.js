const LocaleMixin = {
  name: 'LocaleMixin',

  methods: {
    $localeFormatPrice(price, withCents = false) {
      const minus = price < 0 ? '-' : '';
      return `${minus}$${price.toFixed(withCents ? 2 : 0)}`;
    },
  },
};

export default LocaleMixin;
