import Logo from "../assets/icons/logo-white-tile.png";

const Footer = () => {
  return (
    <footer className="bg-[#0E7C66]">
      <div className="rule py-8 md:flex justify-between items-center">
        <div className="logo flex items-center gap-x-2">
          <img className="w-7.5" src={Logo} alt="Logo" />
          <p className="text-xl lg:text-2xl font-[poppins] font-extrabold text-white">Campus<span className="text-[#F2A93B]">Nest</span></p>
        </div>
        <ul className="flex flex-wrap gap-4 mt-8 text-white font-[manrope] text-xs md:mt-0 md:text-sm md:gap-6">
          <li className="">
            <a href="#browse" className="">Find a Home</a>
          </li>
          <li className="">
            <a href="#landlord" className="">List Property</a>
          </li>
          <li className="">
            <a href="#howitworks" className="">How It Works</a>
          </li>
          <li className="">© 2026 CampusNest. Find your place in Jos.</li>
        </ul>
      </div>
    </footer>
  );
}
 
export default Footer;