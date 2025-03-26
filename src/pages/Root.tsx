import { Outlet } from "react-router-dom";
import { Aside } from "../components/Aside/Aside";

const Root = () => {
  return (
    <div className="bg-[#313030] flex  p-5 h-screen justify-between">
      <Aside />
      <div className="flex justify-center overflow-y-auto scrollbar-hide px-5">
        <Outlet />
      </div>
      <Aside />
    </div>
  );
};
export default Root;
