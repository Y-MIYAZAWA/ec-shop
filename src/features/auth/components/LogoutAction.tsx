import { useRecoilState } from "recoil";
import { Logout } from "../api/logout"
import { loginState } from "../../../recoils/atoms/loginState";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../../components/Elements/Loading/Loading";


const LogoutFn = () => {
  const [ isLogin, setLogin] = useRecoilState(loginState);
  const navigate = useNavigate();
  const logOut = async () => {
    await Logout();
    setLogin(false);
    navigate('/login');
  }

  useEffect(() => {
    logOut()
  },[])

  return (
    <>
    <Loading />
    </>
  )
}

export default LogoutFn;