import { Composition } from "@/components/section";
import { listProjects } from "@/helper/projects";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <Composition.section direction="col" margin="mt-30">
      <Composition.title font="bold" title="/Meus projetos" />
      <div className="grid grid-cols-2 w-full gap-10  max-lg:grid-cols-1 max-md:justify-center">
        {listProjects.map(({ title, link, tag, image, description }) => (
          <div 
            key={title}
            className="flex flex-col gap-5 justify-between w-[520px]   bg-[#131316] rounded-md p-5 max-md:w-[100%]"
          >
            <h2 className="font-medium text-4xl mb-[15px] text-white">
              {title}
            </h2>
            <p className="text-[18px] font-medium mb-10 text-white">
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
              <div className="flex gap-5">
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
