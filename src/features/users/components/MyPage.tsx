import { useEffect, useState } from "react";
import { getUser } from "../api/getUser"
import { Card } from "@mui/material";

const MyPage = () => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    const getEmail = async () => {
      const user = await getUser();
      const userEmail = user.email;
      setEmail(userEmail);
    }
    getEmail()
  },[])

  return(
    <>
    <h3>マイページ</h3>
    <Card>メールアドレス：{email}</Card>
    </>
  )
}

export default MyPage;