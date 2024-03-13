import { AdminItemsAndScrolling } from "./features/items/components/AdminItemsAndScrolling";
import { AdminPostItemButton } from "./features/items/components/AdminPostItemButton";

export default function AdminTopPage(){

  return(
    <>
    <div id="post-item" style={{textAlign:"right"}}>
      <AdminPostItemButton />
    </div>
    <div>
      <div>商品一覧</div>
    </div>
    <div id="my-items" style={{textAlign:"center"}}>
      <AdminItemsAndScrolling />
    </div>
    </>
  )
}