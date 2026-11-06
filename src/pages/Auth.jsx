import { useState } from "react";
import AuthHero from "../components/AuthHero";
import TabSwitcher from "../components/TabSwitcher";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import useTimedFlag from "../hooks/useTimedFlag";
import { PANEL_COPY } from "../data/copy";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") === "signin" ? "signin" : "signup";
  const [role, setRole] = useState("student");

  const [isLeaving, glide] = useTimedFlag(170);
  const [isTransitioning, animatePanel] = useTimedFlag(500);
  const [isFormChanging, animateForm] = useTimedFlag(170);

  const switchTab = (next) => {
    if (next === tab) return;
    setSearchParams({ tab: next }, { replace: true });
    glide();
    animatePanel();
    animateForm();
  };

  const selectRole = (next) => {
    setRole(next);
    glide();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const panel = PANEL_COPY[tab];
  const isSignup = tab === "signup";

  return (
    <section className="rule my-4 rounded-4xl relative border border-[#e9e3d8f2] bg-white grid grid-cols-1 md:my-8 lg:my-12 md:grid-cols-[0.94fr_1.06fr] overflow-hidden isolate">
      <AuthHero tab={tab} role={role} isLeaving={isLeaving} />

      <div className="p-5 relative flex flex-col justify-center overflow-hidden before:content-[''] before:absolute before:w-85 before:h-85 before:rounded-full before:bg-radial before:from-[#e2f2e9b3] before:to-[#e2f2e900] before:to-70% before:-top-47.5 before:-right-42.5 md:px-7 lg:px-15 md:py-11">
        <div className={`${isTransitioning ? "is-transitioning " : ""}relative`}>
          <p className="uppercase text-[10px] font-extrabold font-[poppins] tracking-widest text-[#0E7C66] mb-2.5 md:text-xs">{panel.eyebrow}</p>
          <h2 className="text-2xl font-bold font-[poppins] text-[#0d3324] lg:text-3xl">{panel.title}</h2>
          <p className="text-[#868e89] font-[manrope] mt-2 text-sm">{panel.sub}</p>
        </div>

        <TabSwitcher tab={tab} onChange={switchTab} />

        {isSignup ? (
          <SignupForm role={role} onRoleSelect={selectRole} isChanging={isFormChanging} onSubmit={handleSubmit} />
        ) : (
          <SigninForm isChanging={isFormChanging} onSubmit={handleSubmit} />
        )}

        <div className="font-[manrope] flex justify-center gap-1.25 mt-4.25 text-[#868e89] text-xs lg:text-sm">
          <span>{isSignup ? "Already have an account?" : "New to CampusNest?"}</span>
          <button
            type="button"
            onClick={() => switchTab(isSignup ? "signin" : "signup")}
            className="p-0 border-0 bg-none text-[#17603f] font-extrabold hover:underline cursor-pointer"
          >
            {isSignup ? "Sign in" : "Create account"}
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 border-t border-t-[#f0eee8] font-[manrope] text-[#9a9f9b] text-[10px] mt-5 pt-3.75 lg:text-xs">
          <span className="text-[#d98a1c]">✦</span> A more confident move starts here.
        </div>
      </div>
    </section>
  );
};

export default Auth;
