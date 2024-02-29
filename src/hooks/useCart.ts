import { useRecoilState } from "recoil"
import { cartState } from "../recoils/atoms/cartState"
import { CartItem } from "../features/items/types/cartItem";

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const addCart = (cartItem: CartItem): void => {
    const selectItem = cart.cartItems.find((_cartItem) => _cartItem.id === cartItem.id);

    if(!selectItem){
      cartItem.quantity = 1;
      setCart({
        cartItems: [ ...cart.cartItems, cartItem]
      });
    }else{
      setCart((prevCart) => {
        return {
          cartItems: prevCart.cartItems.map((_cartItem) => 
          _cartItem.id === selectItem.id ? { ..._cartItem, quantity: _cartItem.quantity + 1} : _cartItem)
        }
      });
    }
  };

  const removeCart = (cartItem: CartItem) => {
    const selectItem = cart.cartItems.find((_cartItem) => _cartItem.id === cartItem.id);

    if(!selectItem){
      console.error('致命的なエラー');
      return;
    };

    if(selectItem.quantity > 1){
      setCart((prevCart) => {
        return {
          cartItems: prevCart.cartItems.map((_cartItem) => 
            _cartItem.id === selectItem.id ? { ..._cartItem, quantity: _cartItem.quantity - 1} : _cartItem 
          )
        }
      })
    }else{
      const cartItems = [...cart.cartItems];
      const index = cartItems.findIndex((cartItem) => cartItem.id === selectItem.id);
      if(index === -1) return;
      cartItems.splice(index, 1);

      setCart({cartItems});
    }
  }
  
  return { addCart, removeCart }
}