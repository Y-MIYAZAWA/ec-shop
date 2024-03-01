import { Button, Card } from "@mui/material";
import { useRecoilValue } from "recoil";
import { cartState } from "../../recoils/atoms/cartState";
import { countItemsSelector, totalPriceSelector } from "../../recoils/selectors/cartSelector";
import { CartItem } from "../../features/items/types/cartItem";
import { useCart } from "../../hooks/useCart";


export default function Cart(){
  const cart = useRecoilValue(cartState);
  const totalPrice = useRecoilValue(totalPriceSelector)
  const countItems = useRecoilValue(countItemsSelector);
  const { addCart, removeCart } = useCart();


  return(
    <>
    {countItems === 0 ? <div>カートに商品が入っていません</div> :
    <>
    <div>合計金額：{totalPrice}円</div>
      {cart.cartItems.map((cartItem: CartItem) => {
        return(
          <>
          <Card key={cartItem.id} sx={{m: 1}}>
            <div>{cartItem.name}</div><div>{cartItem.price}円</div><div>{cartItem.quantity}個</div>
            <Button onClick={() => {addCart(cartItem)}}>+</Button>
            <Button onClick={() => {removeCart(cartItem)}}>-</Button>
          </Card>
          </>
        )
      })}
    </>}
    </>
  )
}