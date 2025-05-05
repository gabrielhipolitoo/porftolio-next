import { work_sans } from "@/fonts";

type propsTitle = {
  title: string;
  position?: string;
  font?: string;
};

export default function Title({ title, position, font }: propsTitle) {
  return (
    <h1
      className={
        `text-6xl h-auto    text-[#D8D8D8]  max-lg:text-4xl ${
          position ? " text-" + position + " " : " "
        }
        ${font ? "font-" + font + " " : ""} ` + work_sans.className
      }
    >
      {title}
    </h1>
  );
}
