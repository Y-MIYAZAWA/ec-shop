import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

export const AdminPostItemButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/post');
  }

  return(
    <>
    <Button onClick={handleClick}>
      新規商品作成
    </Button>
    </>
  )
}