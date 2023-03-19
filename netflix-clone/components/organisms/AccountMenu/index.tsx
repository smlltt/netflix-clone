import React, { forwardRef } from "react";
import AccountMenuItem from "@/components/organisms/AccountMenu/AccountMenuItem";
import Divider from "@/components/atoms/Divider";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
  visible: boolean;
}

const AccountMenu = forwardRef<HTMLDivElement, AccountMenuProps>(
  ({ visible }, ref) => {
    if (!visible) return null;
    return (
      <div ref={ref} className={"text-white text-sm absolute top-8 right-0"}>
        <div className={"h-4 bg-zinc-900"} />
        <div
          className={"border border-neutral-800 bg-black opacity-90 w-56 pt-4"}
        >
          <div className={"px-3  flex flex-col gap-3 mb-5 "}>
            <AccountMenuItem text={"Username"} />
            <AccountMenuItem text={"Account"} />
            <AccountMenuItem text={"Help"} />
          </div>
          <Divider />
          <div
            className={"text-center py-4 hover:underline"}
            onClick={() => signOut()}
          >
            Sign out of Netflix
          </div>
        </div>
      </div>
    );
  }
);

export default AccountMenu;
