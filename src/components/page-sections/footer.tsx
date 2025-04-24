"use client";

export default function Footer() {
    return (
        <footer className="footer_area footer_p_top f_bg_color">
            <img className="p_absolute leaf" src="img/v.svg" alt="" />
            <img
                className="p_absolute f_man wow fadeInLeft"
                data-wow-delay="0.4s"
                src="img/home_two/f_man.png"
                alt=""
            />
            <img
                className="p_absolute f_cloud"
                src="img/home_two/cloud.png"
                alt=""
            />
            <img
                className="p_absolute f_email"
                src="img/home_two/email-icon.png"
                alt=""
            />
            <img
                className="p_absolute f_email_two"
                src="img/home_two/email-icon_two.png"
                alt=""
            />
            <img
                className="p_absolute f_man_two wow fadeInLeft"
                data-wow-delay="0.2s"
                src="img/home_two/man.png"
                alt=""
            />
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="f_widget subscribe_widget wow fadeInUp">
                                <a href="index.html" className="f_logo">
                                    <img src="img/logo.png" alt="" />
                                </a>
                                <h4 className="c_head">
                                    Subscribe to our newsletter
                                </h4>
                                <form
                                    action="#"
                                    className="footer_subscribe_form"
                                >
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                    <button type="submit" className="s_btn">
                                        Send
                                    </button>
                                </form>
                                <ul className="list-unstyled f_social_icon">
                                    <li>
                                        <a href="#">
                                            <i className="social_facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="social_twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="social_vimeo"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="social_linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div
                                className="f_widget link_widget pl_30 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <h3 className="f_title">Company</h3>
                                <ul className="list-unstyled link_list">
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Affiliates</a>
                                    </li>
                                    <li>
                                        <a href="#">Partners</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#">KbDoc for Good</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div
                                className="f_widget link_widget wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <h3 className="f_title">Support</h3>
                                <ul className="list-unstyled link_list">
                                    <li>
                                        <a href="index-cool.html">Help Desk</a>
                                    </li>
                                    <li>
                                        <a href="#">Knowledge Base</a>
                                    </li>
                                    <li>
                                        <a href="#">Live Chat</a>
                                    </li>
                                    <li>
                                        <a href="#">Integrations</a>
                                    </li>
                                    <li>
                                        <a href="#">Reports</a>
                                    </li>
                                    <li>
                                        <a href="#">iOS & Android</a>
                                    </li>
                                    <li>
                                        <a href="#">Messages</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div
                                className="f_widget link_widget pl_70 wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <h3 className="f_title">Doc Pages</h3>
                                <ul className="list-unstyled link_list">
                                    <li>
                                        <a href="doclist.html">Doc Topic</a>
                                    </li>
                                    <li>
                                        <a href="#">Free Training</a>
                                    </li>
                                    <li>
                                        <a href="doc-archive.html">
                                            Doc Archive
                                        </a>
                                    </li>
                                    <li>
                                        <a href="changelog.html">Changelog</a>
                                    </li>
                                    <li>
                                        <a href="Onepage.html">Onepage Docs</a>
                                    </li>
                                    <li>
                                        <a href="#">Conversion Tracking</a>
                                    </li>
                                    <li>
                                        <a href="cheatsheet.html">Cheatseet</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border_bottom"></div>
                </div>
            </div>
            <div className="footer_bottom text-center">
                <div className="container">
                    <p>
                        © 2020 All Rights Reserved by{" "}
                        <a href="index.html">KbDoc</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
