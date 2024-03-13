import { Card } from "@mui/material"

type Props = {
  name: string,
  price: number,
  content: string,
  path: string,
}

export const AdminItemCard = (props: Props) => {
  return(
    <>
    <Card sx={{border:"1px solid black"}}>
      {props.name}<br />
      {props.price}円<br />
      {props.content}<br />
      <a href={props.path}>商品詳細へ</a>
    </Card>
    </>
  )
}