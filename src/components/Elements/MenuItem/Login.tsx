import { useRecoilValue } from "recoil"
import { loginState } from "../../../recoils/atoms/loginState"
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";

export const LoginMenuItem = () => {
  const isLogin = useRecoilValue(loginState);

  if(isLogin) return null;

  return(
    <>
    <Link to={"/login"}><MenuItem>ログイン</MenuItem></Link>
    </>
  )
}