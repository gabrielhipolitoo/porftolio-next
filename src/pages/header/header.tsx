import ButtonCall from "@/components/button/Button";
import ButtonComposition from "@/components/button/Button";
import MyName from "@/components/myName/MyName";
import { work_sans_bold } from "@/fonts";
import Image from "next/image";
type propsHeader = {};

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
