import { Outlet } from "react-router-dom";
import { Aside } from "../components/Aside";

const Root = () => {
  return (
    <div className="bg-[#313030] flex  p-5 h-screen">
      <Aside />
      <div className="flex justify-center rounded-4xl overflow-y-auto scrollbar-hide p-7">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
