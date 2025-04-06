import { Outlet } from "react-router-dom";
import { Aside } from "../components/Aside/Aside";
import { LeftAside } from "../components/Aside/LeftAside";
import { RightAside } from "../components/Aside/RightAside";

const Root = () => {
  return (
    <div className="bg-[#313030] flex  p-5 h-screen justify-between">
      <Aside children={<LeftAside />} />
      <div className="w-8/10 flex justify-center overflow-y-auto scrollbar-hide px-5">
        <Outlet />
      </div>
      <Aside children={<RightAside />} />
    </div>
  );
};
export default Root;
