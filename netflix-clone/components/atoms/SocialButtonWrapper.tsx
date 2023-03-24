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
        "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
      }
      {...rest}
    >
      <Icon size={30} />
    </div>
  );
};

export default SocialButtonWrapper;
