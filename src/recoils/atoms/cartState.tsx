import { RecoilState, atom } from "recoil";
import { CartItem } from "../../features/items/types/cartItem";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'cartPersistState',
  storage: typeof window === 'undefined' ? undefined : window.localStorage,
})

export type Cart = {
  cartItems: CartItem[]
};

const initialState: Cart = {
  cartItems: []
};

export const cartState: RecoilState<Cart> = atom({
  key: 'cartState',
  default: initialState,
  effects_UNSTABLE: [persistAtom]
});