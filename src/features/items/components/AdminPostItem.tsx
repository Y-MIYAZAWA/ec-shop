import { Button, FormControl, Stack, TextField } from "@mui/material"
import { useState } from "react"
import * as yup from 'yup'
import { Loading } from "../../../components/Elements/Loading/Loading";
import '../../../assets/css/admin_post_item.css';
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostItem } from "../types/postItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminPostItem } from "../api/adminPostItem";
import { AdminPostedItemModal } from "./AdminPostedItemModal";

const scheme = yup.object({
  name: yup.string().required('未入力です').max(20, '20文字以内です'),
  price: yup.number().required('未入力です').typeError('半角数字のみ使用できます').positive('マイナスは使えません'),
  content: yup.string().required('未入力です')
})

export const AdminPostItem = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const { register, handleSubmit, formState: {errors}} = useForm<PostItem>({
    resolver: yupResolver(scheme)
  })

  const onSubmit: SubmitHandler<PostItem> = (data) => {
    setLoading(true);

    adminPostItem(data)
    .then((res) => {
      setLoading(false);
      setSuccess(true);
      setOpen(true);
    })
    .catch((err) => {
      setLoading(false);
      setOpen(true);
    })
  }

  return(
    <>
    <FormControl id='item-post-form'>
      <Stack spacing={2}>
        <div>新規商品作成</div>
        {isLoading ? <Loading /> :
        <>
        <TextField required id="name" variant="standard" type="text" label="商品名" {...register("name")} error={"name" in errors} helperText={errors.name?.message} />
        <TextField required id="price" variant="standard" type="tel" label="価格" {...register("price")} error={"price" in errors} helperText={errors.price?.message} />
        <TextField required id="content" variant="standard" type="text" label="説明" {...register("content")} error={"content" in errors} helperText={errors.content?.message} />
        <Button id="button" variant="outlined" onClick={handleSubmit(onSubmit)}>作成</Button>
        </>}
      </Stack>
    </FormControl>
    <AdminPostedItemModal open={open} isSuccess={isSuccess} />
    </>
  )
}