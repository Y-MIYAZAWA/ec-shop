import { Button } from "@mui/material";

type Props = {
  position: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"
  color: string
}

export default function AddToCartButton(props:Props){
  return(
    <>
    <div id="button-container" style={{textAlign:props.position}}>
      <Button id="add-item" variant="outlined" sx={{backgroundColor:props.color}}>カートに追加</Button>
    </div>
    </>
  )
}