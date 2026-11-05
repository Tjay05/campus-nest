import { useState } from "react";
import Field from "./Field";
import { EyeIcon } from "../assets/icons/icons";
import { inputClass } from "../assets/styles/styles";

// Owns its own show/hide state, so each form no longer shares one flag.
const PasswordInput = ({ id, label = "Password", placeholder, labelExtra }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Field id={id} label={label} labelExtra={labelExtra}>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          required
          className={inputClass}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-2.75 top-[20%] text-[#8b948e] p-0.75 bg-transparent grid place-items-center hover:cursor-pointer"
        >
          <EyeIcon />
        </button>
      </div>
    </Field>
  );
};

export default PasswordInput;
