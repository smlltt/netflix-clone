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
import cx from "classnames";

const TOP_OFFSET = 66;
const Navbar = () => {
  const { data: user } = useQuery(["user"], () => fetchUser(), {
    staleTime: defaultStaleTime,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const accountMenuParentRef = useRef<HTMLDivElement>(null);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef(null);

  // animate the account menu's appearance
  useEffect(() => {
    accountMenuParentRef.current && autoAnimate(accountMenuParentRef.current);
  }, [accountMenuParentRef]);

  // add bg color to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > TOP_OFFSET);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cx(
        "px-4 gap-4 lg:px-16 pt-6 pb-4 flex fixed z-40 w-full items-center bg-zinc-900",
        isScrolled ? "lg:bg-zinc-900" : "lg:bg-transparent"
      )}
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
          <div ref={triangleRef}>
            <RxTriangleDown
              size={22}
              className={cx(
                "transition text-white",
                showAccountMenu ? "rotate-180" : "rotate-0"
              )}
            />
          </div>
          <AccountMenu visible={showAccountMenu} ref={accountMenuRef} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
