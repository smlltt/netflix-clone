import React, { FC } from "react";
import cx from "classnames";

interface AuthButtonProps {
  disabled: boolean;
  text: string;
}
const AuthButton: FC<AuthButtonProps> = ({ disabled, text }) => {
  return (
    <button
      className={cx(
        "bg-red-600 text-white py-3 rounded-md font-medium mt-6",
        disabled && "opacity-50"
      )}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default AuthButton;
