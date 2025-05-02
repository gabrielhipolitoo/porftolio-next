import { Composition } from "@/components/section";
import React from "react";

export default function AcessProjetct() {
  return (
    <Composition.section>
      <div className="p-4 h-full flex flex-col justify-between ">
        <h2 className="text-6xl text-white">Conheça os meus projetos</h2>
        <p className="text-2xl mt-10 font-light text-white">
          Conheça alguns dos meus projetos pessoais e profissionais
        </p>
        <button className="p-5 mt-10 cursor-pointer bg-[#131316] text-white rounded-md hover:bg-[#6472CC] transition">
          Acessar Projetos
        </button>
      </div>
      <div className="p-4 flex  h-full  flex-col justify-between  ">
        <h2 className="text-6xl text-white text-right">Leia meus artigos</h2>
        <p className="text-2xl mt-10 font-light text-white text-right">
          Artigos sobre design, arquiterua e clean code, entre outros.
        </p>
        <button className="p-5 mt-10 cursor-pointer bg-[#131316] text-white rounded-md hover:bg-[#6472CC] transition">
          Acessar artigos
        </button>
      </div>
    </Composition.section>
  );
}
