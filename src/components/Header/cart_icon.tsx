import "./../../assets/css/top_page.css"
import cart from "./../../assets/images/cart.svg";
import Badge from "@mui/material/Badge";

type Props = {
  countItems: number;
}

export default function CartIcon(props: Props){

  return(
    <>
    <Badge badgeContent={props.countItems} color="error" 
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}>
      <div>
        <a id="cart" href="/cart"><img src={cart}></img></a>
      </div>
    </Badge>
    </>
  )
}