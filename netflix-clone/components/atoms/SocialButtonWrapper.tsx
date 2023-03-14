import React, { FC } from "react";
import { IconType } from "react-icons";

interface SocialButtonWrapperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon: IconType;
}
const SocialButtonWrapper: FC<SocialButtonWrapperProps> = ({
  icon: Icon,
  ...rest
}) => {
  return (
    <div
      className={
        "rounded-full bg-white w-10 h-10 justify-center flex items-center cursor-pointer hover:opacity-80 transition"
      }
      {...rest}
    >
      <Icon size={30} />
    </div>
  );
};

export default SocialButtonWrapper;
