import { ReactNode } from "react";

type propsSection = {
  children: ReactNode;
  direction?: string;
  color?: string;
};

export default function Section({ children, direction, color }: propsSection) {
  return (
    <section
      className={` mb-1   0 h-full gap-5 grid  items-center w-full  
        ${color ? `bg-[${color}]`: ""}
        ${direction === "col" ? "grid-cols-1 " : "grid-cols-2"}  
      m-auto
      max-lg:grid-cols-1
        `}
    >
      {children}
    </section>
  );
}
