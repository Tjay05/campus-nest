import { useLocation } from "react-router-dom";
import { VerifyMailIcon } from "../../assets/icons/icons";
import SubmitButton from "./SubmitButton";

const VerifyEmail = () => {
  const { state } = useLocation();

  return (
    <section className="rule my-4 rounded-4xl relative border border-[#e9e3d8f2] bg-white md:my-8 lg:my-12 p-5 overflow-hidden before:content-[''] before:absolute before:w-85 before:h-85 before:rounded-full before:bg-radial before:from-[#e2f2e9b3] before:to-[#e2f2e900] before:to-70% before:-top-47.5 before:-right-42.5 md:max-w-125">
      <div className="w-16.5 h-16.5 grid place-items-center mt-0 mx-auto mb-5.5 border border-[#e2f2e9] rounded-3xl bg-[#f3faf6] text-[#17603f]">
        <VerifyMailIcon/>
      </div>
      <p className="uppercase text-[10px] font-extrabold font-[poppins] text-center tracking-[.2em] text-[#0E7C66] mb-2.5 md:text-xs">one quick check</p>
      <h2 className="text-center text-2xl font-bold text-[#0d3324] font-[poppins] mt-3 mb-2">Verify your email</h2>
      <p className="text-xs font-[inter] text-center text-[#868e69] leading-6">We’ve sent a 6-digit verification code to <br /> <span className="text-[13px] font-[poppins] font-semibold text-[#0d3324]">{state.email}</span></p>

      <div className="my-6">
        <div className="flex flex-col text-[#434c46] text-sm">
          <label htmlFor="otp-code" className="font-semibold">Enter verification code</label>
          <input type="number" className="w-full h-11 rounded-xl py-0 px-3.5 my-2 border border-[#e9e3d8] bg-white outline-none text-2xl text-center tracking-[.6em] font-extrabold text-[#434c46] font-[poppins]" />
        </div>
        <p className="text-[10px] font-[inter] text-[#868e69] mb-6">Enter the 6-digit code sent to your inbox.</p>
        <SubmitButton>Verify email</SubmitButton>
      </div>

      <div className="flex items-center justify-center gap-1.5 border-t border-t-[#f0eee8] font-[manrope] text-[#9a9f9b] text-[10px] mt-5 pt-3.75 lg:text-xs">
        <span className="text-[#d98a1c]">✦</span> A more confident move starts here.
      </div>
    </section>
  );
}
 
export default VerifyEmail;