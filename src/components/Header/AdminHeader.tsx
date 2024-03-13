import { Link } from "react-router-dom";
import "../../assets/css/adminHeader.css"
import { store } from "../../store/store";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/adminUserSlice";



export default function AdminHeader(){
  const isAdminLogin = store.getState().adminLogin.isAdminLogin;
  const adminEmail = useSelector(selectUser).data.email;
  

  if(!isAdminLogin)return <><header><h1><Link to="/">管理画面</Link></h1></header></>


  return(
    <>
    <header>
      <h1><Link to="/">管理画面</Link></h1>
      <div id="contents" style={{textAlign: "right"}}>
        <div>メールアドレス：{adminEmail}</div>
        <div><Link to="/logout">ログアウト</Link></div>
      </div>
    </header>
    </>
  )
}