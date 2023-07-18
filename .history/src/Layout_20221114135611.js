import App from "./App";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/content/ManageUser";
import Dashboard from "./components/Admin/content/DashBoar";
import Login from "./components/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="users" element={<User />} />
        </Route>
        <Route path="admins" element={<Admin />}>
          <Route index element={<Dashboard />} />

          <Route path="manage-users" element={<ManageUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
export default Layout;
