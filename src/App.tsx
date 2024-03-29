import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogoutFn from "./features/auth/components/LogoutAction";
import LoginForm from "./features/auth/components/LoginForm";
import TopPage from "./TopPage";
import { ProtectedRoute } from "./routes/protectedRoute";
import MyPage from "./features/users/components/MyPage";
import ItemDetail from "./features/items/components/ItemDetail";
import Cart from "./components/Header/cart";


export default function App(){


  return(
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" Component={TopPage} />
          <Route path="/login" Component={LoginForm} />
          <Route path="/logout" Component={LogoutFn} />
          <Route path="/items/*" Component={ItemDetail} />
          <Route path="/mypage" element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          } />
          <Route path="/cart" Component={Cart} />
        </Routes>
      <Footer />  
    </BrowserRouter>
    </>
  )
}