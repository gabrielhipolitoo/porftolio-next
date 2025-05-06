import Image from "next/image";

export default function ButtonCall({
  position,
  padding,
  hidde
}: {
  position?: string;
  padding?: string;
  hidde?: string;
}) {
  return (
    <button
      className={
        ` bg-white text-black  cursor-pointer rounded-3xl
        flex gap-2 w-[200px] text-center items-center justify-center 
        
        ${position ? position  : " "}
        ${hidde ? hidde  : ""}
        ${padding ? "p-" + padding : "p-2 "}

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
