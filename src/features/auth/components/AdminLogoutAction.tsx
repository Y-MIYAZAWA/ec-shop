import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../../components/Elements/Loading/Loading";
import { useDispatch } from "react-redux";
import { adminLoginAction } from "../../../store";
import { adminLogout } from "../api/adminLogout";


const AdminLogoutFn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = async () => {
    await adminLogout();
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