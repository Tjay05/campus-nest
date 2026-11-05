import { useState } from "react";
import MountImg from "../assets/images/mountain.jpg";

const Auth = () => {
  const [tab, setTab] = useState('signup');
  const [role, setRole] = useState('student');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isBtnToggled, setIsBtnToggled] = useState(false);
  const [showLeaving, setShowLeaving] = useState(false);
  const [isTraniting, setIsTraniting] = useState(false);
  const [isFormChanging, setIsFormChanging] = useState(false);

  const handleModeGlider = () => {    
    if (showLeaving) return;

    setIsBtnToggled((prev) => !prev);
    setShowLeaving(true);

    setTimeout(() => {
      setShowLeaving(false);
    }, 170);
  };

  const handlePanelChange = () => {
    if (isTraniting) return;

    setIsBtnToggled((prev) => !prev);
    setIsTraniting(true);

    setTimeout(() => {
      setIsTraniting(false);
    }, 500);
  }

  const handleFormChange = () => {
    if (isFormChanging) return;

    setIsBtnToggled((prev) => !prev);
    setIsFormChanging(true);

    setTimeout(() => {
      setIsFormChanging(false);
    }, 170);
  }

  return (
    <section className="rule my-4 rounded-4xl relative border border-[#e9e3d8f2] bg-white grid grid-cols-1 md:my-8 lg:my-12 md:grid-cols-[0.94fr_1.06fr] overflow-hidden isolate">
      {/* Orbit One */}
      {/* Orbit Two */}
      <aside className="min-h-47.5 relative overflow-hidden text-white bg-[#17603f] flex flex-col justify-between py-4.5 px-5 w-full md:min-h-full lg:p-8">
        <div className="absolute inset-0 scale-[1.04] transition-[scale,filter] duration-[1.25s] ease-[cubic-bezier(0.22,1,0.36,1)] bg-cover bg-center"  style={{ backgroundImage: `url(${MountImg})` }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#08281b78_0%,#08281b26_32%,#08281b6b_55%,#08281beb_100%)]"></div>

        <p className="flex items-center gap-2.5 text-[#ffffffd6] font-[poppins] uppercase text-[8px] font-extrabold relative z-1 tracking-widest lg:text-xs"><span className="w-2 h-2 rounded-full bg-[#F2A93B]"></span> your next chapter starts here</p>
        <div className={`${showLeaving ? "leaving " : ""}relative z-1 mt-6 max-w-100 transition-[translate,opacity] duration-[0.65s,0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] md:mt-auto md:mb-7.5`}>
          <span className="inline-block py-1.25 px-2.25 border border-[#e9e3d8f2] rounded-full text-[#f7d59d] text-[9px] font-bold font-[manrope] tracking-wider backdrop-blur-sm md:py-1.75 md:px-3 lg:text-xs">{tab === 'signup' && role === 'student' ? "A place that feels like yours" : tab === 'signup' && role === 'landlord' ? "Good spaces deserve great people" : "Your next chapter is right here"}</span>
          <h1 className="mt-4 text-2xl font-[poppins] font-bold lg:text-4xl lg:my-6">{tab === 'signup' && role === 'student' ? "Come home to" : tab === 'signup' && role === 'landlord' ? "Meet your next" : "Welcome back"}<br /><span className="text-[#F2A93B]">{tab === 'signup' && role === 'student' ? "something good" : tab === 'signup' && role === 'landlord' ? "great tenant" : "to your place"}.</span></h1>
          <p className="hidden mt-4 text-[#ffffffc9] leading-relaxed text-sm max-w-85 md:inline lg:text-base">{tab === 'signup' && role === 'student' ? "Find your space, meet the people behind it, and make your next move with confidence." : tab === 'signup' && role === 'landlord' ? "Put your place in front of students looking around Jos and make every enquiry count." : "Your search, your space, and your conversations are right where you left them."}</p>
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

      <div className="p-5 relative flex flex-col justify-center overflow-hidden before:content-[''] before:absolute before:w-85 before:h-85 before:rounded-full before:bg-radial before:from-[#e2f2e9b3] before:to-[#e2f2e900] before:to-70% before:-top-47.5 before:-right-42.5 md:px-7 lg:px-15 md:py-11">
        <div className={`${isTraniting ? "is-transitioning " : ""}relative`}>
          <div className="hidden"><span className=""></span></div>
          <p className="uppercase text-[10px] font-extrabold font-[poppins] tracking-widest text-[#0E7C66] mb-2.5 md:text-xs">{tab ==='signup' ? "your place is waiting" : "good to have you back"}</p>
          <h2 className="text-2xl font-bold font-[poppins] text-[#0d3324] lg:text-3xl">{tab === "signup" ? "Create your account" : "Welcome back"}</h2>
          <p className="text-[#868e89] font-[manrope] mt-2 text-sm">{tab === "signup" ? "A few details, then you're one step closer to home." : "Sign in and pick up right where you left off."}</p>
        </div>

        <div className="relative grid grid-cols-2 isolate bg-[#f3f3ef] p-1 rounded-xl mx-0 mt-6 mb-5">
          <span className={`${tab === 'signup' ? '' : 'translate-x-full'} absolute -z-1 top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-lg bg-white shadow-[0_2px_7px_rgba(20,30,25,0.1)] transition-[translate,background] duration-[620ms,500ms] ease-[cubic-bezier(0.22,1,0.36,1),ease]`}></span>
          <button onClick={() => {setTab('signup'); handleModeGlider(); handlePanelChange(); handleFormChange()}} className={`${tab === 'signup' ? 'active-tab' : ''} border-0 h-9.5 bg-transparent text-xs font-bold font-[poppins] cursor-pointer text-[#7b817d] lg:text-sm`}>Create Account</button>
          <button onClick={() => {setTab('signin'); handleModeGlider(); handlePanelChange(); handleFormChange()}} className={`${tab === 'signup' ? '' : 'active-tab'} border-0 h-9.5 bg-transparent text-xs font-bold font-[poppins] cursor-pointer text-[#7b817d] lg:text-sm`}>Sign in</button>
        </div>

        {tab === 'signup' ? (
          // Signup
          <form className={`${isFormChanging ? "active-form " : ""}active:block`}>
            <fieldset className="border-0 p-0 mx-0 mt-0 mb-4 min-w-0 fpnt-[manrope]">
              <legend className="text-xs text-[#4a524d] font-bold mb-2.25 lg:text-sm">I'm joining as a...</legend>
              <div className="grid grid-cols-2 gap-2.25">
                <button onClick={() => { setRole('student'); handleModeGlider();}} className={`${role === 'student' ? "active-role" : ""} relative min-w-0 flex gap-2 items-center px-2 py-2.5 rounded-xl border border-[#e9e3d8] text-left bg-white cursor-pointer hover:border-[#a9d4bb] hover:-translate-y-0.5 transition-[border-color,background,-translate-y] duration-300`}>
                  <span className="w-8.5 h-8.5 grid place-items-center rounded-xl flex-none bg-[#e2f2e9] text-[#17603f]"><svg className="w-4.75 h-4.75 fill-none stroke-current stroke-[1.7]" viewBox="0 0 24 24"><path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z"/><path d="M6.5 11.4v4.2c3.2 2.5 7.8 2.5 11 0v-4.2M21 9.5v5"/></svg></span>
                  <span className="font-[manrope]"><strong className="block text-[11px] text-[#1c1f1d] lg:text-sm">Student</strong><small className="block text-[9px] text-[#868e89] leading-tight mt-0.5 lg:text-xs">Find a room near campus</small><span className="grid place-items-center absolute top-1.5 right-1.5 w-3.5 rounded-full bg-[#1f7a4d] text-white text-[9px] opacity-0">✓</span></span>
                </button>
                <button onClick={() => { setRole('landlord'); handleModeGlider(); }} className={`${role === "landlord" ? "active-role" : ""} relative min-w-0 flex gap-2 items-center px-2 py-2.5 rounded-xl border border-[#e9e3d8] text-left bg-white cursor-pointer hover:border-[#a9d4bb] hover:-translate-y-0.5 transition-[border-color,background,-translate-y] duration-300`}>
                  <span className="w-8.5 h-8.5 grid place-items-center rounded-xl flex-none bg-[#fdf0db] text-[#a26a12]"><svg className="w-4.75 h-4.75 fill-none stroke-current stroke-[1.7]" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z"/><path d="M8 10h.01M16 10h.01"/></svg></span>
                  <span className="font-[manrope]"><strong className="block text-[11px] text-[#1c1f1d] lg:text-sm">Landlord</strong><small className="block text-[9px] text-[#868e89] leading-tight mt-0.5 lg:text-xs">List a place for students</small><span className="grid place-items-center absolute top-1.5 right-1.5 w-3.5 rounded-full bg-[#1f7a4d] text-white text-[9px] opacity-0">✓</span></span>
                </button>
              </div>
            </fieldset>

            <div className="flex flex-col gap-1.25 mb-2.75 text-[11px] lg:text-sm lg:mb-3.75 text-[#434c46] font-[manrope]">
              <label htmlFor="signup-name" className="font-semibold">Fullname</label>
              <input id="signup-name" type="text" placeholder="John Doe" required className="w-full h-11 rounded-xl py-0 px-3.5 border border-[#e9e3d8] bg-white outline-none " />
            </div>
            <div className="flex flex-col gap-1.25 mb-2.75 text-[11px] lg:text-sm lg:mb-3.75 text-[#434c46] font-[manrope]">
              <label htmlFor="signup-email" className="font-semibold">Email address</label>
              <input id="signup-email" type="email" placeholder="johndoe@yahoo.com" required className="w-full h-11 rounded-xl py-0 px-3.5 border border-[#e9e3d8] bg-white outline-none " />
            </div>
            <div className="flex flex-col gap-1.25 mb-2.75 text-[11px] lg:text-sm lg:mb-3.75 text-[#434c46] font-[manrope]">
              <label htmlFor="signup-password" className="font-semibold">Password</label>
              <div className="relative">
                <input id="signup-password" type={isPasswordVisible ? "text" : "password"} placeholder="At least 8 characters" required className="w-full h-11 rounded-xl py-0 px-3.5 border border-[#e9e3d8] bg-white outline-none " />
                <button onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute right-2.75 top-[20%] text-[#8b948e] p-0.75 bg-transparent grid place-items-center hover:cursor-pointer"><svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg></button>
                </div>
            </div>
            <label className="flex gap-2 items-start text-[#868e89] text-[10px] mt-0.5 mx-0 mb-3.5 font-[manrope] lg:text-xs lg:mb-4"><input type="checkbox" name="" required className="mt-px mx-0 mb-0 w-3 h-3 accent-[#1f7a4d] flex-none"/><span className="">I agree to the <a href="#terms" className="font-semibold text-[#17603f] hover:underline">Terms</a> and <a href="#privacy" className="font-semibold text-[#17603f] hover:underline">Privacy Policy</a>.</span></label>
            <button className="h-12 justify-between py-0 pl-5 pr-4.25 rounded-xl text-xs bg-[#1f7a4d] text-white w-full inline-flex items-center gap-2 border border-transparent; font-semibold whitespace-nowrap font-[manrope] lg:text-sm">
              <span>Create my account</span>
              <span className="w-6.75 h-6.75 grid place-items-center rounded-lg text-[#0d3324] bg-[#f2a541]">→</span>
            </button>

            <p className=""></p>
          </form>
          ) : (
          // Signin
          <form className={`${isFormChanging ? "active-form " : ""}active:block`}>
            <div className="flex flex-col gap-1.25 mb-2.75 text-[11px] lg:text-sm lg:mb-3.75 text-[#434c46] font-[manrope]">
              <label htmlFor="signin-email" className="font-semibold">Email address</label>
              <input id="signin-email" type="email" placeholder="campusnest@yahoo.com" required className="w-full h-11 rounded-xl py-0 px-3.5 border border-[#e9e3d8] bg-white outline-none " />
            </div>
            <div className="flex flex-col gap-1.25 mb-2.75 text-[11px] lg:text-sm lg:mb-3.75 text-[#434c46] font-[manrope]">
              <div className="flex items-center justify-between">
                <label htmlFor="signin-password" className="font-semibold">Password</label>
                <a className="text-[10px] font-bold text-[#17603f] lg:text-xs">Forgot password?</a>
              </div>
              <div className="relative">
                <input id="signin-password" type={isPasswordVisible ? "text" : "password"} placeholder="Enter your password" required className="w-full h-11 rounded-xl py-0 px-3.5 border border-[#e9e3d8] bg-white outline-none " />
                <button onClick={() =>setIsPasswordVisible(!isPasswordVisible)} className="absolute right-2.75 top-[20%] text-[#8b948e] p-0.75 bg-transparent grid place-items-center hover:cursor-pointer"><svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg></button>
                </div>
            </div>
            <label className="flex gap-2 items-start text-[#868e89] text-[10px] mt-0.5 mx-0 mb-3.5 font-[manrope] lg:text-xs"><input type="checkbox" name="" className="mt-px mx-0 mb-0 w-3 h-3 accent-[#1f7a4d] flex-none "/><span className="">Keep me signed in</span></label>
            <button className="h-12 justify-between py-0 pl-5 pr-4.25 rounded-xl text-xs bg-[#1f7a4d] text-white w-full inline-flex items-center gap-2 border border-transparent; font-semibold whitespace-nowrap font-[manrope] lg:text-sm">
              <span className="">Welcome back</span>
              <span className="w-6.75 h-6.75 grid place-items-center rounded-lg text-[#0d3324] bg-[#f2a541]">→</span>
            </button>

            <p className=""></p>
          </form>
        )}

        <div className="font-[manrope] flex justify-center gap-1.25 mt-4.25 text-[#868e89] text-xs lg:text-sm"><span>{ tab === 'signup' ? "Already have an account?" : "New to CampusNest?"}</span>
          {tab === 'signup' ? (
            <button onClick={() => {setTab('signin'); handleModeGlider(); handlePanelChange(); handleFormChange()}} className="p-0 border-0 bg-none text-[#17603f] font-extrabold hover:underline cursor-pointer">Sign in</button>) : (
            <button onClick={() => {setTab('signup'); handleModeGlider(); handlePanelChange(); handleFormChange()}} className="p-0 border-0 bg-none text-[#17603f] font-extrabold hover:underline cursor-pointer">Create account</button>
          )}
        </div>
        <div className="flex items-center justify-center gap-1.5 border-t border-t-[#f0eee8] font-[manrope] text-[#9a9f9b] text-[10px] mt-5 pt-3.75 lg:text-xs"><span className="text-[#d98a1c]">✦</span> A more confident move starts here.</div>
      </div>
    </section>
  );
}
 
export default Auth;