import PreLoader from "@/components/preloader";
import "@/styles/style.scss";
import type { Metadata } from "next";
import ClientWrapper from "./client-wrapper";

export const metadata: Metadata = {
  title: "KbDoc",
  description: "KbDoc is a documentation website template built with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PreLoader />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
