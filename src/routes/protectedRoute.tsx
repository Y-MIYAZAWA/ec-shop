import { useRecoilValue } from "recoil"
import { loginState } from "../recoils/atoms/loginState"
import { Navigate, RouteProps } from "react-router-dom";


export const ProtectedRoute = ({children} :RouteProps) => {
  const isLogin = useRecoilValue(loginState);

  return isLogin ? children : <Navigate to='/login' />;
}

