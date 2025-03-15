import { PropsWithChildren } from "react";
import { QueryProvider } from "./QueryProvider";

export const Providers = ({ children }: PropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>;
};