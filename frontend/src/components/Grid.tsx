import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Grid({ children }: Props) {
  return <div className="grid grid-cols-2">{children}</div>;
}
