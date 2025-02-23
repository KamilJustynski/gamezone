import { Outlet } from "react-router-dom";
import { NavbarTop } from "../components/NavbarTop";
import { Aside } from "../components/Aside";

const Root = () => {
  return (
    <div className="bg-white min-h-screen bg-cover">
      <div className="flex flex-col">
        <NavbarTop />
        <div className="flex gap-2 ml-2 h-full">
          <Aside />
          <div className="flex justify-center bg-black mr-2 rounded-4xl h-[calc(100vh-100px)] overflow-y-auto p-5 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Root;
