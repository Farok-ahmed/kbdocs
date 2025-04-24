"use client";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu_two" id="sticky">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="img/logo.png" srcSet="img/logo-2x.png 2x" alt="logo" />
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
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="hamburger-cross">
                <span></span>
                <span></span>
              </span>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav menu dk_menu ml-auto">
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
                ></i>
                <ul className="dropdown-menu">
                  <li className="nav-item active">
                    <a href="index.html" className="nav-link">
                      Light Knowledgebase
                    </a>{' '}
                  </li>
                  <li className="nav-item">
                    <a href="index-helpdesk.html" className="nav-link">
                      Help Desk
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="index-cool.html" className="nav-link">
                      Cool Knowledgebase
                    </a>{' '}
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
                ></i>
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
                                  <a href="simple-footer.html">Simple Footer</a>
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
                                  <a href="tour.html">Application Interface</a>
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
                ></i>
                <ul className="dropdown-menu">
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
                ></i>
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
                  Our Products
                </a>
                <i
                  className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                  aria-hidden="false"
                  data-toggle="dropdown"
                ></i>
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
                        <p>Tutorials & Courses</p>
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
                ></i>
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
            <a className="nav_btn" href="signin.html">
              <i className="icon_profile"></i>Log In
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
