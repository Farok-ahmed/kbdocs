import Link from "next/link";

const TagsArea = () => {
  return (
    <>
      <section className="doc_tag_area">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="h_title wow fadeInUp">Popular Tags</h2>
          </div>
          <ul className="nav nav-tabs doc_tag" id="myTab" role="tablist">
            <li className="nav-item wow fadeInLeft">
              <Link
                className="nav-link active"
                id="or-tab"
                data-toggle="tab"
                href="#or"
                role="tab"
                aria-controls="or"
                aria-selected="true"
              >
                Ordering
              </Link>
            </li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="0.1s">
              <Link
                className="nav-link"
                id="doc-tab"
                data-toggle="tab"
                href="#doc"
                role="tab"
                aria-controls="doc"
                aria-selected="false"
              >
                Docs
              </Link>
            </li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="0.2s">
              <Link
                className="nav-link"
                id="forum-tab"
                data-toggle="tab"
                href="#forum"
                role="tab"
                aria-controls="forum"
                aria-selected="false"
              >
                Forum
              </Link>
            </li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="0.3s">
              <Link
                className="nav-link"
                id="code-tab"
                data-toggle="tab"
                href="#code"
                role="tab"
                aria-controls="code"
                aria-selected="false"
              >
                Code
              </Link>
            </li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="0.4s">
              <Link
                className="nav-link"
                id="element-tab"
                data-toggle="tab"
                href="#element"
                role="tab"
                aria-controls="element"
                aria-selected="false"
              >
                Elements
              </Link>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane doc_tab_pane fade show active"
              id="or"
              role="tabpanel"
              aria-labelledby="or-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item wow fadeInUp">
                    <div className="doc_tag_title">
                      <h4>Getting Started</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          BBpress sidebar layout styles
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="doc_tag_item wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="doc_tag_title">
                      <h4>Integrations</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How To Install Manual Theme
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Theme license information
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i create tree structure menu
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="doc_tag_item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="doc_tag_title">
                      <h4>Cloud Server</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Preparing your server for installation
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="doc_tag_item wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="doc_tag_title">
                      <h4>Solar System</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I contact Customer Care?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How to enable labs features
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="doc_tag_item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="doc_tag_title">
                      <h4>User Settings</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Do I need to know coding
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Working with Conversations
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Copying Email to Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="doc_tag_item wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="doc_tag_title">
                      <h4>Reporting</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Can I attach files to forms?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="doc"
              role="tabpanel"
              aria-labelledby="doc-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item wow fadeInUp">
                    <div className="doc_tag_title">
                      <h4>Integrations</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          BBpress sidebar layout styles
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="doc_tag_item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="doc_tag_title">
                      <h4>Getting Started</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How To Install Manual Theme
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Theme license information
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i create tree structure menu
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="doc_tag_item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="doc_tag_title">
                      <h4>Cloud Server</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Preparing your server for installation
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item wow fadeInUp">
                    <div className="doc_tag_title">
                      <h4>Solar System</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I contact Customer Care?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How to enable labs features
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="doc_tag_item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="doc_tag_title">
                      <h4>User Settings</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Do I need to know coding
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Working with Conversations
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Copying Email to Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="doc_tag_item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="doc_tag_title">
                      <h4>Reporting</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Can I attach files to forms?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="forum"
              role="tabpanel"
              aria-labelledby="forum-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Cloud Server</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          BBpress sidebar layout styles
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Getting Started</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How To Install Manual Theme
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Theme license information
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i create tree structure menu
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Integrations</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Preparing your server for installation
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Solar System</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I contact Customer Care?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How to enable labs features
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>User Settings</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Do I need to know coding
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Working with Conversations
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Copying Email to Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Reporting</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Can I attach files to forms?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="code"
              role="tabpanel"
              aria-labelledby="code-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Getting Started</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          BBpress sidebar layout styles
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Integrations</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How To Install Manual Theme
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Theme license information
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i create tree structure menu
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Cloud Server</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Preparing your server for installation
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Solar System</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I contact Customer Care?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How to enable labs features
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>User Settings</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Do I need to know coding
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Working with Conversations
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Copying Email to Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Reporting</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Can I attach files to forms?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="element"
              role="tabpanel"
              aria-labelledby="element-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Getting Started</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          BBpress sidebar layout styles
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Integrations</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How To Install Manual Theme
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Theme license information
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i create tree structure menu
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Cloud Server</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Preparing your server for installation
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Solar System</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I contact Customer Care?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How to enable labs features
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do I login forum section
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Mailbox and User Settings
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>User Settings</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Do I need to know coding
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Managing Docs in Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Working with Conversations
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Copying Email to Docly
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="doc_tag_item">
                    <div className="doc_tag_title">
                      <h4>Reporting</h4>
                      <div className="line"></div>
                    </div>
                    <ul className="list-unstyled tag_list">
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Setup home page layout
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Can I attach files to forms?
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Knowledgebase page setup
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          Creating home page blocks
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="icon_document_alt"></i>
                          How do i add FAQ post
                        </Link>
                      </li>
                    </ul>
                    <Link href="" className="learn_btn">
                      View All
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TagsArea;
