import { Card } from "@mui/material";
import AddToCartButton from "../../../add_to_cart_button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Item } from "../types/item";
import { getItemDetail } from "../api/getItemDetail";
import { Loading } from "../../../components/Elements/Loading/Loading";

export default function ItemDetail(){

  const [isLoading, setLoading] = useState<boolean>(false)

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
    const itemDetail = async () => {
      setLoading(true)
      const response = await getItemDetail(pathName)
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
    <AddToCartButton color="yellowgreen" position="right"/>
    </>
  )
}