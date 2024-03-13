import * as yup from 'yup'
import { PostItem } from '../types/postItem'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { adminEditItem } from '../api/adminEditItem'
import { Box, Button, FormControl, Modal, Stack, TextField } from '@mui/material'
import { Loading } from '../../../components/Elements/Loading/Loading'
import { AdminEdittedItemModal } from './AdminEdittedItemModal'

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

const scheme = yup.object({
  name: yup.string().required('未入力です').max(20, '20文字以内です'),
  price: yup.number().required('未入力です').typeError('半角数字のみ使用できます').positive('マイナスは使えません'),
  content: yup.string().required('未入力です')
})

type Props = {
  name: string,
  price: number,
  content: string,
  id: number,
  open: boolean,
  onClick: React.MouseEventHandler<HTMLElement>
}

export const AdminEditItemModal = (props: Props) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  const { register, handleSubmit, formState: {errors}} = useForm<PostItem>({
    resolver: yupResolver(scheme)
  })

  const onSubmit: SubmitHandler<PostItem> = (data) => {
    setLoading(true);

    adminEditItem(`/items/${props.id}`,data)
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setOpen(true);
    })
    .catch(() => {
      setLoading(false);
      setSuccess(true);
      setOpen(true);
    })
  }

  return(
    <>
    <Modal open={props.open}>
      <Box sx={style}>
        <FormControl id='item-post-form'>
          <Stack spacing={2}>
            <div>商品編集</div>
            <TextField required id="name" variant="standard" type="text" label="商品名" {...register("name")} error={"name" in errors} helperText={errors.name?.message} defaultValue={props.name} />
            <TextField required id="price" variant="standard" type="tel" label="価格" {...register("price")} error={"price" in errors} helperText={errors.price?.message} defaultValue={props.price} />
            <TextField required id="content" variant="standard" type="text" label="説明" {...register("content")} error={"content" in errors} helperText={errors.content?.message} defaultValue={props.content} />
            {isLoading ? <Loading /> : <Button id="deside-button" variant="outlined" onClick={handleSubmit(onSubmit)}>更新</Button> }
            <Button id='back-button' variant='outlined' onClick={props.onClick}>戻る</Button>
          </Stack>
        </FormControl>
      </Box>
    </Modal>
    <AdminEdittedItemModal isSuccess={isSuccess} open={isOpen} />
    </>
  )
}