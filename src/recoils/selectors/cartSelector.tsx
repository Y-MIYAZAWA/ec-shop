import { selector } from "recoil";
import { cartState } from "../atoms/cartState";

export const totalPriceSelector = selector({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.cartItems.reduce((sum, cartItem) => {
      return sum + cartItem.price * cartItem.quantity;
    },0);
  }
});

export const countItemsSelector = selector({
  key: 'countItemsSelector',
  get: ({get}) => {
    const cart = get(cartState);
    return cart.cartItems.reduce((sum, cartItem) => {
      return sum + cartItem.quantity;
    }, 0)
  }
})