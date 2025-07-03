"use client";

import Navbar from "@/components/page-sections/navbar";
import Link from "next/link";
import { useState } from "react";
import FontSwitcher from "./_components/font-switcher";
import ModeSwitcher from "./_components/mode-switcher";
import OSSelector from "./_components/os-selector";
import Search from "./_components/search";
import Sidebar from "./_components/sidebar";

export default function DocsLayout({ children }: React.PropsWithChildren) {
    const [isDark, setIsDark] = useState(false);

    const toggleMode = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <div
            data-spy="scroll"
            data-target="#navbar-example3"
            data-offset="86"
            data-scroll-animation="true"
            className={`doc ${isDark ? "body_dark" : ""}`}
        >
            <div className="body_wrapper">
                <Navbar />
                <div className="mobile_main_menu" id="sticky">
                    <div className="container">
                        <div className="mobile_menu_left">
                            <button
                                type="button"
                                className="navbar-toggler mobile_menu_btn"
                            >
                                <span className="menu_toggle ">
                                    <span className="hamburger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </span>
                            </button>
                            <Link className="sticky_logo" href="/">
                                <img
                                    src="/img/logo-w.png"
                                    srcSet="/img/logo-w2x.png 2x"
                                    alt="logo"
                                />
                                <img
                                    src="/img/logo.png"
                                    srcSet="/img/logo-2x.png 2x"
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className="mobile_menu_right">
                            <Link className="nav_btn" href="">
                                Free Trail
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="click_capture"></div>
                <div className="side_menu">
                    <div className="mobile_menu_header">
                        <div className="close_nav">
                            <i className="arrow_left"></i>
                            <i className="icon_close"></i>
                        </div>
                        <div className="mobile_logo">
                            <Link href="">
                                <img src="/img/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="mobile_nav_wrapper">
                        <nav className="mobile_nav_top">
                            <ul className="navbar-nav menu ml-auto">
                                <li className="nav-item dropdown submenu">
                                    <Link href="" className="nav-link">
                                        Home
                                    </Link>
                                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/" className="nav-link">
                                                Light Knowledgebase
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="index-helpdesk.html"
                                                className="nav-link"
                                            >
                                                Help Desk
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="index-cool.html"
                                                className="nav-link"
                                            >
                                                Cool Knowledgebase
                                            </Link>{" "}
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown submenu">
                                    <Link href="" className="nav-link">
                                        Docs
                                    </Link>
                                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link
                                                href="/doc-archive"
                                                className="nav-link"
                                            >
                                                Doc Archive
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/docs"
                                                className="nav-link"
                                            >
                                                DocTopics
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown submenu">
                                            <Link href="" className="nav-link">
                                                Shortcodes
                                            </Link>
                                            <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link
                                                        href="accordion.html"
                                                        className="nav-link"
                                                    >
                                                        Accordion
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="/tab"
                                                        className="nav-link"
                                                    >
                                                        Tabs
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="notice.html"
                                                        className="nav-link"
                                                    >
                                                        Notices
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="table.html"
                                                        className="nav-link"
                                                    >
                                                        Tables
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="tooltip.html"
                                                        className="nav-link"
                                                    >
                                                        Tooltip
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="image-pointing.html"
                                                        className="nav-link"
                                                    >
                                                        Image Hotspots
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="lightbox.html"
                                                        className="nav-link"
                                                    >
                                                        Lightbox
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="can-use.html"
                                                        className="nav-link"
                                                    >
                                                        Can I Use
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="changelog.html"
                                                        className="nav-link"
                                                    >
                                                        Changelog
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="cheatsheet.html"
                                                        className="nav-link active"
                                                    >
                                                        Cheatsheet
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="footnote.html"
                                                        className="nav-link"
                                                    >
                                                        Footnote
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown submenu">
                                            <Link href="" className="nav-link">
                                                Layouts
                                            </Link>
                                            <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link
                                                        href="layouts.html"
                                                        className="nav-link"
                                                    >
                                                        Both Sidebar
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="layout-leftsidebar.html"
                                                        className="nav-link"
                                                    >
                                                        Left Sidebar
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="layout-full.html"
                                                        className="nav-link"
                                                    >
                                                        Full-wdith
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="sticky-menu.html"
                                                        className="nav-link"
                                                    >
                                                        Sticky menu
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="simple-footer.html"
                                                        className="nav-link"
                                                    >
                                                        Simple Footer
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown submenu">
                                            <Link href="" className="nav-link">
                                                Others Pages
                                            </Link>
                                            <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link
                                                        href="code.html"
                                                        className="nav-link"
                                                    >
                                                        Code
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="image.html"
                                                        className="nav-link"
                                                    >
                                                        Image
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="video.html"
                                                        className="nav-link"
                                                    >
                                                        Video
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown submenu">
                                    <Link href="" className="nav-link">
                                        Pages
                                    </Link>
                                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link
                                                href="Onepage.html"
                                                className="nav-link"
                                            >
                                                Onepage
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="contact.html"
                                                className="nav-link"
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="signin.html"
                                                className="nav-link"
                                            >
                                                Sign In
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="signup.html"
                                                className="nav-link"
                                            >
                                                Sign Up
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="typography.html"
                                                className="nav-link"
                                            >
                                                Typography
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="error.html"
                                                className="nav-link"
                                            >
                                                404 Error
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown submenu">
                                    <Link href="" className="nav-link">
                                        Forum
                                    </Link>
                                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link
                                                href="/forums"
                                                className="nav-link"
                                            >
                                                Forums Root
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="forum-topics.html"
                                                className="nav-link"
                                            >
                                                Forum Topics
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/forum-single"
                                                className="nav-link"
                                            >
                                                Forum Single
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown submenu">
                                    <Link className="nav-link" href="">
                                        Products
                                    </Link>
                                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                    <ul className="dropdown-menu dropdown_menu_two">
                                        <li className="nav-item">
                                            <Link
                                                href="/doc-archive"
                                                className="nav-link"
                                            >
                                                <img
                                                    src="/img/tick.png"
                                                    alt=""
                                                />
                                                <div className="text">
                                                    <h5>KbDoc</h5>
                                                    <p>
                                                        Launch Simple Websites
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/docs"
                                                className="nav-link"
                                            >
                                                <img
                                                    src="/img/sheet.png"
                                                    alt=""
                                                />
                                                <div className="text">
                                                    <h5>docall</h5>
                                                    <p>
                                                        Digital Assets
                                                        Subscription
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/" className="nav-link">
                                                <img
                                                    src="/img/shopping-bag.png"
                                                    alt=""
                                                />
                                                <div className="text">
                                                    <h5>Docenvato</h5>
                                                    <p>Tutorials & Courses</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/" className="nav-link">
                                                <img
                                                    src="/img/gear.png"
                                                    alt=""
                                                />
                                                <div className="text">
                                                    <h5>Tools</h5>
                                                    <p>Hire a Freelancer</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown submenu">
                                    <Link className="nav-link" href="">
                                        Blog
                                    </Link>
                                    <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link
                                                href="/blog-grid"
                                                className="nav-link"
                                            >
                                                Blog Grid
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/blog-grid-two"
                                                className="nav-link"
                                            >
                                                Blog Grid Two
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/blog-list"
                                                className="nav-link"
                                            >
                                                Blog List
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/blog-single"
                                                className="nav-link"
                                            >
                                                Blog Details
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="mobile_nav_bottom">
                            <Sidebar.Mobile />
                        </div>
                    </div>
                </div>
                <section className="breadcrumb_area">
                    <img
                        className="p_absolute bl_left"
                        src="/img/v.svg"
                        alt=""
                    />
                    <img
                        className="p_absolute bl_right"
                        src="/img/home_one/b_leaf.svg"
                        alt=""
                    />
                    <img
                        className="p_absolute star"
                        src="/img/home_one/banner_bg.png"
                        alt=""
                    />
                    <img
                        className="p_absolute wave_shap_one"
                        src="/img/blog-classic/shap_01.png"
                        alt=""
                    />
                    <img
                        className="p_absolute wave_shap_two"
                        src="/img/blog-classic/shap_02.png"
                        alt=""
                    />
                    <img
                        className="p_absolute one wow fadeInRight"
                        src="/img/home_one/b_man_two.png"
                        alt=""
                    />
                    <img
                        className="p_absolute two wow fadeInUp"
                        data-wow-delay="0.2s"
                        src="/img/home_one/flower.png"
                        alt=""
                    />
                    <Search />
                </section>
                <section className="page_breadcrumb">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-sm-7">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link href="">Docs</Link>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            KbDoc WordPress Theme
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-sm-5">
                                <Link href="" className="date">
                                    <i className="icon_clock_alt"></i>Updated on
                                    March 03, 2020
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="doc_documentation_area"
                    id="sticky_doc"
                    style={{ minHeight: "auto", paddingBottom: 0 }}
                >
                    <div className="overlay_bg"></div>
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-3 doc_mobile_menu display_none">
                                <Sidebar />
                            </div>
                            <div className="col-lg-7 col-md-8">{children}</div>
                            <div className="col-lg-2 col-md-4 doc_right_mobile_menu">
                                <div className="open_icon" id="right">
                                    <i className="arrow_carrot-left"></i>
                                    <i className="arrow_carrot-right"></i>
                                </div>
                                <div className="doc_rightsidebar scroll">
                                    <OSSelector />
                                    <FontSwitcher />
                                    <ModeSwitcher
                                        isDark={isDark}
                                        toggleMode={toggleMode}
                                    />
                                    <h6>On this page:</h6>
                                    <nav
                                        className="list-unstyled doc_menu"
                                        id="navbar-example3"
                                    >
                                        <Link
                                            href="#documentation"
                                            className="nav-link active"
                                        >
                                            Documentation
                                        </Link>
                                        <Link
                                            href="#getting"
                                            className="nav-link"
                                        >
                                            Getting started
                                        </Link>
                                        <Link
                                            href="#version"
                                            className="nav-link"
                                        >
                                            Test KbDoc Version
                                        </Link>
                                        <Link
                                            href="#developer"
                                            className="nav-link"
                                        >
                                            Not a developer?
                                        </Link>
                                        <Link href="#help" className="nav-link">
                                            We're here to help!
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="simple_footer">
                    <img
                        className="leaf_right"
                        src="/img/home_one/leaf_footter.png"
                        alt=""
                    />
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <p>
                                    © 2020 All Rights Reserved by{" "}
                                    <Link href="/">KbDoc</Link>
                                </p>
                            </div>
                            <div className="col-sm-6 text-right">
                                <ul className="list-unstyled f_social_icon">
                                    <li>
                                        <Link href="">
                                            <i className="social_facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <i className="social_twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <i className="social_vimeo"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <i className="social_linkedin"></i>
                                        </Link>
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
                    <i className=" icon_close"></i>
                </button>
                <div className="modal-dialog help_form" role="document">
                    <div className="modal-content">
                        <div className="shortcode_title">
                            <h1>How can we help?</h1>
                            <p>
                                A premium WordPress theme with integrated
                                Knowledge Base,
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
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn action_btn"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
