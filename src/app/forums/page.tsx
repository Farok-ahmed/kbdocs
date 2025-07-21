import Breadcrumb from "@/components/breadcrumb";
import DefaultLayout from "@/components/layout";
import AnswerActionForum from "@/components/page-sections/forums-page/answer-action";
import CallToActionForums from "@/components/page-sections/forums-page/call-to-action";
import ForumPosts from "@/components/page-sections/forums-page/forum-posts";
import ForumSidebar from "@/components/page-sections/forums-page/forum-sidebar";
import ForumsHeaders from "@/components/page-sections/forums-page/forums-headers";
import { BreadcrumbProps } from "@/types/breadcrumb-types";
import "./style.scss"; // Importing the style for the forums page

const ForumsPage = () => {
  // Breadcurmb component
  const breadcrumb: BreadcrumbProps[] = [
    { name: "Home", link: "/" },
    { name: "Forums", link: "/forums" },
  ];
  return (
    <>
      <DefaultLayout>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section className="doc_blog_grid_area sec_pad forum-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <AnswerActionForum />
                <ForumsHeaders />
                <ForumPosts />
              </div>
              <div className="col-lg-4">
                <ForumSidebar />
              </div>
            </div>
          </div>
        </section>
        <CallToActionForums />
      </DefaultLayout>
    </>
  );
};

export default ForumsPage;
