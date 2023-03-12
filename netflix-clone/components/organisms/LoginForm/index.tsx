import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import TextInput from "@/components/atoms/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useValidationSchema from "@/components/organisms/LoginForm/validation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import routes from "@/routes";

const LoginForm = () => {
  const router = useRouter();
  const validationSchema = useValidationSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login: SubmitHandler<FieldValues> = async (data) => {
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
      console.log("login error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(login)} className={"flex flex-col gap-3"}>
      <TextInput
        field={"email"}
        label={"Email"}
        register={register}
        error={errors.email?.message?.toString()}
      />
      <TextInput
        type={"password"}
        field={"password"}
        label={"Password"}
        register={register}
        error={errors.password?.message?.toString()}
      />
      <button
        className={"bg-red-600 text-white py-3 rounded-md font-medium mt-6"}
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
