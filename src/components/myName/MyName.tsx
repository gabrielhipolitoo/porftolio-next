import { work_sans } from "@/fonts";
import Image from "next/image";
import React from "react";

export default function MyName() {
  return (
    <div className="flex items-center gap-2">
      <Image className="rounded-lg " alt="icone" src="/assets/images/Eu.png" width={40} height={40} />
      <strong className={`text-white ${work_sans.className}`}>
        GABRIEL HIPÓLITO
      </strong>
    </div>
  );
}
