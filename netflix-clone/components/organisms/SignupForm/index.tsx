import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import TextInput from "@/components/atoms/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useValidationSchema from "@/components/organisms/SignupForm/validation";
import AuthButton from "@/components/atoms/AuthButton";
import useLogin from "@/hooks/useLogin";
import toast from "react-hot-toast";
import { defaultErrorMessage } from "@/constants";
import { registerUser } from "@/api";

const SignupForm = () => {
  const validationSchema = useValidationSchema();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const { loading: loginLoading, login } = useLogin();

  const signUp: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    setLoading(true);
    try {
      await registerUser(data);
      toast.success("Signed up successfully!");
      await login({ email, password });
    } catch (error) {
      toast.error(defaultErrorMessage);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(signUp)} className={"flex flex-col gap-3"}>
      <TextInput
        field={"username"}
        label={"Username"}
        register={register}
        error={errors.username?.message?.toString()}
      />
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
      <AuthButton disabled={loading || loginLoading} text={"Sign up"} />
    </form>
  );
};

export default SignupForm;
