const SubmitButton = ({ children }) => (
  <button
    type="submit"
    className="h-12 justify-between py-0 pl-5 pr-4.25 rounded-xl text-xs bg-[#1f7a4d] text-white w-full inline-flex items-center gap-2 border border-transparent font-semibold whitespace-nowrap font-[manrope] lg:text-sm"
  >
    <span>{children}</span>
    <span className="w-6.75 h-6.75 grid place-items-center rounded-lg text-[#0d3324] bg-[#f2a541]">→</span>
  </button>
);

export default SubmitButton;
