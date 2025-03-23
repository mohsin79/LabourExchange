import Footer from "./Footer";
import SignUpForm from "./SignUpForm";
import AuthLayout from "../../layouts/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout type="SignUp">
      <SignUpForm />
      <Footer />
    </AuthLayout>
  );
};

export default SignUp;
