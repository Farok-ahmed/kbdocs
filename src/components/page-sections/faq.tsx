import Link from "next/link";

export default function Faq() {
    return (
        <section className="doc_faq_area_two sec_pad">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="h_title wow fadeInUp">
                        Frequently Asked Questions
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                        Some dodgy chav bevvy amongst argy-bargy spiffing
                        absolutely bladdered nancy boy cup of tea a load of old
                        tosh porkies.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="fact_navigation_info">
                            <h4 className="c_head">Quick Navigation</h4>
                            <ul
                                className="nav nav-tabs fact_navigation"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        id="online-tab"
                                        data-toggle="tab"
                                        href="#online"
                                        role="tab"
                                        aria-controls="online"
                                        aria-selected="true"
                                    >
                                        <i className="icon_folder-alt"></i>
                                        Purchasing Online
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        id="formOne-tab"
                                        data-toggle="tab"
                                        href="#formOne"
                                        role="tab"
                                        aria-controls="formOne"
                                        aria-selected="false"
                                    >
                                        <i className="icon_cloud-upload_alt"></i>
                                        Post Forms
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        id="pricingOne-tab"
                                        data-toggle="tab"
                                        href="#pricingOne"
                                        role="tab"
                                        aria-controls="pricingOne"
                                        aria-selected="false"
                                    >
                                        <i className="icon_key_alt"></i>
                                        Pricing & Support
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        id="profileOne-tab"
                                        data-toggle="tab"
                                        href="#profileOne"
                                        role="tab"
                                        aria-controls="profileOne"
                                        aria-selected="false"
                                    >
                                        <i className="icon_lightbulb_alt"></i>
                                        Registration & Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        id="return-tab"
                                        data-toggle="tab"
                                        href="#return"
                                        role="tab"
                                        aria-controls="return"
                                        aria-selected="false"
                                    >
                                        <i className="icon_bag_alt"></i>
                                        Returns
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        id="car-tab"
                                        data-toggle="tab"
                                        href="#car"
                                        role="tab"
                                        aria-controls="car"
                                        aria-selected="false"
                                    >
                                        <i className="icon_menu-square_alt2"></i>
                                        Care & Repair
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <div className="tab-content pl_70" id="myTabContent">
                            <div
                                className="tab-pane faq_tab_pane fade show active"
                                id="online"
                                role="tabpanel"
                                aria-labelledby="online-tab"
                            >
                                <div
                                    className="accordion doc_faq_info"
                                    id="accordionExample"
                                >
                                    <div className="card wow fadeInUp">
                                        <div
                                            className="card-header"
                                            id="headingOne"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingTwo"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Is maternity covered in
                                                    health insurance policies?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingThree"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    What are the documents
                                                    required for claiming?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingFour"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFour"
                                                >
                                                    Any useful books on
                                                    numerical computing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseFour"
                                            className="collapse"
                                            aria-labelledby="headingFour"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingfive"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsefive"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefive"
                                                >
                                                    How do I repair an item?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsefive"
                                            className="collapse"
                                            aria-labelledby="headingfive"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.5s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingsix"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsesix"
                                                    aria-expanded="false"
                                                    aria-controls="collapsesix"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsesix"
                                            className="collapse"
                                            aria-labelledby="headingsix"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.6s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingseven"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseseven"
                                                    aria-expanded="false"
                                                    aria-controls="collapseseven"
                                                >
                                                    Is there a warranty on my
                                                    item?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseseven"
                                            className="collapse"
                                            aria-labelledby="headingseven"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane faq_tab_pane fade"
                                id="formOne"
                                role="tabpanel"
                                aria-labelledby="formOne-tab"
                            >
                                <div
                                    className="accordion doc_faq_info"
                                    id="accordionExampletwo"
                                >
                                    <div className="card wow fadeInUp">
                                        <div
                                            className="card-header"
                                            id="headingfOne"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsefOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapsefOne"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsefOne"
                                            className="collapse show"
                                            aria-labelledby="headingfOne"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingfTwo"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsefTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefTwo"
                                                >
                                                    Is maternity covered in
                                                    health insurance policies?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsefTwo"
                                            className="collapse"
                                            aria-labelledby="headingfTwo"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingfThree"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsefThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefThree"
                                                >
                                                    What are the documents
                                                    required for claiming?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsefThree"
                                            className="collapse"
                                            aria-labelledby="headingfThree"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingfFour"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsefFour"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefFour"
                                                >
                                                    Any useful books on
                                                    numerical computing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsefFour"
                                            className="collapse"
                                            aria-labelledby="headingfFour"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingffive"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseffive"
                                                    aria-expanded="false"
                                                    aria-controls="collapseffive"
                                                >
                                                    How do I repair an item?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseffive"
                                            className="collapse"
                                            aria-labelledby="headingffive"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.5s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingfsix"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsefsix"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefsix"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsefsix"
                                            className="collapse"
                                            aria-labelledby="headingfsix"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.6s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingfseven"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsefseven"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefseven"
                                                >
                                                    Is there a warranty on my
                                                    item?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsefseven"
                                            className="collapse"
                                            aria-labelledby="headingfseven"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane faq_tab_pane fade"
                                id="pricingOne"
                                role="tabpanel"
                                aria-labelledby="pricingOne-tab"
                            >
                                <div
                                    className="accordion doc_faq_info"
                                    id="accordionExamplethree"
                                >
                                    <div className="card wow fadeInUp">
                                        <div
                                            className="card-header"
                                            id="headingpTwo"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsepTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapsepTwo"
                                                >
                                                    Is maternity covered in
                                                    health insurance policies?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsepTwo"
                                            className="collapse"
                                            aria-labelledby="headingpTwo"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingpOne"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsepOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapsepOne"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsepOne"
                                            className="collapse show"
                                            aria-labelledby="headingpOne"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingpThree"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsepThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapsepThree"
                                                >
                                                    What are the documents
                                                    required for claiming?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsepThree"
                                            className="collapse"
                                            aria-labelledby="headingpThree"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingpFour"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsepFour"
                                                    aria-expanded="false"
                                                    aria-controls="collapsepFour"
                                                >
                                                    Any useful books on
                                                    numerical computing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsepFour"
                                            className="collapse"
                                            aria-labelledby="headingpFour"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingpfive"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsepfive"
                                                    aria-expanded="false"
                                                    aria-controls="collapsepfive"
                                                >
                                                    How do I repair an item?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsepfive"
                                            className="collapse"
                                            aria-labelledby="headingpfive"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.5s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingpsix"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsepsix"
                                                    aria-expanded="false"
                                                    aria-controls="collapsepsix"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsepsix"
                                            className="collapse"
                                            aria-labelledby="headingpsix"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.6s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingpseven"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsepseven"
                                                    aria-expanded="false"
                                                    aria-controls="collapsepseven"
                                                >
                                                    Is there a warranty on my
                                                    item?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsepseven"
                                            className="collapse"
                                            aria-labelledby="headingpseven"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane faq_tab_pane fade"
                                id="profileOne"
                                role="tabpanel"
                                aria-labelledby="profileOne-tab"
                            >
                                <div
                                    className="accordion doc_faq_info"
                                    id="accordionExamplefour"
                                >
                                    <div className="card wow fadeInUp">
                                        <div
                                            className="card-header"
                                            id="headingprTwo"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseprTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseprTwo"
                                                >
                                                    Is maternity covered in
                                                    health insurance policies?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseprTwo"
                                            className="collapse"
                                            aria-labelledby="headingprTwo"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingprOne"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseprOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseprOne"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseprOne"
                                            className="collapse show"
                                            aria-labelledby="headingprOne"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingprThree"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseprThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseprThree"
                                                >
                                                    What are the documents
                                                    required for claiming?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseprThree"
                                            className="collapse"
                                            aria-labelledby="headingprThree"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingprFour"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseprFour"
                                                    aria-expanded="false"
                                                    aria-controls="collapseprFour"
                                                >
                                                    Any useful books on
                                                    numerical computing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseprFour"
                                            className="collapse"
                                            aria-labelledby="headingprFour"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingprfive"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseprfive"
                                                    aria-expanded="false"
                                                    aria-controls="collapseprfive"
                                                >
                                                    How do I repair an item?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseprfive"
                                            className="collapse"
                                            aria-labelledby="headingprfive"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.5s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingprsix"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseprsix"
                                                    aria-expanded="false"
                                                    aria-controls="collapseprsix"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseprsix"
                                            className="collapse"
                                            aria-labelledby="headingprsix"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.6s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingprseven"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseprseven"
                                                    aria-expanded="false"
                                                    aria-controls="collapseprseven"
                                                >
                                                    Is there a warranty on my
                                                    item?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseprseven"
                                            className="collapse"
                                            aria-labelledby="headingprseven"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane faq_tab_pane fade"
                                id="return"
                                role="tabpanel"
                                aria-labelledby="return-tab"
                            >
                                <div
                                    className="accordion doc_faq_info"
                                    id="accordionExamplefive"
                                >
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingreOne"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsereOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapsereOne"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsereOne"
                                            className="collapse show"
                                            aria-labelledby="headingreOne"
                                            data-parent="#accordionExamplefive"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInUp">
                                        <div
                                            className="card-header"
                                            id="headingreTwo"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsereTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapsereTwo"
                                                >
                                                    Is maternity covered in
                                                    health insurance policies?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsereTwo"
                                            className="collapse"
                                            aria-labelledby="headingreTwo"
                                            data-parent="#accordionExamplefive"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingreThree"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsereThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapsereThree"
                                                >
                                                    What are the documents
                                                    required for claiming?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsereThree"
                                            className="collapse"
                                            aria-labelledby="headingreThree"
                                            data-parent="#accordionExamplefive"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane faq_tab_pane fade"
                                id="car"
                                role="tabpanel"
                                aria-labelledby="car-tab"
                            >
                                <div
                                    className="accordion doc_faq_info"
                                    id="accordionExamplesix"
                                >
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingcarOne"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsecarOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapsecarOne"
                                                >
                                                    How can I deploy
                                                    Documentation Landing?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsecarOne"
                                            className="collapse show"
                                            aria-labelledby="headingcarOne"
                                            data-parent="#accordionExamplesix"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInUp">
                                        <div
                                            className="card-header"
                                            id="headingcarTwo"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsecarTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapsecarTwo"
                                                >
                                                    Is maternity covered in
                                                    health insurance policies?
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsecarTwo"
                                            className="collapse"
                                            aria-labelledby="headingcarTwo"
                                            data-parent="#accordionExamplesix"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div
                                            className="card-header"
                                            id="headingcarThree"
                                        >
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapsecarThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapsecarThree"
                                                >
                                                    What are the documents
                                                    required for claiming?{" "}
                                                    <i className="icon_plus"></i>
                                                    <i className="icon_minus-06"></i>
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapsecarThree"
                                            className="collapse"
                                            aria-labelledby="headingcarThree"
                                            data-parent="#accordionExamplesix"
                                        >
                                            <div className="card-body">
                                                Skive off he lost his bottle the
                                                little rotter absolutely
                                                bladdered in my flat William no
                                                biggie, gormless me old mucker
                                                such a fibber David bum bag so I
                                                said cack.!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
