import MountImg from "../../assets/images/mountain.jpg"; // adjust if your folder differs
import { getHeroCopy } from "../../data/copy";

const AVATARS = [
  { letter: "J", bg: "bg-[#f6d8a9]" },
  { letter: "B", bg: "bg-[#e4b6a8]" },
  { letter: "L", bg: "bg-[#c7e0cb]" },
];

const AuthHero = ({ tab, role, isLeaving }) => {
  const { badge, title, accent, text } = getHeroCopy(tab, role);

  return (
    <aside className="min-h-47.5 relative overflow-hidden text-white bg-[#17603f] flex flex-col justify-between py-4.5 px-5 w-full md:min-h-full lg:p-8">
      <div
        className="absolute inset-0 scale-[1.04] transition-[scale,filter] duration-[1.25s] ease-[cubic-bezier(0.22,1,0.36,1)] bg-cover bg-center"
        style={{ backgroundImage: `url(${MountImg})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#08281b78_0%,#08281b26_32%,#08281b6b_55%,#08281beb_100%)]" />

      <p className="flex items-center gap-2.5 text-[#ffffffd6] font-[poppins] uppercase text-[8px] font-extrabold relative z-1 tracking-widest lg:text-xs">
        <span className="w-2 h-2 rounded-full bg-[#F2A93B]" /> your next chapter starts here
      </p>

      <div className={`${isLeaving ? "leaving " : ""}relative z-1 mt-6 max-w-100 transition-[translate,opacity] duration-[0.65s,0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] md:mt-auto md:mb-7.5`}>
        <span className="inline-block py-1.25 px-2.25 border border-[#e9e3d8f2] rounded-full text-[#f7d59d] text-[9px] font-bold font-[manrope] tracking-wider backdrop-blur-sm md:py-1.75 md:px-3 lg:text-xs">
          {badge}
        </span>
        <h1 className="mt-4 text-2xl font-[poppins] font-bold lg:text-4xl lg:my-6">
          {title}
          <br />
          <span className="text-[#F2A93B]">{accent}.</span>
        </h1>
        <p className="hidden mt-4 text-[#ffffffc9] leading-relaxed text-sm max-w-85 md:inline lg:text-base">{text}</p>
      </div>

      <div className="hidden items-center gap-3 border-t border-t-[#e9e3d8f2] pt-5 md:flex z-1">
        <div className="flex pl-0.5">
          {AVATARS.map(({ letter, bg }) => (
            <span key={letter} className={`w-7.5 h-7.5 -ml-1 grid place-items-center border-2 border-[#ffffffbf] rounded-full text-[10px] font-extrabold font-[poppins] text-[#17603f] ${bg}`}>
              {letter}
            </span>
          ))}
        </div>
        <div className="font-[manrope]">
          <strong className="block text-xs">Made for life in Jos</strong>
          <small className="block text-[10px] mt-0.5">Students and landlords, closer together</small>
        </div>
      </div>

      <div className="flex gap-1.25 absolute right-7.5 bottom-6">
        <i className="w-5 h-1.5 block rounded-full bg-[#F2A93B]" />
        <i className="w-1.5 h-1.5 block rounded-full bg-[#ffffff66]" />
        <i className="w-1.5 h-1.5 block rounded-full bg-[#ffffff66]" />
      </div>
    </aside>
  );
};

export default AuthHero;
