import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
const Layout = () => {
    return (
      <>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 bg-gray-100 w-full h-screen">
            <Outlet />
          </main>
        </div>
      </>
    );
  };

  export default Layout;