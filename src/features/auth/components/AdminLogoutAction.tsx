import { Logout } from "../api/logout"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../../components/Elements/Loading/Loading";
import { useDispatch } from "react-redux";
import { adminLoginAction } from "../../../store/slice";


const AdminLogoutFn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = async () => {
    await Logout();
    dispatch(adminLoginAction.adminLogout());
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

export default AdminLogoutFn;