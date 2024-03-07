import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";
import AdminLoginForm from "./features/auth/components/AdminLoginForm";
import AdminHeader from "./components/Header/AdminHeader";
import AdminLogoutFn from "./features/auth/components/AdminLogoutAction";
import { store } from "./store";

export default function AppAdmin(){
  const isAdminLogin = store.getState().isAdminLogin

  return(
    <>
    <BrowserRouter>
      <AdminHeader />
      <Routes>
        {!isAdminLogin ? <Route path="/*" Component={AdminLoginForm} /> :
        <>
        <Route path="/login" Component={AdminLoginForm} />
        <Route path="/logout" Component={AdminLogoutFn} />
        </>}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}