import ButtonCall from "@/components/button/Button";
import { Composition } from "@/components/section";
import React from "react";

export default function ContactPage() {
  return (
    <Composition.section direction="col">
      <Composition.title
        title="Entre em contato comigo agora mesmo"
        position="center"
      />
      <p className="font-light text-center text-3xl w-[80%] m-auto text-white">
        Crio interfaces com o objetivo de atrair visitantes e transformar em
        clientes.
        <span className="text-[#6472CC] font-bold  p-1 rounded-sm">
          Quer que eu crie uma ideia design para sua página de forma gratuita?
        </span>{" "}
        Me chame no whatsap agora mesmo.
      </p>
      <ButtonCall position={"auto"} />
    </Composition.section>
  );
}
