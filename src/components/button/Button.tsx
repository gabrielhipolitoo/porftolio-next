import { work_sans_normal } from "@/fonts";
import Image from "next/image";

export default function ButtonCall({
  position,
  padding,
}: {
  position?: string;
  padding?: string;
}) {
  return (
    <button
      className={
        work_sans_normal.className +
        ` bg-white text-black  cursor-pointer rounded-3xl
        flex gap-2 w-[200px] text-center items-center justify-center
        max-lg:m-auto
        ${position ? "m-" + position : ""}
        ${padding ? "p-" + padding : "p-2"}

        `
      }
    >
      Me chame agora
      <Image
        src="/assets/icons/wpp.svg"
        width={20}
        height={20}
        alt="MenuMobile"
      />
    </button>
  );
}
