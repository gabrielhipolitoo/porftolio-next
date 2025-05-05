import { work_sans } from "@/fonts";
import Image from "next/image";
import React from "react";

export default function MyName() {
  return (
    <div className="flex">
      <Image alt="icone" src="/favicon-32x32.ico" width={10} height={10} />
      <strong className={`text-white ${work_sans.className}`}>
        GABRIEL HIPÓLITO
      </strong>
    </div>
  );
}
