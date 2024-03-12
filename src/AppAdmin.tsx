import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";
import AdminHeader from "./components/Header/AdminHeader";
import AdminLogoutFn from "./features/auth/components/AdminLogoutAction";
import AdminTopPage from "./AdminTopPage";
import AdminLoginForm from "./features/auth/components/AdminLoginForm";
import { AdminProtectedRoute } from "./routes/AdminProtectedRoute";

export default function AppAdmin(){

  return(
    <>
    <BrowserRouter>
      <AdminHeader />
      <Routes>
        <Route path="/" element={
          <AdminProtectedRoute>
            <AdminTopPage />
          </AdminProtectedRoute>
        } />
        <Route path="/logout" element={
          <AdminProtectedRoute>
            <AdminLogoutFn />
          </AdminProtectedRoute>
        } />
        <Route path="/login" Component={AdminLoginForm} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}