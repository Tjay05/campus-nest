import { StudentIcon, LandlordIcon } from "../assets/icons/icons";

const ROLES = [
  { id: "student", title: "Student", hint: "Find a room near campus", Icon: StudentIcon, iconStyle: "bg-[#e2f2e9] text-[#17603f]" },
  { id: "landlord", title: "Landlord", hint: "List a place for students", Icon: LandlordIcon, iconStyle: "bg-[#fdf0db] text-[#a26a12]" },
];

const RoleSelector = ({ role, onSelect }) => (
  <fieldset className="border-0 p-0 mx-0 mt-0 mb-4 min-w-0 font-[manrope]">
    <legend className="text-xs text-[#4a524d] font-bold mb-2.25 lg:text-sm">I'm joining as a...</legend>
    <div className="grid grid-cols-2 gap-2.25">
      {ROLES.map(({ id, title, hint, Icon, iconStyle }) => (
        <button
          key={id}
          type="button"
          onClick={() => onSelect(id)}
          className={`${role === id ? "active-role" : ""} relative min-w-0 flex gap-2 items-center px-2 py-2.5 rounded-xl border border-[#e9e3d8] text-left bg-white cursor-pointer hover:border-[#a9d4bb] hover:-translate-y-0.5 transition-[border-color,background,-translate-y] duration-300`}
        >
          <span className={`w-8.5 h-8.5 grid place-items-center rounded-xl flex-none ${iconStyle}`}>
            <Icon />
          </span>
          <span className="font-[manrope]">
            <strong className="block text-[11px] text-[#1c1f1d] lg:text-sm">{title}</strong>
            <small className="block text-[9px] text-[#868e89] leading-tight mt-0.5 lg:text-xs">{hint}</small>
            <span className="grid place-items-center absolute top-1.5 right-1.5 w-3.5 rounded-full bg-[#1f7a4d] text-white text-[9px] opacity-0">✓</span>
          </span>
        </button>
      ))}
    </div>
  </fieldset>
);

export default RoleSelector;
