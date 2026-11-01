import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <>
      <section className="bg-linear-to-br from-[#0E7C66] to-[#17603f]">
        <div className="rule py-16 md:flex w-full justify-between items-center max-w-300 my-0 mx-auto grid gap-9 lg:grid-cols-[1.05fr,0.95fr] lg:gap-13 lg:min-h-130">
          <div className="max-w-155">
            <p className="flex items-center before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-[#F2A93B] gap-2 text-[#d2e9db] font-semibold font-[poppins] text-sm">A simpler way to find your place in campus</p>
            <h1 className="font-[poppins] font-extrabold text-white text-4xl my-6 lg:text-6xl">Find a verified home near <span className="text-[#F2A93B]">your campus.</span></h1>
            <p className="font-[manrope] text-[#d2e9db] lg:text-lg">No agents, no stress. Browse real listings, chat with landlords and make your next move with confidence.</p>
            <div className="flex flex-col text-center font-bold gap-y-4 mt-8 sm:text-left sm:flex-row sm:gap-x-2 sm:items-stretch lg:text-lg">
              <Link className="bg-[#F2A93B] rounded-full py-3 text-[#17603f] sm:px-8" to="#">Find a home</Link>
              <Link className="border border-[#d2e9db] rounded-full py-3 text-white sm:px-8" to="#">List your property</Link>
            </div>
          </div>
          <div className="art grid relative place-items-center min-h-65 before:content-[''] before:absolute before:w-[min(82vw,360px)] before:aspect-[1] before:rounded-full before:bg-[#ffffff12] lg:min-h-85">
            <div className="relative w-[min(100%,420px)] aspect-4/3 border-8 border-[#ffffff2e] rounded-3xl overflow-hidden rotate-2 bg-[#0E7C66]"><img alt="A self contain with cross ventilation and a wardrobe" className="w-full h-full object-cover" /></div>
            <div className="absolute left-0 bottom-3.5 z-1 bg-white text-[#1c1f1d] font-[poppins] rounded-xl py-3 px-4 shadow-[0 1px 2px rgba(20, 30, 25, .05), 0 6px 20px rgba(20, 30, 25, .07) -rotate-2">
              <p className="block text-sm">Closer to campus</p>
              <span className="text-xs text-[#868e89]">Find a space that fits You!</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Landingpage;