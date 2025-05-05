import { Composition } from "@/components/section";
import { work_sans } from "@/fonts";

export default function Methodology() {
  return (
    <Composition.section direction="col">
      <Composition.title title="Metodologia de Desenvolvimento" />
      <div className=" mb-10 w-full grap-5 grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-10  ">
        <div className="w-[350px] h-[350px]  max-lg:w-full min-2xl:w-[450px]  flex flex-col justify-between bg-[#131316] p-4 rounded-md">
          <h2 className="text-4xl text-white mt-5">Imersão</h2>
          <p className={"text-md text-white mt-5 " + work_sans.className}>
            Vamos compreender o projeto proposto, coletando informações e
            analisando requisitos, considerando objetivos e público-alvo, e
            debatendo quais tecnologias oferecem o melhor custo-benefício para
            sua execução
          </p>
          <span className="text-lg font-bold ml-auto text-white">1</span>
        </div>

        <div className="w-[350px]  h-[350px] max-lg:w-full min-2xl:w-[450px]  rounded-md  flex flex-col justify-between bg-[#131316] p-4 ">
          <h2 className="text-4xl text-white mt-5">Ideação</h2>
          <p className={"text-md text-white mt-5 " + work_sans.className}>
            É aqui que começamos a transformar suas ideias em algo concreto.
            Vamos entender o seu negócio, seu público-alvo e criar um design sob
            medida, com funcionalidades pensadas especialmente para os
            stakeholders envolvidos.
          </p>
          <span className="text-lg font-bold ml-auto text-white">2</span>
        </div>

        <div className="w-[350px]  h-[350px] max-lg:w-full min-2xl:w-[450px] rounded-md  flex flex-col justify-between bg-[#131316] p-4">
          <h2 className="text-4xl text-white mt-5">Implementação</h2>
          <p className={" text-md text-white mt-5 " + work_sans.className}>
            Agora vamos códificar e por a ideia em prática, cada requisito/caso
            de uso será desenvolvido nesta etapa. Cada parte será criada, e
            refinada, com ojetivo alcançar, a ideia final e otimização
          </p>
          <span className="text-lg font-bold ml-auto text-white">3</span>
        </div>
      </div>
    </Composition.section>
  );
}
