import { FieldValues, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import routes from "@/routes";
import { useState } from "react";
import toast from "react-hot-toast";
import { defaultErrorMessage } from "@/constants";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    const { email, password } = data;
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: routes.home,
      });
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
