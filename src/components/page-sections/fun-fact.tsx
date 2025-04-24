export default function FunFact() {
    return (
        <section className="doc_fun_fact_area">
            <div className="animated-waves">
                <svg
                    width="100%"
                    height="100%"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animated-wave"
                >
                    <title>Wave</title>
                    <defs></defs>
                    <path id="animated-wave-three" d="" />
                </svg>
                <svg
                    width="100%"
                    height="100%"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animated-wave"
                >
                    <title>Wave</title>
                    <defs></defs>
                    <path id="animated-wave-four" d="" />
                </svg>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp">
                        <div className="doc_fact_item">
                            <div className="counter">5486</div>
                            <p>Happy Customer</p>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        <div className="doc_fact_item">
                            <div className="counter">642</div>
                            <p>Cups of Coffee</p>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
                        data-wow-delay="0.4s"
                    >
                        <div className="doc_fact_item">
                            <div className="counter">100</div>
                            <p>Finished Projects</p>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <div className="doc_fact_item">
                            <div className="counter">476</div>
                            <p>Staff Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
