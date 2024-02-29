import { Card } from "@mui/material"

type Props = {
  key: string,
  id: string,
  children: string | number | HTMLElementTagNameMap
}

export const ItemCard = (props: Props) => {
  return(
    <Card key={props.key} id={props.id} sx={{width:'30%'}}/>
  )
}