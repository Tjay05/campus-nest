const SubmitButton = ({ children, disabled }) => (
  <button
    type="submit"
    disabled={disabled}
    className="btn-secondary"
  >
    {children}
    <span className="w-6.75 h-6.75 grid place-items-center rounded-lg text-[#0d3324] bg-[#f2a541] transition-[translate] duration-350">→</span>
  </button>
);

export default SubmitButton;
