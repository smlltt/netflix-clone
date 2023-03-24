import React, { FC } from "react";
import cx from "classnames";
import NavbarItem from "@/components/organisms/Navbar/NavbarItem";
import Divider from "@/components/atoms/Divider";

interface MobileSidebarProps {
  visible: boolean;
  user?: string;
}
const MobileSidebar: FC<MobileSidebarProps> = ({ visible, user }) => {
  return (
    <div
      className={cx(
        "top-20 -mt-2.5 left-0 w-[80vw] sm:w-[60vw] bg-zinc-900 pt-10 pr-5 pl-20 fixed h-full ease-in-out duration-300",
        visible ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className={"-ml-16 -mt-10 flex flex-col gap-2"}>
        <div className={"flex items-center gap-2"}>
          <img
            src={"./images/default-profile-image.png"}
            className={"rounded h-8 w-8 "}
            alt={"logo"}
          />
          <NavbarItem label={user || ""} />
        </div>
        <Divider />
        <NavbarItem label={"Home"} />
        <NavbarItem label={"TV Shows"} />
        <NavbarItem label={"Movies"} />
        <NavbarItem label={"New & Popular"} />
        <NavbarItem label={"My List"} />
        <NavbarItem label={"Browse by Languages"} />
      </div>
    </div>
  );
};

export default MobileSidebar;
