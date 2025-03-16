import { AsideElement } from "./AsideElement";

export const Aside = () => {
  return (
    <div className="flex p-7 bg-primaryDark rounded-full flex-col">
      <div>
        <img className="mb-5" src="/logo.png" alt="Logo" />
      </div>
      <div className="flex h-full items-center mb-30">
        <ul className="space-y-2 font-medium items-center w-[50px] h-[50px]">
          <li>
            <AsideElement
              to="list"
              icon={
                <svg
                  className="w-6 h-6 text-white transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
              }
            />
          </li>
          <li>
            <AsideElement
              to="favourite"
              icon={
                <svg
                  className="shrink-0 w-6 h-6 text-white transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
