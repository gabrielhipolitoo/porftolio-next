type Links = {
  name: string;
  target: string;
  disable: boolean;
};

export const links: Links[] = [
  { name: "INÍCIO", target: "#INICIO", disable: false },
  { name: "SOBRE MIM", target: "#ABOUT", disable: false },
  { name: "SERVIÇOS", target: "#SERVICES", disable: false },
  { name: "PROJETOS", target: "/meus-projetos", disable: false },
  { name: "ARTIGO", target: "#ARTCILE", disable: true },
  { name: "Contato", target: "#CONTACT", disable: false },
];
