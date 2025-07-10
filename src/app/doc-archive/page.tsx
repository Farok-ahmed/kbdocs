import DefaultLayout from "@/components/layout";
import Breadcrumb from "@/components/page-sections/doc-archive-page/breadcrumb";
import DocCounter from "@/components/page-sections/doc-archive-page/doc-counter";
import GuideCategories from "@/components/page-sections/guide-categories";

const DocArchivePage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb />
      {/* <DocCategories /> */}
      <GuideCategories />
      <DocCounter />
    </DefaultLayout>
  );
};

export default DocArchivePage;
