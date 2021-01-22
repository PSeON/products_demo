import { Number, Record, Static } from 'runtypes';

// export type CartItem = {
//   productId: number;
//   amount: number;
// };

export const cartItemRuntype = Record({
  productId: Number,
  amount: Number,
});

export type CartItem = Static<typeof cartItemRuntype>;
