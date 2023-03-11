import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import TextInput from "@/components/atoms/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useValidationSchema from "@/components/organisms/SignupForm/validation";

const SignupForm = () => {
  const validationSchema = useValidationSchema();
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
  console.log({ errors });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
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
      <button
        className={"bg-red-600 text-white py-3 rounded-md font-medium mt-6"}
      >
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
