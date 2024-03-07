import { Link } from "react-router-dom";
import "../../assets/css/adminHeader.css"

export default function AdminHeader(){
  return(
    <>
    <header>
      <h1><Link to="/">管理画面</Link></h1>
      <div id="contents">
        <a href="logout">ログアウト</a>
      </div>
    </header>
    </>
  )
}