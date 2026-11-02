import MountImg from "../assets/images/mountain.jpg";

const Auth = () => {
  return (
    <section className="rule my-8 rounded-4xl relative border border-[#e9e3d8f2] bg-white grid grid-cols-1 md:grid-cols-[0.94fr_1.06fr] overflow-hidden isolate">
      {/* Orbit One */}
      {/* Orbit Two */}
      <aside className="min-h-47.5 relative overflow-hidden text-white bg-[#17603f] flex flex-col justify-between py-4.5 px-5 w-full md:min-h-full">
        <div className="absolute inset-0 scale-[1.04] transition-[scale,filter] duration-[1.25s] ease-[cubic-bezier(0.2,0.75,0.18,1)] bg-cover bg-center"  style={{ backgroundImage: `url(${MountImg})` }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#08281b78_0%,#08281b26_32%,#08281b6b_55%,#08281beb_100%)]"></div>

        <p className="flex items-center gap-2.5 text-[#ffffffd6] font-[poppins] uppercase text-[8px] font-extrabold relative z-1 tracking-widest"><span className="w-2 h-2 rounded-full bg-[#F2A93B]"></span> your next chapter starts here</p>
        <div className="relative z-1 mt-6 max-w-100 transition-[transform,opacity] duration-[0.65s] ease-[cubic-bezier(0.2,0.75,0.18,1)] md:mt-auto md:mb-7.5">
          <span className="inline-block py-1.25 px-2.25 border border-[#e9e3d8f2] rounded-full text-[#F2A93B] text-[9px] font-bold font-[manrope] tracking-wider backdrop-blur-sm md:py-1.75 md:px-3">A place that feels like yours</span>
          <h1 className="mt-4 text-2xl font-[poppins] font-bold">Come home to<br /><span className="text-[#F2A93B]">something good.</span></h1>
          <p className="hidden mt-4 text-[#ffffffc9] leading-relaxed text-sm max-w-85 md:inline">Find your space, meet the people behind it, and make your next move with confidence.</p>
        </div>
        <div className="hidden items-center gap-3 border-t border-t-[#e9e3d8f2] pt-5 md:flex z-1">
          <div className="flex pl-0.5">
            <span className="w-7.5 h-7.5 -ml-1 grid place-items-center border-2 border-[#ffffffbf] rounded-full text-[10px] font-extrabold font-[poppins] text-[#17603f] bg-[#f6d8a9]">J</span>
            <span className="w-7.5 h-7.5 -ml-1 grid place-items-center border-2 border-[#ffffffbf] rounded-full text-[10px] font-extrabold font-[poppins] text-[#17603f] bg-[#e4b6a8]">B</span>
            <span className="w-7.5 h-7.5 -ml-1 grid place-items-center border-2 border-[#ffffffbf] rounded-full text-[10px] font-extrabold font-[poppins] text-[#17603f] bg-[#c7e0cb]">L</span>
          </div>
          <div className="font-[manrope]">
            <strong className="block text-xs">Made for life in Jos</strong>
            <small className="block text-[10px] mt-0.5">Students and landlords, closer together</small>
          </div>
        </div>
        <div className="flex gap-1.25 absolute right-7.5 bottom-6">
          <i className="w-5 h-1.5 block rounded-full bg-[#F2A93B]"></i>
          <i className="w-1.5 h-1.5 block rounded-full bg-[#ffffff66]"></i>
          <i className="w-1.5 h-1.5 block rounded-full bg-[#ffffff66]"></i>
        </div>
      </aside>

      <div className="p-5 relative flex flex-col justify-center overflow-hidden before:content-[''] before:absolute before:w-85 before:h-85 before:rounded-full before:bg-radial before:from-[#e2f2e9b3] before:to-[#e2f2e900] before:to-70% before:-top-47.5 before:-right-42.5 md:px-7 md:py-11">
        <div className="relative">
          <div className="hidden"><span className=""></span></div>
          <p className="uppercase text-[10px] font-extrabold font-[poppins] tracking-widest text-[#0E7C66] mb-2.5">your place is waiting</p>
          <h2 className="text-2xl font-bold font-[poppins] text-[#0d3324]">Create your account</h2>
          <p className="text-[#868e89] font-[manrope] mt-2 text-sm">A few details, then you're one step closer to home.</p>
        </div>

        <div className="relative grid grid-cols-2 isolate bg-[#f3f3ef] p-1 rounded-xl mx-0 mt-6 mb-5">
          <span className="absolute -z-1 top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-lg bg-white  "></span>
          <button className="border-0 h-9.5 bg-transparent text-xs font-bold font-[poppins] cursor-pointer  text-[#17603f]">Create Account</button>
          <button className="border-0 h-9.5 bg-transparent text-[#7b817d] text-xs font-bold font-[poppins] cursor-pointer  ">Sign in</button>
        </div>

        <form className="nne active:block">
          <div className="flex flex-col gap-1.25 mb-2.75 text-[11px] text-[#434c46] font-[manrope]">
            <label htmlFor="" className="text-xs font-semibold">Email address</label>
            <input type="email" placeholder="campusnest@yahoo.com" className="w-full h-11 rounded-xl text-xs py-0 px-3.5 border border-[#e9e3d8] bg-white outline-none " />
          </div>
          <div className="flex flex-col gap-1.25 mb-2.75 text-[11px] text-[#434c46] font-[manrope]">
            <label htmlFor="" className="text-xs font-semibold">Password</label>
            <input type="password" className="w-full h-11 rounded-xl text-xs py-0 px-3.5 border border-[#e9e3d8] bg-white outline-none " />
          </div>
        </form>
      </div>
    </section>
  );
}
 
export default Auth;