import { Box, Modal, Typography } from "@mui/material"
import { Link } from "react-router-dom"

type Props = {
  open: boolean,
  isSuccess: boolean
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const AdminEdittedItemModal = (props: Props) => {
  return(
    <>
    {props.isSuccess ? 
    <Modal open={props.open} aria-labelledby="edit-success-modal">
      <Box sx={style}>
        <Typography>商品の更新に成功しました</Typography>
        <div><Link to="/">トップページへ</Link></div>
      </Box>
    </Modal> :
    <Modal open={props.open} aria-labelledby="edit-failed-modal">
      <Box sx={style}>
        <Typography>商品の更新に失敗しました</Typography>
        <div><Link to="/">トップページへ</Link></div>
      </Box>
    </Modal> }
    </>
  )
}