import React, { ButtonHTMLAttributes, FC } from "react";
import { IconType } from "react-icons";

interface MainButtonWithIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  text: string;
}
const MainButtonWithIcon: FC<MainButtonWithIconProps> = ({
  icon: Icon,
  text,
  ...rest
}) => {
  return (
    <div>
      <button
        className={
          "mt-1 flex items-center gap-2 rounded bg-white py-2 px-5 font-semibold text-black transition hover:bg-opacity-60 sm:mt-5 md:mt-6 md:text-2xl lg:mt-8"
        }
        {...rest}
      >
        <Icon />
        <div>{text}</div>
      </button>
    </div>
  );
};

export default MainButtonWithIcon;
