import { work_sans_bold } from "@/fonts";
import React from "react";

export default function MyName() {
  return (
    <div>
      <strong className={`text-white ${work_sans_bold.className}`}>
        GABRIEL HIPÓLITO
      </strong>
    </div>
  );
}
