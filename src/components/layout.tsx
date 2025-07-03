import BackToTop from "@/components/back-to-top";
import Navbar from "@/components/page-sections/navbar";
import Footer from "@/components/page-sections/footer";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BackToTop />
            <div className="body_wrapper">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}
