import "./assets/css/top_page.css"
import cart from "./assets/images/cart.svg";
import Badge from "@mui/material/Badge";

export default function CartIcon(){

  return(
    <>
    <Badge badgeContent={3} color="error" 
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}>
      <div>
        <a id="cart" href="cart"><img src={cart}></img></a>
      </div>
    </Badge>
    </>
  )
}