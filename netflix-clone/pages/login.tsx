import React from "react";
import LoginForm from "@/components/organisms/LoginForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

const Login = () => {
  return (
    <AuthTemplate authType={"Sign in"}>
      <LoginForm />
    </AuthTemplate>
  );
};

export default Login;
