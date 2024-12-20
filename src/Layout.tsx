import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-72 w-full">
        <Navbar />
        <div className="px-6 pt-20 text-brand-gray py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
