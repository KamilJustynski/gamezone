import { AsideScheme } from "../../helpers/types";

export const Aside: React.FC<AsideScheme> = ({ children, height }) => {
  return (
    <div
      className={`${height} flex p-7 bg-primaryDark rounded-4xl flex-col w-28`}
    >
      {children}
    </div>
  );
};
