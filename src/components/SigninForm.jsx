import Field from "./Field";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import { checkboxRow, checkboxInput } from "../assets/styles/styles";

const ForgotLink = (
  <a className="text-[10px] font-bold text-[#17603f] lg:text-xs">Forgot password?</a>
);

const SigninForm = ({ isChanging, onSubmit }) => (
  <form onSubmit={onSubmit} className={isChanging ? "active-form" : ""}>
    <Field id="signin-email" label="Email address" type="email" placeholder="campusnest@yahoo.com" />
    <PasswordInput id="signin-password" placeholder="Enter your password" labelExtra={ForgotLink} />

    <label className={checkboxRow}>
      <input type="checkbox" className={checkboxInput} />
      <span>Keep me signed in</span>
    </label>

    <SubmitButton>Welcome back</SubmitButton>
  </form>
);

export default SigninForm;
