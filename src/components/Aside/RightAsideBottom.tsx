import { CHAT_LIST } from "../../helpers/data";

export const RightAsideBottom = () => {
  return (
    <>
      {CHAT_LIST.map((li, index) => (
        <div className="relative" key={index}>
          <div className="relative" key={index}>
            <img className="h-12 w-12" src={li.img} alt="Friend" />
          </div>
          <div
            className={`text-[7px] text-white font-bold h-3 w-3 top-1 flex items-center justify-center right-[0.8px] ${
              li.stat === "online" ? "bg-green-500" : "bg-gray-500"
            }  rounded-full absolute`}
          >
            {li.mess}
          </div>
        </div>
      ))}
    </>
  );
};
