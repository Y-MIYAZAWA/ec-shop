import { useRecoilValue } from "recoil"
import { loginState } from "../../../recoils/atoms/loginState"
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";

export const LogoutMenuItem = () => {
  const isLogin = useRecoilValue(loginState);

  if(!isLogin) return null;

  return(
    <>
    <Link to={"/logout"}><MenuItem>ログアウト</MenuItem></Link>
    </>
  )
}