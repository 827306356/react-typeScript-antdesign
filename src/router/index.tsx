import { Navigate, RouteObject } from "react-router"
import Login from "@/pages/login"
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/',
    element: <Login />
  }
]

export default routes
