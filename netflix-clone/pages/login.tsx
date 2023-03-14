import React from "react";
import LoginForm from "@/components/organisms/LoginForm";
import AuthTemplate from "@/components/templates/AuthTemplate";
import { FcGoogle } from "react-icons/fc";
import SocialButtonWrapper from "@/components/atoms/SocialButtonWrapper";
import { FaGithub } from "react-icons/fa";
import { LiteralUnion, signIn } from "next-auth/react";
import routes from "@/routes";
import toast from "react-hot-toast";
import { defaultErrorMessage } from "@/constants";
import { BuiltInProviderType } from "next-auth/providers";

const Login = () => {
  const handleSocialLoginClick = async (
    provider: LiteralUnion<BuiltInProviderType, string> | undefined
  ) => {
    try {
      signIn(provider, {
        callbackUrl: routes.home,
      });
    } catch (error) {
      toast.error(defaultErrorMessage);
    }
  };
  return (
    <AuthTemplate authType={"Sign in"}>
      <LoginForm />
      <div className={"flex gap-4 mt-8 justify-center "}>
        <SocialButtonWrapper
          icon={FcGoogle}
          onClick={() => handleSocialLoginClick("google")}
        />
        <SocialButtonWrapper
          icon={FaGithub}
          onClick={() => handleSocialLoginClick("github")}
        />
      </div>
    </AuthTemplate>
  );
};

export default Login;
