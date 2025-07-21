const StickyMenu = () => {
  return (
    <>
      <>
        <div className="body_wrapper sticky_menu">
          <nav
            className="navbar navbar-expand-lg menu_one display_none"
            id="stickyTwo"
          >
            <div className="container-fluid pl-60 pr-60">
              <a className="navbar-brand" href="index.html">
                <img
                  src="img/logo.png"
                  srcSet="img/logo-2x.png 2x"
                  alt="logo"
                />
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="hamburger-cross">
                    <span />
                    <span />
                  </span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ml-auto">
                  <li className="nav-item dropdown submenu active">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="true"
                      data-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          Light Knowledgebase
                        </a>{" "}
                      </li>
                      <li className="nav-item">
                        <a href="index-helpdesk.html" className="nav-link">
                          Help Desk
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-cool.html" className="nav-link">
                          Cool Knowledgebase
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu mega_menu tab-demo">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Docs
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="true"
                      data-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li>
                        <div className="row">
                          <div className="col-lg-5 tabHeader">
                            <ul
                              className="nav flex-column nav-pills"
                              id="v-pills-tab"
                              role="tablist"
                              aria-orientation="vertical"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  id="v-pills-doc-tab"
                                  data-toggle="pill"
                                  href="#v-pills-doc"
                                  role="tab"
                                  aria-controls="v-pills-doc"
                                  aria-selected="true"
                                >
                                  Doc Topics
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="v-pills-code-tab"
                                  data-toggle="pill"
                                  href="#v-pills-code"
                                  role="tab"
                                  aria-controls="v-pills-code"
                                  aria-selected="false"
                                >
                                  Shortcodes
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="v-pills-layout-tab"
                                  data-toggle="pill"
                                  href="#v-pills-layout"
                                  role="tab"
                                  aria-controls="v-pills-layout"
                                  aria-selected="false"
                                >
                                  Layouts
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="v-pills-tour-tab"
                                  data-toggle="pill"
                                  href="#v-pills-tour"
                                  role="tab"
                                  aria-controls="v-pills-tour"
                                  aria-selected="false"
                                >
                                  Tour
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="v-pills-content-tab"
                                  data-toggle="pill"
                                  href="#v-pills-content"
                                  role="tab"
                                  aria-controls="v-pills-content"
                                  aria-selected="false"
                                >
                                  Content
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="v-pills-pages-tab"
                                  data-toggle="pill"
                                  href="#v-pills-pages"
                                  role="tab"
                                  aria-controls="v-pills-pages"
                                  aria-selected="false"
                                >
                                  Other Pages
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-7">
                            <div
                              className="tab-content tabContent"
                              id="v-pills-tabContent"
                            >
                              <div
                                className="tab-pane fade active show"
                                id="v-pills-doc"
                                role="tabpanel"
                                aria-labelledby="v-pills-doc-tab"
                              >
                                <div className="d-flex">
                                  <ul className="list-unstyled tab_list">
                                    <li>
                                      <a href="doc-archive.html">Doc Archive</a>
                                    </li>
                                    <li>
                                      <a href="doclist.html">Doc Topic</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="text">
                                  <a href="#">
                                    <p>More Categories</p>
                                  </a>
                                  <a href="doclist.html">
                                    <p>All docs</p>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="v-pills-code"
                                role="tabpanel"
                                aria-labelledby="v-pills-code-tab"
                              >
                                <div className="d-flex">
                                  <ul className="list-unstyled tab_list">
                                    <li>
                                      <a href="tab.html">Tabs</a>
                                    </li>
                                    <li>
                                      <a href="accordion.html">Accordion</a>
                                    </li>
                                    <li>
                                      <a href="notice.html">Notice</a>
                                    </li>
                                    <li>
                                      <a href="tab.html">Tables</a>
                                    </li>
                                    <li>
                                      <a href="image-pointing.html">
                                        Image Lightbox
                                      </a>
                                    </li>
                                  </ul>
                                  <ul className="list-unstyled tab_list">
                                    <li>
                                      <a href="tooltip.html">Tooltip</a>
                                    </li>
                                    <li>
                                      <a href="lightbox.html">Lightbox</a>
                                    </li>
                                    <li>
                                      <a href="can-use.html">Can I Use</a>
                                    </li>
                                    <li>
                                      <a href="footnote.html">Footnote</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="text">
                                  <a href="#">
                                    <p>More Categories</p>
                                  </a>
                                  <a href="doclist.html">
                                    <p>All docs</p>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="v-pills-layout"
                                role="tabpanel"
                                aria-labelledby="v-pills-layout-tab"
                              >
                                <div className="d-flex">
                                  <ul className="list-unstyled tab_list">
                                    <li>
                                      <a href="layouts.html">Both Sidebar</a>
                                    </li>
                                    <li>
                                      <a href="layout-leftsidebar.html">
                                        Left Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="layout-full.html">Full-wdith</a>
                                    </li>
                                    <li>
                                      <a href="sticky-menu.html">Sticky menu</a>
                                    </li>
                                    <li>
                                      <a href="simple-footer.html">
                                        Simple Footer
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="text">
                                  <a href="#">
                                    <p>More Categories</p>
                                  </a>
                                  <a href="#">
                                    <p>All docs</p>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="v-pills-tour"
                                role="tabpanel"
                                aria-labelledby="v-pills-tour-tab"
                              >
                                <div className="d-flex">
                                  <ul className="list-unstyled tab_list w_100">
                                    <li>
                                      <a href="image-pointing.html">
                                        Image Hotspot
                                      </a>
                                    </li>
                                    <li>
                                      <a href="tour.html">
                                        Application Interface
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="text">
                                  <a href="#">
                                    <p>More Categories</p>
                                  </a>
                                  <a href="#">
                                    <p>All docs</p>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="v-pills-content"
                                role="tabpanel"
                                aria-labelledby="v-pills-content-tab"
                              >
                                <div className="d-flex">
                                  <ul className="list-unstyled tab_list">
                                    <li>
                                      <a href="typography.html">Typography</a>
                                    </li>
                                    <li>
                                      <a href="code.html">Code</a>
                                    </li>
                                    <li>
                                      <a href="image.html">Image</a>
                                    </li>
                                    <li>
                                      <a href="video.html">Video</a>
                                    </li>
                                    <li>
                                      <a href="keyboard-shortcuts.html">
                                        Keyboard Shortcuts
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="text">
                                  <a href="#">
                                    <p>More Categories</p>
                                  </a>
                                  <a href="#">
                                    <p>All docs</p>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="v-pills-pages"
                                role="tabpanel"
                                aria-labelledby="v-pills-pages-tab"
                              >
                                <div className="d-flex">
                                  <ul className="list-unstyled tab_list">
                                    <li>
                                      <a href="doclist.html">Doc Topics</a>
                                    </li>
                                    <li>
                                      <a href="Onepage.html">Onepage</a>
                                    </li>
                                    <li>
                                      <a href="cheatsheet.html">Cheatseet</a>
                                    </li>
                                    <li>
                                      <a href="changelog.html">Changelog</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="text">
                                  <a href="#">
                                    <p>More Categories</p>
                                  </a>
                                  <a href="doclist.html">
                                    <p>All docs</p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="contact.html" className="nav-link">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="forums.html" className="nav-link">
                          Forum
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="signin.html" className="nav-link">
                          Sign In
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="signup.html" className="nav-link">
                          Sign Up
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="typography.html" className="nav-link">
                          Typography
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="error.html" className="nav-link">
                          404 Error
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="forums.html"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Forum
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="forums.html" className="nav-link">
                          Forums Root
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="forum-topics.html" className="nav-link">
                          Forum Topics
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="forum-single.html" className="nav-link">
                          Forum Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Products
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-toggle="dropdown"
                    />
                    <ul className="dropdown-menu dropdown_menu_two">
                      <li className="nav-item">
                        <a href="doc-archive.html" className="nav-link">
                          <img src="img/tick.png" alt="" />
                          <div className="text">
                            <h5>KbDoc</h5>
                            <p>Launch Simple Websites</p>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="doclist.html" className="nav-link">
                          <img src="img/sheet.png" alt="" />
                          <div className="text">
                            <h5>docall</h5>
                            <p>Digital Assets Subscription</p>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          <img src="img/shopping-bag.png" alt="" />
                          <div className="text">
                            <h5>Docenvato</h5>
                            <p>Tutorials &amp; Courses</p>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          <img src="img/gear.png" alt="" />
                          <div className="text">
                            <h5>Tools</h5>
                            <p>Hire a Freelancer</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog-grid.html" className="nav-link">
                          Blog Grid
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-grid-two.html" className="nav-link">
                          Blog Grid Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-list.html" className="nav-link">
                          Blog List
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-single.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="list-unstyled menu_social">
                  <li className="search">
                    <form action="#" method="get" className="search_form">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search for"
                      />
                      <button type="submit">
                        <i className="icon_search" />
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="mobile_main_menu" id="sticky">
            <div className="container">
              <div className="mobile_menu_left">
                <button
                  type="button"
                  className="navbar-toggler mobile_menu_btn"
                >
                  <span className="menu_toggle ">
                    <span className="hamburger">
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </button>
                <a className="navbar-brand" href="index.html">
                  <img
                    src="img/logo.png"
                    srcSet="img/logo-w2x.png 2x"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="mobile_menu_right">
                <form action="#" method="get" className="search_form">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search for"
                  />
                  <button type="submit">
                    <i className="icon_search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="click_capture" />
          <div className="side_menu">
            <div className="mobile_menu_header">
              <div className="close_nav">
                <i className="arrow_left" />
                <i className="icon_close" />
              </div>
              <div className="mobile_logo">
                <a href="#">
                  <img src="img/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="mobile_nav_wrapper">
              <nav className="mobile_nav_top">
                <ul className="navbar-nav menu ml-auto">
                  <li className="nav-item dropdown submenu">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon" />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          Light Knowledgebase
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-helpdesk.html" className="nav-link">
                          Help Desk
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-cool.html" className="nav-link">
                          Cool Knowledgebase
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu active">
                    <a href="#" className="nav-link">
                      Docs
                    </a>
                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon" />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="doc-archive.html" className="nav-link">
                          Doc Archive
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="doclist.html" className="nav-link">
                          DocTopics
                        </a>
                      </li>
                      <li className="nav-item dropdown submenu active">
                        <a href="#" className="nav-link">
                          Shortcodes
                        </a>
                        <i className="arrow_carrot-down_alt2 mobile_dropdown_icon" />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="accordion.html" className="nav-link">
                              Accordion
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="tab.html" className="nav-link">
                              Tabs
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="notice.html" className="nav-link">
                              Notices
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="table.html" className="nav-link">
                              Tables
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="tooltip.html" className="nav-link">
                              Tooltip
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="image-pointing.html" className="nav-link">
                              Image Hotspots
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="lightbox.html" className="nav-link">
                              Lightbox
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="can-use.html" className="nav-link active">
                              Can I Use
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="changelog.html" className="nav-link">
                              Changelog
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown submenu">
                        <a href="#" className="nav-link">
                          Layouts
                        </a>
                        <i className="arrow_carrot-down_alt2 mobile_dropdown_icon" />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="layouts.html" className="nav-link">
                              Both Sidebar
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="layout-leftsidebar.html"
                              className="nav-link"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="layout-full.html" className="nav-link">
                              Full-wdith
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="sticky-menu.html" className="nav-link">
                              Sticky menu
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="simple-footer.html" className="nav-link">
                              Simple Footer
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a href="#" className="nav-link">
                      Pages
                    </a>
                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon" />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="Onepage.html" className="nav-link">
                          Onepage
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="contact.html" className="nav-link">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="signin.html" className="nav-link">
                          Sign In
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="signup.html" className="nav-link">
                          Sign Up
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="typography.html" className="nav-link">
                          Typography
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="error.html" className="nav-link">
                          404 Error
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a className="nav-link" href="#">
                      Products
                    </a>
                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon" />
                    <ul className="dropdown-menu dropdown_menu_two">
                      <li className="nav-item">
                        <a href="doc-archive.html" className="nav-link">
                          <img src="img/tick.png" alt="" />
                          <div className="text">
                            <h5>KbDoc</h5>
                            <p>Launch Simple Websites</p>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="doclist.html" className="nav-link">
                          <img src="img/sheet.png" alt="" />
                          <div className="text">
                            <h5>docall</h5>
                            <p>Digital Assets Subscription</p>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          <img src="img/shopping-bag.png" alt="" />
                          <div className="text">
                            <h5>Docenvato</h5>
                            <p>Tutorials &amp; Courses</p>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          <img src="img/gear.png" alt="" />
                          <div className="text">
                            <h5>Tools</h5>
                            <p>Hire a Freelancer</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon" />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog-grid.html" className="nav-link">
                          Blog Grid
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-grid-two.html" className="nav-link">
                          Blog Grid Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-list.html" className="nav-link">
                          Blog List
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-single.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="mobile_nav_bottom">
                <aside className="doc_left_sidebarlist">
                  <h2>KbDoc Documentation</h2>
                  <div className="scroll">
                    <ul className="list-unstyled nav-sidebar">
                      <li className="nav-item">
                        <a href="doclist.html" className="nav-link">
                          <img src="img/side-nav/home.png" alt="" />
                          Home
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a href="shortcode.html" className="nav-link">
                          <img
                            src="img/side-nav/briefcase.png"
                            alt="briefcase"
                          />
                          Shortcodes
                        </a>
                        <span className="icon">
                          <i className="arrow_carrot-down" />
                        </span>
                        <ul className="list-unstyled dropdown_nav">
                          <li>
                            <a href="tab.html">Tabs</a>
                          </li>
                          <li>
                            <a href="accordion.html">Accordion</a>
                          </li>
                          <li>
                            <a href="notice.html">Notices</a>
                          </li>
                          <li>
                            <a href="table.html">Table</a>
                          </li>
                          <li>
                            <a href="lightbox.html">Image Lightbox</a>
                          </li>
                          <li>
                            <a href="tooltip.html">Tooltip</a>
                          </li>
                          <li>
                            <a href="can-use.html" className="active">
                              Can I use
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="layouts.html" className="nav-link">
                          <img src="img/side-nav/coding.png" alt="" />
                          Layouts
                        </a>
                        <span className="icon">
                          <i className="arrow_carrot-down" />
                        </span>
                        <ul className="list-unstyled dropdown_nav">
                          <li>
                            <a href="layouts.html">Both Sidebar</a>
                          </li>
                          <li>
                            <a href="layout-leftsidebar.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="layout-full.html">Full-width</a>
                          </li>
                          <li>
                            <a href="sticky-menu.html">Sticky Menu</a>
                          </li>
                          <li>
                            <a href="simple-footer.html">Simple Footer</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item active">
                        <a href="tour.html" className="nav-link">
                          <img src="img/side-nav/chat1.png" alt="" />
                          Tour
                        </a>
                        <span className="icon">
                          <i className="arrow_carrot-down" />
                        </span>
                        <ul className="list-unstyled dropdown_nav">
                          <li>
                            <a href="image-pointing.html" className="active">
                              Image Hotspots
                            </a>
                          </li>
                          <li>
                            <a href="tour.html">Application Interface</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="typography.html" className="nav-link">
                          <img src="img/side-nav/document.png" alt="" />
                          Content
                        </a>
                        <span className="icon">
                          <i className="arrow_carrot-down" />
                        </span>
                        <ul className="list-unstyled dropdown_nav">
                          <li>
                            <a href="typography.html">Typography</a>
                          </li>
                          <li>
                            <a href="code.html">Code</a>
                          </li>
                          <li>
                            <a href="image.html">Image</a>
                          </li>
                          <li>
                            <a href="video.html">Video</a>
                          </li>
                          <li>
                            <a href="keyboard-shortcuts.html">
                              Keyboard Shortcuts
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="changelog.html" className="nav-link">
                          <img src="img/side-nav/document2.png" alt="" />
                          Change Log
                        </a>
                      </li>
                    </ul>
                    <ul className="list-unstyled nav-sidebar coding_nav">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <img src="img/side-nav/account.png" alt="" />
                          Account
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <img src="img/side-nav/coding.png" alt="" />
                          Development
                        </a>
                      </li>
                    </ul>
                    <ul className="list-unstyled nav-sidebar bottom_nav">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <img src="img/side-nav/united-states.png" alt="" />
                          Unlted States
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <img src="img/side-nav/edit.png" alt="" />
                          English{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <img src="img/side-nav/users.png" alt="" />
                          Sign In <i className="arrow_right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <section className="doc_documentation_area doc_documentation_full_area body_fixed">
            <div className="overlay_bg" />
            <div className="container-fluid pl-60 pr-60">
              <div className="row">
                <div className="col-lg-2 doc_mobile_menu">
                  <aside className="doc_left_sidebarlist">
                    <div className="scroll">
                      <ul className="list-unstyled nav-sidebar">
                        <li className="nav-item">
                          <a href="doclist.html" className="nav-link">
                            <img src="img/side-nav/home.png" alt="" />
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="shortcode.html" className="nav-link">
                            <img
                              src="img/side-nav/briefcase.png"
                              alt="briefcase"
                            />
                            Shortcodes
                          </a>
                          <span className="icon">
                            <i className="arrow_carrot-down" />
                          </span>
                          <ul className="list-unstyled dropdown_nav">
                            <li>
                              <a href="tab.html">Tabs</a>
                            </li>
                            <li>
                              <a href="accordion.html">Accordion</a>
                            </li>
                            <li>
                              <a href="notice.html">Notices</a>
                            </li>
                            <li>
                              <a href="table.html">Table</a>
                            </li>
                            <li>
                              <a href="lightbox.html">Image Lightbox</a>
                            </li>
                            <li>
                              <a href="tooltip.html">Tooltip</a>
                            </li>
                            <li>
                              <a href="can-use.html">Can I Use</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item active">
                          <a href="layouts.html" className="nav-link">
                            <img src="img/side-nav/coding.png" alt="" />
                            Layouts
                          </a>
                          <span className="icon">
                            <i className="arrow_carrot-down" />
                          </span>
                          <ul className="list-unstyled dropdown_nav">
                            <li>
                              <a href="layouts.html">Both Sidebar</a>
                            </li>
                            <li>
                              <a href="layout-leftsidebar.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="layout-full.html">Full-width</a>
                            </li>
                            <li>
                              <a href="sticky-menu.html" className="active">
                                Sticky Menu
                              </a>
                            </li>
                            <li>
                              <a href="simple-footer.html">Simple Footer</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="tour.html" className="nav-link">
                            <img src="img/side-nav/chat1.png" alt="" />
                            Tour
                          </a>
                          <span className="icon">
                            <i className="arrow_carrot-down" />
                          </span>
                          <ul className="list-unstyled dropdown_nav">
                            <li>
                              <a href="image-pointing.html">Image Hotspots</a>
                            </li>
                            <li>
                              <a href="tour.html">Application Interface</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="typography.html" className="nav-link">
                            <img src="img/side-nav/document.png" alt="" />
                            Content
                          </a>
                          <span className="icon">
                            <i className="arrow_carrot-down" />
                          </span>
                          <ul className="list-unstyled dropdown_nav">
                            <li>
                              <a href="typography.html">Typography</a>
                            </li>
                            <li>
                              <a href="code.html">Code</a>
                            </li>
                            <li>
                              <a href="image.html">Image</a>
                            </li>
                            <li>
                              <a href="video.html">Video</a>
                            </li>
                            <li>
                              <a href="keyboard-shortcuts.html">
                                Keyboard Shortcuts
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="changelog.html" className="nav-link">
                            <img src="img/side-nav/document2.png" alt="" />
                            Change Log
                          </a>
                        </li>
                      </ul>
                      <ul className="list-unstyled nav-sidebar coding_nav">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <img src="img/side-nav/account.png" alt="" />
                            Account
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <img src="img/side-nav/coding.png" alt="" />
                            Development
                          </a>
                        </li>
                      </ul>
                      <ul className="list-unstyled nav-sidebar bottom_nav">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <img src="img/side-nav/united-states.png" alt="" />
                            Unlted States
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <img src="img/side-nav/edit.png" alt="" />
                            English{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="signin.html" className="nav-link">
                            <img src="img/side-nav/users.png" alt="" />
                            Sign In <i className="arrow_right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-8 col-md-8">
                  <div id="post" className="documentation_info">
                    <article className="documentation_body" id="documentation">
                      <div className="shortcode_title">
                        <h1>Getting Started</h1>
                        <p>
                          <span>Welcome to KbDoc !</span> Get familiar with the
                          Stripe products and explore their features:
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img src="img/home_one/icon/folder.png" alt="" />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Working with Docs</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img
                                src="img/home_one/icon/envelope.png"
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Formatting Content</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img src="img/home_one/icon/coding.png" alt="" />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Development</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img
                                src="img/home_one/icon/smartphone.png"
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Mobile App</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img
                                src="img/home_one/icon/management.png"
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Account Management</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img
                                src="img/home_one/icon/briefcase.png"
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Shortcodes</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img
                                src="img/home_one/icon/newspaper.png"
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Productivity</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img src="img/side-nav/issuin.png" alt="" />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Issuing</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img
                                src="img/home_one/icon/color-palette.png"
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Introduction</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img src="img/side-nav/terminals.png" alt="" />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Terminal</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img src="img/home_one/icon/android.png" alt="" />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>Getting Started</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="media documentation_item">
                            <div className="icon">
                              <img src="img/home_one/icon/lock.png" alt="" />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h5>This Document</h5>
                              </a>
                              <p>
                                He lost his bottle bubble and squeak knackered.!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border_bottom" />
                    </article>
                    <article className="get_started" id="getting">
                      <h4 className="c_head load-order-2">Introduction</h4>
                      <p>
                        Owt to do with me chinwag get stuffed mate baking cakes
                        blow off vagabond knackered faff about boot a load of
                        old tosh <a href="#">Richard Charles</a>, cor blimey
                        guvnor cheers fantastic butty{" "}
                        <a href="#">A bit of how's your father down</a> the pub
                        plastered bugger <a href="#">all mate such a fibber</a>{" "}
                        lemon squeezy.
                      </p>
                      <a href="#">
                        <h4 className="c_head load-order-2">
                          Add payments to your platform
                        </h4>
                      </a>
                      <p>
                        Don't get shirty with me what a plonker on your bike
                        mate bugger all mate chip shop bits and bobs smashing
                        mush bugger cup of char, in my flat my lady naff bubble
                        and squeak tosser pukka barmy bog the bee's knees,
                        elizabeth dropped a clanger cheesed.
                      </p>
                      <h4 className="c_head">Extend Stripe's offerings</h4>
                      <p>
                        Naff wellies such a fibber up the duff some dodgy chav
                        sloshed blow off golly gosh{" "}
                        <a href="#">jolly good hotpot gutted mate</a>, me old
                        mucker cras mush.
                      </p>
                      <div className="link">
                        <p>
                          Spiffing good time blimey smashing bevvy hunky-dory
                          cor blimey guvnor elizabeth bite your arm off,
                          bamboozled A bit of how's your father it's all gone to
                          pot bodge.
                        </p>
                      </div>
                    </article>
                    <div className="border_bottom" />
                    <article className="test_version" id="version">
                      <h4 className="c_head">Test KbDoc Version</h4>
                      <p>
                        Try the KbDoc API in seconds. Create your first
                        customer, charge, and more by following the steps below.
                      </p>
                      <ul
                        className="nav nav-tabs v_menu"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="card-tab"
                            data-toggle="tab"
                            href="#card"
                            role="tab"
                            aria-controls="card"
                            aria-selected="true"
                          >
                            <span>1</span>Card
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="customer-tab"
                            data-toggle="tab"
                            href="#customer"
                            role="tab"
                            aria-controls="customer"
                            aria-selected="false"
                          >
                            <span>2</span>Customer
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="charge-tab"
                            data-toggle="tab"
                            href="#charge"
                            role="tab"
                            aria-controls="charge"
                            aria-selected="false"
                          >
                            <span>3</span>Charge
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="sub-tab"
                            data-toggle="tab"
                            href="#sub"
                            role="tab"
                            aria-controls="sub"
                            aria-selected="false"
                          >
                            <span>4</span>Subscription
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="success-tab"
                            data-toggle="tab"
                            href="#success"
                            role="tab"
                            aria-controls="success"
                            aria-selected="false"
                          >
                            <span>5</span>Success!
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="card"
                          role="tabpanel"
                          aria-labelledby="card-tab"
                        >
                          <p>
                            Twit brilliant he legged it he nicked it amongst
                            hotpot chinwag spend a penny lemon squeezy he lost
                            his bottle porkies, Why it's your round happy days.
                          </p>
                          <div className="version">
                            <div className="v_head">KbDoc run hello-world</div>
                            <div className="v_middle">
                              <p>
                                Unable to find image{" "}
                                <span className="red">
                                  'hello-world:latest'
                                </span>{" "}
                                locally
                              </p>
                              <p>latest: Pulling from library/hello-world</p>
                              <p>
                                ca4f61b1923c: Pull{" "}
                                <span className="green">complete</span>
                              </p>
                              <p>
                                Digest:
                                sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
                              </p>
                              <p>
                                Status: Downloaded newer image for
                                hello-world:latest
                              </p>
                            </div>
                            <div className="v_footer">
                              <p>
                                Hello from KbDoc!
                                <br /> This message shows that your installation
                                appears to be working correctly. <br />
                                ...
                              </p>
                            </div>
                          </div>
                          <p>
                            <span>Usage:</span> Click "Submit" to create a
                            token.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="customer"
                          role="tabpanel"
                          aria-labelledby="customer-tab"
                        >
                          <p>
                            Twit brilliant he legged it he nicked it amongst
                            hotpot chinwag spend a penny lemon squeezy he lost
                            his bottle porkies, Why it's your round happy days.
                          </p>
                          <div className="version">
                            <div className="v_head">KbDoc run hello-world</div>
                            <div className="v_middle">
                              <p>
                                Unable to find image{" "}
                                <span className="red">
                                  'hello-world:latest'
                                </span>{" "}
                                locally
                              </p>
                              <p>latest: Pulling from library/hello-world</p>
                              <p>
                                ca4f61b1923c: Pull{" "}
                                <span className="green">complete</span>
                              </p>
                              <p>
                                Digest:
                                sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
                              </p>
                              <p>
                                Status: Downloaded newer image for
                                hello-world:latest
                              </p>
                            </div>
                            <div className="v_footer">
                              <p>
                                Hello from KbDoc!
                                <br /> This message shows that your installation
                                appears to be working correctly. <br />
                                ...
                              </p>
                            </div>
                          </div>
                          <p>
                            <span>Usage:</span> Click "Submit" to create a
                            token.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="charge"
                          role="tabpanel"
                          aria-labelledby="charge-tab"
                        >
                          <p>
                            Twit brilliant he legged it he nicked it amongst
                            hotpot chinwag spend a penny lemon squeezy he lost
                            his bottle porkies, Why it's your round happy days.
                          </p>
                          <div className="version">
                            <div className="v_head">KbDoc run hello-world</div>
                            <div className="v_middle">
                              <p>
                                Unable to find image{" "}
                                <span className="red">
                                  'hello-world:latest'
                                </span>{" "}
                                locally
                              </p>
                              <p>latest: Pulling from library/hello-world</p>
                              <p>
                                ca4f61b1923c: Pull{" "}
                                <span className="green">complete</span>
                              </p>
                              <p>
                                Digest:
                                sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
                              </p>
                              <p>
                                Status: Downloaded newer image for
                                hello-world:latest
                              </p>
                            </div>
                            <div className="v_footer">
                              <p>
                                Hello from KbDoc!
                                <br /> This message shows that your installation
                                appears to be working correctly. <br />
                                ...
                              </p>
                            </div>
                          </div>
                          <p>
                            <span>Usage:</span> Click "Submit" to create a
                            token.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="sub"
                          role="tabpanel"
                          aria-labelledby="sub-tab"
                        >
                          <p>
                            Twit brilliant he legged it he nicked it amongst
                            hotpot chinwag spend a penny lemon squeezy he lost
                            his bottle porkies, Why it's your round happy days.
                          </p>
                          <div className="version">
                            <div className="v_head">KbDoc run hello-world</div>
                            <div className="v_middle">
                              <p>
                                Unable to find image{" "}
                                <span className="red">
                                  'hello-world:latest'
                                </span>{" "}
                                locally
                              </p>
                              <p>latest: Pulling from library/hello-world</p>
                              <p>
                                ca4f61b1923c: Pull{" "}
                                <span className="green">complete</span>
                              </p>
                              <p>
                                Digest:
                                sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
                              </p>
                              <p>
                                Status: Downloaded newer image for
                                hello-world:latest
                              </p>
                            </div>
                            <div className="v_footer">
                              <p>
                                Hello from KbDoc!
                                <br /> This message shows that your installation
                                appears to be working correctly. <br />
                                ...
                              </p>
                            </div>
                          </div>
                          <p>
                            <span>Usage:</span> Click "Submit" to create a
                            token.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="success"
                          role="tabpanel"
                          aria-labelledby="success-tab"
                        >
                          <p>
                            Twit brilliant he legged it he nicked it amongst
                            hotpot chinwag spend a penny lemon squeezy he lost
                            his bottle porkies, Why it's your round happy days.
                          </p>
                          <div className="version">
                            <div className="v_head">KbDoc run hello-world</div>
                            <div className="v_middle">
                              <p>
                                Unable to find image{" "}
                                <span className="red">
                                  'hello-world:latest'
                                </span>{" "}
                                locally
                              </p>
                              <p>latest: Pulling from library/hello-world</p>
                              <p>
                                ca4f61b1923c: Pull{" "}
                                <span className="green">complete</span>
                              </p>
                              <p>
                                Digest:
                                sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
                              </p>
                              <p>
                                Status: Downloaded newer image for
                                hello-world:latest
                              </p>
                            </div>
                            <div className="v_footer">
                              <p>
                                Hello from KbDoc!
                                <br /> This message shows that your installation
                                appears to be working correctly. <br />
                                ...
                              </p>
                            </div>
                          </div>
                          <p>
                            <span>Usage:</span> Click "Submit" to create a
                            token.
                          </p>
                        </div>
                      </div>
                    </article>
                    <div className="border_bottom" />
                    <article className="developer" id="features">
                      <h4 className="c_head">Features</h4>
                      <ul className="list-unstyled tag_list">
                        <li>
                          <i className="icon_document_alt" />
                          HTML5 &amp; CSS3
                        </li>
                        <li>
                          <i className="icon_document_alt" />
                          Responsive layout (desktops, tablets, mobile devices)
                        </li>
                        <li>
                          <i className="icon_document_alt" />
                          Built with Bootstrap 4.3
                        </li>
                        <li>
                          <i className="icon_document_alt" />
                          Well structured code
                        </li>
                        <li>
                          <i className="icon_document_alt" />
                          About
                        </li>
                        <li>
                          <i className="icon_document_alt" />
                          Hinted Typography
                        </li>
                      </ul>
                    </article>
                    <div className="border_bottom" />
                    <article className="code_structure">
                      <h4 className="c_head load-order-2">Code Structure</h4>
                      <p>HTML, css and javascript files included.</p>
                      <div className="row">
                        <div className="col-lg-6">
                          <pre className="snippet">
                            {"                                            "}
                            <code className="language-html" data-lang="css">
                              {"\n"}
                              {"                                            "}
                              doc
                              {"\n"}
                              {"                                            "}
                              ├── assets/{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── animation/{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── bootstrap/{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── elagent-icon/{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── magnify-pop/{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── mcustomscrollbar/{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── niceselectpicker/{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── prism/{"\n"}
                              {"                                            "}│
                              {"   "}
                              └── slick/{"\n"}
                              {"                                            "}
                              ├── blog-list.html{"\n"}
                              {"                                            "}
                              ├── about.html{"\n"}
                              {"                                            "}
                              ├── accordion.html{"\n"}
                              {"                                            "}
                              ├── alerts.html{"\n"}
                              {"                                            "}
                              ├── blog-grid.html{"\n"}
                              {"                                            "}
                              ├── blog-list.html{"\n"}
                              {"                                            "}
                              ├── blog-single.html{"\n"}
                              {"                                            "}
                              ├── blog-grid-two.html{"\n"}
                              {"                                            "}
                              ├── changelog.html{"\n"}
                              {"                                            "}
                              ├── code.html{"\n"}
                              {"                                            "}
                              ├── both-sidebar.html{"\n"}
                              {"                                            "}
                              ├── doclist.html{"\n"}
                              {"                                            "}
                              ├── images-pointing.html{"\n"}
                              {"                                            "}
                              ├── index.html{"\n"}
                              {"                                            "}
                              ├── index.html{"\n"}
                              {"                                            "}
                              ├── lightbox.html{"\n"}
                              {"                                            "}
                              ├── layout-sidebar.html{"\n"}
                              {"                                            "}
                              ├── layout-minimal.html{"\n"}
                              {"                                            "}
                              ├── layout-sidebar.html{"\n"}
                              {"                                            "}
                              ├── notice.html{"\n"}
                              {"                                            "}
                              ├── tables.html{"\n"}
                              {"                                            "}
                              ├── typography.html{"\n"}
                              {"                                            "}
                              └── video.html{"\n"}
                              {"                                            "}
                            </code>
                            {"\n"}
                            {"                                        "}
                          </pre>
                        </div>
                        <div className="col-lg-6">
                          <pre className="snippet">
                            {"                                            "}
                            <code className="language-html" data-lang="css">
                              {"\n"}
                              {"                                            "}
                              assets
                              {"\n"}
                              {"                                            "}
                              ├── css/
                              {"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── bootstrap.css{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── bootstrap.min.css{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── jquery.mCustomScrollbar.css{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── magnific-popup.css{"\n"}
                              {"                                            "}│
                              {"   "}
                              ├── magnific-popup.min.css{"\n"}
                              {"                                            "}│
                              {"   "}
                              └── style.css{"\n"}
                              {"                                            "}
                              ├── doc/
                              {"\n"}
                              {"                                            "}
                              ├── fontawesome/{"\n"}
                              {"                                            "}
                              ├── fonts/{"\n"}
                              {"                                            "}
                              ├── img/
                              {"\n"}
                              {"                                            "}
                              ├── js/
                              {"\n"}
                              {"                                            "}
                              ├── slick/{"\n"}
                              {"                                            "}
                              └── elagent-icon{"\n"}
                              {"                                            "}
                            </code>
                            {"\n"}
                            {"                                        "}
                          </pre>
                        </div>
                      </div>
                    </article>
                    <article className="help_text" id="help">
                      <div className="resource">
                        <h4 className="c_head">Resources and credits</h4>
                        <p>
                          This Design System is fully coded and built on top of
                          Open Source, more details here:
                        </p>
                        <ul className="list-unstyled tag_list">
                          <li>
                            <i className="icon_document_alt mr-2" />
                            <a href="https://www.getbootstrap.com">
                              Bootstrap 4
                            </a>{" "}
                            - Open source front end framework
                          </li>
                          <li>
                            <i className="icon_document_alt mr-2" />
                            <a href="https://jquery.com/https://jquery.com/">
                              jQuery
                            </a>{" "}
                            - Fast, small, and feature-rich JavaScript library
                          </li>
                          <li>
                            <i className="icon_document_alt mr-2" />
                            <a href="https://www.elegantthemes.com/blog/resources/elegant-icon-font">
                              Elegant
                            </a>{" "}
                            - theme icon pack
                          </li>
                          <li>
                            <i className="icon_document_alt mr-2" />
                            <a href="https://fonts.google.com/specimen/Roboto">
                              Roboto Font
                            </a>{" "}
                            - Google’s Roboto Source typefaces
                          </li>
                        </ul>
                      </div>
                      <div className="border_bottom" />
                      <div className="row feedback_link">
                        <div className="col-lg-6">
                          <h6>
                            <i className="icon_mail_alt" />
                            Still stuck?{" "}
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#exampleModal2"
                            >
                              How can we help?
                            </a>
                          </h6>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            Was this page helpful?{" "}
                            <a href="#" className="h_btn">
                              Yes
                            </a>
                            <a href="#" className="h_btn">
                              No
                            </a>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 doc_right_mobile_menu">
                  <div className="open_icon" id="right">
                    <i className="arrow_carrot-left" />
                    <i className="arrow_carrot-right" />
                  </div>
                  <div className="doc_rightsidebar scroll">
                    <select id="mySelect" name="os">
                      <option
                        value="windows"
                        data-content="<i class='fab fa-windows'></i> Windows"
                      >
                        Windows
                      </option>
                      <option
                        value="ios"
                        data-content="<i class='fab fa-apple'></i> Ios"
                      >
                        Ios
                      </option>
                      <option
                        value="linux"
                        data-content="<i class='fab fa-linux'></i> Linux"
                      >
                        Linux
                      </option>
                    </select>
                    <div
                      id="font-switcher"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div
                        id="rvfs-controllers"
                        className="fontsize-controllers group"
                      />
                      <a href="javascript:window.print()" className="print">
                        <i className="icon_printer" />
                      </a>
                    </div>
                    <div className="doc_switch">
                      <label htmlFor="something" className="tab-btn tab-btns">
                        <i className="icon_lightbulb_alt" />
                      </label>
                      <input
                        type="checkbox"
                        name="something"
                        id="something"
                        className="tab_switcher"
                      />
                      <label htmlFor="something" className="tab-btn">
                        <i className="far fa-moon" />
                      </label>
                    </div>
                    <h6>On this page:</h6>
                    <nav
                      className="list-unstyled doc_menu"
                      id="navbar-example3"
                    >
                      <a href="#documentation" className="nav-link active">
                        Documentation
                      </a>
                      <a href="#getting" className="nav-link">
                        Getting started
                      </a>
                      <a href="#version" className="nav-link">
                        Test KbDoc Version
                      </a>
                      <a href="#features" className="nav-link">
                        Features
                      </a>
                      <a href="#help" className="nav-link">
                        We're here to help!
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="simple_footer">
            <img
              className="leaf_right"
              src="img/home_one/leaf_footter.png"
              alt=""
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <p>
                    © 2020 All Rights Reserved by <a href="index.html">KbDoc</a>
                  </p>
                </div>
                <div className="col-sm-6 text-right">
                  <ul className="list-unstyled f_social_icon">
                    <li>
                      <a href="#">
                        <i className="social_facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="social_twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="social_vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="social_linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div
          className="modal fade img_modal"
          id="exampleModal2"
          tabIndex={-2}
          role="dialog"
          aria-hidden="false"
        >
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className=" icon_close" />
          </button>
          <div className="modal-dialog help_form" role="document">
            <div className="modal-content">
              <div className="shortcode_title">
                <h1>How can we help?</h1>
                <p>
                  A premium WordPress theme with integrated Knowledge Base,
                  <br />
                  providing 24/7 community based support.
                </p>
              </div>
              <form action="#" className="contact_form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="Message"
                    id="massage"
                    placeholder="Massage"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn action_btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default StickyMenu;
