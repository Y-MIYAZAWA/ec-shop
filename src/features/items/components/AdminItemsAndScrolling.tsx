import { useEffect, useState } from "react"
import { Item } from "../types/item"
import { getItems } from "../api/getItems";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/adminUserSlice";
import { AdminItemCard } from "./AdminItemCard";
import { Loading } from "../../../components/Elements/Loading/Loading";

export const AdminItemsAndScrolling = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const itemPerPage = 100000;

  const adminId = useSelector(selectUser).data.id;

  const getAdminItems = () => {
    setLoading(true);
    const props = {limit: itemPerPage, page: 1};
    getItems(props)
    .then((response) =>{
    const adminItems = response.data.filter( item => item.createdBy == adminId);
    setItems(adminItems);
    setLoading(false);
    })
  };

  useEffect(() => {
    getAdminItems();
    },[]);


  return(
  <>
  {isLoading ? <Loading /> :
  <div>
    {items.map((item: Item) => {
      return(
        <AdminItemCard name={item.name} price={item.price} content={item.content} path={`items/${item.id}`} />
      )
    })}
  </div>}
  </>
  )
}