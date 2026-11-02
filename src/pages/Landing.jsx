import { Link } from "react-router-dom";
import pups from "../assets/icons/pups.jpg"
const Landingpage = () => {
  return (
    <>
      <section className="bg-linear-to-br from-[#0E7C66] to-[#17603f]">
        <div className="rule py-16 md:flex w-full items-center max-w-300 my-0 mx-auto grid gap-9 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-13 lg:min-h-130">
          <div className="max-w-155">
            <p className="inline-flex items-center before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-[#F2A93B] gap-2 text-[#d2e9db] font-semibold font-[poppins] text-sm">A simpler way to find your place in campus</p>
            <h1 className="font-[poppins] font-extrabold text-white text-4xl my-6 lg:text-6xl">Find a verified home near <span className="text-[#F2A93B]">your campus.</span></h1>
            <p className="font-[manrope] text-[#d2e9db] max-w-135 lg:text-lg">No agents, no stress. Browse real listings, chat with landlords and make your next move with confidence.</p>
            <div className="flex flex-col text-center font-bold gap-y-4 mt-8 sm:text-left sm:flex-row sm:gap-x-2 sm:items-stretch lg:text-lg">
              <Link className="bg-[#F2A93B] rounded-full py-3 text-[#17603f] sm:px-8" to="#">Find a home</Link>
              <Link className="border border-[#d2e9db] rounded-full py-3 text-white sm:px-8" to="#">List your property</Link>
            </div>
          </div>
          <div className="art grid relative place-items-center min-h-65 before:content-[''] before:absolute before:w-[min(82vw,360px)] before:aspect-[1] before:rounded-full before:bg-[#ffffff12] lg:min-h-85 lg:mr-18">
            <div className="relative w-[min(100%,420px)] aspect-4/3 border-8 border-[#ffffff2e] rounded-3xl overflow-hidden rotate-2 bg-[#0E7C66]"><img src={pups} alt="A self contain with cross ventilation and a wardrobe" className="w-full h-full object-cover" /></div>
            <div className="absolute left-0 bottom-3.5 z-1 bg-white text-[#1c1f1d] font-[poppins] rounded-xl py-3 px-4 shadow-[0 1px 2px rgba(20, 30, 25, .05), 0 6px 20px rgba(20, 30, 25, .07) -rotate-3 l:-left-15">
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
        <h2 className="text-center font-extrabold text-2xl font-[manrope] my-8 md:text-left md:text-4xl">Built to be trusted</h2>
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
      <section id="browse" className="rule my-16">
        <div className="md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="uppercase text-[#0E7C66] font-[poppins] font-bold tracking-widest text-sm md:text-lg">a few places to start</p>
            <h2 className="font-extrabold text-2xl font-[manrope] my-3 md:text-4xl">Featured student rooms</h2>
            <p className="font-[inter] text-[#4a524d] md:text-lg">Take a look at the kinds of spaces you can find around UniJos.</p>
          </div>
          <Link to="" className="border border-[#0E7C66] rounded-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-2.5 text-[#0E7C66] font-[manrope] text-sm md:place-self-end md:text-base">Browse all rooms <span className="">→</span></Link>
        </div>
        <div className="grid gap-5 my-6 md:my-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <Link className="bg-white border border-[#e9e3d8] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-0.5">
            <div className="relative aspect-4/3 bg-[#f4eee3]"><img alt="Self-contain room with tiled floor" className="w-full h-full object-cover" /><span className="absolute top-3 left-3 inline-flex items-center gap-1 py-0.75 px-2.5 rounded-full text-xs font-semibold font-[manrope] bg-[#e2f2e9] text-[#0E7C66]">Tina</span></div>
            <div className="p-4 flex flex-col gap-1.5 flex-1">
              <p className="font-bold font-[poppins]">Self-contain with tiled floor</p>
              <div className="text-[#868e89] text-sm font-[manrope] flex flex-wrap gap-y-1 gap-x-3">
                <span>1.2 km to campus</span><span>·</span><span>Self-contain</span>
              </div>
              <div className="mt-auto pt-2.5 flex items-end justify-between gap-2">
                <p className="font-semibold text-lg font-[poppins]">₦250,000 <small className="font-light">/year</small></p>
                <span className="text-[#17603f] text-sm font-semibold font-[manrope]">Available now</span>
              </div>
            </div>
          </Link>
          <Link className="bg-white border border-[#e9e3d8] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-0.5">
            <div className="relative aspect-4/3 bg-[#f4eee3]"><img alt="Single room with shared kitchen" className="w-full h-full object-cover" /><span className="absolute top-3 left-3 inline-flex items-center gap-1 py-0.75 px-2.5 rounded-full text-xs font-semibold font-[manrope] bg-[#e2f2e9] text-[#0E7C66]">Angwan Rukuba</span></div>
            <div className="p-4 flex flex-col gap-1.5 flex-1">
              <p className="font-bold font-[poppins]">Single room, shared kitchen</p>
              <div className="text-[#868e89] text-sm font-[manrope] flex flex-wrap gap-y-1 gap-x-3">
                <span>0.8 km to campus</span><span>·</span><span>Single room</span>
              </div>
              <div className="mt-auto pt-2.5 flex items-end justify-between gap-2">
                <p className="font-semibold text-lg font-[poppins]">₦140,000 <small className="font-light">/year</small></p>
                <span className="text-[#17603f] text-sm font-semibold font-[manrope]">Available now</span>
              </div>
            </div>
          </Link>
          <Link className="bg-white border border-[#e9e3d8] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-0.5">
            <div className="relative aspect-4/3 bg-[#f4eee3]"><img alt="Two bedroom flat with parking" className="w-full h-full object-cover" /><span className="absolute top-3 left-3 inline-flex items-center gap-1 py-0.75 px-2.5 rounded-full text-xs font-semibold font-[manrope] bg-[#e2f2e9] text-[#0E7C66]">Gada Biu</span></div>
            <div className="p-4 flex flex-col gap-1.5 flex-1">
              <p className="font-bold font-[poppins]">2 bedroom flat, parking space</p>
              <div className="text-[#868e89] text-sm font-[manrope] flex flex-wrap gap-y-1 gap-x-3">
                <span>3.6 km to campus</span><span>·</span><span>2 bedroom</span>
              </div>
              <div className="mt-auto pt-2.5 flex items-end justify-between gap-2">
                <p className="font-semibold text-lg font-[poppins]">₦420,000 <small className="font-light">/year</small></p>
                <span className="text-[#17603f] text-sm font-semibold font-[manrope]">Available now</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section id="landlord" className="cta rule my-16 bg-white rounded-3xl p-8 border border-[#e9e3d8] md:flex md:items-center md:justify-between">
        <div className="">
          <p className="uppercase text-[#0E7C66] font-[poppins] font-bold tracking-widest text-sm md:text-lg">for landlords</p>
          <h2 className="font-extrabold text-2xl font-[manrope] my-3 md:text-4xl">Have a room for students?</h2>
          <p className="font-[inter] text-[#4a524d] md:w-3/4">Put your apartment in front of students looking around Jos. Share the details, answer questions directly, and manage your listing from one place.</p>
        </div>
        <Link to="" className="rounded-full bg-[#0E7C66] text-white font-[manrope] inline-flex gap-2 mt-4 items-center p-4 md:flex md:gap-0 md:px-5 md:mt-0 md:w-1/4 md:justify-between font-semibold text-sm md:text-base">Post your apartment<span className="">→</span></Link>
      </section>
    </>
  );
}
 
export default Landingpage;
