import ButtonCall from "@/components/button/Button";
import { links } from "@/helper/links";
import React from "react";

export default function MenuMobile() {
  console.log("test");
  return (
    <section className="absolute m-auto max-md:w-[100%] w-[530px]  max-md:right-0 max-md:left-0  top-18   right-0 z-10">
      <div className="flex center m-auto  p-2 bg-[#0F0F11] w-full  h-[500px] rounded-md max-w-[90%] ml-auto">
        <div className=" flex flex-col h-full m-auto justify-around   items-center">
          {links.map(({ name, target }) => (
            <a href={target} className="text-white transition">
              {name}
            </a>
          ))}
          <ButtonCall />
        </div>
      </div>
    </section>
  );
}
