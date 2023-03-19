import React, { useEffect, useRef, useState } from "react";
import NavbarItem from "@/components/organisms/Navbar/NavbarItem";
import MobileSidebar from "@/components/organisms/Navbar/MobileSidebar";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/api";
import { defaultStaleTime } from "@/constants";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { RxTriangleDown } from "react-icons/rx";
import AccountMenu from "@/components/organisms/AccountMenu";
import autoAnimate from "@formkit/auto-animate";

const Navbar = () => {
  const { data: user } = useQuery(["user"], () => fetchUser(), {
    staleTime: defaultStaleTime,
  });
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const accountMenuParentRef = useRef<HTMLDivElement>(null);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    accountMenuParentRef.current && autoAnimate(accountMenuParentRef.current);
  }, [accountMenuParentRef]);

  return (
    <div
      className={
        "px-4 gap-4 lg:px-16 pt-6 pb-4 flex fixed z-40 bg-zinc-900 w-full items-center"
      }
    >
      <div
        className={
          "lg:hidden  cursor-pointer flex gap-2 items-center hover:text-neutral-400 transition duration-500 text-white"
        }
      >
        <AiOutlineMenu size={30} onClick={() => setShowSidebar(!showSidebar)} />
        <MobileSidebar visible={showSidebar} user={user?.data.name} />
      </div>
      <img src={"/images/logo.png"} alt={"logo"} className={"h-6 pr-12"} />
      <div className={"flex gap-6 hidden lg:flex"}>
        <NavbarItem label={"Home"} />
        <NavbarItem label={"TV Shows"} />
        <NavbarItem label={"Movies"} />
        <NavbarItem label={"New & Popular"} />
        <NavbarItem label={"My List"} />
        <NavbarItem label={"Browse by Languages"} />
      </div>
      <div
        className={
          "flex gap-4 items-center cursor-pointer ml-auto hidden lg:flex"
        }
      >
        <AiOutlineSearch size={22} color={"white"} />
        <AiOutlineBell size={22} color={"white"} />
        <div
          className={"flex items-center gap-4"}
          onMouseEnter={() => setShowAccountMenu(true)}
          onMouseLeave={(e) => {
            if (e.relatedTarget === accountMenuRef.current) {
              return;
            }
            setShowAccountMenu(false);
          }}
          ref={accountMenuParentRef}
        >
          <img
            src={"./images/default-profile-image.png"}
            className={"rounded h-8 w-8 "}
            alt={"profile"}
          />
          <RxTriangleDown size={22} color={"white"} />
          <AccountMenu visible={showAccountMenu} ref={accountMenuRef} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
