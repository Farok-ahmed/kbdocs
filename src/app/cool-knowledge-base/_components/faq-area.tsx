import Link from "next/link";

const FaqArea = () => {
  return (
    <>
      <section className="doc_faq_area sec_pad">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="h_title wow fadeInUp">Do you have any Question?</h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Loaded with awesome features like Documentation, Knowledgebase,
              Forum & more!
            </p>
          </div>
          <ul className="nav nav-tabs doc_tag" id="myTabthree" role="tablist">
            <li className="nav-item wow fadeInLeft">
              <Link
                className="nav-link active"
                id="ter-tab"
                data-toggle="tab"
                href="#ter"
                role="tab"
                aria-controls="or"
                aria-selected="true"
              >
                Terminal
              </Link>
            </li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="0.1s">
              <Link
                className="nav-link"
                id="docOne-tab"
                data-toggle="tab"
                href="#docOne"
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
                id="forumOne-tab"
                data-toggle="tab"
                href="#forumOne"
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
                id="elementOne-tab"
                data-toggle="tab"
                href="#elementOne"
                role="tab"
                aria-controls="element"
                aria-selected="false"
              >
                Elements
              </Link>
            </li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="0.4s">
              <Link
                className="nav-link"
                id="atlas-tab"
                data-toggle="tab"
                href="#atlas"
                role="tab"
                aria-controls="code"
                aria-selected="false"
              >
                Atlas
              </Link>
            </li>
          </ul>
          <div className="tab-content" id="myTabContentthree">
            <div
              className="tab-pane faq_tab_pane fade show active"
              id="ter"
              role="tabpanel"
              aria-labelledby="ter-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="accordion doc_faq_info" id="accordionExample">
                    <div className="card active">
                      <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            How can I deploy Documentation Landing?
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
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How can I subscribe to the PETSc mailing lists?
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
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Can I run PETSc with extended precision?{" "}
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
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            What kind of license is PETSc released under?
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
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingfive">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsefive"
                            aria-expanded="false"
                            aria-controls="collapsefive"
                          >
                            Is there a warranty on my item?{" "}
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
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="accordion doc_faq_info"
                    id="accordionExamples"
                  >
                    <div className="card">
                      <div className="card-header" id="headingSix">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            How can I deploy Documentation Landing?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        aria-labelledby="headingSix"
                        data-parent="#accordionExamples"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingSeven">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            How can I subscribe to the PETSc mailing lists?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseSeven"
                        className="collapse"
                        aria-labelledby="headingSeven"
                        data-parent="#accordionExamples"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingEight">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            Can I run PETSc with extended precision?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseEight"
                        className="collapse"
                        aria-labelledby="headingEight"
                        data-parent="#accordionExamples"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingNine">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseNine"
                            aria-expanded="false"
                            aria-controls="collapseNine"
                          >
                            What kind of license is PETSc released under?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseNine"
                        className="collapse"
                        aria-labelledby="headingNine"
                        data-parent="#accordionExamples"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTen">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTen"
                            aria-expanded="false"
                            aria-controls="collapseTen"
                          >
                            Is there a warranty on my item?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTen"
                        className="collapse"
                        aria-labelledby="headingTen"
                        data-parent="#accordionExamples"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane faq_tab_pane fade"
              id="docOne"
              role="tabpanel"
              aria-labelledby="docOne-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="accordion doc_faq_info"
                    id="accordionExampledoc"
                  >
                    <div className="card">
                      <div className="card-header" id="headingEleven">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseEleven"
                            aria-expanded="true"
                            aria-controls="collapseEleven"
                          >
                            How can I deploy Documentation Landing?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseEleven"
                        className="collapse show"
                        aria-labelledby="headingEleven"
                        data-parent="#accordionExampledoc"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingtwelve">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsetwelve"
                            aria-expanded="false"
                            aria-controls="collapsetwelve"
                          >
                            How can I subscribe to the PETSc mailing lists?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapsetwelve"
                        className="collapse"
                        aria-labelledby="headingtwelve"
                        data-parent="#accordionExampledoc"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingthirteen">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsethirteen"
                            aria-expanded="false"
                            aria-controls="collapsethirteen"
                          >
                            Can I run PETSc with extended precision?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapsethirteen"
                        className="collapse"
                        aria-labelledby="headingthirteen"
                        data-parent="#accordionExampledoc"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingfourteen">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsefourteen"
                            aria-expanded="false"
                            aria-controls="collapsefourteen"
                          >
                            What kind of license is PETSc released under?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapsefourteen"
                        className="collapse"
                        aria-labelledby="headingfourteen"
                        data-parent="#accordionExampledoc"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingfifteenth">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsefifteenth"
                            aria-expanded="false"
                            aria-controls="collapsefifteenth"
                          >
                            Is there a warranty on my item?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapsefifteenth"
                        className="collapse"
                        aria-labelledby="headingfifteenth"
                        data-parent="#accordionExampledoc"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="accordion doc_faq_info"
                    id="accordionExampledocTwo"
                  >
                    <div className="card">
                      <div className="card-header" id="headingsixteenth">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsesixteenth"
                            aria-expanded="false"
                            aria-controls="collapsesixteenth"
                          >
                            How can I deploy Documentation Landing?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapsesixteenth"
                        className="collapse"
                        aria-labelledby="headingsixteenth"
                        data-parent="#accordionExampledocTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingSeventeenth">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseSeventeenth"
                            aria-expanded="false"
                            aria-controls="collapseSeventeenth"
                          >
                            How can I subscribe to the PETSc mailing lists?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseSeventeenth"
                        className="collapse"
                        aria-labelledby="headingSeventeenth"
                        data-parent="#accordionExampledocTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingEighteen">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseEighteen"
                            aria-expanded="false"
                            aria-controls="collapseEighteen"
                          >
                            Can I run PETSc with extended precision?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseEighteen"
                        className="collapse"
                        aria-labelledby="headingEighteen"
                        data-parent="#accordionExampledocTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingNineteen">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseNineteen"
                            aria-expanded="false"
                            aria-controls="collapseNineteen"
                          >
                            What kind of license is PETSc released under?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseNineteen"
                        className="collapse"
                        aria-labelledby="headingNineteen"
                        data-parent="#accordionExampledocTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwenty">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwenty"
                            aria-expanded="false"
                            aria-controls="collapseTwenty"
                          >
                            Is there a warranty on my item?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwenty"
                        className="collapse"
                        aria-labelledby="headingTwenty"
                        data-parent="#accordionExampledocTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane faq_tab_pane fade"
              id="forumOne"
              role="tabpanel"
              aria-labelledby="forumOne-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="accordion doc_faq_info"
                    id="accordionExampleforum"
                  >
                    <div className="card">
                      <div className="card-header" id="headingTwentyone">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyone"
                            aria-expanded="true"
                            aria-controls="collapseTwentyone"
                          >
                            How can I deploy Documentation Landing?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyone"
                        className="collapse show"
                        aria-labelledby="headingTwentyone"
                        data-parent="#accordionExampleforum"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentytwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentytwo"
                            aria-expanded="false"
                            aria-controls="collapseTwentytwo"
                          >
                            How can I subscribe to the PETSc mailing lists?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentytwo"
                        className="collapse"
                        aria-labelledby="headingTwentytwo"
                        data-parent="#accordionExampleforum"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentythree">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentythree"
                            aria-expanded="false"
                            aria-controls="collapseTwentythree"
                          >
                            Can I run PETSc with extended precision?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentythree"
                        className="collapse"
                        aria-labelledby="headingTwentythree"
                        data-parent="#accordionExampleforum"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentyfour">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyfour"
                            aria-expanded="false"
                            aria-controls="collapseTwentyfour"
                          >
                            What kind of license is PETSc released under?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyfour"
                        className="collapse"
                        aria-labelledby="headingTwentyfour"
                        data-parent="#accordionExampleforum"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentyfive">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyfive"
                            aria-expanded="false"
                            aria-controls="collapseTwentyfive"
                          >
                            Is there a warranty on my item?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyfive"
                        className="collapse"
                        aria-labelledby="headingTwentyfive"
                        data-parent="#accordionExampleforum"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="accordion doc_faq_info"
                    id="accordionExampleforumTwo"
                  >
                    <div className="card">
                      <div className="card-header" id="headingTwentysix">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentysix"
                            aria-expanded="false"
                            aria-controls="collapseTwentysix"
                          >
                            How can I deploy Documentation Landing?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentysix"
                        className="collapse"
                        aria-labelledby="headingTwentysix"
                        data-parent="#accordionExampleforumTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentyseven">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyseven"
                            aria-expanded="false"
                            aria-controls="collapseTwentyseven"
                          >
                            How can I subscribe to the PETSc mailing lists?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyseven"
                        className="collapse"
                        aria-labelledby="headingTwentyseven"
                        data-parent="#accordionExampleforumTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentyeight">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyeight"
                            aria-expanded="false"
                            aria-controls="collapseTwentyeight"
                          >
                            Can I run PETSc with extended precision?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyeight"
                        className="collapse"
                        aria-labelledby="headingTwentyeight"
                        data-parent="#accordionExampleforumTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentynine">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentynine"
                            aria-expanded="false"
                            aria-controls="collapseTwentynine"
                          >
                            What kind of license is PETSc released under?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentynine"
                        className="collapse"
                        aria-labelledby="headingNine"
                        data-parent="#accordionExampleforumTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentyten">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyten"
                            aria-expanded="false"
                            aria-controls="collapseTwentyten"
                          >
                            Is there a warranty on my item?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyten"
                        className="collapse"
                        aria-labelledby="headingTwentyten"
                        data-parent="#accordionExampleforumTwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane faq_tab_pane fade"
              id="elementOne"
              role="tabpanel"
              aria-labelledby="elementOne-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="accordion doc_faq_info"
                    id="accordionExampleelement"
                  >
                    <div className="card">
                      <div className="card-header" id="headingTwentye">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentye"
                            aria-expanded="true"
                            aria-controls="collapseTwentye"
                          >
                            How can I deploy Documentation Landing?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentye"
                        className="collapse show"
                        aria-labelledby="headingTwentye"
                        data-parent="#accordionExampleelement"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentyt">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyt"
                            aria-expanded="false"
                            aria-controls="collapseTwentyt"
                          >
                            How can I subscribe to the PETSc mailing lists?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyt"
                        className="collapse"
                        aria-labelledby="headingTwentyt"
                        data-parent="#accordionExampleelement"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentyth">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyth"
                            aria-expanded="false"
                            aria-controls="collapseTwentyth"
                          >
                            Can I run PETSc with extended precision?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyth"
                        className="collapse"
                        aria-labelledby="headingTwentyth"
                        data-parent="#accordionExampleelement"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentyf">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyf"
                            aria-expanded="false"
                            aria-controls="collapseTwentyf"
                          >
                            What kind of license is PETSc released under?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyf"
                        className="collapse"
                        aria-labelledby="headingTwentyf"
                        data-parent="#accordionExampleelement"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwentyfi">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwentyfi"
                            aria-expanded="false"
                            aria-controls="collapseTwentyfi"
                          >
                            Is there a warranty on my item?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwentyfi"
                        className="collapse"
                        aria-labelledby="headingTwentyfi"
                        data-parent="#accordionExampleelement"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="accordion doc_faq_info"
                    id="accordionExampleelements"
                  >
                    <div className="card">
                      <div className="card-header" id="headingeleOne">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseeleOne"
                            aria-expanded="false"
                            aria-controls="collapseeleOne"
                          >
                            How can I deploy Documentation Landing?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseeleOne"
                        className="collapse"
                        aria-labelledby="headingeleOne"
                        data-parent="#accordionExampleelements"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingeleTwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseeleTwo"
                            aria-expanded="false"
                            aria-controls="collapseeleTwo"
                          >
                            How can I subscribe to the PETSc mailing lists?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseeleTwo"
                        className="collapse"
                        aria-labelledby="headingeleTwo"
                        data-parent="#accordionExampleelements"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingeleThree">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseeleThree"
                            aria-expanded="false"
                            aria-controls="collapseeleThree"
                          >
                            Can I run PETSc with extended precision?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseeleThree"
                        className="collapse"
                        aria-labelledby="headingeleThree"
                        data-parent="#accordionExampleelements"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingeleFour">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseeleFour"
                            aria-expanded="false"
                            aria-controls="collapseeleFour"
                          >
                            What kind of license is PETSc released under?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseeleFour"
                        className="collapse"
                        aria-labelledby="headingeleFour"
                        data-parent="#accordionExampleelements"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingeleFive">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseeleFive"
                            aria-expanded="false"
                            aria-controls="collapseeleFive"
                          >
                            Is there a warranty on my item?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseeleFive"
                        className="collapse"
                        aria-labelledby="headingeleFive"
                        data-parent="#accordionExampleelements"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane faq_tab_pane fade"
              id="atlas"
              role="tabpanel"
              aria-labelledby="atlas-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="accordion doc_faq_info"
                    id="accordionExampleatlas"
                  >
                    <div className="card">
                      <div className="card-header" id="headingAtlasone">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlasone"
                            aria-expanded="true"
                            aria-controls="collapseAtlasone"
                          >
                            How can I deploy Documentation Landing?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlasone"
                        className="collapse show"
                        aria-labelledby="headingAtlasone"
                        data-parent="#accordionExampleatlas"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingAtlastwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlastwo"
                            aria-expanded="false"
                            aria-controls="collapseAtlastwo"
                          >
                            How can I subscribe to the PETSc mailing lists?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlastwo"
                        className="collapse"
                        aria-labelledby="headingAtlastwo"
                        data-parent="#accordionExampleatlas"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingAtlasthree">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlasthree"
                            aria-expanded="false"
                            aria-controls="collapseAtlasthree"
                          >
                            Can I run PETSc with extended precision?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlasthree"
                        className="collapse"
                        aria-labelledby="headingAtlasthree"
                        data-parent="#accordionExampleatlas"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingAtlasfour">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlasfour"
                            aria-expanded="false"
                            aria-controls="collapseAtlasfour"
                          >
                            What kind of license is PETSc released under?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlasfour"
                        className="collapse"
                        aria-labelledby="headingAtlasfour"
                        data-parent="#accordionExampleatlas"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingAtlasfive">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlasfive"
                            aria-expanded="false"
                            aria-controls="collapseAtlasfive"
                          >
                            Is there a warranty on my item?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlasfive"
                        className="collapse"
                        aria-labelledby="headingAtlasfive"
                        data-parent="#accordionExampleatlas"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="accordion doc_faq_info"
                    id="accordionExampleatlastwo"
                  >
                    <div className="card">
                      <div className="card-header" id="headingAtlassix">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlassix"
                            aria-expanded="false"
                            aria-controls="collapseAtlassix"
                          >
                            How can I deploy Documentation Landing?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlassix"
                        className="collapse"
                        aria-labelledby="headingAtlassix"
                        data-parent="#accordionExampleatlastwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingAtlasseven">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlasseven"
                            aria-expanded="false"
                            aria-controls="collapseAtlasseven"
                          >
                            How can I subscribe to the PETSc mailing lists?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlasseven"
                        className="collapse"
                        aria-labelledby="headingAtlasseven"
                        data-parent="#accordionExampleatlastwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingAtlaseight">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlaseight"
                            aria-expanded="false"
                            aria-controls="collapseAtlaseight"
                          >
                            Can I run PETSc with extended precision?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlaseight"
                        className="collapse"
                        aria-labelledby="headingAtlaseight"
                        data-parent="#accordionExampleatlastwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingAtlasnine">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlasnine"
                            aria-expanded="false"
                            aria-controls="collapseAtlasnine"
                          >
                            What kind of license is PETSc released under?
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlasnine"
                        className="collapse"
                        aria-labelledby="headingAtlasnine"
                        data-parent="#accordionExampleatlastwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingAtlasten">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseAtlasten"
                            aria-expanded="false"
                            aria-controls="collapseAtlasten"
                          >
                            Is there a warranty on my item?{" "}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseAtlasten"
                        className="collapse"
                        aria-labelledby="headingAtlasten"
                        data-parent="#accordionExampleatlastwo"
                      >
                        <div className="card-body">
                          Skive off he lost his bottle the little rotter
                          absolutely bladdered in my flat William no biggie,
                          gormless me old mucker such a fibber David bum bag so
                          I said cack.!
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
    </>
  );
};

export default FaqArea;
