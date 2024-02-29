import { useRecoilValue } from "recoil"
import { loginState } from "../../../recoils/atoms/loginState"
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";


export const MyPageMenuItem = () => {
  const isLogin = useRecoilValue(loginState);


  const link = isLogin? "/mypage" : "/login";

  return(
    <>
    <Link to={link}><MenuItem>マイページ</MenuItem></Link>
    </>
  )
}