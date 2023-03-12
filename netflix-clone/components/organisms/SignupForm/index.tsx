import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import TextInput from "@/components/atoms/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useValidationSchema from "@/components/organisms/SignupForm/validation";
import axios from "axios";

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

  const signUp: SubmitHandler<FieldValues> = async (data) => {
    try {
      await axios.post("/api/register", data);
      //   TODO add success toast + login immediately after signUp
    } catch (error) {
      console.log("registration error", error);
      //   TODO add error toast
    }
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
      <button
        className={"bg-red-600 text-white py-3 rounded-md font-medium mt-6"}
      >
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
