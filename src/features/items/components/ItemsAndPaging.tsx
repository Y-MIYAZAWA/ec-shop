import { ChangeEvent, useEffect, useState } from "react"
import { getItems } from "../api/getItems";
import { Card, Pagination } from "@mui/material";
import { PaginationType } from "../types/pagination";
import { Item } from "../types/item";


export const ItemsAndPaging = () => {
  const [paging, setPaging] = useState<PaginationType>({currentPage: 0,
    data: [],
    from: 0,
    lastPage: 0,
    lastPageUrl: '',
    nextPageUrl: '',
    path: '',
    perPage: 0,
    prevPageUrl: '',
    to: 0,
    total: 0,});
  const [items, setItems] = useState<Item[]>([]);
  const itemPerPage = 1;

  useEffect(() => {
    const getItemAndPage = async () => {
      const props = {limit: itemPerPage, page: 1}
      const response = await getItems(props);
      setPaging(response);
      const responseData = response.data;
      setItems(responseData);
    }
    getItemAndPage()
  },[])

  const handlePageChange = (event: ChangeEvent<unknown>,page: number) => {
    const getItemAndPage = async () => {
      const props = {limit: itemPerPage, page: page}
      const response = await getItems(props);
      setPaging(response);
      const responseData = response.data;
      setItems(responseData);
    }
    getItemAndPage()
  }




  return(
    <>
    <div id="item-container" style={{display:"flex", textAlign:"center"}}>
      {items.map((item: Item) => {
        return(
          <Card key={`${item.id}`} id={`${item.id}`} sx={{m:1, width:'30%'}}>{item.name}<br />{item.price}円 <br /> <a href={`/items/${item.id}`}>商品詳細へ</a> </Card>
        )
      })}
    </div>
    <div id="pagination-container">
      <Pagination
        page={paging.currentPage}
        count={paging.lastPage}
        onChange={handlePageChange}
        />
    </div>
    </>
  )
}