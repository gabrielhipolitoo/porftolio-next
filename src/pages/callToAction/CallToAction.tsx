import ButtonCall from "@/components/button/Button";
import { Composition } from "@/components/section";
import React from "react";

export default function CallToAction() {
  return (
    <section className=" w-full p-10 bg-[#0F0F11] flex items-center justify-between rounded-2xl max-lg:flex-col max-lg:j">
      <h2 className="text-2xl text-white w-[70%] max-lg:text-center max-lg:w-full max-lg:text-1xl max-lg:mb-10 ">
        Potencialize o seu sucesso! Entre em contato conosco agora para
        aproveitar nosso serviço e alcançar seus objetivos com excelência.
      </h2>

      <ButtonCall padding="4" />
    </section>
  );
}
