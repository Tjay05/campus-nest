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
          <div className="art grid relative place-items-center min-h-65 before:content-[''] before:absolute before:w-[min(82vw,360px)] before:aspect-[1] before:rounded-full before:bg-[#ffffff12] lg:min-h-85 lg:mr-18">
            <div className="relative w-[min(100%,420px)] aspect-4/3 border-8 border-[#ffffff2e] rounded-3xl overflow-hidden rotate-2 bg-[#0E7C66]"><img alt="A self contain with cross ventilation and a wardrobe" className="w-full h-full object-cover" /></div>
            <div className="absolute left-0 bottom-3.5 z-1 bg-white text-[#1c1f1d] font-[poppins] rounded-xl py-3 px-4 shadow-[0 1px 2px rgba(20, 30, 25, .05), 0 6px 20px rgba(20, 30, 25, .07) -rotate-3 lg:-left-15">
              <p className="block text-sm font-semibold">Closer to campus</p>
              <span className="text-xs text-[#868e89]">Find a space that fits You!</span>
            </div>
          </div>
        </div>
      </section>
      <section id="howitworks" className="bg-[#fbf7f0e6] py-16">
        <div className="rule">
          <p className="uppercase text-center text-[#0E7C66] font-[poppins] font-bold tracking-widest text-sm md:text-lg">for students</p>
          <h2 className="text-center font-extrabold text-2xl font-[manrope] my-3 md:text-4xl">From search to settled, made simple</h2>
          <p className="text-center font-[inter] text-[#4a524d] md:text-lg">Find a room that works for you and connect with the landlord, all in one place.</p>
          <div className="grid gap-3.5 my-6 md:my-8 md:grid-cols-3 md:gap-6">
            {/* 1 */}
            <article className="rounded-2xl border border-[#e9e3d8] bg-white p-5">
              <div className="rounded-xl font-[poppins] w-9 h-9 bg-[#e2f2e9] grid place-items-center text-[#10302F] font-extrabold mb-3">01</div>
              <h3 className="font-semibold font-[poppins] mb-1">Search near you</h3>
              <p className="text-[#4a524d] font-[manrope] text-sm">Filter by price, room type and distance to campus.</p>
            </article>
            {/* 2 */}
            <article className="rounded-2xl border border-[#e9e3d8] bg-white p-5">
              <div className="rounded-xl font-[poppins] w-9 h-9 bg-[#e2f2e9] grid place-items-center text-[#10302F] font-extrabold mb-3">02</div>
              <h3 className="font-semibold font-[poppins] mb-1">Chat and view</h3>
              <p className="text-[#4a524d] font-[manrope] text-sm">Message landlords directly and request a viewing.</p>
            </article>
            {/* 3 */}
            <article className="rounded-2xl border border-[#e9e3d8] bg-white p-5">
              <div className="rounded-xl font-[poppins] w-9 h-9 bg-[#e2f2e9] grid place-items-center text-[#10302F] font-extrabold mb-3">03</div>
              <h3 className="font-semibold font-[poppins] mb-1">Pay securely</h3>
              <p className="text-[#4a524d] font-[manrope] text-sm">When you are ready, complete your payment on the platform and get ready to move in.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="rule my-16">
        <h2 className="text-center font-extrabold text-2xl font-[manrope] my-3 md:text-left md:text-4xl">Built to be trusted</h2>
        <div className="grid gap-8 my-6 md:my-8 md:grid-cols-4 md:gap-5">
          <article className="">
            <h3 className="font-[poppins] font-semibold mb-1 relative before:absolute before:-top-3 before:w-11 before:h-1.5 before:rounded-sm before:bg-[#F2A93B] gap-2">Verified landlords</h3>
            <p className="text-[#4a524d] font-[manrope] text-sm">Every landlord and listing is reviewed before going live.</p>
          </article>
          <article className="">
            <h3 className="font-[poppins] font-semibold mb-1 relative before:absolute before:-top-3 before:w-11 before:h-1.5 before:rounded-sm before:bg-[#F2A93B] gap-2">Near me</h3>
            <p className="text-[#4a524d] font-[manrope] text-sm">See vacant homes around you on a map.</p>
          </article>
          <article className="">
            <h3 className="font-[poppins] font-semibold mb-1 relative before:absolute before:-top-3 before:w-11 before:h-1.5 before:rounded-sm before:bg-[#F2A93B] gap-2">Honest listings</h3>
            <p className="text-[#4a524d] font-[manrope] text-sm">Photos, conditions and the real price upfront.</p>
          </article>
          <article className="">
            <h3 className="font-[poppins] font-semibold mb-1 relative before:absolute before:-top-3 before:w-11 before:h-1.5 before:rounded-sm before:bg-[#F2A93B] gap-2">Secure payment</h3>
            <p className="text-[#4a524d] font-[manrope] text-sm">Secure and seemless transaction.</p>
          </article>
        </div>
      </section>
    </>
  );
}
 
export default Landingpage;
// flex items-center before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-[#F2A93B] gap-2 text-[#d2e9db] font-semibold font-[poppins] text-sm