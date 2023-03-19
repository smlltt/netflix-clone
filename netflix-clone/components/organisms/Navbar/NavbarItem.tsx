import React, { FC } from "react";

interface NavbarItemProps {
  label: string;
}
const NavbarItem: FC<NavbarItemProps> = ({ label }) => {
  return (
    <div
      className={
        "font-semibold lg:font-normal text-neutral-400 hover:text-white lg:text-white lg:text-sm cursor-pointer lg:hover:text-neutral-400 transition duration-500"
      }
    >
      {label}
    </div>
  );
};

export default NavbarItem;
