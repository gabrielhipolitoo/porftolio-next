import { Composition } from "@/components/section";
import { listProjects } from "@/helper/projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meus projetos",
  description: "Conheça os meus projetos realizados",
};

const Projects: React.FC = () => {
  return (
    <Composition.section direction="col" margin="mt-30">
      <Link  href="/" className="bg-white text-black w-[100px] text-center p-2 rounded-md font-normal">Voltar</Link>
      <Composition.title font="bold" title="/Meus projetos" />
      <div className="flex flex-wrap w-full gap-10 justify-between  max-lg:grid-cols-1 max-md:justify-center">
        {listProjects.map(({ title, link, tag, image, description }) => (
          <div
            key={title}
            className="flex flex-col gap-5 justify-between w-[550px]   bg-[#131316] rounded-md p-5 max-lg:w-[100%]"
          >
            <h2 className="font-medium text-4xl mb-[15px] text-white">
              {title}
            </h2>
            <p className="text-[20px] font-medium mb-10 text-white">
              {description}
            </p>
            <Image
              className="max-lg:w-[100%]"
              src={image}
              width={500}
              height={400}
              alt="Foto 1"
            />
            <div className="flex flex-col">
              <div className="flex gap-2 flex-wrap item">
                {tag.map((item) => (
                  <p
                    key={item}
                    className="mt-5 mb-5 p-1 text-sm  text-white rounded-md bg-[#6472CC]"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <span>
                <a
                  className="text-white text-white hover:border-b-1"
                  href={link}
                >
                  Visitar
                </a>
                <a className="ml-5 text-white hover:border-b-1" href="">
                  Repositório
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Composition.section>
  );
};

export default Projects;
