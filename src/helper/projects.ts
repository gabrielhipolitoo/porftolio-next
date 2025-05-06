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
    tag: ["Next.js", "Typescript"],
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
    tag: ["Reaxt.js", "Redux.js", "Context Api", "Tailwind", "Composition"],
    image: buildX,
    description:
      "Sistema de monitoramento de produtividade na criação de carros, feito com React, TypeScript, Redux Toolkit, Tailwind CSS, Context API e componentes reutilizáveis para garantir escalabilidade, organização e interface limpa.",
    link: "https://gabrielhipolito.com.br",
  },
  {
    title: "Aloha",
    tag: ["React.js", "Bootstrap.js"],
    image: aloha,
    description:
      "Site institucional para empresa de engenharia civil, feito com React.js e Bootstrap, focado em apresentar serviços com design responsivo, componentes reutilizáveis e interface intuitiva.",
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
    tag: ["React.js","Strapi CMS","PostgreSQL"],
    image: aceffong,
    description:
      "Blog para ONG desenvolvido com React, Strapi e PostgreSQL, com interface dinâmica, gestão de conteúdo flexível e deploy completo via Railway para escalabilidade e agilidade.",
    link: "https://gabrielhipolito.com.br",
  },
];
