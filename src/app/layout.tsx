import type { Metadata } from "next";
import ClientWrapper from "./client-wrapper";
import "@/styles/style.scss";

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
                <ClientWrapper>{children}</ClientWrapper>
            </body>
        </html>
    );
}
