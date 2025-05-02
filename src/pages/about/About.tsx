import { listContacts } from "@/helper/contacts";
import { skills } from "@/helper/skills";
import { Composition } from "@/components/section";
import { work_sans_normal } from "@/fonts";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <Composition.section direction="col">
      <Composition.section>
        <Image
          src="/assets/images/Eu2.png"
          width={400}
          height={350}
          className="max-lg:hidden"
          alt="Minha foto 2"
        />
        <div className="   flex flex-col  max-lg:w-[90%] ">
          <Composition.title title="Como eu começei" />
          <p className={"text-white  mt-6 text-[20px] "}>
            Desde os 12 anos, sempre fui apaixonado por tecnologia, inicialmente
            interessado em entender o mundo dos hackers e a exploração de
            vulnerabilidades. Isso despertou meu interesse em programação.
            Comecei estudando C++, mesmo sem ter um computador, e depois migrei
            para Python, aprendendo principalmente pelo celular através de
            vídeos no YouTube, como os do Gustavo Guanabara. Com o tempo,
            descobri o desenvolvimento web, área pela qual me apaixonei, junto
            com o interesse por UI Design.
            <br />
            <span className="font-medium mt-5">
              Hoje atuo no desenvolvimento de interfaces que melhoram a
              experiência do usuário e do cliente, criando páginas mais
              atraentes, funcionais e persuasivas.
            </span>
          </p>
        </div>
      </Composition.section>

      <Composition.section>
        <div className="max-lg:w-[90%] w-[550px] ">
          <h2 className={"text-3xl text-white " + work_sans_normal.className}>
            Minhas Habilidades
          </h2>
          <div className="flex flex-wrap max-lg:w-[90%] gap-5 mt-5">
            {skills.map((item) => (
              <span
                key={item}
                className={
                  " bg-white text-black box-border p-2 rounded-xl " +
                  work_sans_normal.className
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10  max-lg:w-[90%] ml-auto max-lg:mr-auto max-lg:ml-0">
          <h2 className={"text-3xl text-white " + work_sans_normal.className}>
            Meus contatos{" "}
          </h2>
          <div className="flex flex-col  gap-5 mt-5">
            <span className="text-[20px] flex gap-3 p-1 text-white">
              {" "}
              <Image
                alt="Icone"
                src={"/assets/icons/email.svg"}
                width={25}
                height={25}
                className="fill-indigo-500"
              />{" "}
              dev.gabrielhipolito@gmail.com
            </span>
            {listContacts.map(({ name, icon }) => (
              <a
                href=""
                className="text-[20px] flex gap-2 text-white p-1"
                key={name}
              >
                <Image
                  alt="Icone"
                  src={icon}
                  width={20}
                  className="fill-indigo-500 "
                />
                {name}
              </a>
            ))}
          </div>
        </div>
      </Composition.section>
    </Composition.section>
  );
}
