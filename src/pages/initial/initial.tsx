import ButtonCall from "@/components/button/Button";
import { Composition } from "@/components/section";
import { work_sans } from "@/fonts";
import Image from "next/image";
import React from "react";

export default function Initial() {
  return (
    <Composition.section>
      <div className="grid flex-col gap-4 max-xl:items-center row-start-1 row-end-4 bg-amber-400">
        <h1 className="text-6xl max-w-[90%] text-[#D8D8D8] bg-amber-100 font-bold max-lg:text-center max-md:text-4xl ">
          Desenvolvedor Frontend
        </h1>
        <p
          className={
            work_sans.className +
            " text-4xl   text-[#BEBEBE] max-lg:text-center max-lg:text-3xl"
          }
        >
          Criando experiencias para o seu cliente e desenvolvendo soluções para
          o seu negócio
        </p>
        <ButtonCall padding="4" />
      </div>
      <div className=" w-full  row-span-3  ">
        <Image
          priority
          className="translate-[-20px]  max-lg:translate-[0] ml-auto max-lg:m-auto  "
          alt="Minha foto"
          src={"/assets/Images/eu.png"}
          width={400}
          height={400}
        />
      </div>
    </Composition.section>
  );
}
