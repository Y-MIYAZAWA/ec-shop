import { useEffect, useState } from "react"
import { Item } from "../types/item"
import { getItems } from "../api/getItems";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/adminUserSlice";

export const AdminItemsAndScrolling = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const itemPerPage = 100000;

  const adminId = useSelector(selectUser).data.id;

  useEffect(() => {
    setLoading(true);
    const getAdminItems = async () => {
      const props = {limit: itemPerPage, page: 1};
      const response = await getItems(props);
      const responceData = response.data;
      const adminItems = responceData.filter( item => item.createdBy == adminId);
      setItems(adminItems);
      setLoading(false);
    }
    getAdminItems();
  },[]);

  return(
  <>
  </>
  )
}