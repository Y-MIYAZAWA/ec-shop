import { Card } from "@mui/material";
import AddToCartButton from "./add_to_cart_button";

export default function ItemDetail(){
  return(
    <>
    <Card sx={{
      m: 1
    }}>
      <div id="name">商品名</div>
      <div id="price">価格</div>
      <div id="content">商品詳細</div>
    </Card>
    <AddToCartButton color="yellowgreen" position="right"/>
    </>
  )
}