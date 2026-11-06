import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import { useEffect, useState } from "react";
import Footer from "./Footer";

const NAV_LINKS = [
  { label: "Find a Home", href: "/#browse" },
  { label: "List Property", href: "/#landlord" },
  { label: "How It Works", href: "/#howitworks" },
];

const AUTH_LINKS = [
  { label: "Sign In", to: "/auth?tab=signin", color: "border-[#f2a93b] bg-[#f2a93b]" },
  { label: "Register", to: "/auth?tab=signup", color: "border-[#0e7c66] bg-[#0e7c66]" },
];

const barClass = "border-t-3 border-[#0e7c66] rounded-t-xl w-6";

const Navbar = () => {
  const { pathname } = useLocation();
  const isAuthPage = pathname.startsWith("/auth");


  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false); 

  useEffect(() => {
    setIsNavOpen();
  }, [pathname]);

  return (
    <>
      <header className={`${isAuthPage ? "" : "top-0 z-10 sticky"} bg-[#fbf7f0e6] border-b-[#e9e3d8] border-b backdrop-saturate-[1.4] backdrop-blur-md`}>
        <nav className="rule py-4 flex justify-between items-center">
          <div className="logo flex items-center gap-x-2">
            <img className="w-7.5" src={Logo} alt="Logo" />
            <Link to="/" className="text-xl lg:text-2xl font-[poppins] font-extrabold text-[#0E7C66]">Campus<span className="text-[#F2A93B]">Nest</span></Link>
          </div>
          {!isAuthPage && (
            <>
              {/* Hamburger Icon */}
              <button
                type="button"
                onClick={() => setIsNavOpen(!isNavOpen)} 
                aria-label="Toggle menu"
                aria-expanded={isNavOpen}
                className="flex flex-col gap-y-1 justify-center items-center border-3 px-1 py-1.5 rounded-lg border-[#0E7C66] md:hidden">
                <span className={barClass} />
                <span className={barClass} />
                <span className={barClass} />
              </button>

              <div className={`${isNavOpen ? "flex" : "hidden"} absolute z-9 bg-[#fbf7f0e6] flex-col justify-center text-center w-full top-15 left-0 py-6 md:bg-transparent md:flex md:p-0 md:w-auto md:justify-between items-center md:static md:flex-row lg:gap-x-20 xl:gap-x-60`}>
                <ul className="font-[manrope] text-[#868e89] font-semibold text-base lg:text-lg flex flex-col gap-y-4 md:flex-row md:gap-x-3 lg:gap-x-8">
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} onClick={closeNav}>{label}</a>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col mt-12 gap-y-6 md:flex-row md:m-0 lg:gap-x-4 lg:text-lg">
                  {AUTH_LINKS.map(({ label, to, color }) => (
                    <li key={label}>
                      <Link to={to} onClick={closeNav} className={`${color} rounded-3xl border-2 px-3 py-1.5 text-[#fbf7f0e6] font-semibold`}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
        )}
        </nav>
      </header>
      <main className="">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}
 
export default Navbar;