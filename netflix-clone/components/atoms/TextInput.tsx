import React, { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import cx from "classnames";

interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  field: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  error?: string;
}

const TextInput: FC<TextInputProps> = ({
  field,
  label,
  register,
  error,
  ...props
}) => {
  return (
    <div className={"relative"}>
      <input
        {...register(field)}
        className={cx(
          "block rounded-md px-6 pb-1 pt-6 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer",
          error && "border-b-orange-500 border-b-2"
        )}
        placeholder={" "}
        {...props}
      />
      <label
        htmlFor={field}
        className={
          "absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-3.5 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        }
      >
        {label}
      </label>
      <div className={"mt-1 ml-1 text-xs text-orange-500"}>{error}</div>
    </div>
  );
};

export default TextInput;
