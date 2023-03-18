import { FieldValues, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import routes from "@/routes";
import { useState } from "react";
import toast from "react-hot-toast";
import { defaultErrorMessage } from "@/constants";
import { useRouter } from "next/router";

const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const login: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.ok) {
        router.push(routes.profiles);
      } else if (res?.error) {
        toast.error(res.error);
      }
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
