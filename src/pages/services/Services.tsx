import { Composition } from "@/components/section";
import { myServices } from "@/helper/services";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <Composition.section direction="col">
      <Composition.title title="Conheça os meus serviços" />
      <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
        {myServices.map(({ name, description, icon }) => (
          <div
            key={name}
            className="w-[90%] max-lg:w-full max-lg bg-[#131316] mt-10 h-[350px] flex flex-col justify-center gap-7  p-4 rounded-lg hover:bg-[#6472CC] l"
          >
            <div className="flex justify-between">
              <h2 className="text-3xl text-white">{name}</h2>
              <Image src={icon} alt="Icone" width={30} />
            </div>
            <p className="text-[15px] text-white">{description}</p>
          </div>
        ))}
      </div>
    </Composition.section>
  );
}
