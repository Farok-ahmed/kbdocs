"use client";

import { OSProvider } from "@/contexts/os-context";

export default function ClientWrapper({ children }: React.PropsWithChildren) {
  return <OSProvider>{children}</OSProvider>;
}
