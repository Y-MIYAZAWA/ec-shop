import { ItemsAndPaging } from "./features/items/components/ItemsAndPaging";

export default function TopPage(){

  return(
    <>
    <div id="welcome">
      <p>LH-EC-SHOPへようこそ</p>
    </div>
    <div>
      <ItemsAndPaging />
    </div>
    </>
  )
}