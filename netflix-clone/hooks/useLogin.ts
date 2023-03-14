import { FieldValues, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import routes from "@/routes";
import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { defaultErrorMessage } from "@/constants";

const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const login: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    const { email, password } = data;
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push(routes.home);
    } catch (error) {
      toast.error(defaultErrorMessage);
    }
    setLoading(false);
  };

  return {
    loading,
    login,
  };
};

export default useLogin;
