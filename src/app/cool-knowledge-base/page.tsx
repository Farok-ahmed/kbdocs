import DefaultLayout from "@/components/layout";
import Link from "next/link";
import CoolBanner from "./_components/cool-banner";
import DocumentationArea from "./_components/documentation-area";
import FaqArea from "./_components/faq-area";
import Features from "./_components/features";
import Reviews from "./_components/reviews";
import TagsArea from "./_components/tag-area";

export default function CoolKnowledgeBasePage() {
  return (
    <DefaultLayout>
      <div className="click_capture"></div>
      <CoolBanner />
      <Features />
      <TagsArea />
      <DocumentationArea />
      <Reviews />
      <FaqArea />
      <section
        className="doc_action_area parallaxie"
        data-background="img/bg.jpg"
        style={{
          background: 'url("img/home_one/action_bg.jpg") no-repeat scroll',
        }}
      >
        <div className="overlay_bg"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-sm-8">
              <div className="action_text">
                <h2>Can't find an answer?</h2>
                <p>Head over to our Discord channel</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4">
              <Link href="/forum-topics" className="action_btn">
                Discord Channel <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
