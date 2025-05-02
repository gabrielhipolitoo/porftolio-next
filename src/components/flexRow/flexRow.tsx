import { ReactNode } from "react";

export default function flexRow({ children }: { children: ReactNode }) {
  return <div className="flex justify-between">{children}</div>;
}
