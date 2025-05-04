"use client";
import ButtonCall from "@/components/button/Button";
import MyName from "@/components/myName/MyName";
import MenuMobile from "@/modal/MenuMobile";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [stateMenu, setStateMenu] = useState(false);
  console.log(stateMenu);

  function changeButton() {
    const closeMenu = (
      <Image
        src="/assets/icons/close.svg"
        width={20}
        height={20}
        alt="MenuMobile"
      />
    );
    const openMenu = (
      <Image
        src="/assets/icons/menuMobile.svg"
        width={20}
        height={20}
        alt="MenuMobile"
      />
    );

    return stateMenu ? closeMenu : openMenu;
  }

  return (
    <header className=" fixed  w-[100%]  ml-auto mr-auto backdrop-blur-md z-1 inset-0 h-24 flex items-center justify-center ">
      <div className="relative w-[90%]  flex items-center justify-between">
        <MyName />
        <div className="flex items-center gap-4">
          <ButtonCall />
          <button
            onClick={() => {
              setStateMenu(!stateMenu);
            }}
            className="cursor-pointer"
          >
            {changeButton()}
          </button>
          {stateMenu && <MenuMobile />}
        </div>
      </div>
    </header>
  );
}
