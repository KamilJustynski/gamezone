import { FRIENDS_LIST } from "../../helpers/data";

export const RightAsideTop = () => {
  return (
    <>
      {FRIENDS_LIST.map((frn, index) => (
        <div className="relative" key={index}>
          <img className="h-12 w-12" src={frn.img} alt="Friend" />
          <div
            className={`h-3 w-3 top-1 right-[0.8px] ${
              frn.stat === "online" ? "bg-green-500" : "bg-gray-500"
            }  rounded-full absolute`}
          ></div>
          {frn.inGame && (
            <div className="absolute bg-green-300 w-full text-center text-[9px] py-0.5 rounded-sm px-1 -bottom-1 left-1/2 transform -translate-x-1/2">
              In game
            </div>
          )}
        </div>
      ))}
    </>
  );
};
