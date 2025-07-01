import DefaultLayout from "@/components/layout";
import Breadcrumb from "@/components/page-sections/typography-page/breadcrumb";
import ButtonStyle from "@/components/page-sections/typography-page/button-style";
import Newsletter from "@/components/page-sections/typography-page/newsletter";
import TypographyArea from "@/components/page-sections/typography-page/typography-area";
import Blockquote from "./blockquote";

const TypographyPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb />
      <section className="typography_area">
        <div className="container">
          <TypographyArea />
          <Blockquote />
          <ButtonStyle />
        </div>
      </section>
      <Newsletter />
    </DefaultLayout>
  );
};

export default TypographyPage;
