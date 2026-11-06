import { TABS } from "../../data/copy";

const TabSwitcher = ({ tab, onChange }) => (
  <div className="relative grid grid-cols-2 isolate bg-[#f3f3ef] p-1 rounded-xl mx-0 mt-6 mb-5">
    {/* sliding highlight */}
    <span
      className={`${tab === "signup" ? "" : "translate-x-full"} absolute -z-1 top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-lg bg-white shadow-[0_2px_7px_rgba(20,30,25,0.1)] transition-[translate,background] duration-[620ms,500ms] ease-[cubic-bezier(0.22,1,0.36,1),ease]`}
    />
    {TABS.map(({ id, label }) => (
      <button
        key={id}
        type="button"
        onClick={() => onChange(id)}
        className={`${tab === id ? "active-tab" : ""} border-0 h-9.5 bg-transparent text-xs font-bold font-[poppins] cursor-pointer text-[#7b817d] lg:text-sm`}
      >
        {label}
      </button>
    ))}
  </div>
);

export default TabSwitcher;
