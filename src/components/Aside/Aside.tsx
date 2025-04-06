import { AsideScheme } from "../../helpers/types";

export const Aside: React.FC<AsideScheme> = ({ children }) => {
  return (
    <div className="flex p-7 bg-primaryDark rounded-4xl flex-col min-w-28">
      {children}
    </div>
  );
};
