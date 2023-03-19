import React, { useState } from "react";
import NavbarItem from "@/components/organisms/Navbar/NavbarItem";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileSidebar from "@/components/organisms/Navbar/MobileSidebar";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/api";
import { defaultStaleTime } from "@/constants";

const Navbar = () => {
  const { data: user } = useQuery(["user"], () => fetchUser(), {
    staleTime: defaultStaleTime,
  });
  const [showSidebar, setShowSidebar] = useState(false);
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
        <GiHamburgerMenu
          size={30}
          onClick={() => setShowSidebar(!showSidebar)}
        />
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
      {/*<div className={"flex gap-4 items-center cursor-pointer"}>*/}
      {/*  <AiOutlineSearch size={22} color={"white"} />*/}
      {/*  <img*/}
      {/*    src={"./images/default-profile-image.png"}*/}
      {/*    className={"rounded h-8 w-8 "}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
};

export default Navbar;
