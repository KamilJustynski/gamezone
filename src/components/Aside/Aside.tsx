import { ListIcon } from "../../img/ListIcon";
import { PersonIcon } from "../../img/PersonIcon";
import { SolidHeart } from "../../img/SolidHeart";
import { AsideElement } from "./AsideElement";

export const Aside = () => {
  return (
    <div className="flex p-7 bg-primaryDark rounded-4xl flex-col">
      <div>
        <img className="mb-5" src="/logo.png" alt="Logo" />
      </div>
      <div className="flex h-full items-center justify-center mb-44">
        <ul className="space-y-5 font-medium items-center w-[50px] h-[50px]">
          <li>
            <AsideElement to="/" icon={<PersonIcon />} />
          </li>
          <li>
            <AsideElement to="list" icon={<ListIcon />} />
          </li>
          <li>
            <AsideElement to="favourite" icon={<SolidHeart color="#fff" />} />
          </li>
        </ul>
      </div>
    </div>
  );
};
