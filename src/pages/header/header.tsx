import ButtonCall from "@/components/button/Button";
import MyName from "@/components/myName/MyName";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-24 flex items-center justify-between ">
      <MyName />
      <div className="flex items-center gap-4">
        <ButtonCall />
        <button>
          <Image
            src="/assets/icons/menuMobile.svg"
            width={20}
            height={20}
            alt="MenuMobile"
          />
        </button>
      </div>
    </header>
  );
}
