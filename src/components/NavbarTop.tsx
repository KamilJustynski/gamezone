import { NavLink } from "react-router-dom"

export const NavbarTop = () => {
  return (
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
  )
}
