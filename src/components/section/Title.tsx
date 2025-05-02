import { work_sans_bold } from "@/fonts";

type propsTitle = {
  title: string;
  position?: string;
};

export default function Title({ title, position }: propsTitle) {
  return (
    <h1
      className={
        `text-6xl h-auto    text-[#D8D8D8]  max-lg:text-4xl ${
          position ? " text-" + position + " " : " "
        }` + work_sans_bold.className
      }
    >
      {title}
    </h1>
  );
}
