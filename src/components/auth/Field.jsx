import { fieldWrapper, inputClass } from "../../assets/styles/styles";

// Label + input. Pass `children` to replace the default <input> (e.g. PasswordInput),
// and `labelExtra` for something on the right of the label (e.g. "Forgot password?").
const Field = ({ id, label, labelExtra, children, required = true, ...inputProps }) => (
  <div className={fieldWrapper}>
    {labelExtra ? (
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="font-semibold">{label}</label>
        {labelExtra}
      </div>
    ) : (
      <label htmlFor={id} className="font-semibold">{label}</label>
    )}
    {children ?? <input id={id} required={required} className={inputClass} {...inputProps} />}
  </div>
);

export default Field;
