import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MyName() {
  return (
    <div className="flex items-center gap-2">
      <Image className="rounded-lg " alt="icone" src="/assets/images/capa-port.png" width={40} height={40} />
      <Link href={"/"} className={`text-white font-bold`}>
        GABRIEL HIPÓLITO
      </Link>
    </div>
  );
}
