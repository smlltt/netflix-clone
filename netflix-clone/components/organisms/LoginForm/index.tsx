import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import TextInput from "@/components/atoms/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useValidationSchema from "@/components/organisms/LoginForm/validation";
import AuthButton from "@/components/atoms/AuthButton";
import useLogin from "@/hooks/useLogin";

const LoginForm = () => {
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
  const { loading, login } = useLogin();

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
      <AuthButton disabled={loading} text={"Sign in"} />
    </form>
  );
};

export default LoginForm;
