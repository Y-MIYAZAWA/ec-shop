import { Navigate, RouteProps } from "react-router-dom";
import { store } from "../store/store";

export const AdminProtectedRoute = ({children}: RouteProps) => {
  const isAdminLogin = store.getState().adminLogin.isAdminLogin;

  return isAdminLogin ? children : <Navigate to='/login' />
}