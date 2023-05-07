import Header from "../header";
import { Outlet } from "react-router-dom";
const Layout = (children) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
