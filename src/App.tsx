import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogoutFn from "./features/auth/components/LogoutAction";
import LoginForm from "./features/auth/components/LoginForm";
import TopPage from "./top_page";
import MyPage from "./features/users/components/MyPage";
import { Suspense } from "react";
import { Loading } from "./components/Elements/Loading/Loading";



export default function App(){

  return(
    <>
    <BrowserRouter>
      <Header />
        <Suspense fallback={<Loading />} >
          <Routes>
            <Route path="/" Component={TopPage} />
            <Route path="/login" Component={LoginForm} />
            <Route path="/logout" Component={LogoutFn} />
            <Route path="/mypage" Component={MyPage} />
          </Routes>
        </Suspense>
      <Footer />  
    </BrowserRouter>
    </>
  )
}