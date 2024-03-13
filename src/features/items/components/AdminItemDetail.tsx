import { Button, Card } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Item } from "../types/item";
import { getItemDetail } from "../api/getItemDetail";
import { Loading } from "../../../components/Elements/Loading/Loading";
import { AdminEditItemModal } from "./AdminEditItemModal";
import { AdminDeleteItemModal } from "./AdminDeleteItemModal";


export default function AdminItemDetail(){

  const [isLoading, setLoading] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setDeleteOpen] = useState<boolean>(false);

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
    });
  useEffect(() => {
    setLoading(true)
    const itemDetail = async () => {
      const response = await getItemDetail(pathName)
      setLoading(false);
      setItem(response);
    }
    itemDetail();
  },[]);

  const handleEditClick = () => {
    setEditOpen(true);
  }
  const handleDeleteClick = () => {
    setDeleteOpen(true);
  }
  const handleEditClose = () => {
    setEditOpen(false);
  }
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  }

  return(
    <>
    <Card sx={{
      m: 1
    }}>
      {isLoading ? <Loading /> : 
      <>
      <div id="name">商品名:{item.name}</div>
      <div id="price">価格:{item.price}円</div>
      <div id="content">商品詳細:{item.content}</div>
      </>}
    </Card>
    <Button onClick={handleEditClick}>編集</Button>
    <Button onClick={handleDeleteClick}>削除</Button>
    <AdminEditItemModal id={item.id} open={isEditOpen} name={item.name} price={item.price} content={item.content} onClick={handleEditClose} />
    <AdminDeleteItemModal open={isDeleteOpen} onClick={handleDeleteClose} id={item.id} />
    </>
  )
}