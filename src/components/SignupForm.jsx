import Field from "./Field";
import PasswordInput from "./PasswordInput";
import RoleSelector from "./RoleSelector";
import SubmitButton from "./SubmitButton";
import { checkboxRow, checkboxInput, textLink } from "../assets/styles/styles";

const SignupForm = ({ role, onRoleSelect, isChanging, onSubmit }) => (
  <form onSubmit={onSubmit} className={isChanging ? "active-form" : ""}>
    <RoleSelector role={role} onSelect={onRoleSelect} />

    <Field id="signup-name" label="Fullname" type="text" placeholder="John Doe" />
    <Field id="signup-email" label="Email address" type="email" placeholder="johndoe@yahoo.com" />
    <PasswordInput id="signup-password" placeholder="At least 8 characters" />

    <label className={`${checkboxRow} lg:mb-4`}>
      <input type="checkbox" required className={checkboxInput} />
      <span>
        I agree to the <a href="#terms" className={textLink}>Terms</a> and{" "}
        <a href="#privacy" className={textLink}>Privacy Policy</a>.
      </span>
    </label>

    <SubmitButton>Create my account</SubmitButton>
  </form>
);

export default SignupForm;
