import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const routes = [
  {
    exact: true,
    path: "/",
    label: "Home",
    private: true,
    component: Home,
  },
  {
    exact: true,
    path: "/login",
    label: "Login",
    private: false,
    component: Login,
  },
  {
    exact: true,
    path: "/signup",
    label: "Signup",
    private: false,
    component: Signup,
  },
];

export default routes;
