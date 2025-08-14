import BackToTop from "@/components/back-to-top";
import Footer from "@/components/page-sections/footer";
import Navbar from "@/components/page-sections/navbar";

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
