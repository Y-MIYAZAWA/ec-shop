import CartIcon from "../../cart_icon";
import UserIcon from "./user_icon";
import "./../../assets/css/header.css";
import { Link } from "react-router-dom";


export default function Header(){
  return(
    <>
    <header>
      <h1><Link to="/">LH-EC-SHOP</Link></h1>
      <div id="icons">
        <CartIcon />
        <UserIcon />
      </div>
    </header>
    </>
  )
}