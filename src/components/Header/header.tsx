import CartIcon from "./cart_icon";
import UserIcon from "./user_icon";
import "./../../assets/css/header.css";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { countItemsSelector } from "../../recoils/selectors/cartSelector";


export default function Header(){

  const countItems = useRecoilValue(countItemsSelector);
  return(
    <>
    <header>
      <h1><Link to="/">LH-EC-SHOP</Link></h1>
      <div id="icons">
        <CartIcon countItems={countItems} />
        <UserIcon />
      </div>
    </header>
    </>
  )
}