import React from "react";
import AuthTemplate from "@/components/templates/AuthTemplate";
import SignupForm from "@/components/organisms/SignupForm";

const Register = () => {
  return (
    <AuthTemplate authType={"Register"}>
      <SignupForm />
    </AuthTemplate>
  );
};

export default Register;
