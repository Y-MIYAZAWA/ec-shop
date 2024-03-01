import { Card } from "@mui/material";
import AddToCartButton from "./AddToCartButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Item } from "../types/item";
import { getItemDetail } from "../api/getItemDetail";
import { Loading } from "../../../components/Elements/Loading/Loading";
import { CartItem } from "../types/cartItem";

export default function ItemDetail(){

  const [isLoading, setLoading] = useState<boolean>(false)
  const [cartItem, setCartItem] = useState<CartItem>({
    id: 0,
    name: "",
    price: 0,
    quantity: 0
  })

  const pathName = useLocation().pathname;
  const [item, setItem] = useState<Item>({
    content: "",
    createdAt: "",
    createdBy: 0,
    id: 0,
    name: "",
    price: 0,
    updatedAt: "",
    updatedBy: 0
    })
  useEffect(() => {
    setLoading(true)
    const itemDetail = async () => {
      const response = await getItemDetail(pathName)
      setCartItem({
        id: response.id,
        name: response.name,
        price: response.price,
        quantity: 1,
      })
      setLoading(false);
      setItem(response);
    }
    itemDetail()
  },[])

  return(
    <>
    <Card sx={{
      m: 1
    }}>
      {isLoading ? <Loading /> : 
      <>
      <div id="name">商品名:{item?.name}</div>
      <div id="price">価格:{item.price}</div>
      <div id="content">商品詳細:{item.content}</div>
      </>}
    </Card>
    {isLoading ? "" :
    <AddToCartButton cartItem={cartItem} />
    }
    </>
  )
}