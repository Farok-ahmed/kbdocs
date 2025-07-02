import DefaultLayout from "@/components/layout";
import Breadcrumb from "@/components/page-sections/doc-archive-page/breadcrumb";
import DocCategories from "@/components/page-sections/doc-archive-page/doc-categories";
import DocCounter from "@/components/page-sections/doc-archive-page/doc-counter";

const DocArchivePage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb />
      <DocCategories />
      <DocCounter />
    </DefaultLayout>
  );
};

export default DocArchivePage;
