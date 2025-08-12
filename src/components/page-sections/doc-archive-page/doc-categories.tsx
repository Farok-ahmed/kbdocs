import dowBgTwo from "@/assets/img/home_one/dow_bg_two.png";
import folder from "@/assets/img/home_two/folder.png";
import info from "@/assets/img/home_two/info.png";
import memo from "@/assets/img/home_two/memo.png";
import settings from "@/assets/img/home_two/settings.png";
import share from "@/assets/img/home_two/share.png";
import weather from "@/assets/img/home_two/weather.png";
import Image from "next/image";
import Link from "next/link";

const DocCategories = () => {
  return (
    <>
      <section className="doc_categories_guide_area sec_pad">
        <Image className="shap" src={dowBgTwo} alt="" />
        <div className="container">
          <div className="section_title text-center">
            <h2 className="h_title wow fadeInUp">
              Check out our guide categories
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Some dodgy chav bevvy amongst argy-bargy spiffing absolutely
              bladdered nancy boy cup of tea a load of old tosh porkies.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="categories_guide_item wow fadeInUp">
                <Image src={folder} alt="" />
                <div className="doc_tag_title">
                  <h4>Getting Started</h4>
                </div>
                <ul className="list-unstyled tag_list">
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Setup home page
                      layout
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>BBpress sidebar
                      layout styles
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Knowledgebase page
                      setup
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Creating home page
                      blocks
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How do i add FAQ post
                    </Link>
                  </li>
                </ul>
                <Link href="#" className="doc_border_btn">
                  More<i className="arrow_right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="categories_guide_item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <Image src={info} alt="" />
                <div className="doc_tag_title">
                  <h4>Integrations</h4>
                </div>
                <ul className="list-unstyled tag_list">
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How To Install Manual
                      Theme
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Theme license
                      information
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How do i create tree
                      structure menu
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How do I login forum
                      section
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How do I login forum
                      section
                    </Link>
                  </li>
                </ul>
                <Link href="#" className="doc_border_btn">
                  More<i className="arrow_right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="categories_guide_item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Image src={weather} alt="" />
                <div className="doc_tag_title">
                  <h4>Cloud Server</h4>
                </div>
                <ul className="list-unstyled tag_list">
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Mailbox and User
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Preparing your server
                      for installation
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Managing Docs in
                      KbDoc
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How do i add FAQ post
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Creating home page
                      blocks
                    </Link>
                  </li>
                </ul>
                <Link href="#" className="doc_border_btn">
                  More<i className="arrow_right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="categories_guide_item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <Image src={settings} alt="" />
                <div className="doc_tag_title">
                  <h4>User Settings</h4>
                </div>
                <ul className="list-unstyled tag_list">
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Do I need to know
                      coding
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Managing Docs in
                      KbDoc
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Working with
                      Conversations
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Copying Email to
                      KbDoc
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Knowledgebase page
                      setup
                    </Link>
                  </li>
                </ul>
                <Link href="#" className="doc_border_btn">
                  More<i className="arrow_right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="categories_guide_item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Image src={memo} alt="" />
                <div className="doc_tag_title">
                  <h4>Reporting</h4>
                </div>
                <ul className="list-unstyled tag_list">
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Setup home page
                      layout
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>BBpress sidebar
                      layout styles
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Knowledgebase page
                      setup
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Creating home page
                      blocks
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How do i add FAQ post
                    </Link>
                  </li>
                </ul>
                <Link href="#" className="doc_border_btn">
                  More<i className="arrow_right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="categories_guide_item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <Image src={share} alt="" />
                <div className="doc_tag_title">
                  <h4>Solar System</h4>
                </div>
                <ul className="list-unstyled tag_list">
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How do I contact
                      Customer Care?
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How to enable labs
                      features
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Knowledgebase page
                      setup
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>How do I login forum
                      section
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon_document_alt"></i>Mailbox and User
                      Settings
                    </Link>
                  </li>
                </ul>
                <Link href="#" className="doc_border_btn">
                  More<i className="arrow_right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="#" className="doc_border_btn all_doc_btn wow fadeInUp">
              View All Docs<i className="arrow_right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocCategories;
