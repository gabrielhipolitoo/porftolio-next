import { Composition } from "@/components/section";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <Composition.section margin="mt-30">
      <Composition.title title="Ops, provavelmente está página ainda esta em construção" />
      <Link href="/"  className=" rounded-3xl p-4 text-2xl text-black bg-amber-50 text-center">
        Voltar para a página inicial
      </Link>
    </Composition.section>
  );
}
