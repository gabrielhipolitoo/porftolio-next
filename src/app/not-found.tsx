import { Composition } from "@/components/section";
import React from "react";

export default function NotFound() {
  return (
    <Composition.section margin="mt-30">
      <Composition.title title="Ops, provavelmente está página ainda esta em construção" />
      <a href="/"  className=" rounded-3xl p-4 text-2xl text-black bg-amber-50 text-center">
        Voltar para a página inicial
      </a>
    </Composition.section>
  );
}
