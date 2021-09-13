import "./style.scss";
import { Navbar } from "../../components/Navbar";
import { SignForm } from "../../components/SignForm";
import { SignInFooter } from "../../components/SignInFooter";
export const SignIn = () => {
  return (
    <div className="signin">
      <Navbar showActions={false} />
      <SignForm />
      <SignInFooter />
    </div>
  );
};
