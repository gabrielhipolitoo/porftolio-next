type ServicesType = {
  name: string;
  description: string;
  icon: string;
};

import uiDesign from "../../public/assets/icons/pens.svg";
import google from "../../public/assets/icons/google.svg";
import pager from "../../public/assets/icons/pager.svg";
import blog from "../../public/assets/icons/blog.svg";

export const myServices: ServicesType[] = [
  {
    name: "Ui/ux Design",
    description:
      "Crio designs de interface do usuário que combinam estética e usabilidade para proporcionar experiências digitais excepcionais.",
    icon: uiDesign,
  },
  {
    name: "SEO",
    description:
      "SEO envolve aprimorar a estrutura do site, a qualidade do conteúdo, a velocidade de carregamento e a criação de links de qualidade para obter melhores classificações nos motores de busca.",
    icon: google,
  },
  {
    name: "Criações de landing pages",
    description:
      "Construo interfaces  atrátivas com o proposito de atrair clientes",
    icon: pager,
  },
  {
    name: "Blog",
    description:
      "Construímos blogs que informam, envolvem, inspiram e promovem conteúdo valioso, impulsionando o sucesso da sua presença online.",
    icon: blog,
  },
  {
    name: "Site Insituicional",
    description:
      "Criamos sites institucionais que destacam sua marca e contam sua história de forma impactante e profissional.",
    icon: uiDesign,
  },
];
