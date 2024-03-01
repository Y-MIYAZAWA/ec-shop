import { Button } from "@mui/material";
import { useCart } from "../../../hooks/useCart";
import { CartItem } from "../types/cartItem";

type Props = {
  cartItem: CartItem
}

export default function AddToCartButton(props: Props){

  const { cartItem } = props

  const { addCart } = useCart();

  return(
    <>
    <div id="button-container" style={{textAlign: "right"}}>
      <Button id="add-item" variant="outlined" onClick={() => {addCart(cartItem)}} >カートに追加</Button>
    </div>
    </>
  )
}