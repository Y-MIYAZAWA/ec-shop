import { Logout } from "../api/logout"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../../components/Elements/Loading/Loading";
import { useDispatch } from "react-redux";
import { adminLoginAction } from "../../../store/adminLoginSlice";
import { adminUserAction } from "../../../store/adminUserSlice";
import { AppDispatch } from "../../../store/store";


const AdminLogoutFn = () => {
  const dispatch = useDispatch();
  const appDispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = async () => {
    await Logout();
    dispatch(adminLoginAction.adminLogout());
    appDispatch(adminUserAction.revertAll());
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