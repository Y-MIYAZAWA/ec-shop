import { RecoilState, atom } from "recoil";
import { CartItem } from "../../features/items/types/cartItem";

export type Cart = {
  cartItems: CartItem[]
};

const initialState: Cart = {
  cartItems: []
};

export const cartState: RecoilState<Cart> = atom({
  key: 'cartState',
  default: initialState
});