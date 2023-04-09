import React, { forwardRef } from "react";
import AccountMenuItem from "@/components/organisms/AccountMenu/AccountMenuItem";
import Divider from "@/components/atoms/Divider";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
  visible: boolean;
  user?: string;
}

const AccountMenu = forwardRef<HTMLDivElement, AccountMenuProps>(
  function AccountMenu({ visible, user }, ref) {
    if (!visible) return null;
    return (
      <div ref={ref} className={"absolute top-8 right-0 text-sm text-white"}>
        <div className={"h-4 bg-transparent"} />
        <div
          className={
            "w-56 rounded-sm border border-neutral-800 bg-black pt-4 opacity-90"
          }
        >
          <div className={"mb-5 flex flex-col gap-3 px-3"}>
            <AccountMenuItem text={user || "Username"} />
          </div>
          <Divider />
          <div
            className={"py-4 text-center hover:underline"}
            onClick={() => signOut()}
          >
            Sign out of Netflix
          </div>
        </div>
      </div>
    );
  }
);

AccountMenu.displayName = "AccountMenu";

export default AccountMenu;
