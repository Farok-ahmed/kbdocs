import type { Metadata } from "next";
import ClientWrapper from "./client-wrapper";
import PreLoader from "@/components/preloader";
import BackToTop from "@/components/back-to-top";
import Navbar from "@/components/page-sections/navbar";
import Footer from "@/components/page-sections/footer";
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
                <ClientWrapper>
                    <PreLoader />
                    <BackToTop />
                    <div className="body_wrapper">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </ClientWrapper>
            </body>
        </html>
    );
}
