import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { adminDeleteItem } from "../api/adminDeleteItem";
import { AdminDeletedItemModal } from "./AdminDeletedItem";
import { Loading } from "../../../components/Elements/Loading/Loading";

type Props = {
  id: number,
  open: boolean,
  onClick: React.MouseEventHandler<HTMLElement>
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

export const AdminDeleteItemModal = (props: Props) => {

  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  const deleteItem = () => {
    setLoading(true);
    adminDeleteItem(`/items/${props.id}`)
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setOpen(true);
    })
    .catch(() => {
      setLoading(false);
      setSuccess(false);
      setOpen(true);
    })
  }

  return(
    <>
    <Modal open={props.open} aria-labelledby="edit-failed-modal" sx={{textAlign: "center"}}>
      <Box sx={style}>
        <Typography>削除しますか？</Typography><br />
        {isLoading ? <Loading /> : <Button id="delete-button" variant="outlined" sx={{width:"50%"}} onClick={deleteItem}>削除</Button>}<br /><br />
        <Button id="back-button" onClick={props.onClick} variant="outlined" sx={{width:"50%"}}>戻る</Button>
      </Box>
    </Modal>
    <AdminDeletedItemModal open={isOpen} isSuccess={isSuccess} />
    </>
  )
}