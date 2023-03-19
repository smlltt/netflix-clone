import React, { FC } from "react";

interface AccountMenuItemProps {
  text: string;
}
const AccountMenuItem: FC<AccountMenuItemProps> = ({ text }) => {
  return (
    <div className={"flex items-center gap-2"}>
      <img
        src={"./images/default-profile-image.png"}
        className={"rounded h-8 w-8 "}
        alt={"profile"}
      />
      <div className={"hover:underline"}>{text}</div>
    </div>
  );
};

export default AccountMenuItem;
