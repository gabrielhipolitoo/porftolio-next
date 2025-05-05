import { StaticImageData } from "next/image";
import portfolio from "../../public/assets/images/capa-port.png";
import agilys from "../../public/assets/images/capa-agilys.png";
import buildX from "../../public/assets/images/capa-buidx.png";
import aloha from "../../public/assets/images/capa-aloha.png";
import inModel from "../../public/assets/images/capa-agency.png";
import aceffong from "../../public/assets/images/capa-blog.png";

type Projects = {
  title: string;
  tag: string[];
  description: string;
  image: StaticImageData;
  link: string;
};

export const listProjects: Projects[] = [
  {
    title: "Meu Portfólio",
    tag: ["Next.js", "Wordpress"],
    image: portfolio,
    description:
      "Criei esse site para facilitar a divulgação dos meus serviços e projetos",
    link: "https://gabrielhipolito.com.br",
  },
  {
    title: "Landing Page - Agilys",
    tag: ["Wordpress", "Figma"],
    image: agilys,
    description:
      "Criei esse site para facilitar a divulgação dos meus serviços e projetos",
    link: "https://gabrielhipolito.com.br",
  },
  {
    title: "BuildX",
    tag: ["Wordpress", "Figma"],
    image: buildX,
    description:
      "Criei esse site para facilitar a divulgação dos meus serviços e projetos",
    link: "https://gabrielhipolito.com.br",
  },
  {
    title: "Aloha",
    tag: ["Html/css", "Figma"],
    image: aloha,
    description:
      "Criei esse site para facilitar a divulgação dos meus serviços e projetos",
    link: "https://gabrielhipolito.com.br",
  },
  {
    title: "Agencia - INMODEL",
    tag: ["Html/css", "Figma"],
    image: inModel,
    description: "design ficticio",
    link: "https://gabrielhipolito.com.br",
  },
  {
    title: "Aceffong - blog",
    tag: ["Html/css", "Figma"],
    image: aceffong,
    description: "design ficticio",
    link: "https://gabrielhipolito.com.br",
  },
];
