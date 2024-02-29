import { GetItemsAndPaging } from "./features/items/components/getItemsAndPaging";

export default function TopPage(){

  return(
    <>
    <div id="welcome">
      <p>LH-EC-SHOPへようこそ</p>
    </div>
    <div>
      <GetItemsAndPaging />
    </div>
    </>
  )
}