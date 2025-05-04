import { ReactNode } from "react";

type propsSection = {
  children: ReactNode;
  direction?: string;
  color?: string;
  margin?: string;
  id?: string;
};

export default function Section({
  children,
  direction,
  color,
  margin,
  id,
}: propsSection) {
  return (
    <section
      id={id}
      className={` mb-1    h-full gap-5 grid  items-center w-full  
        ${color ? `bg-[${color}]` : ""}
        ${direction === "col" ? "grid-cols-1 " : "grid-cols-2"}  
        ${margin ? margin : ""}  
      m-auto
      max-lg:grid-cols-1
        `}
    >
      {children}
    </section>
  );
}
