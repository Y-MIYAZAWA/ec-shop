import "./../../../assets/css/user_login.css"
import { Button, FormControl, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import storage from "../../../utilities/storage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../../components/Elements/Loading/Loading";
import { adminLoginWithRequirement } from "../api/adminLogin";
import { useDispatch } from "react-redux";
import { adminLoginAction } from "../../../store/adminLoginSlice";
import { adminUserGet } from "../../../store/adminUserSlice";
import { AppDispatch } from "../../../store/store";




type Form = {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required("未入力です").email("正しいメールアドレスではありません"),
  password: yup.string().required("未入力です").min(4, "4文字以上です").matches(/[0-9a-zA-Z]/, "英数字のみ使用できます")
})


const AdminLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appDispatch: AppDispatch = useDispatch();
  const [isFailed, setFailed] = useState<boolean>(false);

  const { register, handleSubmit, formState: {errors} } = useForm<Form>({
    resolver: yupResolver(schema)
  });

  const [isLoading, setLoading] = useState<boolean>(false)

  const onSubmit: SubmitHandler<Form> = (data) => {
    setLoading(true);

    adminLoginWithRequirement(data)
    .then((response) => {
    
    storage.setToken(response.token);

    dispatch(adminLoginAction.adminLogin());
    appDispatch(adminUserGet());

    setLoading(false);

    setFailed(false);

    navigate('/');
    }
    )
    .catch(() => {
      setLoading(false)
      setFailed(true)
    })
  }

  
  return(
    <>
    <FormControl id="login">
      <Stack spacing={2}>
        <div>管理者ログイン</div>
        {isLoading ? <Loading /> :
        <>
        <TextField required id="email" variant="standard" type="email" label="e-mail" autoComplete="off" {...register("email")} error={'email' in errors} helperText={errors.email?.message} />
        <TextField required id="password" variant="standard" type="password" label="password" {...register("password")} error={'password' in errors} helperText={errors.password?.message} />
        <Button id="button" variant="outlined" disabled={false} onClick={handleSubmit(onSubmit)}>ログイン</Button>
        {isFailed ? <div style={{color: "red"}}>ログインに失敗しました。もう一度お試しください。</div> : 
        ""}
        </>}
      </Stack>
    </FormControl>
    </>
  )
}

export default AdminLoginForm;