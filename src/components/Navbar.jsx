import { Outlet } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      <header className="bg-[#fbf7f0e6] top-0 z-10 sticky border-b-[#e9e3d8] backdrop-saturate-[1.4] backdrop-blur-md">
        <nav className="rule py-4 flex justify-between items-center">
          <div className="logo flex items-center gap-x-2">
            <img className="w-7.5" src={Logo} alt="Logo" />
            <p className="text-xl lg:text-2xl font-[poppins] font-extrabold text-[#0E7C66]">Campus <span className="text-[#F2A93B]">Nest</span></p>
          </div>
          {/* Hamburger Icon */}
          <div onClick={toggleNav} className="flex flex-col gap-y-1 justify-center items-center border-3 px-1 py-1.5 rounded-lg border-[#0E7C66] md:hidden">
            <span className="border-t-3 border-[#0E7C66] rounded-t-xl w-6"></span>
            <span className="border-t-3 border-[#0E7C66] rounded-t-xl w-6"></span>
            <span className="border-t-3 border-[#0E7C66] rounded-t-xl w-6"></span>
          </div>
          <div className={`${isNavOpen ? "flex" : "hidden"} absolute z-9 bg-[#fbf7f0e6] flex-col justify-center text-center w-full top-15 left-0 py-6 md:flex md:p-0 md:w-auto md:justify-between items-center md:static md:flex-row lg:gap-x-20 xl:gap-x-60`}>
          <ul className="font-[manrope] text-[#868e89] font-semibold text-base lg:text-lg flex flex-col gap-y-4 md:flex-row md:gap-x-3 lg:gap-x-8">
            <li className="">
              <a href="#browse" className="">Find a Home</a>
            </li>
            <li className="">
              <a href="#howitworks" className="">List Property</a>
            </li>
            <li className="">
              <a href="#landlords" className="">How It Works</a>
            </li>
          </ul>
          <ul className="flex flex-col mt-12 gap-y-6 md:flex-row md:m-0 lg:gap-x-4 lg:text-lg">
            <li><a href="" className="rounded-3xl border-2 px-3 py-1.5 text-[#fbf7f0e6] border-[#F2A93B] bg-[#F2A93B] font-semibold">Sign In</a></li>
            <li><a href="" className="rounded-3xl border-2 px-3 py-1.5  text-[#fbf7f0e6] border-[#0E7C66] bg-[#0E7C66] font-semibold">Register</a></li>
          </ul>
          </div>
        </nav>
      </header>
      <main className="">
        <Outlet/>
      </main>
    </>
  );
}
 
export default Navbar;