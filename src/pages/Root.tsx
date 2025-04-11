import { Outlet } from "react-router-dom";
import { Aside } from "../components/Aside/Aside";
import { RightAside } from "../components/Aside/RightAside";
import { LeftAside } from "../components/Aside/LeftAside";
import { RightAsideTop } from "../components/Aside/RightAsideTop";
import { RightAsideBottom } from "../components/Aside/RightAsideBottom";
import { ChatIcon } from "../img/ChatIcon";

const Root = () => {
  return (
    <div className="bg-[#313030] flex  p-5 h-screen justify-between">
      <Aside children={<LeftAside />} />
      <div className="w-8/10 flex justify-center overflow-y-auto scrollbar-hide px-5">
        <Outlet />
      </div>
      <div className="flex flex-col gap-5">
        <Aside
          height="h-4/6"
          children={
            <RightAside
              icon={
                <img
                  className="h-12 w-12"
                  src="yourProfile.png"
                  alt="Profile Image"
                />
              }
              children={<RightAsideTop />}
            />
          }
        />
        <Aside
          height="h-2/6"
          children={
            <RightAside icon={<ChatIcon />} children={<RightAsideBottom />} />
          }
        />
      </div>
    </div>
  );
};
export default Root;
