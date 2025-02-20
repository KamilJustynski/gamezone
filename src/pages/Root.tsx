import { Outlet, NavLink } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-white min-h-screen bg-cover">
      <div className="flex flex-col">
        <div className="m-2 flex items-center justify-between p-5 bg-black rounded-4xl">
          <NavLink to="/" className="flex ms-2 md:me-24">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt="FlowBite Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              GameZone
            </span>
          </NavLink>
        </div>

        <div className="flex gap-2 ml-2 h-full">
          <div className="flex w-content p-5 bg-black rounded-4xl">
            <ul className="space-y-2 font-medium">
              <li>
                <NavLink
                  to="list"
                  className={({ isActive }) =>
                    `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      isActive ? "bg-gray-800/60" : ""
                    }`
                  }
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-[.bg-gray-700]:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Game list</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="favourite"
                  className={({ isActive }) =>
                    `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      isActive ? "bg-gray-800/60" : ""
                    }`
                  }
                >
                  <svg
                    className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-[.bg-gray-700]:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Favourite games
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex bg-black mr-2 rounded-4xl h-[calc(100vh-100px)] overflow-y-auto p-5 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Root;
