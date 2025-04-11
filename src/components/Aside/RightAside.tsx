// import { FRIENDS_LIST } from "../../helpers/data";
import { RightAsideScheme } from "../../helpers/types";

export const RightAside: React.FC<RightAsideScheme> = ({ children, icon }) => {
  return (
    <div className="flex flex-col items-center  h-full">
      {icon}
      <div className="flex flex-col gap-5 mt-12">{children}</div>
    </div>
  );
};
