import { Link } from "react-router-dom";
import "../../assets/css/adminHeader.css"
import { useEffect, useState } from "react";
import { getUser } from "../../features/users/api/getUser";
import { store } from "../../store/store";



export default function AdminHeader(){
  const [adminEmail, setEmail] = useState("");
  const isAdminLogin = store.getState().adminLogin.isAdminLogin;
  

  

  if(!isAdminLogin)return <><header><h1><Link to="/">管理画面</Link></h1></header></>

  useEffect(() => {
    const getEmail = async () => {
      const user = await getUser();

      const email = user.email;

      setEmail(email);
    }
    getEmail()
  },[]);

  return(
    <>
    <header>
      <h1><Link to="/">管理画面</Link></h1>
      <div id="contents">
        <div>メールアドレス：{adminEmail}</div>
        <div><Link to="/logout">ログアウト</Link></div>
      </div>
    </header>
    </>
  )
}