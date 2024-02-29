import { useEffect, useState } from "react";
import { getUser } from "../api/getUser"
import { Card } from "@mui/material";
import { Loading } from "../../../components/Elements/Loading/Loading";

const MyPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true)
    const getEmail = async () => {
      const user = await getUser();
      const userEmail = user.email;
      setEmail(userEmail);
      setLoading(false);
    }
    getEmail()
  },[])

  return(
    <>
    <h3>マイページ</h3>
    {isLoading ? <Loading /> :
    <Card>メールアドレス：{email}</Card>
    }
    </>
  )
}

export default MyPage;